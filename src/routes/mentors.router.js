const mentorsUsesCases = require('../usescases/mentors.usecases');
const express = require('express');
const router = express.Router();

router.get('/', async (request, response) => {
    try{
        const mentors = await mentorsUsesCases.getAll();
        response.json({
            success: true,
            data: { mentors },
        })
    } catch(error){
            response.status(error.status || 500);
            response.json({
                success: false,
                error: error.message,
            }) 
    }
})

router.post('/', async (request, response) =>  {
    try{
        const newMentor = await mentorsUsesCases.create(request.body);
        response.json({
            succes: true,
            mentor: {newMentor},
        })
    }catch (error){
        response.status(error.status || 500);
        response.json({
                success: false, 
                error: error.message,
            })
    }
})

router.get('/:id', async (request, response) => {
    try{
        const { id } = request.params
        const mentor = await mentorsUsesCases.getById(id);
        response.json({
            success: true, 
            menotr: mentor,
        })
    }catch(error){
        response.status(error.status || 500);
        response.json({
            success: false, 
            error: error.message,    
        })
    }
}) 

router.delete('/:id', async (request, response) => {
    try{
        const {id} = request.params;
        const mentorDeleted = await mentorsUsesCases.deleteById(id);
        response.json({
            succes: true,
            data: {mentorDeleted},
        })
    }catch(error){
        response.status(500);
        response.json({
            success: false, 
            error: error.message,
        })
    }
})

router.patch('/:id', async (request, response) => {
    try{
        const {id} = request.params;
        const mentorUpdated = await mentorsUsesCases.updateById(id, request.body);
        response.json({
            success: true,
            data : { mentorUpdated },
        })
    }catch(error){
        response.status(error.status || 500);
        response.json({
            success: false, 
            error: error.message,
        })
    }
})

module.exports  = router; 