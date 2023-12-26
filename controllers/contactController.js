const ayncHandler = require('express-async-handler');
const Contacts = require('../models/contactModels');

// desc get all contacts
// route GET /api/contacts
//acces public


const getContacts=ayncHandler(async(req,res)=>{

    const contact = await Contacts.find()
    res.status(200).json(contact)
})


// desc create new contacts
// route post /api/contacts
//acces public

const createContact= ayncHandler(async(req,res)=>{

    console.log("The request body is",req.body)
    const {name,email,phone}=req.body
    if(!name || !email || !phone)
    {
        res.status (404)
        throw new Error("All fields required")
    }

    const contact = await Contacts.create({
        name,
        email,
        phone,
    })
    res.status(201).json(contact)
})


// desc get  contacts:id
// route post /api/contacts:id
//acces public

const getContact= ayncHandler(async (req,res)=>{

    const contact = await Contacts.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error("Contacts not found")
    }
       res.status(200).json(contact)
})

// desc update  contacts:id
// route put /api/contacts:id
//acces public

const updateContact=ayncHandler( async(req,res)=>{
     
    const contact = await Contacts.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error("Contacts not found")
    }
    const updateContact = await Contacts.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.status(200).json(updateContact)
})

// desc delete  contacts:id
// route delete /api/contacts:id
//acces public

const deleteContact= ayncHandler(async(req,res)=>{
    const contact = await Contacts.findByIdAndDelete(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error("Contacts not found")
    }

    res.status(200).json(contact)
})


module.exports= { getContacts,createContact,getContact,updateContact,deleteContact}