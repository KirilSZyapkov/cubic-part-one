const cubs = require('../data/cubs');

module.exports = {
    detailsControler(req, res) {
        const id = req.params.id;
        const cubDetails = cubs[id]

        const ctx = {
            cubDetails
        }


        res.render('details', ctx);
    },

}