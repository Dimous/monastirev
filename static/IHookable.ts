/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */
 
 namespace io.github.dimous.reviews {
    export interface IHookable {
        getEventDispatcher(): EventDispatcher;
        setEventDispatcher(__event_dispatcher: EventDispatcher): void;
    }
}