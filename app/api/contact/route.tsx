import { Resend } from "resend";
import { NextResponse } from "next/server";
import { ratelimit } from "@/app/lib/ratelimit";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return NextResponse.json(
        {
          error:
            "Çok fazla istek gönderdiniz. Lütfen bir kaç dakika sonra tekrar deneyiniz. ",
        },
        { status: 429 },
      );
    }
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tüm alanları doldurmanız gerekiyor." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Geçerli bir e-posta adresi girin." },
        { status: 400 },
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: "Mesajınız çok uzun." },
        { status: 400 },
      );
    }
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // domain doğrulamadan önce bu kalsın
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Yeni mesaj: ${name}`,
      text: `Gönderen: ${name} (${email})\n\nMesaj:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email gönderim hatası:", error);
    return NextResponse.json(
      { error: "Mesaj gönderilemedi, lütfen tekrar deneyin." },
      { status: 500 },
    );
  }
}
