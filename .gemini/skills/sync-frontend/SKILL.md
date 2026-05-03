---
name: sync-frontend
description: Rebuilds the Angular app using Nx and syncs the output to the Spring Boot static resources folder.
---

# Sync Frontend Skill

When the user asks to "sync", "rebuild", or "refresh" the frontend:

1. **Build:** Change directory to `frontend-app` and run `npx nx build`.
2. **Verify new files in static** Verify that the build sent new files into src/main/resources/static
3. **Report:** Tell the user the build is complete and the Spring resources are updated.

## Examples
- "Sync the frontend"
- "Update my angular changes to the backend"