const Mentors = require('../models/mentors.model');

async function create(mentorData){
    const newMentor = await Mentors.create(mentorData);
    return newMentor;
}

async function getAll (){
    const allMentors = await Mentors.find();
    return allMentors;
}

async function getById (id){
    const mentorData = await Mentors.findById(id);
    return mentorData;
}

async function deleteById (id){
    const mentorDeleted = await Mentors.findByIdAndDelete(id);
    return mentorDeleted;
}

async function updateById (id, newMentorData){
    const updatedMentor = await Mentors.updatedById(id,newMentorData, { new: true} );
    return updatedMentor
}

module.exports = {
    create, 
    getAll,
    getById,
    deleteById,
    updateById
}
