import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/cn";

type Variant = "primary" | "gold" | "outline" | "outline-light" | "whatsapp" | "ghost";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-maroon text-cream border border-maroon hover:bg-maroon-deep hover:border-maroon-deep shadow-card hover:shadow-lift",
  gold:
    "bg-gradient-to-b from-gold to-gold-deep text-maroon-deep border border-gold-deep/60 hover:from-gold-light hover:to-gold shadow-card hover:shadow-lift",
  outline:
    "border border-gold-deep/45 text-maroon bg-white/50 hover:bg-white hover:border-gold-deep hover:shadow-card",
  "outline-light":
    "border border-gold-light/45 text-cream bg-white/5 hover:bg-white/12 hover:border-gold-light",
  whatsapp:
    "bg-[#25D366] text-white border border-[#1eb457] hover:bg-[#1eb457] shadow-card hover:shadow-lift",
  ghost: "text-maroon hover:bg-beige/70",
};

const SIZES: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.78rem] gap-1.5",
  md: "h-11 px-5 text-[0.82rem] gap-2",
  lg: "h-[3.25rem] px-7 text-[0.86rem] gap-2.5",
};

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
};

function classes({ variant = "primary", size = "md", fullWidth, className }: Omit<BaseProps, "children">) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-heading font-semibold uppercase tracking-[0.14em]",
    "transition-all duration-300 ease-out active:translate-y-px",
    "hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-55",
    VARIANTS[variant],
    SIZES[size],
    fullWidth && "w-full",
    className,
  );
}

export function Button({
  children,
  icon,
  iconRight,
  type = "button",
  onClick,
  disabled,
  ...rest
}: BaseProps & {
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes(rest)}>
      {icon}
      <span>{children}</span>
      {iconRight}
    </button>
  );
}

export function ButtonLink({
  children,
  to,
  href,
  external,
  icon,
  iconRight,
  onClick,
  ...rest
}: BaseProps & {
  to?: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
}) {
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {iconRight}
    </>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes(rest)}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={classes(rest)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}
