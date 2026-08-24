PROFILECARD TEST — KEEP LANYARD AS A FALLBACK

This creates a SECOND React widget:
    profilecard-widget/

Your existing:
    lanyard-widget/
is not deleted.

Replace/add:
- _quarto.yml
- index.qmd
- styles.css
- profilecard-widget/
- setup-profilecard.ps1

Then from the portfolio root:

    powershell -ExecutionPolicy Bypass -File .\setup-profilecard.ps1
    quarto render
    quarto preview

Profile settings:
- Name: Mükremin Tulgar
- Title: Data Science · Financial Risk
- Handle: @mukremintulgar
- Status: Portfolio
- Contact button: opens About
- Tilt: enabled
- Mobile tilt: disabled
- Behind glow: enabled
- React Bits default purple/blue inner gradient

To switch back to Lanyard later, change this in index.qmd:

    src="profilecard-widget/dist/index.html"

back to:

    src="lanyard-widget/dist/index.html"

and use the previous Lanyard wrapper if desired.
