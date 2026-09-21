# Parallel · Agent Social App

Project entry for running and inspecting the browser interaction prototype. See the [public overview](.github/README.md) or [中文介绍](.github/README.zh-CN.md).

## Run locally

From the repository root:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000`. A modern browser is required; there is no build step or package installation for this static prototype. Its state uses browser localStorage.

## Files and current scope

- `index.html`: page entry.
- `app.js`: bundled example data and interaction logic.
- `styles.css`: presentation.
- [Product design](docs/agent-socialapp-prd-v1.md).
- [Runtime integration proposal](docs/agent-runtime-integration-spec-v1.md).

Runtime checks are simulated. Contacts, messages, prices and connection states are demonstration content, not an operating service. Do not enter real API keys or private conversations into the prototype. Integration documents describe proposed interfaces and do not establish a shipped iOS app.

## Maintenance

Preserve the distinction between simulated UI behavior and connected services when changing the public introduction. No repository-wide license is currently declared.
