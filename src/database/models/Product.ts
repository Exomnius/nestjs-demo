
import { DataTypes, Model, UUIDV4 } from "sequelize";
import { sequalize } from "../database";

interface ProductRow {
  id: string,
  referenceId: string,
}

export class SequelizeProduct extends Model<ProductRow, Omit<ProductRow, 'id, referenceId'>> {
  declare id: string;
  declare referenceId: string;
}

SequelizeProduct.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  referenceId: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
  },
}, {
  sequelize,
  timestamps: false,
  tableName: 'tags'
});
