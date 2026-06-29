import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tüm alanları doldurmanız gerekiyor." },
        { status: 400 }
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
      { status: 500 }
    );
  }
}