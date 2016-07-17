/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */
 
 namespace io.github.dimous.reviews {
    export class Hook implements IHookable {
        private io_github_dimous_reviews_Hook__event_dispatcher: EventDispatcher;
        ///
        public getEventDispatcher(): EventDispatcher {
            return this.io_github_dimous_reviews_Hook__event_dispatcher;
        }
        
        public setEventDispatcher(__event_dispatcher: EventDispatcher): void {
            this.io_github_dimous_reviews_Hook__event_dispatcher = __event_dispatcher;
        }
    }
}