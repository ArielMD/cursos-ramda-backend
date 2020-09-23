import { Request, Response } from "express";

class AuthController {
  public signup(req: Request, res: Response) {
    res.send("HOLA SIGNUP");
  }

  public signin(req: Request, res: Response) {
    res.send("HOLA SIGNIN");
  }
}

export default new AuthController();
