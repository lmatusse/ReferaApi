const Ordem = require('../models').Ordem;
const Categoria = require('../models').Categoria;

module.exports = {

    async getOrdems(req, res) {
        try {
            const categoties = await Categoria.find({
                id: req.params.categoriaId
            });

            if (categoties) {
                const ordems = await Ordem.find({
                    categoriaId: req.params.categoriarId
                })

                res.status(201).send(ordems);
            } else {
                re.status(404).send("Category Not Found")
            }
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }

    },

    async createOrdem(req, res) {

        try {
            const ordem = await Ordem.create({
                name: req.body.name,
                categoriaId: req.body.categoriaId,
                contact: req.body.contact,
                company: req.body.company,
                estateAgency: req.body.estateAgency,
                description: req.body.description,
                deadline: req.body.deadline
            });
            res.status(201).send(ordem)
        } catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async update(req, res) {
        try {
            const ordems = await Ordem.find({
                id: req.params.ordemId
            });

            if (ordems) {
                const updatedOrdem = await ordems.update({
                    name: req.body.name,
                    contact: req.body.contact,
                    company: req.body.company,
                    estateAgency: req.body.estateAgency,
                    description: req.body.description,
                    deadline: req.body.deadline
                })

                res.status(201).send(updatedOrdem);
            } else {
                res.status(404).send("Ordem Not Found");
            }

        } catch (e) {
            console.log(e);
            res.status(400).send(e);
        }

    }
}