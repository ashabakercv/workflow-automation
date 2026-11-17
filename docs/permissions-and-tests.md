# Permission and exception checks

| Scenario | Expected outcome |
| --- | --- |
| A requester attempts to read another requester’s item | Denied by tenant permissions |
| A requester attempts to approve their request | Denied by assignment and permission rules |
| Submitted amount is missing, negative or not numeric | Submission fails with actionable validation |
| Manager approves a $1,000 request | Approved |
| Manager approves a $1,000.01 request | Finance review; not yet approved |
| Finance rejects a request | Rejected; comment retained |
| Connector fails during approval creation | Exception recorded; no silent success |
| A request is edited after submission | New review required under the process policy |

The local tests cover validation and state transitions. Tenant authorization, notifications, connector reliability and concurrency remain deployment checks rather than completed local tests.
