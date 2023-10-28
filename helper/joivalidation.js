const joi = require("joi");

module.exports = {
    reqId: joi.string().pattern(/^[0-9a-fA-F]{24}$/).message("ENTER VALID ID...").required(),
    id: joi.string().pattern(/^[0-9a-fA-F]{24}$/).message("ENTER VALID ID..."),
    reqString: joi.string().required(),
    string: joi.string(),
    email: joi.string().email().required(),
    reqDate: joi.date().required(),
    date: joi.date(),
    otp:joi.number().required(),
    number: joi.number(),
    reqNumber: joi.number().required(),
    reqPassword: joi.string().min(5).message("Password lenght more than 5 characters").required(),
    password: joi.string().min(5).message("Password lenght more than 5 characters"),
    reqBoolean: joi.boolean().required(),
    boolean: joi.boolean()
}    