const express = require('express');
const auth = require('../middlewares/auth.middleware');
const generationsUseCase = require('../usescases/generations.usecases');

const router = express.Router();
/*
    create, --
    getAll, --
    getById, --
    deleteById, --
    updateById

*/
router.get('/', async (request, response) => {
    try{
        const generations = await generationsUseCase.getAll();
        response.json({
            success: true,
            data: { generations},
        })
    }catch(error){
        error.status( error.status || 500);
        response.json({
            success : false,
            error: error.message,
        })
    }

})

router.get('/:id', async (request , response) => {
    try{
        const { id } = request.params;

        const generation = await generationsUseCase.getById(id);

        response.json({
            success: true,
            data: { generation },
        })
    }catch (error){
        error.status( error.status || 500);
        response.json({
            success: false,
            error: error.message,
        }) 
    }
})

router.post('/', async (request, response) => {
    try{
        const newGeneration = await request.body;
        const addedGeneration = await generationsUseCase.create(newGeneration);
        response.json({
            success: true,
            data : {addedGeneration},
        })
    }catch (error){
        error.status (error.status || 500);
        response.json({
            success: false,
            error: error.message,
        })
    }
})

router.delete('/:id', async (request, response) =>{
    try{
        const { id } =  request.params;
        const generationDeleted = await generationsUseCase.deleteById(id);
        response.json({
            success: true,
            data : { generationDeleted },
        }) 
    }catch(error){
        error.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        })
    }
})

router.patch('/:id', async (request, response) => {
    try{
        const { id } = request.params
        const generationUpdated = await generationsUseCase.updateById(id, request.body);
        response.json({
            success: true,
            data : { generationUpdated },
        })
    }catch(error){
        error.status(error.status || 500);
        response.json({
            sucess: false,
            error: error.message
        })
    }
})



module.exports = router; 

