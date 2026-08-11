import type { SVGProps } from "react";

export type IconName =
  | "shield"
  | "phone"
  | "whatsapp"
  | "mail"
  | "mapPin"
  | "clock"
  | "arrowRight"
  | "plus"
  | "minus"
  | "menu"
  | "close"
  | "check"
  | "car"
  | "zap"
  | "bitcoin"
  | "smartphone"
  | "briefcase"
  | "users"
  | "target"
  | "heart"
  | "lock"
  | "scale"
  | "recovery"
  | "calendar"
  | "sparkles";

const paths: Record<IconName, React.ReactNode> = {
  shield: <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />,
  phone: (
    <path d="M6 3h3l2 5-2.5 1.5a12 12 0 006 6L16 13l5 2v3a2 2 0 01-2 2A16 16 0 014 5a2 2 0 012-2z" />
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.4-4A8 8 0 1112 20a8 8 0 01-3.6-.9L4 20z" />
      <path d="M9 9c0 3 3 6 6 6 1 0 1.5-1 1-1.7l-1.6-.8-1 1a5 5 0 01-2-2l1-1-.8-1.6C10 8 9 8.5 9 9z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21c4-4 7-7.5 7-11a7 7 0 10-14 0c0 3.5 3 7 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  check: <path d="M5 12.5l4.5 4.5L19 6.5" />,
  car: (
    <>
      <path d="M4 13l1.6-4.4A2 2 0 017.5 7h9a2 2 0 011.9 1.6L20 13v5h-3v-2H7v2H4v-5z" />
      <circle cx="7.5" cy="15.5" r="1" />
      <circle cx="16.5" cy="15.5" r="1" />
    </>
  ),
  zap: <path d="M13 3L5 13h6l-1 8 8-11h-6l1-7z" />,
  bitcoin: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.5 8h4a2 2 0 010 4h-4zM9.5 12h4.3a2 2 0 010 4H9.5zM10.5 6.5v11M13 6.5v1.5M13 16v1.5" />
    </>
  ),
  smartphone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12h18" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0112 0M16 5.5a3 3 0 010 5.5M21 20a6 6 0 00-4-5.6" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.5-7-9.5A3.5 3.5 0 0112 7a3.5 3.5 0 017 3c0 5-7 10-7 10z" />
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 018 0v3" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16M6 20h12M4 8l4-1 4 1M8 7l-3 6a3 3 0 006 0zM12 7l4-1 4 1M16 6l-3 6a3 3 0 006 0z" />
    </>
  ),
  recovery: (
    <>
      <path d="M4 12a8 8 0 0113.7-5.6L20 8M20 4v4h-4" />
      <path d="M20 12a8 8 0 01-13.7 5.6L4 16M4 20v-4h4" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 3v4M16 3v4" />
    </>
  ),
  sparkles: (
    <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3zM18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9L18 15z" />
  ),
};

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
