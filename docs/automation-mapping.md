# Power Automate implementation mapping

Design specification; not an exported or deployed flow.

1. Trigger when an item is submitted for review, using a dedicated submission flag or controlled status transition.
2. Validate title, purpose, requester and nonnegative cost. Reject incomplete submissions without starting an approval.
3. Resolve the assigned manager. If missing, route to an exception queue and notify the workflow owner. Do not guess an approver.
4. Create a manager approval and persist its identifier. Record the outcome, actor and timestamp.
5. If rejected, set Rejected and store the comment. If approved and cost is above $1,000, request finance approval. Otherwise set Approved.
6. If finance is required, wait for its explicit outcome before setting a final state.
7. Notify the requester and retain decision history. Use a reminder/escalation policy defined by the process owner.

## Reliability considerations
Prevent duplicate approval creation by recording the active approval identifier. Keep flow-triggered updates from starting new approvals. Use an exception path for connector failures and approver lookup failures. Restrict editing of a submitted request; a material change requires a new review.

## Threshold boundary
Exactly $1,000 requires manager approval only. $1,000.01 requires manager and finance approval. The browser model and unit checks use the same documented boundary.
