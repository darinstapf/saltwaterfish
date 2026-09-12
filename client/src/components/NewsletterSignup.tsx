/**
 * Saltwater Fish Pro | Marine Field Journal design system
 * The newsletter module is deliberately calm and remains HubSpot-ready until production IDs are supplied.
 * Required before activation: VITE_HUBSPOT_PORTAL_ID and VITE_HUBSPOT_FORM_ID.
 */

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { assets } from "@/data/siteContent";

export function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="newsletter" aria-labelledby="newsletter-heading">
      <div className="newsletter__coral" aria-hidden="true"><img src={assets.mark} alt="" /><span>Field note / 2026</span></div>
      <div className="newsletter__copy">
        <span className="eyebrow eyebrow--aqua">Weekly stability note</span>
        <h2 id="newsletter-heading">A calmer way to care for your reef.</h2>
        <p>Practical field notes, system checklists, and one thoughtful guide at a time.</p>
      </div>
      <form className="newsletter__form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="newsletter-email">Email address</label>
        <Input id="newsletter-email" required type="email" placeholder="Email address" autoComplete="email" />
        <Button type="submit" className="newsletter__button">
          {submitted ? <><Check size={17} /> HubSpot form pending</> : <><Mail size={17} /> Get the checklist <ArrowUpRight size={16} /></>}
        </Button>
        <p className="newsletter__fineprint">
          {submitted
            ? "Your email has not been submitted. This HubSpot-ready form will be activated before production launch."
            : "No noise. Just useful notes for a healthier, more stable system."}
        </p>
      </form>
    </section>
  );
}
