import { readFileSync } from 'fs';
import { join } from 'path';
import { UserCreate } from '../models/user.create.model';

export class UsersService {
  createUser(userCreate: UserCreate) {
    //TODO need something here maybe
  }
  private dataPath = join(__dirname, '../mocks/users.json');

  getAll() {
    return JSON.parse(readFileSync(this.dataPath, 'utf-8'));
  }

  getById(id: number) {
    return this.getAll().find((u: any) => u.id === id);
  }
}
