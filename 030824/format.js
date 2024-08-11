import joi from "joi"

const userSchema=joi.object({
    name:joi.string().required(),
    age:joi.number().required(),
    father:joi.string().required()
})

export{
    userSchema
}