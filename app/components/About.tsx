"use client";

import Link from "next/link";
import Image from "next/image";
import Profile from "../assets/image/IMG_20260529_202913_288.webp";

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
            Merhaba, ben <span>Berat Arif</span>
          </h1>
          <p>
            Kod yazmayı sadece bir araç olarak görmüyorum — iyi tasarlanmış bir
            arayüzün arkasında ne kadar düşünce yattığını biliyorum.
            Kullanıcının fark etmediği şeyleri doğru yapmak benim için önemli.
          </p>
          <p>
            Frontend'de derinleşirken full-stack tarafa adım atıyorum. C/C++ ile
            sistem programlama yaparak temeli sağlam tutuyorum; ne yazdığımın
            altında neler döndüğünü anlamak istiyorum.
          </p>
        </div>
      </div>
    </section>
  );
}
