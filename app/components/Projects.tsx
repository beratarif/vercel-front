import { link } from "fs";
import { title } from "process";

export default function Projects() {
  const projects = [
    {
      title: "Tailwind Css Portföy",
      description:
        "Tailwind CSS ile geliştirilmiş modern ve sade bir portföy sitesi.",
      tech: ["Tailwind CSS", "HTML"],
      link: "https://beratgnl.online",
    },
    {
      title: "JSON Login Sistemi",
      description:
        "Kullanıcı verilerinin JSON formatında tutulduğu bir giriş sistemi.",
      tech: ["JSON", "Auth"],
      link: "https:/jsonlogin.netlify.app",
    },
    {
      title: "Not Defteri",
      description:
        "JSON yapısı kullanılarak kayıt alan bir not defteri uygulaması.",
      tech: ["JSON", "LocalStorage"],
      link: "https://notdefterijson.netlify.app",
    },
    {
      title: "Hava Durumu Uygulaması",
      description:
        "Harici API kullanılarak geliştirilmiş bir hava durumu uygulaması.",
      tech: ["API", "JavaScript"],
      link: "https://havadurumujson.netlify.app",
    },
    {
      title: "React Portföy Sitesi",
      description:
        "React kullanarak frontend becerilerimi geliştirmek için oluşturduğum portföy sitesi.",
      tech: ["React", "Components"],
      link: "https://reactfirtweb.netlify.app",
    },
    {
      title: "Code Proo",
      description:
        "Yazılım öğrenmek isteyenler için çoklu programlama dillerini içeren bir web platformu.",
      tech:["JavaScript" , "HTML/CSS"],
      link: "https://codeproo.netlify.app",
    },
    {
      title: "Kişisel Portföy Sitesi",
      description:
        "Modern, responsive ve animasyonlu bir portföy tasarımı. Next.js ve TypeScript kullanıldı.",
      tech: ["Next.js", "TypeScript", "CSS"],
      link: "#",
    },
    {
      title: "PHP Blog Sistemi",
      description:
        "Admin paneli olan, kategori ve yazı yönetimi yapılabilen blog sistemi.",
      tech: ["PHP", "MySQL"],
      link: "#",
    },
    {
      title: "C++ Terminal Oyunu",
      description:
        "Bellek yönetimi ve performans odaklı geliştirilen terminal tabanlı oyun.",
      tech: ["C++"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">
          Kendimi Geliştirerek Yaptığım Projeler
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <a href={project.link} target="_blank">
                Projeyi İncele →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
