/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */
 
///<reference path="./Register.ts" />
///<reference path="./events/ReviewEvent.ts" />

namespace io.github.dimous.reviews {
    "use strict"; 
    
    export class Application extends Register {
        private static io_github_dimous_reviews_Application__instance: Application = new Application(); 
        ///
        constructor() {
            super();
            ///
            if (Boolean(Application.io_github_dimous_reviews_Application__instance)) throw new Error("Это синглтон");           
        }
        //---        

        public static getInstance(): Application {
            return Application.io_github_dimous_reviews_Application__instance;
        }
        //---
        
        public run(): void {
            this.__event_dispatcher.trigger(new events.ReviewEvent(events.ReviewEvent.STRING_RUN));
        }
    }
}