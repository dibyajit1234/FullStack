const {z} = require("zod");

//creating object schema
const signupSchema = z.object({
    username : z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at least of 3 charecters"})
    .max(255,{message:"Name must not be more than 255 charecters"}),

    email : z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"invalid email adderess"})
    .min(3,{message:"email must be at least of 3 charecters"})
    .max(255,{message:"Email must not be more than 255 charecters"}),

    phone : z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,{message:"Phone must be at least of 10 charecters"})
    .max(20,{message:"Phone must not be more than 20 charecters"}),

    password : z
    .string({required_error:"Password is required"})
    .trim()
    .min(6,{message:"Password must be at least of 6 charecters"})
    .max(1024,{message:"password must not be more than 1024 charecters"}),
})

const loginSchema = z.object({
    email : z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"invalid email adderess"})
    .min(3,{message:"email must be at least of 3 charecters"})
    .max(255,{message:"Email must not be more than 255 charecters"}),

    password : z
    .string({required_error:"Password is required"})
    .trim()
    .min(6,{message:"Password must be at least of 6 charecters"})
    .max(1024,{message:"password must not be more than 1024 charecters"}),
})

module.exports = {signupSchema,loginSchema};