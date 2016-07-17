/**
 * @author Dimous <kasimowsky@gmail.com>
 * @copyright (c) 2016, Dimous
 */
 
///<reference path="./Event.ts" />

namespace io.github.dimous.reviews.events {
    "use strict";

    export class ReviewEvent extends Event {
        public static STRING_OK: string = "ok";
        public static STRING_RUN: string = "run";
        public static STRING_SORT: string = "sort";
        public static STRING_ERROR: string = "error";
        public static STRING_SUBMIT: string = "submit";
        public static STRING_UPLOAD: string = "upload";
        public static STRING_PREVIEW: string = "preview";
        public static STRING_REFRESH: string = "refresh";
        public static STRING_UPLOADED: string = "uploaded";
        public static STRING_TOGGLE_LOADING_INDICATOR: string = "toggle_loading_indicator";
    }
}