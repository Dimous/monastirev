/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */
 
///<reference path="../Hook.ts" />
///<reference path="../IWireable.ts" />
///<reference path="../events/ReviewEvent.ts" />

namespace io.github.dimous.reviews.views {
    "use strict";

    export class FormComponent extends Hook implements IWireable {
        public static STRING_NAME: string = "io.github.dimous.reviews.views.FormComponent";

        private io_github_dimous_reviews_views_FormComponent__jquery_form: JQuery;
        private io_github_dimous_reviews_views_FormComponent__jquery_input_name: JQuery;
        private io_github_dimous_reviews_views_FormComponent__jquery_input_email: JQuery;
        private io_github_dimous_reviews_views_FormComponent__jquery_input_image: JQuery;
        private io_github_dimous_reviews_views_FormComponent__jquery_textarea_text: JQuery;
        private io_github_dimous_reviews_views_FormComponent__jquery_button_submit: JQuery;
        private io_github_dimous_reviews_views_FormComponent__jquery_button_preview: JQuery;

        constructor(__jquery_view: JQuery) {
            super();
            ///
            this.io_github_dimous_reviews_views_FormComponent__jquery_form = __jquery_view;
            this.io_github_dimous_reviews_views_FormComponent__jquery_input_name = $("#form-component-name", __jquery_view);
            this.io_github_dimous_reviews_views_FormComponent__jquery_input_email = $("#form-component-email", __jquery_view);
            this.io_github_dimous_reviews_views_FormComponent__jquery_input_image = $("#form-component-image", __jquery_view);
            this.io_github_dimous_reviews_views_FormComponent__jquery_textarea_text = $("#form-component-text", __jquery_view);
            this.io_github_dimous_reviews_views_FormComponent__jquery_button_submit = $("#form-component-submit", __jquery_view);
            this.io_github_dimous_reviews_views_FormComponent__jquery_button_preview = $("#form-component-preview", __jquery_view);
            ///
            this.onUpload = this.onUpload.bind(this);
            this.onUploaded = this.onUploaded.bind(this);
            this.onSubmitClick = this.onSubmitClick.bind(this);
            this.onPreviewClick = this.onPreviewClick.bind(this);
        }
        //---

        public getName(): string {
            return FormComponent.STRING_NAME;
        }
        //---

        public onRegister(): void {
            const __event_dispatcher: EventDispatcher = this.getEventDispatcher();
            ///
            __event_dispatcher.on(events.ReviewEvent.STRING_UPLOAD, this.onUpload);            
            __event_dispatcher.on(events.ReviewEvent.STRING_UPLOADED, this.onUploaded);
            
            this.io_github_dimous_reviews_views_FormComponent__jquery_button_submit.on("click", this.onSubmitClick);
            this.io_github_dimous_reviews_views_FormComponent__jquery_button_preview.on("click", this.onPreviewClick);
        }
        //---

        public onUnregister(): void {
            const __event_dispatcher: EventDispatcher = this.getEventDispatcher();
            ///
            __event_dispatcher.off(events.ReviewEvent.STRING_UPLOAD, this.onUpload);
            __event_dispatcher.off(events.ReviewEvent.STRING_UPLOADED, this.onUploaded);
            
            this.io_github_dimous_reviews_views_FormComponent__jquery_button_submit.off("click", this.onSubmitClick);
            this.io_github_dimous_reviews_views_FormComponent__jquery_button_preview.off("click", this.onPreviewClick);
        }
        //---
        
        private onUpload(__event: IEvent): void {
            this.io_github_dimous_reviews_views_FormComponent__jquery_form.submit();
        }
        //---
        
        private onUploaded(__event: IEvent): void {
            this.io_github_dimous_reviews_views_FormComponent__jquery_form.trigger("reset");
        }
        //---        

        private onSubmitClick(__event: JQueryMouseEventObject): void {
            __event.preventDefault();
            ///
            this.getEventDispatcher().trigger(new events.ReviewEvent(events.ReviewEvent.STRING_SUBMIT, this.io_github_dimous_reviews_views_FormComponent__jquery_form.serializeArray()));
        }
        //---

        private onPreviewClick(__event: JQueryMouseEventObject): void {
            __event.preventDefault();
            ///
            const __event_dispatcher: EventDispatcher = this.getEventDispatcher(), __jquery_serialize_jquery_element: JQuerySerializeArrayElement[] = this.io_github_dimous_reviews_views_FormComponent__jquery_form.serializeArray(), __file_list: FileList = (this.io_github_dimous_reviews_views_FormComponent__jquery_input_image.get(0) as HTMLInputElement).files;
            ///
            if (0 < __file_list.length) {
                const __file_reader = new FileReader();
                ///
                __file_reader.onload = (__event: Event): void => {
                    __jquery_serialize_jquery_element.push({"name": "image", "value": (__event.target as FileReader).result});
                    ///
                    __event_dispatcher.trigger(new events.ReviewEvent(events.ReviewEvent.STRING_PREVIEW, __jquery_serialize_jquery_element));
                };
                ///
                __file_reader.readAsDataURL(__file_list.item(0));
            } else
                __event_dispatcher.trigger(new events.ReviewEvent(events.ReviewEvent.STRING_PREVIEW, __jquery_serialize_jquery_element));
        }
    }
}