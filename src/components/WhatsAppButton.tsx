import { Button } from "./Button";
import { WhatsAppIcon, PhoneIcon } from "./Icons";
import { useWhatsApp } from "./WhatsAppProvider";
import { WHATSAPP_MESSAGES, type WhatsAppMessageKey } from "../lib/whatsapp";

type Size = "sm" | "md" | "lg";
type Variant = "primary" | "gold" | "outline" | "outline-light" | "whatsapp" | "ghost";

/**
 * The single WhatsApp call-to-action used everywhere on the site.
 * Pass either a `message` key from the shared list, or custom `text`.
 */
export function WhatsAppButton({
  message = "general",
  text,
  label = "WhatsApp Us",
  variant = "whatsapp",
  size = "md",
  fullWidth,
  className,
}: {
  message?: WhatsAppMessageKey;
  text?: string;
  label?: string;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
}) {
  const { openWhatsApp } = useWhatsApp();

  return (
    <Button
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      className={className}
      icon={<WhatsAppIcon className={size === "sm" ? "size-4" : "size-[1.15rem]"} />}
      onClick={() => openWhatsApp(text ?? WHATSAPP_MESSAGES[message])}
    >
      {label}
    </Button>
  );
}

/** Click-to-call action. Opens the same two-number picker. */
export function CallButton({
  label = "Call Us",
  variant = "outline",
  size = "md",
  fullWidth,
  className,
}: {
  label?: string;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
}) {
  const { openCall } = useWhatsApp();

  return (
    <Button
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      className={className}
      icon={<PhoneIcon className={size === "sm" ? "size-4" : "size-[1.05rem]"} />}
      onClick={openCall}
    >
      {label}
    </Button>
  );
}
