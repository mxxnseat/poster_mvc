import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";

import { User } from "../user/user.model";

@modelOptions({ schemaOptions: { collection: "post", versionKey: false } })
export class Post {
    @prop({ ref: () => User, required: true })
    public user!: Ref<User>

    @prop({ required: true })
    public title!: string

    @prop({ required: true })
    public alias!: string

    @prop({ required: true })
    public text!: string
}

const PostModel = getModelForClass(Post);


export default PostModel;