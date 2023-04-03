(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./user", "./post", "./comment"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Comment = exports.Post = exports.User = void 0;
    const user_1 = require("./user");
    exports.User = user_1.default;
    const post_1 = require("./post");
    exports.Post = post_1.default;
    const comment_1 = require("./comment");
    exports.Comment = comment_1.default;
});
//# sourceMappingURL=index.js.map