import { Response, Request } from 'express';
import PropertyModel from '../models/properties.model';
class PropertyControl {
    create = async (req: Request, res: Response) => {
        try {                        
            await PropertyModel.create(req.body);
            res.status(200).json({status: 'SUCCESS', message: 'Property created successfully'})
        } catch (error: any) {
            console.log(error);
            const errors = {message: error.message}
            res.status(500).json({status: 'ERROR', message: 'Error creating property', errors})
        }
    }
    fetchAll = async (req: Request, res: Response) => {
        try {                        
            const limit = Number(req.query.limit) || 100;
            const offset = Number(req.query.page) || 0;
            const query = {where: {}, limit, offset}
            const { rows, count } = await PropertyModel.findAndCountAll(query);
            const data = {total_records: count, properties: rows};
            res.status(200).json({status: 'SUCCESS', message: 'Property fetched successfully', data})
        } catch (error: any) {
            console.log(error);
            const errors = {message: error.message}
            res.status(500).json({status: 'ERROR', message: 'Error fetching property', errors})
        }
    }
}
export default new PropertyControl;