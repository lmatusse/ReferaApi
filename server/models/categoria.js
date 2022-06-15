module.exports = (sequelize, DataTypes) => {
    let Categoria = sequelize.define('Categoria', {
        name: DataTypes.STRING
    });

    Categoria.associate = function(models) {
        Categoria.hasMany(models.Ordem, {
            foreignKey: 'categoriaId',
            as: 'Ordem'
        });
    };
    return Categoria;
}