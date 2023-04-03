(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "sdkzer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sdkzer_1 = require("sdkzer");
    class Event extends sdkzer_1.Sdkzer {
        constructor() {
            super(...arguments);
            this.dateRegExp = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\\.[0-9]+)?(Z)?$/;
            this.validationRules = {
                'user_id': [new sdkzer_1.RequiredValidator()],
                'post_id': [new sdkzer_1.RequiredValidator()],
                'name': [
                    new sdkzer_1.RequiredValidator(),
                    new sdkzer_1.LengthValidator({ min: 2, max: 20 })
                ],
                'date': [
                    new sdkzer_1.RequiredValidator(),
                    new sdkzer_1.RegExpValidator({
                        // validates a date like 2023-12-15T08:30:30Z
                        rule: this.dateRegExp
                    })
                ]
            };
        }
        baseEndpoint() {
            return "http://localhost:8000/api/v1/comments";
        }
        defaults() {
            return {
                post_id: null,
                date: "",
                comment: ""
            };
        }
        /*
        * Your instance methods hold your business logic using the state of
        * the record instance
        */
        isToday() {
            return (this.attr("date") === new Date().toISOString().slice(0, 10));
        }
        /*
        * Your static methods to retrieve collections
        */
        static fetchIndexByUser(userId) {
            // This query will merged on top of the default Comment.fetchIndex() HttpQuery
            const indexByUserIdHttpQuery = {
                qsParams: {
                    'user_id': userId
                }
            };
            // Always use the default fetchIndex() passing your custom HttpQuery
            // to retrieve collections. if you need to override it do it
            return Event.fetchIndex(indexByUserIdHttpQuery);
        }
    }
    exports.default = Event;
});
//# sourceMappingURL=comment.js.map