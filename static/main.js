var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var io;
(function (io) {
    var github;
    (function (github) {
        var dimous;
        (function (dimous) {
            var reviews;
            (function (reviews) {
                "use strict";
                var EventDispatcher = (function () {
                    function EventDispatcher() {
                        this.io_github_dimous_EventDispatcher__object_event_listener_store = {};
                    }
                    EventDispatcher.prototype.has = function (__string_type) {
                        return __string_type in this.io_github_dimous_EventDispatcher__object_event_listener_store;
                    };
                    EventDispatcher.prototype.on = function (__string_type, __function_event_listener) {
                        if (!this.has(__string_type))
                            this.io_github_dimous_EventDispatcher__object_event_listener_store[__string_type] = [];
                        this.io_github_dimous_EventDispatcher__object_event_listener_store[__string_type].push(__function_event_listener);
                    };
                    EventDispatcher.prototype.off = function (__string_type, __function_event_listener) {
                        if (this.has(__string_type)) {
                            var __array_event_listeners = this.io_github_dimous_EventDispatcher__object_event_listener_store[__string_type], __number_listener_index = __array_event_listeners.indexOf(__function_event_listener);
                            if (0 <= __number_listener_index)
                                __array_event_listeners.splice(__number_listener_index, 1);
                        }
                    };
                    EventDispatcher.prototype.trigger = function (__event) {
                        var __string_type = __event.getType();
                        if (this.has(__string_type)) {
                            if (void 0 === __event.getTarget())
                                __event.setTarget(this);
                            this.io_github_dimous_EventDispatcher__object_event_listener_store[__string_type].forEach(function (__function_current_listener) { return __function_current_listener(__event); });
                        }
                    };
                    return EventDispatcher;
                }());
                reviews.EventDispatcher = EventDispatcher;
            })(reviews = dimous.reviews || (dimous.reviews = {}));
        })(dimous = github.dimous || (github.dimous = {}));
    })(github = io.github || (io.github = {}));
})(io || (io = {}));
var io;
(function (io) {
    var github;
    (function (github) {
        var dimous;
        (function (dimous) {
            var reviews;
            (function (reviews) {
                "use strict";
                var Register = (function () {
                    function Register() {
                        this.__event_dispatcher = new reviews.EventDispatcher();
                        this.io_github_dimous_reviews_Register__injectable_store = {};
                    }
                    Register.prototype.has = function (__string_name) {
                        return __string_name in this.io_github_dimous_reviews_Register__injectable_store;
                    };
                    Register.prototype.add = function () {
                        var __array_injectables = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            __array_injectables[_i - 0] = arguments[_i];
                        }
                        for (var _a = 0, ___array_injectables_1 = __array_injectables; _a < ___array_injectables_1.length; _a++) {
                            var __injectable = ___array_injectables_1[_a];
                            var __string_name = __injectable.getName();
                            if (!this.has(__string_name)) {
                                this.io_github_dimous_reviews_Register__injectable_store[__string_name] = __injectable;
                                __injectable.setEventDispatcher(this.__event_dispatcher);
                                __injectable.onRegister();
                            }
                        }
                    };
                    Register.prototype.remove = function () {
                        var __array_injectables = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            __array_injectables[_i - 0] = arguments[_i];
                        }
                        for (var _a = 0, ___array_injectables_2 = __array_injectables; _a < ___array_injectables_2.length; _a++) {
                            var __injectable = ___array_injectables_2[_a];
                            var __string_name = __injectable.getName();
                            if (this.has(__string_name)) {
                                __injectable.onUnregister();
                                delete this.io_github_dimous_reviews_Register__injectable_store[__string_name];
                            }
                        }
                    };
                    Register.prototype.retrieve = function (__string_name) {
                        return this.has(__string_name) ? this.io_github_dimous_reviews_Register__injectable_store[__string_name] : null;
                    };
                    return Register;
                }());
                reviews.Register = Register;
            })(reviews = dimous.reviews || (dimous.reviews = {}));
        })(dimous = github.dimous || (github.dimous = {}));
    })(github = io.github || (io.github = {}));
})(io || (io = {}));
var io;
(function (io) {
    var github;
    (function (github) {
        var dimous;
        (function (dimous) {
            var reviews;
            (function (reviews) {
                var events;
                (function (events) {
                    "use strict";
                    var Event = (function () {
                        function Event(__string_type, __any_data) {
                            this.setData(__any_data);
                            this.setType(__string_type);
                        }
                        Event.prototype.setType = function (__string_type) {
                            this.io_github_dimous_reviews_events_Event__string_type = __string_type;
                            return this;
                        };
                        Event.prototype.getType = function () {
                            return this.io_github_dimous_reviews_events_Event__string_type;
                        };
                        Event.prototype.getData = function () {
                            return this.io_github_dimous_reviews_events_Event__any_data;
                        };
                        Event.prototype.setData = function (__any_data) {
                            this.io_github_dimous_reviews_events_Event__any_data = __any_data;
                            return this;
                        };
                        Event.prototype.getTarget = function () {
                            return this.io_github_dimous_reviews_events_Event__any_target;
                        };
                        Event.prototype.setTarget = function (__any_target) {
                            this.io_github_dimous_reviews_events_Event__any_target = __any_target;
                            return this;
                        };
                        return Event;
                    }());
                    events.Event = Event;
                })(events = reviews.events || (reviews.events = {}));
            })(reviews = dimous.reviews || (dimous.reviews = {}));
        })(dimous = github.dimous || (github.dimous = {}));
    })(github = io.github || (io.github = {}));
})(io || (io = {}));
var io;
(function (io) {
    var github;
    (function (github) {
        var dimous;
        (function (dimous) {
            var reviews;
            (function (reviews) {
                var events;
                (function (events) {
                    "use strict";
                    var ReviewEvent = (function (_super) {
                        __extends(ReviewEvent, _super);
                        function ReviewEvent() {
                            _super.apply(this, arguments);
                        }
                        ReviewEvent.STRING_OK = "ok";
                        ReviewEvent.STRING_RUN = "run";
                        ReviewEvent.STRING_SORT = "sort";
                        ReviewEvent.STRING_ERROR = "error";
                        ReviewEvent.STRING_SUBMIT = "submit";
                        ReviewEvent.STRING_UPLOAD = "upload";
                        ReviewEvent.STRING_PREVIEW = "preview";
                        ReviewEvent.STRING_REFRESH = "refresh";
                        ReviewEvent.STRING_UPLOADED = "uploaded";
                        ReviewEvent.STRING_TOGGLE_LOADING_INDICATOR = "toggle_loading_indicator";
                        return ReviewEvent;
                    }(events.Event));
                    events.ReviewEvent = ReviewEvent;
                })(events = reviews.events || (reviews.events = {}));
            })(reviews = dimous.reviews || (dimous.reviews = {}));
        })(dimous = github.dimous || (github.dimous = {}));
    })(github = io.github || (io.github = {}));
})(io || (io = {}));
var io;
(function (io) {
    var github;
    (function (github) {
        var dimous;
        (function (dimous) {
            var reviews;
            (function (reviews) {
                "use strict";
                var Application = (function (_super) {
                    __extends(Application, _super);
                    function Application() {
                        _super.call(this);
                        if (Boolean(Application.io_github_dimous_reviews_Application__instance))
                            throw new Error("Это синглтон");
                    }
                    Application.getInstance = function () {
                        return Application.io_github_dimous_reviews_Application__instance;
                    };
                    Application.prototype.run = function () {
                        this.__event_dispatcher.trigger(new reviews.events.ReviewEvent(reviews.events.ReviewEvent.STRING_RUN));
                    };
                    Application.io_github_dimous_reviews_Application__instance = new Application();
                    return Application;
                }(reviews.Register));
                reviews.Application = Application;
            })(reviews = dimous.reviews || (dimous.reviews = {}));
        })(dimous = github.dimous || (github.dimous = {}));
    })(github = io.github || (io.github = {}));
})(io || (io = {}));
var io;
(function (io) {
    var github;
    (function (github) {
        var dimous;
        (function (dimous) {
            var reviews;
            (function (reviews) {
                var Hook = (function () {
                    function Hook() {
                    }
                    Hook.prototype.getEventDispatcher = function () {
                        return this.io_github_dimous_reviews_Hook__event_dispatcher;
                    };
                    Hook.prototype.setEventDispatcher = function (__event_dispatcher) {
                        this.io_github_dimous_reviews_Hook__event_dispatcher = __event_dispatcher;
                    };
                    return Hook;
                }());
                reviews.Hook = Hook;
            })(reviews = dimous.reviews || (dimous.reviews = {}));
        })(dimous = github.dimous || (github.dimous = {}));
    })(github = io.github || (io.github = {}));
})(io || (io = {}));
var io;
(function (io) {
    var github;
    (function (github) {
        var dimous;
        (function (dimous) {
            var reviews;
            (function (reviews) {
                var models;
                (function (models) {
                    "use strict";
                    var Validator = (function () {
                        function Validator() {
                        }
                        Validator.apply = function (__string_value, __array_validation_rules) {
                            var __array_validation_rules_that_failed = [];
                            for (var _i = 0, ___array_validation_rules_1 = __array_validation_rules; _i < ___array_validation_rules_1.length; _i++) {
                                var __validation_rule = ___array_validation_rules_1[_i];
                                if (!__validation_rule.pattern.test(__string_value))
                                    __array_validation_rules_that_failed.push(__validation_rule);
                            }
                            return __array_validation_rules_that_failed;
                        };
                        return Validator;
                    }());
                    var ReviewsModel = (function (_super) {
                        __extends(ReviewsModel, _super);
                        function ReviewsModel() {
                            _super.call(this);
                            this.io_github_dimous_reviews_models_ReviewsModel__array_reviews = [];
                            this.io_github_dimous_reviews_models_ReviewsModel__array_comparators = {
                                "name": function (__review_1, __review_2) {
                                    return __review_1.name < __review_2.name ? (-1) : (__review_1.name > __review_2.name ? 1 : 0);
                                },
                                "date": function (__review_1, __review_2) {
                                    return __review_2.date - __review_1.date;
                                },
                                "email": function (__review_1, __review_2) {
                                    return __review_1.email < __review_2.email ? (-1) : (__review_1.email > __review_2.email ? 1 : 0);
                                }
                            };
                            this.io_github_dimous_reviews_models_ReviewsModel__string_current_review_comparator_name = "date";
                            this.onSort = this.onSort.bind(this);
                            this.onSubmit = this.onSubmit.bind(this);
                            this.onPreview = this.onPreview.bind(this);
                            this.onUploaded = this.onUploaded.bind(this);
                        }
                        ReviewsModel.prototype.getName = function () {
                            return ReviewsModel.STRING_NAME;
                        };
                        ReviewsModel.prototype.onRegister = function () {
                            var __event_dispatcher = this.getEventDispatcher();
                            __event_dispatcher.on(reviews.events.ReviewEvent.STRING_SORT, this.onSort);
                            __event_dispatcher.on(reviews.events.ReviewEvent.STRING_RUN, this.onUploaded);
                            __event_dispatcher.on(reviews.events.ReviewEvent.STRING_SUBMIT, this.onSubmit);
                            __event_dispatcher.on(reviews.events.ReviewEvent.STRING_PREVIEW, this.onPreview);
                            __event_dispatcher.on(reviews.events.ReviewEvent.STRING_UPLOADED, this.onUploaded);
                        };
                        ReviewsModel.prototype.onUnregister = function () {
                            var __event_dispatcher = this.getEventDispatcher();
                            __event_dispatcher.off(reviews.events.ReviewEvent.STRING_SORT, this.onSort);
                            __event_dispatcher.off(reviews.events.ReviewEvent.STRING_RUN, this.onUploaded);
                            __event_dispatcher.off(reviews.events.ReviewEvent.STRING_SUBMIT, this.onSubmit);
                            __event_dispatcher.off(reviews.events.ReviewEvent.STRING_PREVIEW, this.onPreview);
                            __event_dispatcher.off(reviews.events.ReviewEvent.STRING_UPLOADED, this.onUploaded);
                        };
                        ReviewsModel.prototype.setReviewComparator = function (__review_comparator_name) {
                            if (__review_comparator_name !== this.io_github_dimous_reviews_models_ReviewsModel__string_current_review_comparator_name) {
                                this.io_github_dimous_reviews_models_ReviewsModel__string_current_review_comparator_name = __review_comparator_name;
                                this.getEventDispatcher().trigger(new reviews.events.ReviewEvent(reviews.events.ReviewEvent.STRING_REFRESH));
                            }
                        };
                        ReviewsModel.prototype.getReviews = function () {
                            return this.io_github_dimous_reviews_models_ReviewsModel__array_reviews.concat().sort(this.io_github_dimous_reviews_models_ReviewsModel__array_comparators[this.io_github_dimous_reviews_models_ReviewsModel__string_current_review_comparator_name]);
                        };
                        ReviewsModel.prototype.mapFormData = function (__array_form_datas) {
                            var __review = { "date": new Date().getTime(), "name": null, "text": null, "email": null, "image": null, "state": 1 };
                            __array_form_datas.map(function (__form_data) {
                                if (__form_data.name in __review)
                                    __review[__form_data.name] = __form_data.value;
                            });
                            return __review;
                        };
                        ReviewsModel.prototype.validate = function (__review) {
                            return Validator.apply(__review.name, [{ "pattern": /^[a-zа-я]{3,}$/i, "message": "Имя должно состоять из как минимум трёх символов латинского или кириллического алфавита" }]).concat(Validator.apply(__review.email, [{ "pattern": /^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z0-9]{2,4})+$/i, "message": "Неверный формат e-mail" }]), Validator.apply(__review.text, [{ "pattern": /^.{3,255}$/i, "message": "Текст отзыва должен содержать не менее 3 и не более 255 символов" }]));
                        };
                        ReviewsModel.prototype.onSort = function (__event) {
                            this.setReviewComparator(__event.getData());
                        };
                        ReviewsModel.prototype.onSubmit = function (__event) {
                            var __event_dispatcher = this.getEventDispatcher(), __review = this.mapFormData(__event.getData()), __validation_rules = this.validate(__review);
                            if (0 < __validation_rules.length)
                                __event_dispatcher.trigger(new reviews.events.ReviewEvent(reviews.events.ReviewEvent.STRING_ERROR, __validation_rules));
                            else {
                                __event_dispatcher.trigger(new reviews.events.ReviewEvent(reviews.events.ReviewEvent.STRING_OK));
                                __event_dispatcher.trigger(new reviews.events.ReviewEvent(reviews.events.ReviewEvent.STRING_TOGGLE_LOADING_INDICATOR, true));
                                __event_dispatcher.trigger(new reviews.events.ReviewEvent(reviews.events.ReviewEvent.STRING_UPLOAD));
                            }
                        };
                        ReviewsModel.prototype.onPreview = function (__event) {
                            var __event_dispatcher = this.getEventDispatcher(), __review = this.mapFormData(__event.getData()), __validation_rules = this.validate(__review);
                            if (0 < __validation_rules.length)
                                __event_dispatcher.trigger(new reviews.events.ReviewEvent(reviews.events.ReviewEvent.STRING_ERROR, __validation_rules));
                            else {
                                __review.preview = true;
                                this.io_github_dimous_reviews_models_ReviewsModel__array_reviews.push(__review);
                                __event_dispatcher.trigger(new reviews.events.ReviewEvent(reviews.events.ReviewEvent.STRING_OK));
                                __event_dispatcher.trigger(new reviews.events.ReviewEvent(reviews.events.ReviewEvent.STRING_REFRESH));
                            }
                        };
                        ReviewsModel.prototype.onUploaded = function (__event) {
                            var _this = this;
                            var __event_dispatcher = this.getEventDispatcher();
                            __event_dispatcher.trigger(new reviews.events.ReviewEvent(reviews.events.ReviewEvent.STRING_TOGGLE_LOADING_INDICATOR, true));
                            $.get("/reviews", function (__any_data) {
                                _this.io_github_dimous_reviews_models_ReviewsModel__array_reviews = __any_data;
                                __event_dispatcher.trigger(new reviews.events.ReviewEvent(reviews.events.ReviewEvent.STRING_REFRESH));
                                __event_dispatcher.trigger(new reviews.events.ReviewEvent(reviews.events.ReviewEvent.STRING_TOGGLE_LOADING_INDICATOR, false));
                            }, "json");
                        };
                        ReviewsModel.STRING_NAME = "io.github.dimous.reviews.models.ReviewsModel";
                        return ReviewsModel;
                    }(reviews.Hook));
                    models.ReviewsModel = ReviewsModel;
                })(models = reviews.models || (reviews.models = {}));
            })(reviews = dimous.reviews || (dimous.reviews = {}));
        })(dimous = github.dimous || (github.dimous = {}));
    })(github = io.github || (io.github = {}));
})(io || (io = {}));
var io;
(function (io) {
    var github;
    (function (github) {
        var dimous;
        (function (dimous) {
            var reviews;
            (function (reviews) {
                var views;
                (function (views) {
                    "use strict";
                    var FormComponent = (function (_super) {
                        __extends(FormComponent, _super);
                        function FormComponent(__jquery_view) {
                            _super.call(this);
                            this.io_github_dimous_reviews_views_FormComponent__jquery_form = __jquery_view;
                            this.io_github_dimous_reviews_views_FormComponent__jquery_input_name = $("#form-component-name", __jquery_view);
                            this.io_github_dimous_reviews_views_FormComponent__jquery_input_email = $("#form-component-email", __jquery_view);
                            this.io_github_dimous_reviews_views_FormComponent__jquery_input_image = $("#form-component-image", __jquery_view);
                            this.io_github_dimous_reviews_views_FormComponent__jquery_textarea_text = $("#form-component-text", __jquery_view);
                            this.io_github_dimous_reviews_views_FormComponent__jquery_button_submit = $("#form-component-submit", __jquery_view);
                            this.io_github_dimous_reviews_views_FormComponent__jquery_button_preview = $("#form-component-preview", __jquery_view);
                            this.onUpload = this.onUpload.bind(this);
                            this.onUploaded = this.onUploaded.bind(this);
                            this.onSubmitClick = this.onSubmitClick.bind(this);
                            this.onPreviewClick = this.onPreviewClick.bind(this);
                        }
                        FormComponent.prototype.getName = function () {
                            return FormComponent.STRING_NAME;
                        };
                        FormComponent.prototype.onRegister = function () {
                            var __event_dispatcher = this.getEventDispatcher();
                            __event_dispatcher.on(reviews.events.ReviewEvent.STRING_UPLOAD, this.onUpload);
                            __event_dispatcher.on(reviews.events.ReviewEvent.STRING_UPLOADED, this.onUploaded);
                            this.io_github_dimous_reviews_views_FormComponent__jquery_button_submit.on("click", this.onSubmitClick);
                            this.io_github_dimous_reviews_views_FormComponent__jquery_button_preview.on("click", this.onPreviewClick);
                        };
                        FormComponent.prototype.onUnregister = function () {
                            var __event_dispatcher = this.getEventDispatcher();
                            __event_dispatcher.off(reviews.events.ReviewEvent.STRING_UPLOAD, this.onUpload);
                            __event_dispatcher.off(reviews.events.ReviewEvent.STRING_UPLOADED, this.onUploaded);
                            this.io_github_dimous_reviews_views_FormComponent__jquery_button_submit.off("click", this.onSubmitClick);
                            this.io_github_dimous_reviews_views_FormComponent__jquery_button_preview.off("click", this.onPreviewClick);
                        };
                        FormComponent.prototype.onUpload = function (__event) {
                            this.io_github_dimous_reviews_views_FormComponent__jquery_form.submit();
                        };
                        FormComponent.prototype.onUploaded = function (__event) {
                            this.io_github_dimous_reviews_views_FormComponent__jquery_form.trigger("reset");
                        };
                        FormComponent.prototype.onSubmitClick = function (__event) {
                            __event.preventDefault();
                            this.getEventDispatcher().trigger(new reviews.events.ReviewEvent(reviews.events.ReviewEvent.STRING_SUBMIT, this.io_github_dimous_reviews_views_FormComponent__jquery_form.serializeArray()));
                        };
                        FormComponent.prototype.onPreviewClick = function (__event) {
                            __event.preventDefault();
                            var __event_dispatcher = this.getEventDispatcher(), __jquery_serialize_jquery_element = this.io_github_dimous_reviews_views_FormComponent__jquery_form.serializeArray(), __file_list = this.io_github_dimous_reviews_views_FormComponent__jquery_input_image.get(0).files;
                            if (0 < __file_list.length) {
                                var __file_reader = new FileReader();
                                __file_reader.onload = function (__event) {
                                    __jquery_serialize_jquery_element.push({ "name": "image", "value": __event.target.result });
                                    __event_dispatcher.trigger(new reviews.events.ReviewEvent(reviews.events.ReviewEvent.STRING_PREVIEW, __jquery_serialize_jquery_element));
                                };
                                __file_reader.readAsDataURL(__file_list.item(0));
                            }
                            else
                                __event_dispatcher.trigger(new reviews.events.ReviewEvent(reviews.events.ReviewEvent.STRING_PREVIEW, __jquery_serialize_jquery_element));
                        };
                        FormComponent.STRING_NAME = "io.github.dimous.reviews.views.FormComponent";
                        return FormComponent;
                    }(reviews.Hook));
                    views.FormComponent = FormComponent;
                })(views = reviews.views || (reviews.views = {}));
            })(reviews = dimous.reviews || (dimous.reviews = {}));
        })(dimous = github.dimous || (github.dimous = {}));
    })(github = io.github || (io.github = {}));
})(io || (io = {}));
var io;
(function (io) {
    var github;
    (function (github) {
        var dimous;
        (function (dimous) {
            var reviews;
            (function (reviews) {
                var views;
                (function (views) {
                    "use strict";
                    var LoadingIndicatorComponent = (function (_super) {
                        __extends(LoadingIndicatorComponent, _super);
                        function LoadingIndicatorComponent(__jquery_view) {
                            _super.call(this);
                            this.io_github_dimous_reviews_views_SortComponent__jquery_view = __jquery_view;
                            this.onToggle = this.onToggle.bind(this);
                        }
                        LoadingIndicatorComponent.prototype.getName = function () {
                            return LoadingIndicatorComponent.STRING_NAME;
                        };
                        LoadingIndicatorComponent.prototype.onRegister = function () {
                            this.getEventDispatcher().on(reviews.events.ReviewEvent.STRING_TOGGLE_LOADING_INDICATOR, this.onToggle);
                        };
                        LoadingIndicatorComponent.prototype.onUnregister = function () {
                            this.getEventDispatcher().off(reviews.events.ReviewEvent.STRING_TOGGLE_LOADING_INDICATOR, this.onToggle);
                        };
                        LoadingIndicatorComponent.prototype.onToggle = function (__event) {
                            this.io_github_dimous_reviews_views_SortComponent__jquery_view[__event.getData() ? "removeClass" : "addClass"]("hidden");
                        };
                        LoadingIndicatorComponent.STRING_NAME = "io.github.dimous.reviews.views.LoadingIndicatorComponent";
                        return LoadingIndicatorComponent;
                    }(reviews.Hook));
                    views.LoadingIndicatorComponent = LoadingIndicatorComponent;
                })(views = reviews.views || (reviews.views = {}));
            })(reviews = dimous.reviews || (dimous.reviews = {}));
        })(dimous = github.dimous || (github.dimous = {}));
    })(github = io.github || (io.github = {}));
})(io || (io = {}));
var io;
(function (io) {
    var github;
    (function (github) {
        var dimous;
        (function (dimous) {
            var reviews;
            (function (reviews) {
                var views;
                (function (views) {
                    "use strict";
                    var ReviewListComponent = (function (_super) {
                        __extends(ReviewListComponent, _super);
                        function ReviewListComponent(__jquery_view) {
                            _super.call(this);
                            this.io_github_dimous_reviews_views_ReviewListComponent__jquery_view = __jquery_view;
                            this.onRefresh = this.onRefresh.bind(this);
                        }
                        ReviewListComponent.prototype.getName = function () {
                            return ReviewListComponent.STRING_NAME;
                        };
                        ReviewListComponent.prototype.onRegister = function () {
                            this.getEventDispatcher().on(reviews.events.ReviewEvent.STRING_REFRESH, this.onRefresh);
                        };
                        ReviewListComponent.prototype.onUnregister = function () {
                            this.getEventDispatcher().off(reviews.events.ReviewEvent.STRING_REFRESH, this.onRefresh);
                        };
                        ReviewListComponent.prototype.onRefresh = function (__event) {
                            var _this = this;
                            var __reviews_model = reviews.Application.getInstance().retrieve(reviews.models.ReviewsModel.STRING_NAME);
                            this.io_github_dimous_reviews_views_ReviewListComponent__jquery_view.empty();
                            __reviews_model.getReviews().map(function (__review) {
                                var __date = new Date(), __string_edited_badge = 2 === __review.state ? "<span class=\"badge pull-right\">\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C</span>" : "", __string_body = Boolean(__review.image) ? "<p >" + __review.text + "</p><div class=\"thumbnail\"><img src=\"" + (__review.preview ? "" : "/static/images/") + __review.image + "\"></div>" : __review.text;
                                __date.setTime(__review.date);
                                $("<div style=\"display: none\" class=\"col-md-12\">\n                    <div class=\"panel " + (__review.preview ? "panel-info" : "panel-default") + "\">\n                        <div class=\"panel-heading\">" + __review.name + " (" + __review.email + "), " + __date.toLocaleDateString() + " " + __date.toLocaleTimeString() + " " + __string_edited_badge + "</div>\n                        <div class=\"panel-body\">" + __string_body + "</div>\n                    </div>\n                </div>").appendTo(_this.io_github_dimous_reviews_views_ReviewListComponent__jquery_view).slideDown("fast");
                            });
                        };
                        ReviewListComponent.STRING_NAME = "io.github.dimous.reviews.views.ReviewListComponent";
                        return ReviewListComponent;
                    }(reviews.Hook));
                    views.ReviewListComponent = ReviewListComponent;
                })(views = reviews.views || (reviews.views = {}));
            })(reviews = dimous.reviews || (dimous.reviews = {}));
        })(dimous = github.dimous || (github.dimous = {}));
    })(github = io.github || (io.github = {}));
})(io || (io = {}));
var io;
(function (io) {
    var github;
    (function (github) {
        var dimous;
        (function (dimous) {
            var reviews;
            (function (reviews) {
                var views;
                (function (views) {
                    "use strict";
                    var SortComponent = (function (_super) {
                        __extends(SortComponent, _super);
                        function SortComponent(__jquery_view) {
                            _super.call(this);
                            this.io_github_dimous_reviews_views_SortComponent__jquery_a_by_date = $("#sort-component-by-date", __jquery_view);
                            this.io_github_dimous_reviews_views_SortComponent__jquery_a_by_name = $("#sort-component-by-name", __jquery_view);
                            this.io_github_dimous_reviews_views_SortComponent__jquery_a_by_email = $("#sort-component-by-email", __jquery_view);
                            this.onClick = this.onClick.bind(this);
                            this.setActive(this.io_github_dimous_reviews_views_SortComponent__jquery_a_by_date);
                        }
                        SortComponent.prototype.getName = function () {
                            return SortComponent.STRING_NAME;
                        };
                        SortComponent.prototype.onRegister = function () {
                            this.io_github_dimous_reviews_views_SortComponent__jquery_a_by_date.on("click", this.onClick);
                            this.io_github_dimous_reviews_views_SortComponent__jquery_a_by_name.on("click", this.onClick);
                            this.io_github_dimous_reviews_views_SortComponent__jquery_a_by_email.on("click", this.onClick);
                        };
                        SortComponent.prototype.onUnregister = function () {
                            this.io_github_dimous_reviews_views_SortComponent__jquery_a_by_date.off("click", this.onClick);
                            this.io_github_dimous_reviews_views_SortComponent__jquery_a_by_name.off("click", this.onClick);
                            this.io_github_dimous_reviews_views_SortComponent__jquery_a_by_email.off("click", this.onClick);
                        };
                        SortComponent.prototype.setActive = function (__jquery_a) {
                            if (Boolean(this.io_github_dimous_reviews_views_SortComponent__jquery_li_active))
                                this.io_github_dimous_reviews_views_SortComponent__jquery_li_active.removeClass("sortComponent__item--active");
                            this.io_github_dimous_reviews_views_SortComponent__jquery_li_active = __jquery_a.parent().addClass("sortComponent__item--active");
                        };
                        SortComponent.prototype.onClick = function (__event) {
                            var __jquery_target = $(__event.target);
                            __event.preventDefault();
                            this.setActive(__jquery_target);
                            this.getEventDispatcher().trigger(new reviews.events.ReviewEvent(reviews.events.ReviewEvent.STRING_SORT, __jquery_target.data("sort")));
                        };
                        SortComponent.STRING_NAME = "io.github.dimous.reviews.views.SortComponent";
                        return SortComponent;
                    }(reviews.Hook));
                    views.SortComponent = SortComponent;
                })(views = reviews.views || (reviews.views = {}));
            })(reviews = dimous.reviews || (dimous.reviews = {}));
        })(dimous = github.dimous || (github.dimous = {}));
    })(github = io.github || (io.github = {}));
})(io || (io = {}));
var io;
(function (io) {
    var github;
    (function (github) {
        var dimous;
        (function (dimous) {
            var reviews;
            (function (reviews) {
                var views;
                (function (views) {
                    "use strict";
                    var SubmitterComponent = (function (_super) {
                        __extends(SubmitterComponent, _super);
                        function SubmitterComponent(__jquery_view) {
                            _super.call(this);
                            this.io_github_dimous_reviews_views_SubmitterComponent__jquery_view = __jquery_view;
                            this.onLoad = this.onLoad.bind(this);
                        }
                        SubmitterComponent.prototype.getName = function () {
                            return SubmitterComponent.STRING_NAME;
                        };
                        SubmitterComponent.prototype.onRegister = function () {
                            this.io_github_dimous_reviews_views_SubmitterComponent__jquery_view.on("load", this.onLoad);
                        };
                        SubmitterComponent.prototype.onUnregister = function () {
                            this.io_github_dimous_reviews_views_SubmitterComponent__jquery_view.off("load", this.onLoad);
                        };
                        SubmitterComponent.prototype.onLoad = function (__event) {
                            this.getEventDispatcher().trigger(new reviews.events.ReviewEvent(reviews.events.ReviewEvent.STRING_UPLOADED));
                        };
                        SubmitterComponent.STRING_NAME = "io.github.dimous.reviews.views.SubmitterComponent";
                        return SubmitterComponent;
                    }(reviews.Hook));
                    views.SubmitterComponent = SubmitterComponent;
                })(views = reviews.views || (reviews.views = {}));
            })(reviews = dimous.reviews || (dimous.reviews = {}));
        })(dimous = github.dimous || (github.dimous = {}));
    })(github = io.github || (io.github = {}));
})(io || (io = {}));
var io;
(function (io) {
    var github;
    (function (github) {
        var dimous;
        (function (dimous) {
            var reviews;
            (function (reviews) {
                var views;
                (function (views) {
                    "use strict";
                    var WarningComponent = (function (_super) {
                        __extends(WarningComponent, _super);
                        function WarningComponent(__jquery_view) {
                            _super.call(this);
                            this.io_github_dimous_reviews_views_WarningComponent__jquery_view = __jquery_view;
                            this.onOk = this.onOk.bind(this);
                            this.onError = this.onError.bind(this);
                            this.onUploaded = this.onUploaded.bind(this);
                        }
                        WarningComponent.prototype.getName = function () {
                            return WarningComponent.STRING_NAME;
                        };
                        WarningComponent.prototype.onRegister = function () {
                            var __event_dispatcher = this.getEventDispatcher();
                            __event_dispatcher.on(reviews.events.ReviewEvent.STRING_OK, this.onOk);
                            __event_dispatcher.on(reviews.events.ReviewEvent.STRING_ERROR, this.onError);
                            __event_dispatcher.on(reviews.events.ReviewEvent.STRING_UPLOADED, this.onUploaded);
                        };
                        WarningComponent.prototype.onUnregister = function () {
                            var __event_dispatcher = this.getEventDispatcher();
                            __event_dispatcher.off(reviews.events.ReviewEvent.STRING_OK, this.onOk);
                            __event_dispatcher.off(reviews.events.ReviewEvent.STRING_ERROR, this.onError);
                            __event_dispatcher.off(reviews.events.ReviewEvent.STRING_UPLOADED, this.onUploaded);
                        };
                        WarningComponent.prototype.onOk = function (__event) {
                            this.io_github_dimous_reviews_views_WarningComponent__jquery_view.addClass("hidden");
                        };
                        WarningComponent.prototype.onError = function (__event) {
                            this.io_github_dimous_reviews_views_WarningComponent__jquery_view.empty().removeClass("hidden");
                            for (var _i = 0, _a = __event.getData(); _i < _a.length; _i++) {
                                var __validation_rule = _a[_i];
                                this.io_github_dimous_reviews_views_WarningComponent__jquery_view.append("<li >" + __validation_rule.message + "</li>");
                            }
                        };
                        WarningComponent.prototype.onUploaded = function (__event) {
                            this.io_github_dimous_reviews_views_WarningComponent__jquery_view.empty().removeClass("hidden").toggleClass("text-danger text-success").append("<li >Отзыв отправлен. В ближайшее время он будет рассмотрен модератором. Спасибо!</li>");
                        };
                        WarningComponent.STRING_NAME = "io.github.dimous.reviews.views.WarningComponent";
                        return WarningComponent;
                    }(reviews.Hook));
                    views.WarningComponent = WarningComponent;
                })(views = reviews.views || (reviews.views = {}));
            })(reviews = dimous.reviews || (dimous.reviews = {}));
        })(dimous = github.dimous || (github.dimous = {}));
    })(github = io.github || (io.github = {}));
})(io || (io = {}));
