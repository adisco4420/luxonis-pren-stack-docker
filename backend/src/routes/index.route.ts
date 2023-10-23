import * as express from "express";
import PropertyRoute from './property.route';
export const routes = (app: express.Application) => {
    let router: express.Router;
    router = express.Router(); 

    console.log('Loading Property routes')
    PropertyRoute.loadRoutes('/properties', router);

    router.get('/', (req, res) => res.send('Welcome to Luxonis API'))

    //use router middleware
    app.use(router);

    app.all('*', (req, res)=> {
        const error = `Route not found: ${req.url}`;
        console.log(error);
        return res.status(404).json({ status: 404, error});
    });
}