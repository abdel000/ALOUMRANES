import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { ChevronDown } from "lucide-react";
import { SITE, getUtm, track } from "@/lib/site";
import { CtaButton } from "./Cta";

const schema = z.object({
  name: z.string().trim().min(2, "Merci d'indiquer votre nom et prénom.").max(100),
  phone: z
    .string()
    .trim()
    .min(8, "Merci d'indiquer un numéro de téléphone valide.")
    .max(25),
  student_level: z.string().min(1, "Merci de choisir un niveau."),
  current_grade: z.string().trim().max(80).optional().or(z.literal("")),
  request_type: z.string().min(1, "Merci de préciser votre demande."),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

const levels = ["Maternelle", "Primaire", "Collège", "Lycée"];
const requests = [
  "Demander des informations",
  "Planifier une visite",
  "Demander les tarifs",
  "Demander les conditions d'inscription",
  "Être rappelé",
];

const fieldClass =
  "mt-2 w-full border border-input bg-card px-4 py-3.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-navy focus:outline-none";
const selectClass = `${fieldClass} appearance-none pr-10`;

function SelectField({
  id,
  label,
  error,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs tracking-[0.14em] uppercase text-muted-foreground">
        {label}
      </label>
      <div className="relative">
        <select id={id} className={selectClass} aria-invalid={!!error} {...props}>
          {children}
        </select>
        <ChevronDown
          className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
      </div>
      {error ? <p className="mt-2 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}

export function AdmissionsForm({
  defaultRequest = "Demander des informations",
  source = "site",
}: {
  defaultRequest?: string;
  source?: string;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      student_level: String(fd.get("student_level") ?? ""),
      current_grade: String(fd.get("current_grade") ?? ""),
      request_type: String(fd.get("request_type") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Merci de vérifier les informations saisies.");
      return;
    }

    setErrors({});
    setSending(true);

    /** Objet lead envoyé vers la feuille Google Sheets (via webhook Apps Script). */
    const lead = {
      ...parsed.data,
      school_year: SITE.schoolYear,
      source,
      ...getUtm(),
      created_at: new Date().toISOString(),
    };
    console.info("[lead]", lead);

    track("form_submit", { request_type: lead.request_type, student_level: lead.student_level });
    track("admission_inquiry", { student_level: lead.student_level });
    if (lead.request_type === "Planifier une visite") track("visit_request", {});

    const formEl = e.currentTarget;
    const webhookUrl = import.meta.env.VITE_LEADS_WEBHOOK_URL as string | undefined;

    const submitted = webhookUrl
      ? fetch(webhookUrl, {
          method: "POST",
          mode: "no-cors",
          body: new URLSearchParams({
            name: lead.name,
            phone: lead.phone,
            student_level: lead.student_level,
            current_grade: lead.current_grade ?? "",
            school_year: lead.school_year,
            request_type: lead.request_type,
            message: lead.message ?? "",
            source: lead.source,
            utm_source: lead.utm_source,
            utm_medium: lead.utm_medium,
            utm_campaign: lead.utm_campaign,
          }),
        })
      : Promise.resolve();

    submitted
      .then(() => {
        formEl.reset();
        toast.success("Votre demande a bien été enregistrée. Nous vous recontactons rapidement.");
      })
      .catch(() => {
        toast.error("Envoi impossible pour le moment. Merci de nous contacter par téléphone.");
      })
      .finally(() => setSending(false));
  };

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor="name" className="text-xs tracking-[0.14em] uppercase text-muted-foreground">
          Parent
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Nom et prénom"
          aria-invalid={!!errors["name"]}
          className={fieldClass}
        />
        {errors["name"] ? <p className="mt-2 text-xs text-destructive">{errors["name"]}</p> : null}
      </div>

      <div>
        <label htmlFor="phone" className="text-xs tracking-[0.14em] uppercase text-muted-foreground">
          Téléphone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="06 XX XX XX XX"
          aria-invalid={!!errors["phone"]}
          className={fieldClass}
        />
        {errors["phone"] ? <p className="mt-2 text-xs text-destructive">{errors["phone"]}</p> : null}
      </div>

      <SelectField
        id="student_level"
        name="student_level"
        label="Niveau recherché"
        defaultValue=""
        error={errors["student_level"]}
      >
        <option value="" disabled>
          Choisir un niveau
        </option>
        {levels.map((l) => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </SelectField>

      <div>
        <label
          htmlFor="current_grade"
          className="text-xs tracking-[0.14em] uppercase text-muted-foreground"
        >
          Niveau / classe actuelle{" "}
          <span className="normal-case text-muted-foreground">(facultatif)</span>
        </label>
        <input
          id="current_grade"
          name="current_grade"
          placeholder="Ex. CE2, 5ème, Tronc commun"
          className={fieldClass}
        />
      </div>

      <SelectField
        id="request_type"
        name="request_type"
        label="Votre demande"
        defaultValue={defaultRequest}
        error={errors["request_type"]}
      >
        {requests.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </SelectField>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-xs tracking-[0.14em] uppercase text-muted-foreground">
          Message <span className="normal-case text-muted-foreground">(facultatif)</span>
        </label>
        <textarea id="message" name="message" rows={3} className={fieldClass} />
      </div>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <CtaButton type="submit" variant="gold" disabled={sending}>
          {sending ? "Envoi…" : "Demander des informations"}
        </CtaButton>
        <p className="text-xs text-muted-foreground">Vos informations restent confidentielles.</p>
      </div>
    </form>
  );
}
