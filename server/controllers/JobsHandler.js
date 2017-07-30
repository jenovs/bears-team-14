const Job = require('../models/Job.js');

module.exports = {
<<<<<<< HEAD
  getAll: async function(req, res) {
      let jobs = await Job.find();

      if (!jobs) throw 'No jobs found!'; 

      res.json(jobs);
=======
  getAll: function(req, res) {
    Job.find().exec((err, jobs) => {
      if (err) throw err;

      res.json(jobs);
    });
>>>>>>> upstream/development
  },
};
