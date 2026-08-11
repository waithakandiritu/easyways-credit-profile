import { Link } from "react-router";
import { Logo } from "../components/Logo";
import { useSeo } from "../lib/useSeo";
import { notFoundSeo } from "../data/seo";

export function NotFound() {
  useSeo(notFoundSeo);
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <Logo className="justify-center" />
        <h1 className="mt-10 font-serif text-7xl text-navy">404</h1>
        <h2 className="mt-3 text-lg font-medium text-navy">Page not found</h2>
        <p className="mt-2 text-sm text-slate">
          The page you're looking for has moved or no longer exists.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-navy px-6 py-3 text-[13.5px] font-medium text-white hover:bg-navy-deep"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
