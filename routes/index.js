var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Family' });
});

const familypersons = [
  {
    path: 'nikunj',
    name: 'Nikunj Sharda',
    city: 'Barrie , Ontario',
    profession: 'Student',
    month: 'June',
    somehobby: ' Playing Cricket',
    likes: 'watching news for cricket and playing cricket games',
    dislikes: 'if someone disturbs in watching cricket'
  },
  {
    path: 'tara',
    name: 'Tara Sharda',
    city: 'Ahmedabad , India',
    profession: 'HouseWife',
    month: 'January',
    somehobby: 'Reading Books',
    likes: 'Talking with neighbours',
    dislikes: 'watching news',
    relation: 'Mother'
  },
  {
    path: 'bhavanishankar',
    name: 'BhavaniShankar Sharda',
    city: 'Ahmedabad , India',
    profession: 'BusinessMan',
    month: 'October',
    somehobby: 'Doing business',
    likes: 'watching politicians news',
    dislikes: 'to do services of vehicles. Always send childrens',
    relation: 'Father'
  },
  {
    path: 'manoj',
    name: 'Manoj Sharda',
    city: 'Ahmedabad , India',
    profession: 'BusinessMan',
    month: 'March',
    somehobby: 'watching all new movies',
    likes: 'birthday cakes',
    dislikes: 'boating',
    relation: 'Brother'
  }
];

router.get('/:name', (req, res, next) => {
  const name = req.params.name;

  const familyperson = familypersons.find(fam => fam.path === name);


  if (!familyperson) {
    return next(new Error('family person does not exist'));
  }
  res.render('familyperson', familyperson);
});

module.exports = router;
