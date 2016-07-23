/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */
 
namespace io.github.dimous.reviews.events {
    "use strict";

    export class Event implements IEvent {
        private io_github_dimous_reviews_events_Event__any_data: any;
        private io_github_dimous_reviews_events_Event__any_target: any;
        private io_github_dimous_reviews_events_Event__string_type: string;
        ///
        constructor(__string_type: string, __any_data?: any) {
            this.setData(__any_data);
            this.setType(__string_type);
        }
        //---

        public setType(__string_type: string): this {
            this.io_github_dimous_reviews_events_Event__string_type = __string_type;
            ///
            return this;
        }

        public getType(): string {
            return this.io_github_dimous_reviews_events_Event__string_type;
        }
        //---

        public getData(): any {
            return this.io_github_dimous_reviews_events_Event__any_data;
        }

        public setData(__any_data: any): this {
            this.io_github_dimous_reviews_events_Event__any_data = __any_data;
            ///
            return this;
        }
        //---

        public getTarget(): any {
            return this.io_github_dimous_reviews_events_Event__any_target;
        }

        public setTarget(__any_target: any): this {
            this.io_github_dimous_reviews_events_Event__any_target = __any_target;
            ///
            return this;
        }
    }
}