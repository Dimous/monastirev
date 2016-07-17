/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */

///<reference path="../Hook.ts" />
///<reference path="../IWireable.ts" />

namespace io.github.dimous.reviews.views {
    "use strict";
    
    export class LoadingIndicatorComponent extends Hook implements IWireable {
        public static STRING_NAME: string = "io.github.dimous.reviews.views.LoadingIndicatorComponent";
        
        private io_github_dimous_reviews_views_SortComponent__jquery_view: JQuery;
        
        constructor(__jquery_view: JQuery) {
            super();
            ///
            this.io_github_dimous_reviews_views_SortComponent__jquery_view = __jquery_view;
            ///
            this.onToggle = this.onToggle.bind(this);
        }
        //---
        
        public getName(): string {
            return LoadingIndicatorComponent.STRING_NAME;
        }
        //---
        
        public onRegister(): void {
            this.getEventDispatcher().on(events.ReviewEvent.STRING_TOGGLE_LOADING_INDICATOR, this.onToggle);
        }
        //---
        
        public onUnregister(): void {
            this.getEventDispatcher().off(events.ReviewEvent.STRING_TOGGLE_LOADING_INDICATOR, this.onToggle);
        }
        //---
        
        private onToggle(__event: IEvent): void {
            this.io_github_dimous_reviews_views_SortComponent__jquery_view[__event.getData() as boolean ? "removeClass" : "addClass"]("hidden");
        }
    }
}