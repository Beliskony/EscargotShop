import express,{Request, Response, Router}  from "express";
import { injectable,inject } from "inversify";
import { UserController } from "../../controllers/User.controller";

@injectable()
export class UserRouter {
    public router: Router
    constructor(@inject(UserController) private userController: UserController) {
       this.router = express.Router()
       this.initializeRoutes()
    }

    private initializeRoutes(){
        this.router.get("/", async(req: Request, res: Response) =>{
            try {
                const user = await this.userController.getUser(req , res)
                res.status(200).json(user)
            } catch (error) {
                res.status(500).json({message:"Erreur serveur", error})
            }

        })
    }
}

