export default function Navbar(){
  return(
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md text-white z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
        <h2 className="font-bold text-lg">Berat.</h2>

        <div className="space-x-6 text-gray-400 hidden md:flex">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
            </a>
        </div>
      </div>
    </nav>
  )
}