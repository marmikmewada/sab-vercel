const mongoose = require('mongoose');
const Contact = require('../models/Contact');

const createContact = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;
    const newContact = new Contact({ name, phone, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating contact' });
  }
};

module.exports = { createContact };