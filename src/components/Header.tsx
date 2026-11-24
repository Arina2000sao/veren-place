"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "ГЛАВНАЯ" },
  { href: "#about", label: "О ПРОЕКТЕ" },
  { href: "#contacts", label: "КОНТАКТЫ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-10">
      <a
        href="#home"
        className="text-sm font-bold tracking-[0.3em] text-[#ffffff]"
      >
        VEREN PLACE
      </a>

      {isMobile ? (
        <>
          <button
            type="button"
            aria-label="Открыть меню"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
          >
            <span className="block h-[2px] w-6 bg-[#ffffff]" />
            <span className="block h-[2px] w-6 bg-[#ffffff]" />
            <span className="block h-[2px] w-6 bg-[#ffffff]" />
          </button>

          {open && (
            <div className="fixed inset-0 z-40 bg-white">
              <div className="flex items-center justify-between px-6 pt-6">
                <span className="text-sm font-bold tracking-[0.3em] text-[#1a1a1a]">
                  VEREN PLACE
                </span>
                <button
                  type="button"
                  aria-label="Закрыть меню"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center"
                >
                  <span className="relative block h-6 w-6">
                    <span className="absolute top-1/2 left-0 block h-[2px] w-6 rotate-45 bg-[#1a1a1a]" />
                    <span className="absolute top-1/2 left-0 block h-[2px] w-6 -rotate-45 bg-[#1a1a1a]" />
                  </span>
                </button>
              </div>
              <nav className="mt-16 flex flex-col items-start gap-8 px-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-normal tracking-[0.18em] text-[#1a1a1a]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </>
      ) : (
        <nav>
          <ul className="flex gap-[28px]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs font-normal tracking-[0.18em] text-[#1a1a1a] transition-opacity hover:opacity-60"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
