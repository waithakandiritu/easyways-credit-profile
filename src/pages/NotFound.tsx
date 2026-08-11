import { Link } from "react-router";
import { Logo } from "../components/Logo";
import { Stagger, StaggerItem } from "../components/Motion";
import { useSeo } from "../lib/useSeo";
import { notFoundSeo } from "../data/seo";

export function NotFound() {
  useSeo(notFoundSeo);
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <Stagger className="max-w-md text-center">
        <StaggerItem>
          <Logo className="justify-center" />
        </StaggerItem>
        <StaggerItem as="h1" className="mt-10 font-serif text-7xl text-navy">
          404
        </StaggerItem>
        <StaggerItem as="h2" className="mt-3 text-lg font-medium text-navy">
          Page not found
        </StaggerItem>
        <StaggerItem as="p" className="mt-2 text-sm text-slate">
          The page you're looking for has moved or no longer exists.
        </StaggerItem>
        <StaggerItem className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-navy px-6 py-3 text-[13.5px] font-medium text-white hover:bg-navy-deep"
          >
            Back to home
          </Link>
        </StaggerItem>
      </Stagger>
    </div>
  );
}
