import FastifyAdapter from './infra/api/FastifyAdapter';
import Router from './infra/api/Router';

const httpServer = new FastifyAdapter();
const router = new Router(httpServer);
router.init();
httpServer.listen(3333);
