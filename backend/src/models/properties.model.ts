import { DataTypes } from 'sequelize';
import { sequelize } from './_config';

const PropertyModel = sequelize.define('Property', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    images: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        defaultValue: [],
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0,
    },
    location: {
        type: DataTypes.JSONB,
        defaultValue: {}
    },
    labels: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
    },
});
export default PropertyModel;