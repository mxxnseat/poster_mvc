import { getModelForClass, isRefType, modelOptions, mongoose, prop, Ref } from "@typegoose/typegoose";
import { RefType } from "mongoose";
import { Post } from "./post.model";

@modelOptions({ schemaOptions: { collection: "user", versionKey: false } })
export class User {
    @prop({ required: true, unique: true, type: String })
    public login!: string;

    @prop({ required: true, type: String })
    public password!: string;

    @prop({ required: true, unique: true, type: String })
    public username!: string;

    @prop({ ref: "Post", type: mongoose.Types.ObjectId })
    public posts?: Array<Ref<Post>>;
}

const UserModel = getModelForClass(User);


export default UserModel;