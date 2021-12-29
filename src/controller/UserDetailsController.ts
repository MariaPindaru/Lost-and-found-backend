import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {UserDetails} from "../entity/UserDetails";

export class UserDetailsController {

    private userDetailsRepository = getRepository(UserDetails);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userDetailsRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userDetailsRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userDetailsRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userDetailsRepository.findOne(request.params.id);
        await this.userDetailsRepository.remove(userToRemove);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        let userToUpdate = await this.userDetailsRepository.findOne(request.params.id);
        const {
          first_name = userToUpdate.first_name,
          last_name = userToUpdate.last_name,
          phone_number = userToUpdate.phone_number,
          email_address = userToUpdate.email_address
        } = request.body;
    
        return await this.userDetailsRepository.save({
          id: userToUpdate.id,
          first_name,
          last_name,
          phone_number,
          email_address
        });
      }

}