import { Router } from 'express';
import { ProductsService } from '../services/product.service';

export class ProductsController {
  public router: Router;
  private service = new ProductsService();

  constructor() {
    this.router = Router();
    this.registerRoutes();
  }

  private registerRoutes() {
    this.router.get('/products', (req, res) => {
      res.json(this.service.getAll());
    });

    this.router.get('/products/:id', (req, res) => {
      const product = this.service.getById(parseInt(req.params.id, 10));
      if (product) res.json(product);
      else res.status(404).json({ error: 'Product not found' });
    });
  }
}
