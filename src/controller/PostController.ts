import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Post } from "../entity/Post";
import { URL } from "url";

export class PostController {

  private postRepository = getRepository(Post);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.postRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.postRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.postRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.postRepository.findOne(request.params.id);
    await this.postRepository.remove(userToRemove);
  }

  async update(request: Request, response: Response, next: NextFunction) {
    let postToUpdate = await this.postRepository.findOne(request.params.id);
    const {
      user_id = postToUpdate.user_id,
      title = postToUpdate.title,
      description = postToUpdate.description,
      location = postToUpdate.location,
      date = postToUpdate.date
    } = request.body;

    return await this.postRepository.save({
      id: postToUpdate.id,
      user_id,
      title,
      description,
      location,
      date
    });
  }

}

function zip(arg0: any) {
  throw new Error("Function not implemented.");
}
