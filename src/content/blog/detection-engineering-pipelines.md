---
title: "Designing Detection Engineering Pipelines"
description: "How to make detections reviewable, testable, and useful beyond the first alert."
published: 2026-07-08
tags: [detection, engineering, operations]
draft: false
---

A detection is a small production system. It has inputs, assumptions, failure modes, versioning needs, and users who need to make decisions from its output.

## Treat content as engineering

The useful unit is not merely a query. It is a tested package containing its intent, data dependencies, severity rationale, investigation context, and known blind spots.

```yaml
title: Suspicious encoded PowerShell
data_sources:
  - endpoint.process
tests:
  - encoded-command-positive
  - admin-automation-negative
owner: detection-engineering
```

## Pipeline stages

1. **Author** against documented telemetry assumptions.
2. **Test** with positive and negative fixtures before release.
3. **Deploy** through reviewable source control.
4. **Measure** fidelity, coverage, and investigation cost.
5. **Retire or tune** when assumptions no longer hold.

| Measure | Question it answers |
| --- | --- |
| Precision | How often does an alert deserve attention? |
| Coverage | Which behaviours can this telemetry reveal? |
| Latency | Can responders act in time? |

> If a rule cannot explain its intended decision, it is difficult to tune safely and impossible to own well.

## References

- [Sigma rule specification](https://sigmahq.io/docs/)
- [MITRE ATT&CK](https://attack.mitre.org/)
