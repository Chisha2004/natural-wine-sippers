import { readFileSync } from 'fs';
import { join } from 'path';

export class ProductsService {
  private dataPath = join(__dirname, '../mocks/products.json');

  getAll() {
    const data = JSON.parse(readFileSync(this.dataPath, 'utf-8'));
    // Example: add random stock quantity for dynamic mock behavior
    return data.map((p: any) => ({
      ...p,
      stock: Math.floor(Math.random() * 20),
    }));
  }

  getById(id: number) {
    return this.getAll().find((p: any) => p.id === id);
  }
}
