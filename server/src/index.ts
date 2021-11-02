import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config({
    path: `${__dirname}/../.env`
});


import Application from "./app";
import connect from "./connect";

//routes
import postsRouter from "./routes/posts.route";
import userRouter from "./routes/user.route";


const application = new Application(
    [bodyParser],
    [postsRouter, userRouter]
);


connect()
    .then(() => {
        application.start();
    })
    .catch(e => {
        process.exit(0);
    })
