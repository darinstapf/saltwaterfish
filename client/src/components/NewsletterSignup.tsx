/**
 * Saltwater Fish Pro | HubSpot-ready newsletter module
 * The form is inactive by design until VITE_HUBSPOT_PORTAL_ID and VITE_HUBSPOT_FORM_ID are supplied.
 */

import { useEffect, useId } from "react";
import { Mail } from "lucide-react";
import { assets } from "@/data/siteContent";

declare global {
  interface Window {
    hbspt?: { forms?: { create: (options: Record<string, unknown>) => void } };
  }
}

const portalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
const formId = import.meta.env.VITE_HUBSPOT_FORM_ID;

export function NewsletterSignup() {
  const formTargetId = useId().replaceAll(":", "");
  const isConfigured = Boolean(portalId && formId);

  useEffect(() => {
    if (!isConfigured) return;
    const createForm = () => {
      window.hbspt?.forms?.create({
        region: "na1",
        portalId,
        formId,
        target: `#${formTargetId}`,
        onFormReady: () => document.dispatchEvent(new CustomEvent("swf:newsletter-form-ready")),
        onFormSubmitted: () => document.dispatchEvent(new CustomEvent("swf:newsletter-submitted")),
      });
    };
    if (window.hbspt?.forms) {
      createForm();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = createForm;
    document.body.appendChild(script);
    return () => script.remove();
  }, [formTargetId, isConfigured]);

  return (
    <section className="newsletter" aria-labelledby="newsletter-heading">
      <div className="newsletter__coral" aria-hidden="true"><img src={assets.mark} alt="" /><span>Field note / 2026</span></div>
      <div className="newsletter__copy">
        <span className="eyebrow eyebrow--aqua">Saltwater Fish Pro / weekly field note</span>
        <h2 id="newsletter-heading">A calmer way to care for your reef.</h2>
        <p>Practical field notes, a first-90-days checklist, and one thoughtful guide at a time.</p>
      </div>
      {isConfigured ? <div className="newsletter__hubspot" id={formTargetId} aria-label="Newsletter signup" /> : <div className="newsletter__pending" role="status"><Mail size={20} /><div><strong>Newsletter signup is being connected to HubSpot.</strong><p>This form will activate after the HubSpot portal ID and form ID are configured. No email address is collected on this page yet.</p></div></div>}
    </section>
  );
}
