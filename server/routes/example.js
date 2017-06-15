const router = require('express').Router();
const Sequelize = require('sequelize');
const Example = require('../../db/models').Example;
module.exports = router;

router.get('/examples/', (req, res, next) => {
  Example.findAll()
  .then((examples) => {
    res.send(examples);
  })
  .catch(next)
})

router.get('/example/:id', (req, res, next) => {
  Example.findOne({
    where: { id: req.params.id}
  })
   .then((example) => {
    res.send(example);
  })
    .catch(next);
});
//post:
router.post('/examples', (req, res, next) => {
  Example.create(req.body)
  .then(newExample => res.status(201).json(newExample))
  .catch(next);
});

//put:
router.put('/example/:id', (req, res, next) => {
  Example.update(req.body, {where: { id: req.params.id}})
  .then(updatedExample => res.json(updatedExample))
  .catch(next);
});

//delete:
router.delete('/example/:id', (req, res, next) => {
  Example.destroy({where: { id: req.params.id}})
  .then(deleted => res.sendStatus(202))
  .catch(next);
});
