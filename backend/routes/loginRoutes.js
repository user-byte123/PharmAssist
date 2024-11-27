const express = require('express');
const router = express.Router();
const Login = require('../models/loginInfo');

//Create
router.post('/', async(req,res) => {
  const login = new Login(req.body);
  try {
    const savedLogin = await login.save();
    res.status(201).json(savedItem);
  }
  catch(err) {
    res.status(400).json({message:err.message});
  }
});

//Read
router.get('/',async(req,res) => {
  try {
    const login = await Login.find();
    res.json(items);
  }
  catch(err) {
    res.status(500).json({message:err.message})
  }
})

//update
router.patch('/:id', async(req,res) => {
  try {
    // {new:true} ensures the update will immedicately update the state and reduces for the additioanl query to fetch the updated data
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(updatedItem);
  }
  catch (err) {
    res.status(400).json({message: err.message});
  };
})

//delete
router.delete('/:id', async(req,res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({message: 'Item deleted'});
  }
  catch {
    res.status(500).json({message:err.message})
  }
})

module.exports = router;