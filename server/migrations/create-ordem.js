module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('Ordems', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            contact: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            company: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            estateAgency: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            deadline: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            categoriaId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'Categoria',
                    key: 'id',
                    as: 'categoriaId'
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        }),
    down: (queryInterface /* , Sequelize */ ) => queryInterface.dropTable('Ordem'),
};