/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */
 
///<reference path="../Hook.ts" />
///<reference path="../Register.ts" />
///<reference path="../IWireable.ts" />

namespace io.github.dimous.reviews.views {
    "use strict";

    export class ReviewListComponent extends Hook implements IWireable {
        public static STRING_NAME: string = "io.github.dimous.reviews.views.ReviewListComponent";

        private io_github_dimous_reviews_views_ReviewListComponent__jquery_view: JQuery;

        constructor(__jquery_view: JQuery) {
            super();
            ///
            this.io_github_dimous_reviews_views_ReviewListComponent__jquery_view = __jquery_view;
            ///
            this.onRefresh = this.onRefresh.bind(this);
        }
        //---

        public getName(): string {
            return ReviewListComponent.STRING_NAME;
        }
        //---

        public onRegister(): void {
            this.getEventDispatcher().on(events.ReviewEvent.STRING_REFRESH, this.onRefresh);
        }
        //---

        public onUnregister(): void {
            this.getEventDispatcher().off(events.ReviewEvent.STRING_REFRESH, this.onRefresh);
        }
        //---

        private onRefresh(__event: IEvent): void {
            const __reviews_model: models.ReviewsModel = Application.getInstance().retrieve(models.ReviewsModel.STRING_NAME) as models.ReviewsModel; // связывать представление и модель можно, наоборот - нельзя; для ослабления связанности можно сделать получение данных по запросу
            ///
            this.io_github_dimous_reviews_views_ReviewListComponent__jquery_view.empty();
            ///
            __reviews_model.getReviews().map((__review: TReview): void => {
                const __date: Date = new Date(), __string_edited_badge = 2 === __review.state ? `<span class="badge pull-right">правлено модератором</span>` : "", __string_body: string | null = null !== __review.image ? `<p >${__review.text}</p><div class="thumbnail"><img src="${__review.preview ? "" : "/static/images/"}${__review.image}"></div>` : __review.text;
                ///
                __date.setTime(__review.date);
                ///
                $(`<div style="display: none" class="col-md-12">
                    <div class="panel ${__review.preview ? "panel-info" : "panel-default"}">
                        <div class="panel-heading">${__review.name} (${__review.email}), ${__date.toLocaleDateString()} ${__date.toLocaleTimeString()} ${__string_edited_badge}</div>
                        <div class="panel-body">${__string_body}</div>
                    </div>
                </div>`).appendTo(this.io_github_dimous_reviews_views_ReviewListComponent__jquery_view).slideDown("fast");
            });
        }
    }
}