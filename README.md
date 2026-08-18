# 201Lab.com

The 201 Lab studio site, and the home of **Custom Panel by 201 Lab**.

Astro, static output, deployed on Vercel. No client-side JavaScript ships
today — every page is prerendered HTML and CSS, which is what keeps it quick
on the mobile connections most of this traffic arrives on. Astro was chosen
over a heavier framework precisely so that an interactive Custom Panel demo
can be added later as an island, without the rest of the site paying for it.

## Running it

```sh
npm install
npm run dev      # local dev server
npm run build    # static build into dist/
npm run preview  # serve the built output
npm run check    # astro check — types and template diagnostics
```

## Layout

```
src/pages/          One file per route. index (studio) and custom-panel (product).
src/layouts/        Base.astro — head, meta, header/footer shell.
src/components/     Header, Footer, Diamond (the logo mark as vector).
src/styles/         global.css — the whole design system, tokens first.
public/             Static assets carried over from the 2022 site.
```

## Design system

Tokens live at the top of `src/styles/global.css`. The palette is sampled
from the logo itself — an NFPA-704 style hazard diamond in red `#ec2324`,
blue `#0068ff` and yellow `#f7cd00` — on the bone `#eeeee8` ground the
previous site used. Those four plus black and white are the whole palette.

The visual register is a spec sheet: hairline rules, monospace field labels,
tabular rows. It suits a studio that ships production systems, and it is
literally what Custom Panel outputs.

Dark mode is handled with `prefers-color-scheme` and token overrides only.
The logo blue fails contrast on near-black, so the dark theme lifts the
accent rather than keeping a token that cannot be read.

## Things that need a decision

These are deliberately unresolved rather than guessed at:

- **`hello@201lab.com`** is used as the contact address on both pages. Confirm
  the mailbox exists, or swap it for the address you want public.
- **The Eurostile webfont.** `public/fonts/eurostile-extended.ttf` came from
  the old repo and is still there, but nothing loads it. Eurostile is a
  licensed commercial typeface, and self-hosting it for web use needs a
  webfont licence we have not confirmed. The display stack is currently a
  system grotesque; swapping in a licensed face is one `@font-face` rule and
  one token (`--font-display`).
- **Naming the pilot client.** The home page refers to "a tote builder we
  shipped for an apparel brand" without naming them. If Bodybag Collective is
  happy to be named and shown, that paragraph becomes a much stronger case
  study — but that is their call to make, not ours.
- **"Referrals only."** The 2022 site led with it. The current copy softens it
  to "new client work is selective and mostly comes by referral", which sits
  better next to a product you want strangers to install. Confirm that still
  reflects how you want to be approached.
- **Pricing.** No numbers appear anywhere, for Custom Panel or the service
  tiers, because none are decided yet.

## Old site

The previous Next.js 13 holding page was replaced wholesale rather than
migrated; it was a single "Referrals Only" page from December 2022. The logo,
favicon, font file and project images were carried over from it. Its history
is intact in git.
