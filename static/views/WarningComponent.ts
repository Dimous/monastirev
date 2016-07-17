/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */
 
///<reference path="../Hook.ts" />
///<reference path="../IWireable.ts" />
///<reference path="../events/ReviewEvent.ts" />

namespace io.github.dimous.reviews.views {
    "use strict";

    export class WarningComponent extends Hook implements IWireable {
        public static STRING_NAME: string = "io.github.dimous.reviews.views.WarningComponent";
        
        private io_github_dimous_reviews_views_WarningComponent__jquery_view: JQuery;
        
        constructor(__jquery_view: JQuery) {
            super();
            ///
            this.io_github_dimous_reviews_views_WarningComponent__jquery_view = __jquery_view;
            ///
            this.onOk = this.onOk.bind(this);
            this.onError = this.onError.bind(this);
            this.onUploaded = this.onUploaded.bind(this);
        }
        //---

        public getName(): string {
            return WarningComponent.STRING_NAME;
        }
        //---

        public onRegister(): void {
            const __event_dispatcher: EventDispatcher = this.getEventDispatcher();
            ///
            __event_dispatcher.on(events.ReviewEvent.STRING_OK, this.onOk);
            __event_dispatcher.on(events.ReviewEvent.STRING_ERROR, this.onError);
            __event_dispatcher.on(events.ReviewEvent.STRING_UPLOADED, this.onUploaded);
        }
        //---

        public onUnregister(): void {
            const __event_dispatcher: EventDispatcher = this.getEventDispatcher();
            ///
            __event_dispatcher.off(events.ReviewEvent.STRING_OK, this.onOk);
            __event_dispatcher.off(events.ReviewEvent.STRING_ERROR, this.onError);
            __event_dispatcher.off(events.ReviewEvent.STRING_UPLOADED, this.onUploaded);
        }
        //---
        
        private onOk(__event: IEvent): void {
            this.io_github_dimous_reviews_views_WarningComponent__jquery_view.addClass("hidden");
        }
        //---
        
        private onError(__event: IEvent): void {
            this.io_github_dimous_reviews_views_WarningComponent__jquery_view.empty().removeClass("hidden");
            ///
            for (const __validation_rule of __event.getData() as TValidationRule[]) this.io_github_dimous_reviews_views_WarningComponent__jquery_view.append(`<li >${__validation_rule.message}</li>`);
        }
        //---
        
        private onUploaded(__event: IEvent): void {
            this.io_github_dimous_reviews_views_WarningComponent__jquery_view.empty().removeClass("hidden").toggleClass("text-danger text-success").append("<li >Отзыв отправлен. В ближайшее время он будет рассмотрен модератором. Спасибо!</li>");
        }
    }
}