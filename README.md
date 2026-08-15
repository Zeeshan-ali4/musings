# Musings

A security-first personal cybersecurity research blog built with Astro, TypeScript, Tailwind CSS, Markdown content collections, and static Vercel deployment.

## Architecture and dependency policy

The normal production request path is static HTML, CSS, and same-origin assets. There is no server adapter, database, authentication, analytics, client routing, custom API, remote font, or runtime third-party resource. No Svelte, Three.js, or MDX dependency is installed because this release has no interaction that needs hydration. Markdown is the default article format; any future MDX is trusted, reviewed source code only—never remote or user-submitted content.

Dependencies are intentionally limited: Astro builds the static site; Tailwind compiles CSS; sitemap and RSS generate publishing metadata; Astro Check validates types. `package-lock.json` is committed and CI uses `npm ci`.

## Local development

Requires Node 20 or later.

```bash
npm ci
npm run dev
npm run check
npm run build
npm audit --audit-level=high
```

`npm run security` intentionally fails until the placeholder security contact has been replaced. That is a pre-production guard, not a development failure.

## Adding a post

Add a `.md` file under `src/content/blog/`. Required frontmatter is `title`, `description`, `published`, `tags`, and `draft`; `updated` and `hero` are optional. The content schema validates it at build time. Set `draft: true` to exclude a post from all production pages, RSS, and tag archives. The file path is its deterministic URL slug.

## Security controls implemented in source

- Static Astro output and build-time content schema validation.
- Restrictive Vercel CSP with same-origin-only resource directives; no `unsafe-eval`, `unsafe-inline`, or wildcard origins.
- `nosniff`, referrer, permissions, HSTS, frame, opener, and resource isolation headers in `vercel.json`.
- `/.well-known/security.txt`, `/security`, `SECURITY.md`, robots, sitemap, and RSS.
- Production source maps disabled; no environment variables are used or exposed.
- CI runs deterministic install, type checks, build, and high-severity dependency audit with read-only workflow permissions.

Before production, replace `REPLACE-WITH-SECURITY-CONTACT@example.invalid` and `REPLACE_WITH_YOUR_DOMAIN.example` consistently in `src/lib/site.ts`, `astro.config.mjs`, `public/robots.txt`, and `public/.well-known/security.txt`, then run `npm run security`.

## Vercel

Connect the repository using Vercel’s Git integration and configure the protected `main` branch as production. This project requires no Vercel Functions, Edge Functions, server adapter, or runtime secrets. Treat preview URLs as public until Vercel deployment protection is enabled. Confirm headers on a deployed response and keep preview access aligned with your collaboration needs.

## Manual GitHub controls

Enable branch protection/rulesets for `main`: require pull requests, required CI status checks, an appropriate review requirement, and block force pushes and deletion. Enable Dependabot alerts, secret scanning and push protection where available. Periodically review collaborator access, GitHub Apps/OAuth grants, tokens, and SSH keys. The included Actions are version tags because immutable action SHAs were not verified in this environment; pin to verified full SHAs before a high-assurance production launch.

## Account hardening

For GitHub, Vercel, and the primary recovery email: use a passkey or hardware-backed key where supported, enable MFA, keep recovery codes securely and separately stored, review active sessions and recovery paths, and remove stale apps, tokens, and SSH keys. Review Vercel team/project permissions, integrations, environment variables, and preview-deployment exposure.

## Production validation

Run `npm ci`, `npm run check`, `npm run build`, and `npm audit --audit-level=high`. Inspect `dist/` for source maps, unexpected JavaScript, filesystem paths, secrets, and external URLs. Verify rendered pages with JavaScript disabled, keyboard navigation, mobile layout, reduced motion, internal links, CSP, headers, RSS, sitemap, and the deployed `security.txt` contact.
