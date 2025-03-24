import { Schema, Model, model } from "mongoose";
import { Iuser } from "../interfaces/Iuser";

const userSchema: Schema<Iuser> = new Schema({
    nom:{
        type: String,
        required: [true, "entrez votre nom"],
        maxlength: 100,
        trim: true
    },

    prenom:{
        type: String,
        required: [true, "entrez votre Prenom"],
        maxlength: 220,
        trim: true
    },
    
    mail:{
        type: String,
        required: [true, "entrez votre mail"],
        maxlength: 60,
        trim: true
    },

    contact:{
        type: String,
        required: [true, "entrez votre contact"],
        maxlength: 20,
        trim: true
    },

    ville:{
        type: String,
        required: [true, "entrez votre ville"],
        maxlength: 30,
        trim: true
    },

    dateNais:{
        type: Date,
        required: true
    }
},
  {
    timestamps: true
  }
)

export const User: Model<Iuser> = model("User", userSchema)