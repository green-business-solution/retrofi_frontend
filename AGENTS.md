# RetroFi repository instructions

This repository owns frontend. Read README.md and the migration guide in ../retrofi_backend/docs/repository-split.md first.
The three sibling repositories are the source of truth; the retired monorepo is not a dependency.
Run npm ci and npm run setup (frontend/backend) before the package checks.
Keep generated dependency symlinks untracked. Edit each file in its owning repository.
Use GitHub gh-axi and follow ../retrofi_backend/AGENT_WORKFLOW.md and ../retrofi_backend/review.md for meaningful changes.
Production deployment tooling and IAM are owned by retrofi_backend; runtime table/bucket templates are owned by retrofi_data.
Do not restore Application Sources, Application Profiles, or Codex Tasks: these features were intentionally removed.
