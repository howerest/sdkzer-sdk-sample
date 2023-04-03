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
    class User extends sdkzer_1.Sdkzer {
        baseEndpoint() {
            return "http://localhost:8000/api/v1/posts";
        }
        defaults() {
            return {
                title: "",
                content: ""
            };
        }
    }
    exports.default = User;
});
//# sourceMappingURL=post.js.map