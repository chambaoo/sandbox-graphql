import { GraphQLError } from 'graphql';

interface User {
  id: string;
  name: string;
  email: string;
}

export class UserService {
  private users: User[];

  constructor() {
    this.users = [
      { id: '', name: '', email: '' }
    ];
  }

  getUserById(id: string): User {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      throw new GraphQLError(`User with id ${id} not found`, {
        extensions: { code: 'USER_NOT_FOUND' },
      });
    }
    return user;
  }
}