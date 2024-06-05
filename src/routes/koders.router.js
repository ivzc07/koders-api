const kodersUseCase = require('../usescases/koders.usecase');
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.middleware');



router.get('/', async (request, response) => {
    try{
        const koders = await kodersUseCase.getAll()
        response.json({
            success: true,
            data: { koders },
        })
    } catch(error){
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        })
    }
    
})

router.post('/', async (request, response) => {
    try{
        const koderCreated = await kodersUseCase.create(request.body);

        response.json({
            success: true,
            data: { koder: koderCreated},
        })
    } catch (error){
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        })        
    }
})

router.get('/:id',auth, async (request, response)=> {
    try{
        const { id } = request.params;
        const koder = await kodersUseCase.getById(id);

        response.json({
            success: true,
            data: { koder },
        })
    } catch{
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        })
    }
})

router.delete('/:id',auth, async (request, response) =>{
    try{
        const { id } = request.params;
        const koderDeleted = await kodersUseCase.deleteById(id);
        response.json({
            success: true,
            data: {koder: koderDeleted},
        })
    } catch(error){
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        })       
    }
})

router.patch('/:id' , auth , async (request, response) => {
    const { id } = request.params;
    const koderUpdated = await kodersUseCase.updateById(id, request.body)

    response.json({
        success: true,
        data: { koder: koderUpdated},
    })
})

module.exports = router;