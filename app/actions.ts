"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const company = formData.get("company") as string;
  const email = formData.get("email") as string;
  const requirements = formData.get("requirements") as string;

  try {
    const { data, error } = await resend.emails.send({
      from: "Finer Tech Website <onboarding@resend.dev>",
      to: ["343320@qq.com"], // 这里建议先填你常用的个人邮箱测试，因为 finer.net.cn 还没绑企业邮箱
      subject: `来自霏乐科技官网的新询盘：${name} - ${company}`,
      html: `
        <h2>收到一份新的合作咨询</h2>
        <p><strong>姓名：</strong> ${name}</p>
        <p><strong>公司：</strong> ${company}</p>
        <p><strong>邮箱：</strong> ${email}</p>
        <p><strong>业务需求：</strong></p>
        <p>${requirements}</p>
      `,
    });

    if (error) {
      return { success: false, message: error.message };
    }
    return { success: true };
  } catch (error) {
    return { success: false, message: "邮件发送失败，请稍后再试" };
  }
}