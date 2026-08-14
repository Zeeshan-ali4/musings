---
title: "Kerberos Delegation Explained"
description: "A defensive mental model for delegated authentication, constrained delegation, and where risk accumulates."
published: 2026-07-18
tags: [identity, kerberos, active-directory]
draft: false
---

Delegation allows a service to act onward to another service on behalf of a user. That is useful for multi-tier applications, but it also makes an identity boundary more consequential.

## The core idea

Consider a user connecting to a front-end service which needs a database connection under the user’s identity. Delegation determines whether—and how—the front end can obtain a service ticket for that second hop.

```text
User -> Web service -> Database service
        ^ delegated identity is used here
```

## Delegation models

| Model | Constraint | Defensive concern |
| --- | --- | --- |
| Unconstrained | Any service target | A compromised service can impersonate broadly |
| Constrained | Named service principals | Permissions can drift over time |
| Resource-based constrained | Target controls who may act for it | ACL changes become security-sensitive |

## Review priorities

- Inventory accounts trusted for delegation and the services they can reach.
- Keep service accounts distinct from administrators and human users.
- Monitor changes to delegation-related directory attributes.
- Validate that service principal names resolve to the intended account.

> Delegation is not inherently unsafe. The risk is the blast radius when a trusted service identity is compromised.

## References

- [Microsoft: Kerberos constrained delegation overview](https://learn.microsoft.com/windows-server/security/kerberos/kerberos-constrained-delegation-overview)
- [MITRE ATT&CK: Steal or Forge Kerberos Tickets](https://attack.mitre.org/techniques/T1558/)
