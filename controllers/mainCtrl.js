var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js');

module.exports = {
  getName: function(req, res) {
    res.json(user.name);
  },
  getLocation: function(req, res) {
    res.json(user.location);
  },
  getOccupations: function(req, res) {
    if (req.query.order === "desc") {
      var order = user.occupations.sort();
      res.json(order);
      // pretend this says else if
    } if (req.query.order  === "asc") {
      var order = user.occupations.reverse();
      res.json(order);
    } else {
      res.json(user.occupations);
    }
  },
  getLatestOccupation: function(req, res) {
    res.json(user.occupations.slice(-1));
  },
  getHobbies: function(req, res) {
    res.json(user.hobbies);
  },
  getHobbyType: function(req, res) {
    var type = req.params.type;
    var filtered = user.hobbies.filter(function(hobbies) {
      return hobbies.type === type;
    });
    res.json(filtered);
  },
  getFamily: function(req, res) {
    res.json(user.family);
  },
  getFamilyGender: function(req, res) {
    var gender = req.params.gender;
    var filtered = user.family.filter(function(family) {
      return family.gender == gender;
    });
    res.json(filtered);
  },
  getRestaurants: function(req, res) {
    res.json(user.restaurants);
  },
  getRestaurantsName: function(req, res) {
    var name = req.params.name;
    var filtered = user.restaurants.filter(function(restaurants) {
      return restaurants.name == name;
    });
    res.json(filtered);
  },
  getSkillz: function(req, res) {
  if (req.query.experience) {
    var filtered = skillz.filter(function(skillz) {
      return skillz.experience === req.query.experience;
    });
    res.json(filtered);
  } else {
    res.json(skillz);
  }
  },
  getSecrets: function(req, res) {
    res.json(secrets);
  },
  putName: function(req, res) {
    user.name = req.query.name;
    res.json(user.name);
  },
  putLocation: function(req, res) {
    user.location = req.query.location;
    res.json(user.location);
  },
  postHobbies: function(req, res) {
    user.hobbies.push(req.query);
    res.json(user.hobbies);
  },
  postOccupations: function(req, res) {
    user.occupations.push(req.query);
    res.json(user.occupations);
  },
  postFamily: function(req, res) {
    user.family.push(req.query);
    res.json(user.family);
  },
  postRestaurants: function(req, res) {
    user.restaurants.push(req.query);
    res.json(user.restaurants);
  },
  postSkillz: function(req, res) {
    skillz.push(req.query);
    res.json(skillz);
  }

};
