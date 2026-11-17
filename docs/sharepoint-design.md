# SharePoint implementation design

This is a proposed configuration for a personal demonstration. No Microsoft 365 tenant deployment has been performed.

## List schema
| Column | Type | Rule |
| --- | --- | --- |
| Title | Single line text | Required; concise description |
| Requester | Person | Set from signed-in identity in the deployed version |
| EstimatedCost | Currency | Required; nonnegative; USD in this demonstration |
| BusinessPurpose | Multiple lines | Required before submission |
| Status | Choice | Draft, Manager review, Finance review, Approved, Rejected |
| ManagerDecision | Choice | Pending, Approved, Rejected |
| FinanceDecision | Choice | Not required, Pending, Approved, Rejected |
| DecisionComment | Multiple lines | Required for rejection |
| SubmittedAt | Date and time | Set when submission succeeds |

## Permissions intent
Requesters should create and read their own items. Managers review assigned requests. Finance reviews assigned requests above the threshold. Administrators maintain the list and flow. Validate actual tenant permissions and assignment logic before production use.

Hiding a button or filtering a view is not access control. Apply permissions at the data layer and test with separate test accounts. The local browser demonstration does not enforce real user authorization.
