import { useState, type FormEvent, type ReactNode } from "react";
import { customerTypes, projectTypes } from "@/data/forms";
import { productCategories } from "@/data/products";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/site/contact-actions";
import { cn } from "@/lib/utils";

const fieldClass = "h-11 bg-background";

type EnquiryMode = "quote" | "contact";

type FormErrors = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  products?: string;
};

export function EnquiryForm({ mode }: { mode: EnquiryMode }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "ready" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [products, setProducts] = useState<string[]>([]);

  function toggleProduct(name: string) {
    setProducts((current) => (current.includes(name) ? current.filter((item) => item !== name) : [...current, name]));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const nextErrors: FormErrors = {};

    if (!name) nextErrors.name = "Please enter your name.";
    if (!phone) nextErrors.phone = "Please enter a phone number.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email, or leave this blank.";
    if (!message) nextErrors.message = "Please describe your requirement.";
    if (mode === "quote" && products.length === 0) nextErrors.products = "Select at least one product category.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    window.setTimeout(() => setStatus("ready"), 500);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name} required>
          <Input id="name" name="name" autoComplete="name" className={fieldClass} />
        </Field>
        <Field label="Phone" htmlFor="phone" error={errors.phone} required>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </Field>
        {mode === "quote" ? (
          <Field label="Company" htmlFor="company">
            <Input id="company" name="company" autoComplete="organization" className={fieldClass} />
          </Field>
        ) : null}
        <Field label="Email" htmlFor="email" error={errors.email}>
          <Input id="email" name="email" type="email" autoComplete="email" className={fieldClass} />
        </Field>
        {mode === "quote" ? (
          <>
            <Field label="Customer type" htmlFor="customerType">
              <NativeSelect id="customerType" name="customerType" options={customerTypes} />
            </Field>
            <Field label="Project type" htmlFor="projectType">
              <NativeSelect id="projectType" name="projectType" options={projectTypes} />
            </Field>
            <Field label="Estimated quantity" htmlFor="quantity">
              <Input id="quantity" name="quantity" placeholder="Sheets, units, or project scale" className={fieldClass} />
            </Field>
            <Field label="Location" htmlFor="location">
              <Input id="location" name="location" className={fieldClass} />
            </Field>
          </>
        ) : null}
      </div>
      {mode === "quote" ? (
        <fieldset>
          <legend className="mb-3 text-sm font-medium">
            Products required <span className="text-primary">*</span>
          </legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {productCategories.map((item) => (
              <label key={item.id} className="flex items-center gap-3 border border-border px-3 py-3 text-sm">
                <Checkbox
                  checked={products.includes(item.name)}
                  onCheckedChange={() => toggleProduct(item.name)}
                  aria-label={item.name}
                />
                {item.name}
              </label>
            ))}
            <label className="flex items-center gap-3 border border-border px-3 py-3 text-sm">
              <Checkbox checked={products.includes("Multiple")} onCheckedChange={() => toggleProduct("Multiple")} aria-label="Multiple" />
              Multiple
            </label>
          </div>
          {errors.products ? <p className="mt-2 text-sm text-destructive">{errors.products}</p> : null}
        </fieldset>
      ) : null}
      <Field label="Message" htmlFor="message" error={errors.message} required>
        <Textarea id="message" name="message" rows={5} className="min-h-32 bg-background" />
      </Field>
      {status === "ready" ? (
        <p className="border border-border bg-surface px-4 py-3 text-sm leading-6 text-muted-foreground" role="status">
          This enquiry is ready, but no delivery service is connected yet. Please use Call, WhatsApp, or visit the showroom so the team can receive your requirement.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          Please review the highlighted fields and try again.
        </p>
      ) : null}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Preparing…" : mode === "quote" ? "Submit Request" : "Send Enquiry"}
        </Button>
        <WhatsAppButton label="WhatsApp Instead" />
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string | undefined;
  required?: boolean | undefined;
  children: ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={htmlFor} className="mb-2 inline-flex items-center gap-1">
        {label}
        {required ? <span className="text-primary">*</span> : null}
      </Label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} className="mt-2 text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function NativeSelect({ id, name, options }: { id: string; name: string; options: readonly string[] }) {
  return (
    <select
      id={id}
      name={name}
      className={cn(
        fieldClass,
        "w-full rounded-md border border-input px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
      )}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
