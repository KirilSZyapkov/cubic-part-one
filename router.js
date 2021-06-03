const { Router } = require('express');
const router = Router();

const homeControler = require('./controllers/homeControlr');
const { creat, creatPost } = require('./controllers/creatControler');
const aboutControler = require('./controllers/aboutContorler');
const {detailsControler, detailsPost} = require('./controllers/detailsControler');
const notFound = require('./controllers/notFound');


router.get('/', homeControler);
router.get('/create', creat);
router.get('/about', aboutControler);
router.get('/details/:id', detailsControler);
router.get('*', notFound);

router.post('/create', creatPost);

module.exports = router;