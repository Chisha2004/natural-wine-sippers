import * as fs from 'fs';
import * as path from 'path';
import { Express, Request, Response } from 'express';
import { join } from 'path';

interface RouteConfig {
  path: string;
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  response: Record<string, unknown>;
}

/**
 * Dynamically loads and registers API routes from the generic routes directory
 * Directory structure: routes/generic/{version}/{file}.json
 * Version format: v1, v2, etc. -> resolves to /api/{version}
 * Each JSON file contains an array of route configurations
 */
export function registerGenericRoutes(app: Express): void {
  const genericRoutesDir = join(
    __dirname,
    '../mock-server/data/routes/generic'
  );

  // Check if generic routes directory exists
  if (!fs.existsSync(genericRoutesDir)) {
    console.warn(`Generic routes directory not found: ${genericRoutesDir}`);
    return;
  }

  // Read all version directories
  const versions = fs.readdirSync(genericRoutesDir).filter((item) => {
    const itemPath = path.join(genericRoutesDir, item);
    return fs.statSync(itemPath).isDirectory();
  });

  versions.forEach((version) => {
    const versionDir = path.join(genericRoutesDir, version);
    const versionPrefix = `/api/${version}`;

    // Read all JSON files in the version directory
    const files = fs
      .readdirSync(versionDir)
      .filter((file) => file.endsWith('.json'));

    files.forEach((file) => {
      const configPath = path.join(versionDir, file);

      try {
        const configContent = fs.readFileSync(configPath, 'utf-8');
        const routes: RouteConfig[] = JSON.parse(configContent);

        // Register each route from the config
        routes.forEach((routeConfig) => {
          const fullPath = `${versionPrefix}${routeConfig.path}`;
          const method = routeConfig.method.toLowerCase();

          // Register the route
          (app as any)[method](fullPath, (req: Request, res: Response) => {
            res.json(routeConfig.response);
          });

          console.log(`Registered ${method.toUpperCase()} ${fullPath}`);
        });
      } catch (error) {
        console.error(`Error loading routes from ${configPath}:`, error);
      }
    });
  });
}
