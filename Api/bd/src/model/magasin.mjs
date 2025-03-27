const MagasinModel = (sequelize, DataTypes) => {
    return sequelize.define(
        "Magasin",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            level: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            timestamps: true,
            createdAt: "created",
            updatedAt: false,
        }
    )
};
export { MagasinModel };