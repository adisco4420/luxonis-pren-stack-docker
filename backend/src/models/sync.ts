import { sequelize } from './_config';
import PropertyModel from './properties.model';

(async () => {
    await sequelize.authenticate();
    sequelize.models.Property = PropertyModel;
    console.log('Connection has been established successfully.');
    await sequelize.sync();
    console.log('Synced DB successfully');
    sequelize.connectionManager.close().then(res => console.log('close connection'))
})();