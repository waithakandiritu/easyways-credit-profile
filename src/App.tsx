import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { HowItWorks } from "./pages/HowItWorks";
import { About } from "./pages/About";
import { Opportunities } from "./pages/Opportunities";
import { Faq } from "./pages/Faq";
import { Contact } from "./pages/Contact";
import { Apply } from "./pages/Apply";
import { Privacy, Terms } from "./pages/Legal";
import { NotFound } from "./pages/NotFound";

/**
 * The route tree, router-agnostic so the prerenderer can mount it under a
 * StaticRouter. Every path here needs a matching entry in src/data/seo.ts.
 */
export function AppRoutes() {
  return (
    <Routes>
      {/* Standalone pages (no header/footer chrome) */}
      <Route path="/apply" element={<Apply />} />

      {/* Pages within the shared layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
