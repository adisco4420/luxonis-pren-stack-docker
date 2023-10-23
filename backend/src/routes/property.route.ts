import { Router } from "express";
import PropertyControl from '../controllers/property.control';

class PropertyRoute {
    loadRoutes(prefix: string, router: Router) {
        this.create(prefix, router);
        this.fetchAll(prefix, router);
    }
    private create(prefix: string, router: Router) {
        router.post(`${prefix}`, PropertyControl.create)
    }
    private fetchAll(prefix: string, router: Router) {
        router.get(`${prefix}`, PropertyControl.fetchAll)
    }
}
export default new PropertyRoute;