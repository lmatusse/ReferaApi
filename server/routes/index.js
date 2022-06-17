const categoriaController = require('../controller').categoria;
const ordemController = require('../controller').ordem;

module.exports = (app) => {

    app.get('/refera', (req, res) => {
        res.status(200).send({
            data: "Hello you are admin"
        })
    })

    app.get('/refera/categories', categoriaController.getCategories);

    app.post('/refera/categories/create', categoriaController.create);

    app.put('/refera/categories/:categoriaId', categoriaController.update);

    app.get('/refera/:categoriaId/ordems', ordemController.getOrdemsById);
    app.get('/refera/ordems', ordemController.getOrdems);
    app.post('/refera/ordems/create', ordemController.createOrdem);

    app.put('/refera/:ordemId', ordemController.update);

}