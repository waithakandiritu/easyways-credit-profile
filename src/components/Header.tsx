import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { AnimatePresence, m } from "motion/react";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { navLinks, APPLY_URL } from "../data/nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur border-b border-border" : "bg-white border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-[72px] items-center justify-between">
        <Link to="/" aria-label="EasyWays Credit Home">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-3.5 py-2 text-[13.5px] font-medium tracking-tight transition-colors ${
                  active ? "text-navy" : "text-slate hover:text-navy"
                }`}
              >
                {link.label}
                {active && <span className="absolute inset-x-3 -bottom-px h-px bg-gold" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+254734641449"
            className="flex items-center gap-2 text-[13px] text-slate hover:text-navy"
          >
            <Icon name="phone" className="h-3.5 w-3.5" />
            <span className="font-mono">+254 734 641 449</span>
          </a>
          <a
            href={APPLY_URL}
            className="inline-flex items-center justify-center rounded-md bg-navy px-5 py-2.5 text-[13px] font-medium text-white hover:bg-navy-deep transition-colors"
          >
            Apply for credit
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-navy"
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <m.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.2, 0.7, 0.2, 1] }}
            className="lg:hidden overflow-hidden border-t border-border bg-white"
          >
            <m.div
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
              className="container-page py-4 flex flex-col gap-1"
            >
              {navLinks.map((link) => (
                <m.div
                  key={link.to}
                  variants={{ hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0 } }}
                >
                  <Link to={link.to} className="block py-2.5 text-[15px] text-navy">
                    {link.label}
                  </Link>
                </m.div>
              ))}
              <m.a
                href={APPLY_URL}
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                className="mt-3 inline-flex items-center justify-center rounded-md bg-navy px-5 py-3 text-[14px] font-medium text-white"
              >
                Apply for credit
              </m.a>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
