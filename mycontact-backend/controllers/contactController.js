//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
    res.status(200).json({message: "Get all Contacts"});
}

//@desc Create new contacts
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
    console.log(req.body);
    res.status(201).json({message: "Create Contact"});
}
//@desc Get an individual contact
//@route GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
    res.status(200).json({message: `Get Contact for ${req.params.id}`});
}

//@desc Update  contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
    res.status(200).json({message: `Update Contact for ${req.params.id}`});
}

//@desc Delete  contacts
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
    res.status(200).json({message: `Delete Contact for ${req.params.id}`});
}

module.exports = { getContacts, 
    createContact,
    getContact,
    updateContact,
    deleteContact 
};