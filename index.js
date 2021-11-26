"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hyperion_plugin_1 = require("../../hyperion-plugin");
class SamplePlugin extends hyperion_plugin_1.HyperionPlugin {
    constructor() {
        super(...arguments);
        this.internalPluginName = 'sample-plugin-name';
        this.indexerPlugin = true;
        this.apiPlugin = true;
        this.hasApiRoutes = true;
    }
    addRoutes(server) {
    }
}
exports.default = SamplePlugin;
//# sourceMappingURL=index.js.map