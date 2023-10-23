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
            const properties = await PropertyModel.findAll({});
            const data = {properties};
            res.status(200).json({status: 'SUCCESS', message: 'Property fetched successfully', data})
        } catch (error: any) {
            console.log(error);
            const errors = {message: error.message}
            res.status(500).json({status: 'ERROR', message: 'Error fetching property', errors})
        }
    }
}
export default new PropertyControl;