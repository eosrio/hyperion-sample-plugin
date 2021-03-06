import {FastifyInstance} from "fastify";
import {HyperionPlugin} from "../../hyperion-plugin";

export default class SamplePlugin extends HyperionPlugin {
    internalPluginName = 'sample-plugin-name';
    indexerPlugin = true;
    apiPlugin = true;
    hasApiRoutes = true;

    constructor() {
        super();
        this.registerStreamHandlers();
    }

    registerStreamHandlers() {
        this.streamHandlers.push({
            event: 'trace',
            handler: async streamEvent => {
                const headers = streamEvent.properties.headers;
                if (headers) {
                    if (headers.event === 'trace' && headers.account === 'eosio.evm' && headers.name === 'raw') {
                        if (streamEvent.content) {
                            const content = JSON.parse(streamEvent.content.toString());
                            this.processStreamData(headers, content);
                        }
                    }
                }
            }
        });
    }

    processStreamData(headers: any, content: any) {
        console.log(headers);
        console.log(content);
    }

    initOnce() {
        console.log('This method is called only once in the indexer master process');
        super.initOnce();
    }

    addRoutes(server: FastifyInstance): void {
    }
}
