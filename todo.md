# Saltwater Fish Pro — Launch Configuration Tasks

- [ ] Request the HubSpot **portal ID** and **newsletter form ID** from Darin before activating the production email form.
- [ ] Set the `VITE_HUBSPOT_PORTAL_ID` and `VITE_HUBSPOT_FORM_ID` build environment values in Cloudflare Pages after the HubSpot form is created.
- [ ] Replace the HubSpot-ready placeholder with the embedded HubSpot form and verify an end-to-end submission before production launch.
- [x] Copy all current generated image assets into Git-tracked `client/public/images/` and replace every `/manus-storage/` reference before independent Cloudflare Pages production deployment.
- [x] Verify that the production build contains all five current visual assets and no remaining `/manus-storage/` references.
- [ ] Move the Git-tracked image library to a CMS or dedicated media platform when the editorial content workflow is introduced.
