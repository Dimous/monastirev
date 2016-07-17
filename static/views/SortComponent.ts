/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */
 
///<reference path="../Hook.ts" />
///<reference path="../IWireable.ts" />

namespace io.github.dimous.reviews.views {
    "use strict";
    
    export class SortComponent extends Hook implements IWireable {
        public static STRING_NAME: string = "io.github.dimous.reviews.views.SortComponent";
        
        private io_github_dimous_reviews_views_SortComponent__jquery_li_active: JQuery;
        private io_github_dimous_reviews_views_SortComponent__jquery_a_by_date: JQuery;
        private io_github_dimous_reviews_views_SortComponent__jquery_a_by_name: JQuery;
        private io_github_dimous_reviews_views_SortComponent__jquery_a_by_email: JQuery;
        
        constructor(__jquery_view: JQuery) {
            super();
            ///            
            this.io_github_dimous_reviews_views_SortComponent__jquery_a_by_date = $("#sort-component-by-date", __jquery_view);
            this.io_github_dimous_reviews_views_SortComponent__jquery_a_by_name = $("#sort-component-by-name", __jquery_view);
            this.io_github_dimous_reviews_views_SortComponent__jquery_a_by_email = $("#sort-component-by-email", __jquery_view);
            ///
            this.onClick = this.onClick.bind(this);
            ///
            this.setActive(this.io_github_dimous_reviews_views_SortComponent__jquery_a_by_date);
        }
        //---
        
        public getName(): string {
            return SortComponent.STRING_NAME;
        }
        //---
        
        public onRegister(): void {
            this.io_github_dimous_reviews_views_SortComponent__jquery_a_by_date.on("click", this.onClick);
            this.io_github_dimous_reviews_views_SortComponent__jquery_a_by_name.on("click", this.onClick);
            this.io_github_dimous_reviews_views_SortComponent__jquery_a_by_email.on("click", this.onClick);
        }
        //---
        
        public onUnregister(): void {
            this.io_github_dimous_reviews_views_SortComponent__jquery_a_by_date.off("click", this.onClick);
            this.io_github_dimous_reviews_views_SortComponent__jquery_a_by_name.off("click", this.onClick);
            this.io_github_dimous_reviews_views_SortComponent__jquery_a_by_email.off("click", this.onClick);
        }
        //---
        
        private setActive(__jquery_a: JQuery): void {
            if (Boolean(this.io_github_dimous_reviews_views_SortComponent__jquery_li_active)) this.io_github_dimous_reviews_views_SortComponent__jquery_li_active.removeClass("sortComponent__item--active");
            ///
            this.io_github_dimous_reviews_views_SortComponent__jquery_li_active = __jquery_a.parent().addClass("sortComponent__item--active");
        }
        //---

        private onClick(__event: JQueryMouseEventObject): void {
            const __jquery_target: JQuery = $(__event.target);
            ///
            __event.preventDefault();
            ///
            this.setActive(__jquery_target);
            ///
            this.getEventDispatcher().trigger(new events.ReviewEvent(events.ReviewEvent.STRING_SORT, __jquery_target.data("sort")));
        }
    }
}