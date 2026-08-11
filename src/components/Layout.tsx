import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageFade } from "./Motion";
import { useSeo } from "../lib/useSeo";

export function Layout() {
  const location = useLocation();
  useSeo();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Keyed by pathname so each navigation remounts and fades the page in. */}
        <PageFade key={location.pathname}>
          <Outlet />
        </PageFade>
      </main>
      <Footer />
    </div>
  );
}
