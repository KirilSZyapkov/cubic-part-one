const cubs = require('../data/cubs');
const fs = require('fs/promises');
const formidable = require('formidable');
const path = require('path');

module.exports = {
    creat(req, res) {
        res.render('create');
    },

    creatPost(req, res) {

        const id = (Math.random() + Math.random()).toString(36).slice(2);
        const form = formidable.IncomingForm();
        form.parse(req, async (err, fields) => {
            if (err) {
                return console.log('Error found');
            };

            let [name, description, imageUrl, difficulty] = Object.values(fields);
            difficulty = Number(difficulty);
            if (!name || !description || !imageUrl || !difficulty) {
                return console.log('There is an empty field!');
            };
            cubs[id] = {
                name,
                description,
                imageUrl,
                difficulty
            };

            const filePath = path.normalize(path.join(__dirname, '../data/cubs.json'));
            await fs.writeFile(filePath, JSON.stringify(cubs, null, 2));

            res.redirect('/');
        })
    }
}