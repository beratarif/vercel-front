"use client";

import Link from "next/link";
import Image from "next/image";
import Profile from "../assets/image/IMG_20260529_202913_288.webp"

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="profile-photo">
          <Image
            src={Profile}
            alt="Developed By Berat Arif G."
            width={520}
            height={520}
            className="aboutus-profile"
          ></Image>
        </div>
        <div className="aboutus-me">
          <h1>
            Merhaba,ben <span>Berat Arif</span>
          </h1>
          <p>
            Frontend odaklı projeler geliştiriyorum. Modern, performanslı ve
            kullanıcı deneyimi güçlü web arayüzleri tasarlıyorum. Şu anda
            full-stack yolunda ilerliyorum ve sistem tarafında C/C++ ile
            performans ve bellek yönetimi üzerinde çalışıyorum.
          </p>
          <p>
            Hedefim sadece site yapmak değil; güçlü, optimize ve üretim
            seviyesinde projeler geliştirmek.
          </p>
          <Link className="about-links" href="#contact">
            <button>Benimle iletişime geçin / Contact me</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
