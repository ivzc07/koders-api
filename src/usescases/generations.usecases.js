const Generations = require('../models/generations.model');

async function create(generationData){
    const newGeneration = await Generations.create(generationData);
    return newGeneration;
}

async function getAll (){
    const allGenerations = await Generations.find();
    return allGenerations;
}

async function getById (id){
    const generationData = await Generations.findById(id);
    return generationData;
}

async function deleteById (id){
    const generationDeleted = await Generations.findByIdAndDelete(id);
    return generationDeleted;
}

async function updateById (id, newMentorData){
    const updateGeneration = await Generations.updatedById(id,newMentorData, { new: true} );
    return updateGeneration;
}

module.exports = {
    create, 
    getAll,
    getById,
    deleteById,
    updateById
}
