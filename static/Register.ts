/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */

///<reference path="./IInjectable.ts" />
///<reference path="./TInjectableStore.ts" />
///<reference path="./EventDispatcher.ts" />

namespace io.github.dimous.reviews {
    "use strict"; 
    
    export class Register {       
        protected __event_dispatcher: EventDispatcher;
        
        private io_github_dimous_reviews_Register__injectable_store: TInjectableStore;
        ///
        constructor() {
            this.__event_dispatcher = new EventDispatcher();
            this.io_github_dimous_reviews_Register__injectable_store = {};
        }
        //---
        
        public has(__string_name: string): boolean {
            return __string_name in this.io_github_dimous_reviews_Register__injectable_store;
        }
        //---
        
        public add(...__array_injectables: IInjectable[]): void {
            for (const __injectable of __array_injectables) {
                const __string_name: string = __injectable.getName();
                ///
                if (! this.has(__string_name)) {
                    this.io_github_dimous_reviews_Register__injectable_store[__string_name] = __injectable;
                    ///
                    __injectable.setEventDispatcher(this.__event_dispatcher);
                    __injectable.onRegister();
                }
            }
        }
        //---
        
        public remove(...__array_injectables: IInjectable[]): void {
            for (const __injectable of __array_injectables) {
                const __string_name: string = __injectable.getName();
                ///
                if (this.has(__string_name)) {
                    __injectable.onUnregister();                
                    ///
                    delete this.io_github_dimous_reviews_Register__injectable_store[__string_name];
                }
            }
        }
        //---
        
        public retrieve(__string_name: string): IInjectable | null {
            return this.has(__string_name) ? this.io_github_dimous_reviews_Register__injectable_store[__string_name] : null;
        }
    }
}