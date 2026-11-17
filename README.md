# Request and approval workflow

A repeatable approval process with explicit rules, exception handling and role boundaries.

**[Open the interactive project](https://ashabakercv.github.io/projects/workflow-automation/demo/)**

## Scenario
A fictional internal team needs a consistent way to request training resources. Small requests require manager approval; requests above $1,000 also require finance approval.

## Design decision
Separate submission validation, approval routing and the final status. The transition model prevents an expensive request from becoming approved after manager review alone.

## Explore the work
- [Sharepoint Design](docs/sharepoint-design.md)
- [Automation Mapping](docs/automation-mapping.md)
- [Permissions And Tests](docs/permissions-and-tests.md)
- [Fictional source data](data/fixtures.json)
- [Functional logic](src/model.mjs)
- [Functional checks](tests/model.test.mjs)

## Run locally
Use Node.js 22 or later to run `npm test`. No dependency installation is required. To view the demo, serve this repository over local HTTP with any static server and open `/demo/`. For example: `python3 -m http.server 8000` followed by `http://localhost:8000/demo/`.

## Scope and limitations
The interactive demo simulates routing in the browser. The SharePoint schema and Power Automate instructions are an implementation design, not a tenant-deployed solution or an importable flow export.

## Contribution and provenance
This is an AI-assisted personal portfolio demonstration prepared for Asha Baker. The scenario, source records and sample responses are fictional. It is separate from employer deliverables and does not imply a production deployment, client outcome or prior employment in software engineering. Professional experience is described on the portfolio home page. Asha can use the documentation and source files to review, adapt and explain the implementation.

## Tools and relevant work
SharePoint design / Power Automate mapping / Permissions. Relevant areas: Implementation, Knowledge.

## Version history
Version 1.0 introduces the documented scenario, browser demonstration, source data and functional checks. Subsequent changes should record the user need, change made and verification performed. GitHub Actions results should be described as passing only after a real workflow run succeeds.

## Reuse
The code and documentation are available for portfolio review. No license granting reuse has been selected; contact the owner for permission.
