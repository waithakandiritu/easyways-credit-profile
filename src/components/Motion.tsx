import type { ElementType, ReactNode } from "react";
import { m, type HTMLMotionProps, type Transition, type Variants } from "motion/react";

/**
 * Shared entry-animation primitives, built on Framer Motion (`motion/react`).
 *
 * Everything here animates *in* — opacity plus a short rise — the first time an
 * element scrolls into view, and never again. Elements already on screen at
 * mount animate immediately, so above-the-fold content is never left hidden.
 *
 * Reduced-motion is handled globally by the `<MotionConfig reducedMotion="user">`
 * in src/App.tsx: transforms are dropped, the opacity fade is kept.
 */

/** Matches the cubic-bezier used by .hover-lift in index.css. */
const EASE: [number, number, number, number] = [0.2, 0.7, 0.2, 1];

const ENTER: Transition = { duration: 0.6, ease: EASE };

/** Fire once, slightly before the element is fully on screen. */
const VIEWPORT = { once: true, amount: 0.15, margin: "0px 0px -40px 0px" } as const;

/** Tags that can be animated. Extend as pages need more. */
type MotionTag =
  | "div"
  | "section"
  | "article"
  | "aside"
  | "header"
  | "footer"
  | "ul"
  | "li"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "span"
  | "form";

const riseVariants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: ENTER },
});

type BaseProps = Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "whileInView" | "viewport" | "variants" | "transition"
> & {
  /** Element to render. Defaults to `div`. */
  as?: MotionTag;
  /** Seconds to hold before animating. Use to cascade sibling elements. */
  delay?: number;
  /** Pixels to rise from. Defaults to 16. */
  y?: number;
  children?: ReactNode;
};

/**
 * Fades and rises a single element into view.
 *
 * ```tsx
 * <Reveal as="h2" delay={0.08} className="font-serif">Heading</Reveal>
 * ```
 */
export function Reveal({ as = "div", delay = 0, y = 16, ...rest }: BaseProps) {
  const Component = m[as] as ElementType;
  return (
    <Component
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={riseVariants(y)}
      transition={{ ...ENTER, delay }}
      {...rest}
    />
  );
}

type StaggerProps = BaseProps & {
  /** Seconds between each child. Defaults to 0.08. */
  stagger?: number;
};

/**
 * Container that cascades its direct `<StaggerItem>` descendants once the
 * container scrolls into view. The container itself is not animated, so it
 * keeps whatever grid or flex layout it is given.
 */
export function Stagger({ as = "div", delay = 0, stagger = 0.08, ...rest }: StaggerProps) {
  const Component = m[as] as ElementType;
  return (
    <Component
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        show: { transition: { delayChildren: delay, staggerChildren: stagger } },
      }}
      {...rest}
    />
  );
}

/**
 * A child of `<Stagger>`. Inherits the `hidden` / `show` state from the nearest
 * animating ancestor, so it needs no viewport tracking of its own.
 */
export function StaggerItem({ as = "div", y = 16, ...rest }: Omit<BaseProps, "delay">) {
  const Component = m[as] as ElementType;
  return <Component variants={riseVariants(y)} {...rest} />;
}

/** Fades a whole page in on navigation. Keyed by pathname in Layout. */
export function PageFade({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.32, ease: EASE }}
      className={className}
    >
      {children}
    </m.div>
  );
}
