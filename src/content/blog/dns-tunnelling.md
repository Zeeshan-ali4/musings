---
title: "Understanding DNS Tunnelling"
description: "How DNS becomes a covert transport, and the evidence defenders can use to expose it."
published: 2026-08-06
tags: [dns, detection, network]
draft: false
---

DNS is designed to be ubiquitous and forgiving. Those properties make it useful for service discovery—and attractive as a low-bandwidth transport when conventional egress is constrained.

## What the channel looks like

A tunnelling client encodes data into query labels and sends requests to an attacker-controlled authoritative zone. The authoritative server observes the labels and returns encoded responses. This is not magic encryption; it is an application protocol built from DNS messages.

```text
MFRGGZDFMZTWQ2LK.exfil.example.org. IN TXT
```

The left-most label often has high entropy, unusual length, and little lexical structure. One query is not proof. The detection value comes from repetition, timing, and a domain’s role in the wider network graph.

## Investigation signals

- A client makes unusually many queries to a small set of rarely seen domains.
- Query labels are consistently long or near DNS label limits.
- TXT answers or NXDOMAIN responses dominate a client/domain pair.
- The queried zone has no ordinary business relationship with the environment.

| Signal | Why it matters | Caveat |
| --- | --- | --- |
| Label entropy | Encoded payloads often look random | CDNs also use opaque identifiers |
| Query volume | Tunnels require repeated exchanges | Telemetry agents can be noisy |
| Rare parent zone | Attacker zones have little prior history | New legitimate services exist |

> Detection should join resolver telemetry with endpoint and proxy context. DNS alone rarely explains intent.

## A practical baseline

Begin with resolver logs, normalize labels, and aggregate by client, registered domain, response code, and query type. Alert on combinations rather than a single threshold. A useful investigation question is: *what application on this host has a reason to generate these names?*

## References

- [RFC 1035: Domain names](https://www.rfc-editor.org/rfc/rfc1035)
- [MITRE ATT&CK: Application Layer Protocol](https://attack.mitre.org/techniques/T1071/)
