import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { compareSync } from 'bcrypt';
import { User } from '../user/user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {
  }

  async validateUser(login: string, password: string): Promise<User | null> {
    const user = await this.userService.findByLogin(login);
    if (user && compareSync(password, user.password)) {
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload = { login: user.login, userId: user._id };
    return {
      user: user.name,
      token: this.jwtService.sign(payload)
    };
  }
}
