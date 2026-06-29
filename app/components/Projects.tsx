// Olmayan project1Image importunu kaldırdık veya onun yerine tailwind.png'yi bağladık
import project2Image from "@/app/assets/image/project2.png";
import project3Image from "@/app/assets/image/project3.png";
import project4Image from "@/app/assets/image/project4.png";
import project5Image from "@/app/assets/image/project5.png";
import project6Image from "@/app/assets/image/project6.png";
import project7Image from "@/app/assets/image/project7.png";
import tailwindImage from "@/app/assets/image/tailwind.png";

export default function Projects() {
  const projects = [
    {
      image: tailwindImage, // project1 yerine klasöründe var olan tailwind.png'yi verdik
      title: "Tailwind Css Portföy",
      description: "Tailwind CSS ile geliştirilmiş modern ve sade bir portföy sitesi.",
      tech: ["Tailwind CSS", "HTML"],
      link: "https://beratarif.netlify.app",
    },
    {
      image: project2Image,
      title: "Temel Portföy Sitesi",
      description: "Baştan yapılmış herhangi bir teknoloji kullanılmadan oluşturulmuş bir portföy sitesi.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://beratarifgnl.netlify.app",
    },
    {
      image: project3Image,
      title: "JSON Login Sistemi",
      description: "Kullanıcı verilerinin JSON formatında tutulduğu bir giriş sistemi.",
      tech: ["JSON", "Auth"],
      link: "https://jsonlogin.netlify.app",
    },
    {
      image: project4Image,
      title: "Not Defteri",
      description: "JSON yapısı kullanılarak kayıt alan bir not defteri uygulaması.",
      tech: ["JSON", "LocalStorage"],
      link: "https://notdefterijson.netlify.app",
    },
    {
      image: project5Image, // default-project.png olmadığı için var olan bir resmi yedek yazdık
      title: "Hava Durumu Uygulaması",
      description: "Harici API kullanılarak geliştirilmiş bir hava durumu uygulaması.",
      tech: ["API", "JavaScript"],
      link: "https://havadurumujson.netlify.app",
    },
    {
      image: project7Image, // default-project.png olmadığı için var olan bir resmi yedek yazdık
      title: "Code Proo",
      description: "Yazılım öğrenmek isteyenler için çoklu programlama dillerini içeren bir web platformu.",
      tech: ["JavaScript", "HTML/CSS"],
      link: "https://codeproo.netlify.app",
    },
    {
      image: project6Image, 
      title: "Kişisel Portföy Sitesi",
      description: "Modern, responsive ve animasyonlu bir portföy tasarımı. Next.js ve TypeScript kullanıldı.",
      tech: ["Next.js", "TypeScript", "CSS"],
      link: "https://beratarif.vercel.app",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">
          Kendimi Geliştirerek Yaptığım Projeler
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const imageSrc = project.image && typeof project.image === "object" && "src" in project.image
              ? project.image.src
              : (project.image as string);

            return (
              <div key={index} className="project-card">
                <img 
                  src={imageSrc} 
                  alt={project.title} 
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Projeyi İncele →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}