import { Router } from 'express';
import { UsersService } from '../services/user.service';

export class UsersController {
  public router: Router;
  private userService = new UsersService();

  constructor() {
    this.router = Router();
    this.registerRoutes();
  }

  private registerRoutes() {
    this.router.post('/register', (req, res) => {
      this.userService.createUser(req.body);
      //TODO maybe we can check for when to return error here.
      res.json({
        id: '12345', //TODO maybe we can find a way to generate this number similar to how the backend will do it
      });
      res.status(201);
    });

    this.router.get('/users', (req, res) => {
      res.json(this.userService.getAll());
    });

    this.router.get('/users/:id', (req, res) => {
      const user = this.userService.getById(parseInt(req.params.id, 10));
      if (user) res.json(user);
      else res.status(404).json({ error: 'User not found' });
    });
  }
}
