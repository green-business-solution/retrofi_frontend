# retrofi_frontend

RetroFi website and React UI.

Clone these repositories into a common parent directory using the exact names:

```sh
git clone https://github.com/green-business-solution/retrofi_data.git
git clone https://github.com/green-business-solution/retrofi_backend.git
git clone https://github.com/green-business-solution/retrofi_frontend.git
```

Use Node 24. Run `npm ci` in frontend and backend, then `npm run setup` in each to link shared files from their owning sibling repository. Setup refuses to overwrite existing files.

Run `npm run typecheck`, `npm test`, and `npm run build`. Start Vite with `npm run dev`; it proxies /api to localhost:8787.

See [repository split](https://github.com/green-business-solution/retrofi_backend/blob/main/docs/repository-split.md) for ownership, deployment, history recovery, and removed features. Production remains https://retrofi.org.

The Dashboard Performance Data admin tab has been removed. Its previous URL opens the main admin page.
