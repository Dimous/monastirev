/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */
 
///<reference path="./IEvent.ts" />
///<reference path="./TEventListener.ts" />

namespace io.github.dimous.reviews {
    "use strict";

    export class EventDispatcher {
        private io_github_dimous_EventDispatcher__object_event_listener_store: IMap<TEventListener[]> = {};
        ///
        public has(__string_type: string): boolean {
            return __string_type in this.io_github_dimous_EventDispatcher__object_event_listener_store;
        }
        //---

        public on(__string_type: string, __function_event_listener: TEventListener): void {
            if (! this.has(__string_type))
                this.io_github_dimous_EventDispatcher__object_event_listener_store[__string_type] = [];
            ///
            this.io_github_dimous_EventDispatcher__object_event_listener_store[__string_type].push(__function_event_listener);
        }
        //---

        public off(__string_type: string, __function_event_listener: TEventListener): void {
            if (this.has(__string_type)) {
                const __array_event_listeners: TEventListener[] = this.io_github_dimous_EventDispatcher__object_event_listener_store[__string_type], __number_listener_index: number = __array_event_listeners.indexOf(__function_event_listener);
                ///
                if (0 <= __number_listener_index)
                    __array_event_listeners.splice(__number_listener_index, 1); // для большей связанности можно было использовать utils.Arrays.replace
            }
        }
        //---

        public trigger(__event: IEvent): void {
            const __string_type: string = __event.getType();
            ///
            if (this.has(__string_type)) {
                if (undefined === __event.getTarget()) __event.setTarget(this);
                ///
                this.io_github_dimous_EventDispatcher__object_event_listener_store[__string_type].slice().forEach((__function_current_listener: TEventListener): void => __function_current_listener(__event));
            }
        }
    }
}