import {FastifyInstance} from "fastify";
import {HyperionPlugin} from "../../hyperion-plugin";

export default class SamplePlugin extends HyperionPlugin {
    internalPluginName = 'sample-plugin-name';
    indexerPlugin = true;
    apiPlugin = true;
    hasApiRoutes = true;

    addRoutes(server: FastifyInstance): void {
    }
}
