import { injectable, inject } from "inversify";
import { Request, Response } from "express";
import { Iuser } from "../interfaces/Iuser";
import { Document } from "mongoose";
import { UserService } from "../services/user.service";

@injectable()
export class UserController {
    constructor(@inject(UserService) private userService: UserService) {

    }

    /*getUser*/
    public async getUser(req:Request, res: Response) {
        try {
            const {mail} = req.query;
            if (!mail || typeof mail !== "string") {
                return res.status(400).json({message:"Email invalide"})
            }

            const userExiste = await this.userService.findUserByMail(mail)
            
            if (!userExiste) {
                return res.status(404).json({message: "Utilisateur trouver"})
            }
            return res.status(200).json({message:"utilisateur trouve"})
        } catch (error) {
            console.error("Erreur lors de la vérification de l'email :", error);
            return res.status(500).json({ message: "Erreur serveur", error });
        }
    }



    /*createUser*/
    public async createUser(req: Request, res: Response) {
       try {
        const user: Document<unknown, any, Iuser> =await this.userService.createUser(req.body)

        return user
       }
        catch (error) {
            throw  console.error(error);
            
           } 
       }
}