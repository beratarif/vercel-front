import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Berat Arif Gönül
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-xl">
          Software Developer focused on building modern, fast and scalable web applications.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-white rounded-full font-medium hover:bg-white hover:text-black transition"
          >
            Contact
          </a>
        </div>
      </section>

    </main>
  );
}

