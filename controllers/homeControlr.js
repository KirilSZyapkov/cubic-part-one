const cubs = require('../data/cubs');

module.exports = (req, res) => {
    const search = req.query.search;
    const from = Number(req.query.from);
    const to = Number(req.query.to);
    
    let data = Object.entries(cubs)
        .map(([id, v]) => Object.assign({}, { id }, v));

    if (search) {
        data = data.filter((x) => x.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    }
    if (from) {
        data = data.filter((x) => x.difficulty >= from);
    }
    if (to) {
        data = data.filter((x) => x.difficulty <= to);
    }

    const itm = {
        item: data
    }
    res.render('home', itm);
}