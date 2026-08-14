---
title: "Content Security Policy: A Practical Introduction"
description: "A restrictive CSP is an architectural decision, not a header to paste into a deployment form."
published: 2026-07-29
updated: 2026-08-02
tags: [web-security, csp, architecture]
draft: false
---

Content Security Policy limits the places a browser may load or execute resources from. It is most effective when the application already has a small resource graph.

## Start with the page you have

For a static site that uses same-origin assets, a durable starting point is deliberately unsurprising:

```http
Content-Security-Policy: default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'self'; form-action 'none'
```

This policy does not fix an XSS bug by itself. It reduces the useful execution paths available after one is introduced. Its value increases when scripts, inline event handlers, remote fonts, and vendor widgets are absent by design.

## Common pressure points

| Requirement | Better response | Avoid |
| --- | --- | --- |
| Inline behaviour | Move it to a reviewed static script | Adding `unsafe-inline` |
| Third-party chart | Render at build time | Broad vendor allowlists |
| Form endpoint | Use an explicitly scoped product decision | Guessing at `connect-src` |

## Roll out deliberately

1. Inventory the final HTML, CSS, JavaScript, images, and fonts.
2. Write only the directives those resources require.
3. Test normal navigation and error pages with the header enabled.
4. Keep the policy close to the source and review it when dependencies change.

> A CSP exception is a change to the browser trust boundary. Treat it like one.

## References

- [MDN: Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [OWASP CSP Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html)
