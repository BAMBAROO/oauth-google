import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req) {
    if(!req.user) {
      return "No Login For User";
    }

    return {
      message: "User info from google",
      user: req.user,
    }
  }
}
