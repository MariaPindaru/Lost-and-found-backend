import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import * as jwt from "jsonwebtoken";

export class UserController {

    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        let userToUpdate = await this.userRepository.findOne(request.params.id);
        const {
          username = userToUpdate.username,
          password = userToUpdate.password
        } = request.body;
    
        return await this.userRepository.save({
          id: userToUpdate.id,
          username,
          password
        });
      }

      async login(request: Request, response: Response, next: NextFunction) {
        if (!(request.body.username && request.body.password)) {
          response.status(400).send("missing username/password");
        }
        else {
          console.log(request.body);
          try {

            let user = await this.userRepository.findOneOrFail({
              where: { username: request.body.username, password: request.body.password },
            });

            const token = { token: jwt.sign(user.id, "process.env.SECRET_KEY") };
            response.send(token);
          } catch (error) {
            console.log(error);
            response.status(401).send("Invalid username/passowrd!");
          }
        }
      }
    
      async register(request: Request, response: Response, next: NextFunction) {
        if (!(request.body.userName && request.body.password && request.body.email)) {
          response.status(400).send("missing username/email/password");
        }
        else {
          let user =
            (
              await this.userRepository.find({
                where: [
                  { userName: request.body.userName },
                  { email: request.body.email },
                ],
              })
            );
    
          if (user.length > 0) {
            response.status(409).send( "There is already an user with this username or email");
          }
          else{
            this.userRepository.save(request.body);
            response.send("Done");
          }
        }
      }

}