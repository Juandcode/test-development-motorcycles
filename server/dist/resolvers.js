"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Query_1 = __importDefault(require("./resolvers/Query"));
var Mutation_1 = __importDefault(require("./resolvers/Mutation"));
var Subscription_1 = __importDefault(require("./resolvers/Subscription"));
exports["default"] = {
    Query: Query_1["default"],
    Mutation: Mutation_1["default"],
    Subscription: Subscription_1["default"]
};
//# sourceMappingURL=resolvers.js.map