import Joi from "joi"

const schema = Joi.object ({

    id: Joi.string().length(6).required(),
    xa: Joi.number().min(0).max(10000).required(),
    ya: Joi.number().min(0).max(2000).required(),  
    za: Joi.number().min(0).max(5000).required()
    

})

export default {
    schema
}    
