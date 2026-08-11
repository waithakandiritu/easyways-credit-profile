import { useEffect } from "react";
import { Logo } from "../components/Logo";
import { Stagger, StaggerItem } from "../components/Motion";
import { useSeo } from "../lib/useSeo";
import { APPLY_URL } from "../data/nav";

export function Apply() {
  useSeo();

  useEffect(() => {
    window.location.replace(APPLY_URL);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <Stagger className="max-w-md text-center">
        <StaggerItem>
          <Logo className="justify-center" />
        </StaggerItem>
        <StaggerItem as="h1" className="mt-8 font-serif text-3xl text-navy">
          Taking you to our application system…
        </StaggerItem>
        <StaggerItem as="p" className="mt-3 text-sm text-slate">
          If you are not redirected automatically,{" "}
          <a href={APPLY_URL} className="underline text-navy">
            click here to continue
          </a>
          .
        </StaggerItem>
      </Stagger>
    </div>
  );
}
