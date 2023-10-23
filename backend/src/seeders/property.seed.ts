import axios from 'axios';
import PropertyModel from '../models/properties.model';
const PropertySeeder = async () => {
    try {
        console.log('Seeding Properties....');
        const url = 'https://www.sreality.cz/api/en/v2/estates';
        const params = {
            category_main_cb: 1,
            category_type_cb: 1,
            per_page: 500,
            tms: 1697721819402
        }
        const { data } = await axios.get(url, {params});
        console.log(`Property Seeded successfully, Results: (title: ${data.title}, per_page: ${data.per_page})`);
        const properties = data._embedded.estates.map((item: any) => {
            return {
                title: item.name,
                images: item._links.images,
                price: item.price,
                location: {
                    city: item.locality,
                    country: 'Czech Republic'
                },
                labels: item.labels
            }
        });
        await PropertyModel.destroy({truncate: true});
        await PropertyModel.sync({force: true})
        await PropertyModel.bulkCreate(properties)
    } catch (error) {
        console.log(error);
    }
}

(async () => {
    try {
        await PropertySeeder();
    } catch (error) {
        console.log(error);
    }
})()