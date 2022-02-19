"use strict";
exports.__esModule = true;
exports["default"] = {
    horarios: {
        subscribe: function (_, args, context) {
            //console.log(context.pubSub)
            return context.pubSub.asyncIterator(["PRUEBA"]);
        }
    }
};
//# sourceMappingURL=Subscription.js.map