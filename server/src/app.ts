import express, { Application as IApplication } from "express";
import { Route } from "types/express.types";



class Application{
    private PORT: string | number = process.env.PORT || 5000;

    constructor( 
        middlewares         : Array<(...args:any)=>any> = [],
        routes              : Array<Route> = [],
        private application : IApplication = express(),
    )   {

            middlewares.forEach(middleware  =>  this.application.use(middleware()))
            routes.forEach(route            =>  this.application.use(route.endpoint, route.route));
            
        }

    public start(){
        this.application.listen(this.PORT, ()=>{
            console.log(`Start on ${this.PORT}`);
        })
    }
}

export default Application;