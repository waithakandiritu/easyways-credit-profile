import { Link } from "react-router";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { Reveal, Stagger, StaggerItem } from "./Motion";

const productLinks = [
  "Logbook Loans",
  "Emergency Loans",
  "Virtual Asset Loans",
  "Phone Purchase Loans",
  "Check-off Loans",
];

const companyLinks: { label: string; to: string }[] = [
  { label: "About us", to: "/about" },
  { label: "How it works", to: "/how-it-works" },
  { label: "Opportunities", to: "/opportunities" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const phones = ["+254 734 641 449", "+254 786 189 755", "+254 100 974 188"];

export function Footer() {
  return (
    <footer className="bg-navy text-white/80 mt-32">
      <div className="container-page py-20">
        <Stagger stagger={0.1} className="grid gap-12 lg:grid-cols-12">
          <StaggerItem className="lg:col-span-4">
            <Logo invert />
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-white/65">
              EasyWays Credit Limited is a digital credit provider licensed and
              regulated by the Central Bank of Kenya, serving employed Kenyans,
              entrepreneurs and digital asset holders.
            </p>
            <a
              href="https://wa.me/254734641449"
              className="mt-7 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-[13px] hover:bg-white/10 transition-colors"
            >
              <Icon name="whatsapp" className="h-4 w-4 text-gold" />
              Talk to us on WhatsApp
            </a>
          </StaggerItem>

          <StaggerItem className="lg:col-span-2">
            <h4 className="text-[12px] uppercase tracking-[0.18em] text-white/50">
              Products
            </h4>
            <ul className="mt-5 space-y-3 text-[14px]">
              {productLinks.map((label) => (
                <li key={label}>
                  <Link to="/products" className="hover:text-gold-soft">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem className="lg:col-span-2">
            <h4 className="text-[12px] uppercase tracking-[0.18em] text-white/50">
              Company
            </h4>
            <ul className="mt-5 space-y-3 text-[14px]">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-gold-soft">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem className="lg:col-span-4">
            <h4 className="text-[12px] uppercase tracking-[0.18em] text-white/50">
              Head office
            </h4>
            <ul className="mt-5 space-y-3 text-[14px] text-white/70">
              <li className="flex items-start gap-3">
                <Icon
                  name="mapPin"
                  className="mt-0.5 h-4 w-4 text-gold flex-shrink-0"
                />
                Trio Complex, Thika Road, behind Garden City Mall, Nairobi,
                Kenya
              </li>
              {phones.map((phone) => (
                <li key={phone} className="flex items-center gap-3">
                  <Icon
                    name="phone"
                    className="h-4 w-4 text-gold flex-shrink-0"
                  />
                  <span className="font-mono">{phone}</span>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Icon name="mail" className="h-4 w-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:support@easywayscredit.com"
                  className="hover:text-gold-soft"
                >
                  support@easywayscredit.com
                </a>
              </li>
            </ul>
          </StaggerItem>
        </Stagger>

        <div className="divider-gold mt-16 opacity-30" />
        <Reveal
          y={10}
          className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-[12px] text-white/50"
        >
          <p>
            © {new Date().getFullYear()} EasyWays Credit Limited. All rights
            reserved. Licensed by the Central Bank of Kenya as a Digital Credit
            Provider.
          </p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
