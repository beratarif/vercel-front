export default function Hero(){
  return(
    <section className="h-screen flex flex-col items-center justify-center text-center bg-black text-white px-6">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Berat Arif Gönül
      </h1>

      <p className="text-gray-400 text-lg md:text-xl max-w-xl">
        Software Developer focused on building modern and scalable applications.
      </p>
      
      <div className="mt-8 flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition"></a>
      </div>
    </section>
  )
}