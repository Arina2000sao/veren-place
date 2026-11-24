import Header from "@/components/Header";

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <video
        src="hero-video.mp4"
        poster="hero-render.png"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      <Header />

      <div className="absolute inset-x-0 bottom-0 flex w-full flex-col justify-center gap-8 bg-[#1a1a1a]/45 px-6 pt-10 pb-10 backdrop-blur-md md:inset-y-0 md:right-auto md:w-1/2 md:px-16 md:pt-24 md:pb-16">
        <h1 className="max-w-[560px] text-4xl leading-[1.08] font-normal tracking-[0.04em] text-white uppercase sm:text-5xl xl:text-6xl">
          Детали создают вашу резиденцию
        </h1>
        <p className="max-w-[460px] text-base leading-relaxed text-white">
          Кирпичная кладка, латунь и вечерняя подсветка — резиденция,
          в которой каждая деталь работает на ваш статус.
        </p>
        <a
          href="#about"
          className="w-fit rounded-xl bg-[#1a1a1a]/80 px-8 py-4 text-sm font-normal tracking-[0.14em] text-white uppercase transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(255,255,255,0.35)]"
        >
          Посмотреть проект
        </a>
      </div>
    </section>
  );
}
