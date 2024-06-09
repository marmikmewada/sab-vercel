const mongoose = require('mongoose');
const Newsletter = require('../models/newsLetterSubs');

// Assuming you have a Newsletter model with just an email field
const subscribeToNewsletter = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
    const newSubscription = new Newsletter({ email });
    await newSubscription.save();
    res.status(201).json({ message: 'Subscribed to newsletter successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error subscribing to newsletter' });
  }
};

module.exports = { subscribeToNewsletter };
