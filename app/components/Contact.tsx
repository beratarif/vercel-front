"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Benimle İletişime Geç</h2>
          <p>
            Bir proje fikrin mi var? İş birliği mi düşünüyorsun? Hemen mesaj
            bırak
          </p>

          <div className="social-links">
            <a href="http://github.com/beratarif" target="_blank">
              GitHub
            </a>
            <a href="https://linkedin.com/in/beratarif" target="_blank">
              LinkedIn
            </a>
            <a href="mailto:gonulberat1@gmail.com">E-Mail</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Adınız Soyadınız"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="E-posta"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Mesajınız"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Gönderiliyor..." : "Mesaj Gönder"}
          </button>

          {status === "success" && (
            <p className="form-success">Mesajınız gönderildi, teşekkürler!</p>
          )}
          {status === "error" && (
            <p className="form-error">Bir hata oluştu, lütfen tekrar deneyin.</p>
          )}
        </form>
      </div>
    </section>
  );
}