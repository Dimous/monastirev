/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */
 
///<reference path="../Hook.ts" />
///<reference path="../TReview.ts" />
///<reference path="../IWireable.ts" />
///<reference path="../events/ReviewEvent.ts" />

namespace io.github.dimous.reviews.models {
    "use strict";    
    
    class Validator {
        public static apply(__string_value: string, __array_validation_rules: TValidationRule[]): TValidationRule[] {
            const __array_validation_rules_that_failed: TValidationRule[] = [];
            ///
            for (const __validation_rule of __array_validation_rules)
                if (! __validation_rule.pattern.test(__string_value)) __array_validation_rules_that_failed.push(__validation_rule);
            ///
            return __array_validation_rules_that_failed;
        }
    }
    //---

    export class ReviewsModel extends Hook implements IWireable {
        public static STRING_NAME: string = "io.github.dimous.reviews.models.ReviewsModel";

        private io_github_dimous_reviews_models_ReviewsModel__array_reviews: TReview[];
        private io_github_dimous_reviews_models_ReviewsModel__string_current_review_comparator_name: TReviewComparatorName;
        private io_github_dimous_reviews_models_ReviewsModel__array_comparators: {[__string_name: string]: TReviewComparator};
        ///
        constructor() {
            super();
            ///
            this.io_github_dimous_reviews_models_ReviewsModel__array_reviews = [];
            this.io_github_dimous_reviews_models_ReviewsModel__array_comparators = {
                "name": (__review_1: TReview, __review_2: TReview): number => {
                    return __review_1.name < __review_2.name ? (-1) : (__review_1.name > __review_2.name ? 1 : 0);
                },
                "date": (__review_1: TReview, __review_2: TReview): number => {
                    return __review_2.date - __review_1.date; // в обратном порядке, новые сверху
                },
                "email": (__review_1: TReview, __review_2: TReview): number => {
                    return __review_1.email < __review_2.email ? (-1) : (__review_1.email > __review_2.email ? 1 : 0);
                }
            };
            this.io_github_dimous_reviews_models_ReviewsModel__string_current_review_comparator_name = "date";
            ///
            this.onSort = this.onSort.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.onPreview = this.onPreview.bind(this);
            this.onUploaded = this.onUploaded.bind(this);
        }
        //---

        public getName(): string {
            return ReviewsModel.STRING_NAME;
        }
        //---

        public onRegister(): void {
            const __event_dispatcher: EventDispatcher = this.getEventDispatcher();
            ///
            __event_dispatcher.on(events.ReviewEvent.STRING_SORT, this.onSort);
            __event_dispatcher.on(events.ReviewEvent.STRING_RUN, this.onUploaded);
            __event_dispatcher.on(events.ReviewEvent.STRING_SUBMIT, this.onSubmit);
            __event_dispatcher.on(events.ReviewEvent.STRING_PREVIEW, this.onPreview);
            __event_dispatcher.on(events.ReviewEvent.STRING_UPLOADED, this.onUploaded);
        }
        //---

        public onUnregister(): void {
            const __event_dispatcher: EventDispatcher = this.getEventDispatcher();
            ///
            __event_dispatcher.off(events.ReviewEvent.STRING_SORT, this.onSort);
            __event_dispatcher.off(events.ReviewEvent.STRING_RUN, this.onUploaded);
            __event_dispatcher.off(events.ReviewEvent.STRING_SUBMIT, this.onSubmit);
            __event_dispatcher.off(events.ReviewEvent.STRING_PREVIEW, this.onPreview);
            __event_dispatcher.off(events.ReviewEvent.STRING_UPLOADED, this.onUploaded);
        }
        //---
        
        public setReviewComparator(__review_comparator_name: TReviewComparatorName): void {
            if (__review_comparator_name !== this.io_github_dimous_reviews_models_ReviewsModel__string_current_review_comparator_name) {
                this.io_github_dimous_reviews_models_ReviewsModel__string_current_review_comparator_name = __review_comparator_name;
                ///
                this.getEventDispatcher().trigger(new events.ReviewEvent(events.ReviewEvent.STRING_REFRESH));
            }
        }
        //---

        public getReviews(): TReview[] {
            return this.io_github_dimous_reviews_models_ReviewsModel__array_reviews.concat().sort(this.io_github_dimous_reviews_models_ReviewsModel__array_comparators[this.io_github_dimous_reviews_models_ReviewsModel__string_current_review_comparator_name]);
        }
        //---

        private mapFormData(__array_form_datas: TFormData[]): TReview {
            const __review: TReview = {"date": new Date().getTime(), "name": null, "text": null, "email": null, "image": null, "state": 1};
            ///
            __array_form_datas.map((__form_data: TFormData): void => {
                if (__form_data.name in __review) __review[__form_data.name] = __form_data.value;
            });
            ///
            return __review;
        }
        //---
        
        private validate(__review: TReview): TValidationRule[] {
            return Validator.apply(__review.name, [{"pattern": /^[a-zа-я]{3,}$/i, "message": "Имя должно состоять из как минимум трёх символов латинского или кириллического алфавита"}]).concat(Validator.apply(__review.email, [{"pattern": /^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z0-9]{2,4})+$/i, "message": "Неверный формат e-mail"}]), Validator.apply(__review.text, [{"pattern": /.{3,255}/i, "message": "Текст отзыва должен содержать не менее 3 и не более 255 символов"}]));
        }
        //---

        private onSort(__event: IEvent): void {
            this.setReviewComparator(__event.getData() as TReviewComparatorName);
        }
        //---

        /**
         * возможно, лучше было перенести в сервис
         */
        private onSubmit(__event: IEvent): void {
            const __event_dispatcher: EventDispatcher = this.getEventDispatcher(), __review: TReview = this.mapFormData(__event.getData()), __validation_rules: TValidationRule[] = this.validate(__review);
            ///
            if (0 < __validation_rules.length)
                __event_dispatcher.trigger(new events.ReviewEvent(events.ReviewEvent.STRING_ERROR, __validation_rules));
            else {
                __event_dispatcher.trigger(new events.ReviewEvent(events.ReviewEvent.STRING_OK)); // на всякий случай
                __event_dispatcher.trigger(new events.ReviewEvent(events.ReviewEvent.STRING_TOGGLE_LOADING_INDICATOR, true));
                __event_dispatcher.trigger(new events.ReviewEvent(events.ReviewEvent.STRING_UPLOAD)); // пришлось делать хоп
            }       
        }
        //---

        private onPreview(__event: IEvent): void {
            const __event_dispatcher: EventDispatcher = this.getEventDispatcher(), __review: TReview = this.mapFormData(__event.getData()), __validation_rules: TValidationRule[] = this.validate(__review);
            ///
            if (0 < __validation_rules.length)
                __event_dispatcher.trigger(new events.ReviewEvent(events.ReviewEvent.STRING_ERROR, __validation_rules));
            else {
                __review.preview = true;
                ///
                this.io_github_dimous_reviews_models_ReviewsModel__array_reviews.push(__review); // по-хорошему надо бы проверять на существование, тогда уж не массив, а WeakSet
                ///
                __event_dispatcher.trigger(new events.ReviewEvent(events.ReviewEvent.STRING_OK)); // на всякий случай
                __event_dispatcher.trigger(new events.ReviewEvent(events.ReviewEvent.STRING_REFRESH));
            }
        }
        //---
        
        private onUploaded(__event: IEvent): void {
            const __event_dispatcher: EventDispatcher = this.getEventDispatcher();
            ///
            __event_dispatcher.trigger(new events.ReviewEvent(events.ReviewEvent.STRING_TOGGLE_LOADING_INDICATOR, true));
            ///
            $.get("/reviews", (__any_data: any): any => {
                this.io_github_dimous_reviews_models_ReviewsModel__array_reviews = __any_data;
                ///
                __event_dispatcher.trigger(new events.ReviewEvent(events.ReviewEvent.STRING_REFRESH));
                __event_dispatcher.trigger(new events.ReviewEvent(events.ReviewEvent.STRING_TOGGLE_LOADING_INDICATOR, false));
            }, "json");
        }
    }
}