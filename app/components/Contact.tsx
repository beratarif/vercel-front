"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    alert("Mesaj gönderildi");
  };
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Benimle İletişime Geç</h2>
          <p>
            Bir proje fikrin mi var? iş birliği mi düşünüyorsun? Hemen mesaj
            bırak
          </p>

          <div className="social-links">
            <a href="http://github.com/beratarif" target="_blank">
              GitHub
            </a>
            <a href="https://">LinkedIn</a>
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
          <button type="submit">Mesaj Gönder</button>
        </form>
      </div>
    </section>
  );
}
