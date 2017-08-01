const Job = require('../models/Job.js');

module.exports = {
  getAll: async function(req, res) {
    let jobs = await Job.find();

    if (!jobs) throw 'No jobs found!';

    res.json(jobs);
  },
  createNew: async function(req, res) {
    // Remember the form's data
    const newJob = req.body;

    // Split tags string by commas
    const tags = req.body.tags.split(',');

    // Trim whitespaces around the tags
    const trimmedTags = tags.map(tag => tag.trim());

    // Create and save the new job as specified by mongoose model
    const cleanedJob = new Job({
      companyName: newJob.companyName,
      info: {
        title: newJob.title,
        description: newJob.description,
        imgUrl: newJob.imgUrl,
        website: newJob.website,
      },
      location: newJob.location,
      tags: trimmedTags,
      expDate: new Date(newJob.expDate),
    });

    await cleanedJob.save();
  },
};
