import { injectable } from "inversify";
import { User } from "../schemas/user.schema";
import { Iuser } from "../interfaces/Iuser";
import { Model } from "mongoose";


@injectable()
export class UserService {
    private userModel: Model<Iuser> = User
    
    /*createUser*/
    public async createUser(userData: Iuser) {
        return await new this.userModel(userData).save()
    }

    /*findByMail*/
    public async findUserByMail(mail: string) {
        try {
            const user = await this.userModel.findOne({ mail });
            if (!user) {
                throw new Error("Utilisateur non trouvé");
            }
            return user;
        } catch (error) {
            console.error("Erreur lors de la recherche de l'utilisateur :", error);
            throw error;
        }
    }
}