import { useId, useState, type FormEvent } from "react";
import { EVENT_TYPES, PREFERENCES, PREFERRED_MENUS } from "../data/catering";
import { buildEnquiryMessage, type EnquiryDetails } from "../lib/whatsapp";
import { useWhatsApp } from "./WhatsAppProvider";
import { Button } from "./Button";
import { WhatsAppIcon } from "./Icons";
import { cn } from "../lib/cn";

const EMPTY: EnquiryDetails = {
  name: "",
  mobile: "",
  eventType: "",
  eventDate: "",
  guests: "",
  preference: "",
  location: "",
  preferredMenu: "",
  requirements: "",
};

type Errors = Partial<Record<keyof EnquiryDetails, string>>;

function validate(values: EnquiryDetails): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";
  else if (values.name.trim().length < 2) errors.name = "Please enter your full name.";

  const digits = values.mobile.replace(/\D/g, "");
  if (!values.mobile.trim()) errors.mobile = "Please enter a mobile number.";
  else if (digits.length < 10) errors.mobile = "Enter a valid 10-digit mobile number.";

  if (!values.eventType) errors.eventType = "Please choose an event type.";

  if (values.guests && Number(values.guests) <= 0)
    errors.guests = "Guest count must be more than zero.";

  return errors;
}

function inputClass(invalid: boolean) {
  return cn(
    "h-11 w-full rounded-lg border bg-white/85 px-3.5 text-[0.9rem] text-ink",
    "placeholder:text-ink-muted/55 transition-colors duration-200",
    "focus:border-gold-deep focus:bg-white focus:outline-none",
    invalid ? "border-burgundy" : "border-sand hover:border-gold/60",
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-heading text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink-soft"
      >
        {label}
        {required && <span className="ml-1 text-burgundy">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-[0.72rem] font-medium text-burgundy">
          {error}
        </p>
      )}
    </div>
  );
}

function Select({
  id,
  value,
  onChange,
  placeholder,
  options,
  invalid,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: readonly string[];
  invalid?: boolean;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(inputClass(!!invalid), "appearance-none pr-9", !value && "text-ink-muted/70")}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option} className="text-ink">
            {option}
          </option>
        ))}
      </select>
      <span
        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gold-deep"
        aria-hidden="true"
      >
        &#9662;
      </span>
    </div>
  );
}

export function EnquiryForm() {
  const { openWhatsApp } = useWhatsApp();
  const [values, setValues] = useState<EnquiryDetails>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const uid = useId();

  const set = (field: keyof EnquiryDetails) => (value: string) => {
    const next = { ...values, [field]: value };
    setValues(next);
    if (submitted) setErrors(validate(next));
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);

    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      const first = document.getElementById(uid + "-" + Object.keys(found)[0]);
      first?.focus();
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    openWhatsApp(buildEnquiryMessage(values));
  };

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id={uid + "-name"} label="Name" required error={errors.name}>
          <input
            id={uid + "-name"}
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={values.name}
            onChange={(e) => set("name")(e.target.value)}
            className={inputClass(!!errors.name)}
          />
        </Field>

        <Field id={uid + "-mobile"} label="Mobile Number" required error={errors.mobile}>
          <input
            id={uid + "-mobile"}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-digit mobile number"
            value={values.mobile}
            onChange={(e) => set("mobile")(e.target.value)}
            className={inputClass(!!errors.mobile)}
          />
        </Field>

        <Field id={uid + "-eventType"} label="Event Type" required error={errors.eventType}>
          <Select
            id={uid + "-eventType"}
            value={values.eventType}
            onChange={set("eventType")}
            placeholder="Select an occasion"
            options={EVENT_TYPES}
            invalid={!!errors.eventType}
          />
        </Field>

        <Field id={uid + "-eventDate"} label="Event Date">
          <input
            id={uid + "-eventDate"}
            type="date"
            value={values.eventDate}
            onChange={(e) => set("eventDate")(e.target.value)}
            className={inputClass(false)}
          />
        </Field>

        <Field id={uid + "-guests"} label="Number of Guests" error={errors.guests}>
          <input
            id={uid + "-guests"}
            type="number"
            inputMode="numeric"
            min={1}
            placeholder="e.g. 250"
            value={values.guests}
            onChange={(e) => set("guests")(e.target.value)}
            className={inputClass(!!errors.guests)}
          />
        </Field>

        <Field id={uid + "-preference"} label="Veg / Non-Veg / Both">
          <Select
            id={uid + "-preference"}
            value={values.preference}
            onChange={set("preference")}
            placeholder="Select a preference"
            options={PREFERENCES}
          />
        </Field>

        <Field id={uid + "-location"} label="Location">
          <input
            id={uid + "-location"}
            type="text"
            placeholder="Venue or area"
            value={values.location}
            onChange={(e) => set("location")(e.target.value)}
            className={inputClass(false)}
          />
        </Field>

        <Field id={uid + "-preferredMenu"} label="Preferred Menu">
          <Select
            id={uid + "-preferredMenu"}
            value={values.preferredMenu}
            onChange={set("preferredMenu")}
            placeholder="Select a menu"
            options={PREFERRED_MENUS}
          />
        </Field>
      </div>

      <Field id={uid + "-requirements"} label="Additional Requirements">
        <textarea
          id={uid + "-requirements"}
          rows={4}
          placeholder="Live counters, specific dishes, service timings, dietary notes..."
          value={values.requirements}
          onChange={(e) => set("requirements")(e.target.value)}
          className={cn(inputClass(false), "h-auto min-h-28 resize-y py-3 leading-relaxed")}
        />
      </Field>

      <Button
        type="submit"
        variant="whatsapp"
        size="lg"
        fullWidth
        className="mt-1"
        icon={<WhatsAppIcon className="size-[1.15rem]" />}
      >
        Send Enquiry on WhatsApp
      </Button>

      <p className="text-center text-xs leading-relaxed text-ink-muted">
        Your details are turned into a WhatsApp message. You choose which of our two numbers to
        send it to, and nothing is sent until you press send in WhatsApp.
      </p>
    </form>
  );
}
