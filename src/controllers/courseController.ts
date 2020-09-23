import { Request, Response } from "express";

class CourseController {
  public getCouse(req: Request, res: Response) {
    res.send("getCourse");
  }

  public getTopics(req: Request, res: Response) {
    res.send("getTopics");
  }
}

export default new CourseController();
