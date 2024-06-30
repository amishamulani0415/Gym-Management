const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const authenticate = require('../middleware/authenticate'); // Ensure this path is correct

// Add a new member (protected route)
router.post('/', authenticate, async (req, res) => {
    const { name, age, email, membershipType } = req.body;
    try {
        const member = new Member({ name, age, email, membershipType });
        await member.save();
        res.status(201).json(member);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all members (protected route)
router.get('/', authenticate, async (req, res) => {
    try {
        const members = await Member.find();
        res.status(200).json(members);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
