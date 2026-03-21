import * as fs from 'fs';
import * as path from 'path';
import { Express, Request, Response } from 'express';

/**
 * Dynamically loads and registers API routes based on file names
 * Directory structure: data/routes/generic-file-named-responses/{version}/{METHOD_PATH}.json
 * File naming convention: get_beverages.json -> GET /api/{version}/beverages
 * File contents are returned as the response
 */
export function registerFileNamedRoutes(app: Express): void {
  const responsesDir = path.join(
    __dirname,
    '../mock-server/data/routes/generic-file-named-responses'
  );

  // Check if directory exists
  if (!fs.existsSync(responsesDir)) {
    console.warn(`File-named responses directory not found: ${responsesDir}`);
    return;
  }

  // Read all version directories
  const versions = fs.readdirSync(responsesDir).filter((item) => {
    const itemPath = path.join(responsesDir, item);
    return fs.statSync(itemPath).isDirectory();
  });

  versions.forEach((version) => {
    const versionDir = path.join(responsesDir, version);
    const versionPrefix = `/api/${version}`;

    // Read all JSON files in the version directory
    const files = fs
      .readdirSync(versionDir)
      .filter((file) => file.endsWith('.json'));

    files.forEach((file) => {
      // Parse filename: METHOD_PATH.json -> method and path
      const filename = file.replace('.json', '');
      const parts = filename.split('_');

      if (parts.length < 2) {
        console.warn(`Invalid filename format (expected METHOD_PATH): ${file}`);
        return;
      }

      const method = parts[0].toLowerCase();
      const routePath = '/' + parts.slice(1).join('_');
      const fullPath = `${versionPrefix}${routePath}`;
      const filePath = path.join(versionDir, file);

      try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const responseData = JSON.parse(fileContent);

        // Register the route
        (app as any)[method](fullPath, (req: Request, res: Response) => {
          res.json(responseData);
        });

        console.log(`Registered ${method.toUpperCase()} ${fullPath}`);
      } catch (error) {
        console.error(`Error loading route from ${filePath}:`, error);
      }
    });
  });
}
