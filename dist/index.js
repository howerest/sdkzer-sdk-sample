var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "sdkzer", "js-webservices"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var sdkzer_1 = require("sdkzer");
    var js_webservices_1 = require("js-webservices");
    var SDK;
    (function (SDK) {
        /**
         * Perform CRUD operations (Create, Read, Update and Delete) to deal with Events
         * Event is mapped to "http://localhost:8000/api/v1/events" endpoint
         */
        var Event = /** @class */ (function (_super) {
            __extends(Event, _super);
            function Event() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Event.prototype.baseEndpoint = function () {
                return "http://localhost:8000/api/v1/events";
            };
            Event.prototype.defaults = function () {
                return {
                    name: null,
                    geo: {
                        lat: null,
                        lon: null
                    },
                    start_date: null,
                    end_date: null
                };
            };
            /*
             * This parses the data received from the origin endpoint
             */
            Event.prototype.$parse = function (data) {
                return data['event'];
            };
            /*
             * This converts local state into data understandable by the origin endpoint
             */
            Event.prototype.toOriginJSON = function () {
                return { 'event': this.attr() };
            };
            /*
             * Your instance methods hold your business logic
             */
            Event.prototype.isHappening = function () {
                return (this.attr("start_date") === new Date().toISOString().slice(0, 10));
            };
            Event.prototype.howLongAgo = function () {
                // ...
            };
            // [...]
            /*
             * Your static methods to retrieve collections
             */
            Event.fetchIndexByCityName = function (cityName) {
                // This query will merged on top of the default Event.fetchIndex() HttpQuery
                var indexByCityNameHttpQuery = new js_webservices_1.WebServices.HttpQuery({
                    qsParams: {
                        'city_name': cityName
                    }
                });
                // Always use the default fetchIndex() passing your custom HttpQuery
                // to retrieve collections. if you need to override it do it
                return Event.fetchIndex(indexByCityNameHttpQuery);
            };
            return Event;
        }(sdkzer_1.Sdkzer));
        SDK.Event = Event;
        var Comment = /** @class */ (function (_super) {
            __extends(Comment, _super);
            function Comment() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Comment.prototype.baseEndpoint = function () {
                return "http://localhost:8000/api/v1/comments";
            };
            Comment.prototype.defaults = function () {
                return {
                    user_id: null,
                    event_id: null,
                    comment: null
                };
            };
            return Comment;
        }(sdkzer_1.Sdkzer));
        SDK.Comment = Comment;
    })(SDK = exports.SDK || (exports.SDK = {}));
});
//# sourceMappingURL=index.js.map