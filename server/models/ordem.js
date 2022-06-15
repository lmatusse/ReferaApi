module.exports = (sequelize, DataTypes) => {
    let Ordem = sequelize.define('Ordem', {
        name: DataTypes.STRING,
        contact: DataTypes.STRING,
        company: DataTypes.STRING,
        estateAgency: DataTypes.STRING,
        description: DataTypes.STRING,
        deadline: DataTypes.DATE,

    });

    Ordem.associate = function(models) {
        Ordem.belongsTo(models.Categoria, {
            onDelete: "CASCADE",
            foreignKey: 'categoriaId'
        });
    };

    return Ordem;
}