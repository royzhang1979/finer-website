---
title: "构建 AI 旅行副驾驶：OpenAI Assistants API 函数调用与持久化线程深度实战"
date: "2026-05-20"
category: "技术实战"
readTime: "30 分钟阅读"
summary: "构建 AI 旅行副驾驶：OpenAI Assistants API 函数调用与持久化线程深度实战 在大型语言模型（LLM）应用开发领域，构建真正具备生产级能力的 AI 助手并非易事。开发者常常面临上下文管理混乱、函数调用不可靠、多轮对话状态丢失等棘手问题"
---
# 构建 AI 旅行副驾驶：OpenAI Assistants API 函数调用与持久化线程深度实战

在大型语言模型（LLM）应用开发领域，构建真正具备生产级能力的 AI 助手并非易事。开发者常常面临上下文管理混乱、函数调用不可靠、多轮对话状态丢失等棘手问题。OpenAI 推出的 Assistants API 正是为解决这些痛点而生——它提供了完整的工具框架、持久化线程管理与可靠的函数调用机制。Martin Tuncaydin 在其深度实践中，系统展示了如何利用这一 API 构建面向 B2B 场景的旅行副驾驶系统，将 AI 能力无缝嵌入企业工作流。本文将带你从零掌握这一技术栈的核心精髓。

## 工具简介

OpenAI Assistants API 是一套专为构建 AI 助手设计的完整解决方案，它将复杂的 LLM 应用开发封装为可管理的组件体系。与传统的对话 API 不同，Assistants API 引入了 **Assistant 实体**、**Thread 线程**、**Message 消息** 与 **Run 运行** 四个核心概念，形成了完整的生命周期管理能力。

在旅行副驾驶场景中，Assistants API 的价值尤为突出：

- **状态持久化**：Thread 机制允许 AI 在多轮对话中保持上下文连贯，用户的历史查询、偏好设置、行程规划都能被完整保留
- **工具集成**：通过 Function Calling，AI 可以实时调用外部 API（航班查询、酒店预订、天气服务）获取动态数据
- **工作流编排**：Run 对象支持复杂的指令执行链，开发者可以精细控制 AI 的思考与行动流程

Martin Tuncaydin 的实践表明，这套技术栈能够将传统的规则引擎式旅行系统升级为真正的智能对话服务，显著提升 B2B 客户的转化率与用户体验。

## 核心亮点

以下是 OpenAI Assistants API 在构建旅行副驾驶时的核心能力：

- **持久化线程管理**：内置的 Thread 对象自动维护对话上下文，支持跨会话状态恢复，无需开发者手动管理历史消息
- **可靠的函数调用**：Function Calling 机制支持 JSON Schema 定义的工具规范，AI 可准确识别并调用外部服务（如航班搜索、汇率转换、酒店库存查询）
- **流式响应支持**：通过 Server-Sent Events（SSE）实现实时流式输出，前端可逐Token渲染回复，营造流畅交互体验
- **向量检索集成**：可挂载 File Search 工具，让 AI 理解旅游手册、目的地指南等文档内容，提供更专业的目的地推荐
- **Code Interpreter 沙盒**：内置 Python 执行环境，AI 可进行复杂的行程成本计算、时区转换、多货币比价等运算

## 安装部署指南

### 环境准备

首先确保你的开发环境满足以下依赖：

```bash
# Python 3.8+ 环境
python --version

# 推荐使用虚拟环境管理依赖
python -m venv venv
source venv/bin/activate  # Linux/macOS
# or
venv\Scripts\activate     # Windows

# 安装 OpenAI SDK
pip install openai>=1.0.0
```

### 项目结构

标准化的旅行副驾驶项目结构如下：

```bash
travel-copilot/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI 应用入口
│   ├── assistants.py        # Assistant 管理模块
│   ├── tools/
│   │   ├── __init__.py
│   │   ├── flights.py       # 航班查询工具
│   │   ├── hotels.py        # 酒店预订工具
│   │   └── currency.py      # 汇率转换工具
│   └── schemas.py           # Pydantic 数据模型
├── config/
│   └── settings.yaml        # 配置文件
├── requirements.txt
└── docker-compose.yml       # Docker 部署配置
```

### 核心依赖配置

```yaml
# requirements.txt
openai>=1.0.0
fastapi>=0.104.0
uvicorn>=0.24.0
pydantic>=2.0.0
pyyaml>=6.0.0
httpx>=0.25.0
```

```yaml
# config/settings.yaml
openai:
  api_key: ${OPENAI_API_KEY}
  model: gpt-4-turbo-preview
  organization: ${OPENAI_ORG_ID}

assistant:
  name: "Travel Copilot"
  instructions: |
    You are an expert travel assistant helping users plan their trips.
    You have access to real-time flight and hotel booking tools.
    Always provide accurate pricing and confirm details before booking.

thread:
  max_messages: 50
  truncation_strategy: "auto"

tools:
  - type: "function"
    function:
      name: "search_flights"
      description: "Search for available flights between destinations"
      parameters:
        type: "object"
        properties:
          origin:
            type: "string"
            description: "Origin city or airport code"
          destination:
            type: "string"
            description: "Destination city or airport code"
          departure_date:
            type: "string"
            description: "Departure date in YYYY-MM-DD format"
          return_date:
            type: "string"
            description: "Return date in YYYY-MM-DD format"
          passengers:
            type: "integer"
            description: "Number of passengers"
        required:
          - origin
          - destination
          - departure_date
```

### 航班查询函数定义

```python
# app/tools/flights.py
from typing import Optional
import httpx

FLIGHT_API_BASE = "https://api.flights.example.com/v1"

async def search_flights(
    origin: str,
    destination: str,
    departure_date: str,
    return_date: Optional[str] = None,
    passengers: int = 1
) -> dict:
    """
    Search for flights based on user criteria.
    
    Args:
        origin: Origin airport code (e.g., "SFO")
        destination: Destination airport code (e.g., "JFK")
        departure_date: Departure date in YYYY-MM-DD format
        return_date: Optional return date for round trips
        passengers: Number of passengers
    
    Returns:
        Dictionary containing flight options and pricing
    """
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{FLIGHT_API_BASE}/search",
            params={
                "origin": origin,
                "destination": destination,
                "departure": departure_date,
                "return": return_date,
                "passengers": passengers,
                "currency": "USD"
            },
            headers={
                "Authorization": f"Bearer {FLIGHT_API_KEY}",
                "Content-Type": "application/json"
            },
            timeout=10.0
        )
        
        if response.status_code == 200:
            return response.json()
        else:
            return {
                "error": f"API returned status {response.status_code}",
                "flights": []
            }
```

### Assistant 管理模块

```python
# app/assistants.py
from openai import OpenAI
from typing import Optional, List
import json

client = OpenAI(api_key=OPENAI_API_KEY)

class TravelAssistant:
    def __init__(self, model: str = "gpt-4-turbo-preview"):
        self.model = model
        self.assistant = None
        
    def create_or_update(self, config_path: str = "config/settings.yaml") -> str:
        """Create or update the travel assistant with tools"""
        import yaml
        
        with open(config_path, "r") as f:
            config = yaml.safe_load(f)
        
        # Load tool definitions
        tools = self._load_tools()
        
        # Check if assistant exists
        existing = self._find_existing(config["assistant"]["name"])
        
        if existing:
            # Update existing assistant
            self.assistant = client.beta.assistants.update(
                assistant_id=existing.id,
                instructions=config["assistant"]["instructions"],
                tools=tools,
                model=self.model
            )
        else:
            # Create new assistant
            self.assistant = client.beta.assistants.create(
                name=config["assistant"]["name"],
                instructions=config["assistant"]["instructions"],
                tools=tools,
                model=self.model
            )
        
        return self.assistant.id
    
    def _load_tools(self) -> List[dict]:
        """Load tool definitions from modules"""
        return [
            {
                "type": "function",
                "function": {
                    "name": "search_flights",
                    "description": "Search for available flights",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "origin": {"type": "string"},
                            "destination": {"type": "string"},
                            "departure_date": {"type": "string"},
                            "return_date": {"type": "string"},
                            "passengers": {"type": "integer"}
                        },
                        "required": ["origin", "destination", "departure_date"]
                    }
                }
            },
            {
                "type": "function",
                "function": {
                    "name": "search_hotels",
                    "description": "Search for available hotels",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "location": {"type": "string"},
                            "check_in": {"type": "string"},
                            "check_out": {"type": "string"},
                            "guests": {"type": "integer"}
                        },
                        "required": ["location", "check_in", "check_out"]
                    }
                }
            }
        ]
    
    def _find_existing(self, name: str) -> Optional[object]:
        """Find existing assistant by name"""
        assistants = client.beta.assistants.list(limit=100)
        for asst in assistants.data:
            if asst.name == name:
                return asst
        return None
    
    def create_thread(self) -> str:
        """Create a new conversation thread"""
        thread = client.beta.threads.create()
        return thread.id
    
    def add_message(
        self,
        thread_id: str,
        content: str,
        file_ids: Optional[List[str]] = None
    ) -> str:
        """Add a message to the thread"""
        message = client.beta.threads.messages.create(
            thread_id=thread_id,
            role="user",
            content=content,
            file_ids=file_ids or []
        )
        return message.id
    
    def run_assistant(
        self,
        thread_id: str,
        additional_instructions: Optional[str] = None
    ) -> str:
        """Trigger assistant to process the thread"""
        run = client.beta.threads.runs.create(
            thread_id=thread_id,
            assistant_id=self.assistant.id,
            additional_instructions=additional_instructions
        )
        return run.id
    
    def get_run_status(self, thread_id: str, run_id: str) -> dict:
        """Check the status of a run"""
        run = client.beta.threads.runs.retrieve(
            thread_id=thread_id,
            run_id=run_id
        )
        return {
            "status": run.status,
            "required_action": run.required_action
        }
    
    def submit_tool_outputs(self, thread_id: str, run_id: str, outputs: List[dict]):
        """Submit function call results back to the run"""
        client.beta.threads.runs.submit_tool_outputs(
            thread_id=thread_id,
            run_id=run_id,
            tool_outputs=outputs
        )
```

### FastAPI 应用入口

```python
# app/main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional, List
import asyncio
from app.assistants import TravelAssistant
from app.tools.flights import search_flights
from app.tools.hotels import search_hotels

app = FastAPI(title="Travel Copilot API", version="1.0.0")

# Initialize assistant on startup
assistant = TravelAssistant()

@app.on_event("startup")
async def startup_event():
    global assistant
    assistant.create_or_update()

class MessageRequest(BaseModel):
    thread_id: Optional[str] = None
    content: str

class MessageResponse(BaseModel):
    thread_id: str
    messages: List[dict]

@app.post("/chat", response_model=MessageResponse)
async def chat(request: MessageRequest):
    try:
        # Create thread if not provided
        if not request.thread_id:
            thread_id = assistant.create_thread()
        else:
            thread_id = request.thread_id
        
        # Add user message
        assistant.add_message(thread_id, request.content)
        
        # Run assistant
        run_id = assistant.run_assistant(thread_id)
        
        # Poll for completion with timeout
        max_attempts = 30
        for _ in range(max_attempts):
            status = assistant.get_run_status(thread_id, run_id)
            
            if status["status"] == "completed":
                break
            elif status["status"] == "requires_action":
                # Handle function calls
                tool_calls = status["required_action"].submit_tool_outputs.tool_calls
                outputs = []
                
                for call in tool_calls:
                    func_name = call.function.name
                    args = json.loads(call.function.arguments)
                    
                    if func_name == "search_flights":
                        result = await search_flights(**args)
                        outputs.append({
                            "tool_call_id": call.id,
                            "output": json.dumps(result)
                        })
                    elif func_name == "search_hotels":
                        result = await search_hotels(**args)
                        outputs.append({
                            "tool_call_id": call.id,
                            "output": json.dumps(result)
                        })
                
                assistant.submit_tool_outputs(thread_id, run_id, outputs)
            
            await asyncio.sleep(1)
        
        # Retrieve messages
        messages = assistant.get_messages(thread_id)
        
        return MessageResponse(
            thread_id=thread_id,
            messages=messages
        )
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/thread/{thread_id}")
async def get_thread(thread_id: str):
    messages = assistant.get_messages(thread_id)
    return {"thread_id": thread_id, "messages": messages}
```

### Docker 部署配置

```yaml
# docker-compose.yml
version: '3.8'

services:
  travel-copilot:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: travel-copilot-api
    ports:
      - "8000:8000"
    environment:
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - OPENAI_ORG_ID=${OPENAI_ORG_ID}
      - FLIGHT_API_KEY=${FLIGHT_API_KEY}
      - HOTEL_API_KEY=${HOTEL_API_KEY}
    env_file:
      - .env
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
    deploy:
      resources:
        limits:
          cpus: '2'
          memory: 4G

  # 可选：Redis 用于会话缓存
  redis:
    image: redis:7-alpine
    container_name: travel-copilot-redis
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    restart: unless-stopped

volumes:
  redis_data:
```

```dockerfile
# Dockerfile
FROM python:3.11-slim

WORKDIR /app

# 安装系统依赖
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

# 复制依赖文件
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 复制应用代码
COPY app/ ./app/
COPY config/ ./config/

# 创建非 root 用户
RUN useradd -m -u 1000 appuser && \
    chown -R appuser:appuser /app
USER appuser

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### 启动服务

```bash
# 方式一：本地开发
cd travel-copilot
export OPENAI_API_KEY="sk-..."
export FLIGHT_API_KEY="..."
export HOTEL_API_KEY="..."
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# 方式二：Docker Compose
docker-compose up -d

# 健康检查
curl http://localhost:8000/health

# 测试对话接口
curl -X POST http://localhost:8000/chat \
  -H "Content-Type: application/json" \
  -d '{"content": "I want to fly from SFO to JFK on 2024-06-15 for 2 passengers"}'
```

## 极客评测与总结

经过深度实践与源码分析，我们对 OpenAI Assistants API 构建旅行副驾驶的能力给出如下评估：

### 技术成熟度：★★★★☆
Assistants API 已经过大量生产环境验证，Thread 持久化机制稳定可靠，Function Calling 的 JSON Schema 解析高度准确。工具调用链路清晰，错误处理机制完善。

### 开发体验：★★★★★
相比传统的手动维护对话历史，Thread 模型极大降低了开发复杂度。SDK 的链式调用设计优雅，类型提示完备，调试体验出色。

### 扩展能力：★★★★☆
可挂载的 File Search 与 Code Interpreter 提供了原生扩展能力，无需额外架构设计即可实现文档问答与复杂计算。结合向量数据库可构建完整的 RAG 架构。

### 成本考量：★★★☆☆
GPT-4 Turbo 的 token 消耗较高，大规模并发场景下成本显著。建议对高频场景实施缓存策略，并对 Thread 历史进行周期性压缩。

### 性能表现：★★★★☆
端到端响应时间受模型推理速度限制，但在流式输出模式下用户体验流畅。Function Calling 的执行时延取决于外部 API，建议异步化处理并添加超时保护。

### 适用场景推荐

| 场景 | 推荐指数 | 说明 |
|------|----------|------|
| B2B 旅行平台 | ★★★★★ | 多租户场景下 Thread 隔离能力强 |
| 企业内部差旅助手 | ★★★★☆ | 适合对接内部审批系统 |
| 旅行社智能客服 | ★★★★☆ | 结合知识库可提供专业咨询 |
| 个人旅行规划 | ★★★☆☆ | 成本较高，轻量场景可选轻量模型 |

Martin Tuncaydin 的实践再次证明，OpenAI Assistants API 已经成为构建企业级 AI 应用的基础设施级方案。对于旅行行业而言，将 AI 能力嵌入工作流不仅意味着用户体验的跃升，更代表着 B2B 服务模式的根本性变革。随着 Function Calling 的标准化与生态工具链的完善，我们有理由期待更多垂直领域的智能副驾驶产品涌现。

—— FINER Tech 荣誉出品

---
*本文首发于 Finer Tech 技术博客。*
