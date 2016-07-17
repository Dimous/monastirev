/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */
 
///<reference path="../Hook.ts" />
///<reference path="../IWireable.ts" />
///<reference path="../events/ReviewEvent.ts" />

namespace io.github.dimous.reviews.views {
    "use strict";

    export class SubmitterComponent extends Hook implements IWireable {
        public static STRING_NAME: string = "io.github.dimous.reviews.views.SubmitterComponent";
        
        private io_github_dimous_reviews_views_SubmitterComponent__jquery_view: JQuery;
        
        constructor(__jquery_view: JQuery) {
            super();
            ///
            this.io_github_dimous_reviews_views_SubmitterComponent__jquery_view = __jquery_view;
            ///
            this.onLoad = this.onLoad.bind(this);
        }
        //---

        public getName(): string {
            return SubmitterComponent.STRING_NAME;
        }
        //---

        public onRegister(): void {
            this.io_github_dimous_reviews_views_SubmitterComponent__jquery_view.on("load", this.onLoad);
        }
        //---

        public onUnregister(): void {
            this.io_github_dimous_reviews_views_SubmitterComponent__jquery_view.off("load", this.onLoad);
        }
        //---
        
        private onLoad(__event: JQueryEventObject): void {
            this.getEventDispatcher().trigger(new events.ReviewEvent(events.ReviewEvent.STRING_UPLOADED));
        }
    }
}