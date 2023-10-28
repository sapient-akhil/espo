const joi = require("joi");
const validate = require("./joivalidation");

module.exports = {
  configurationSchema: joi.object().keys({
    role: validate.reqString,
    venue_type: validate.reqString,
    venue_size: validate.reqString,
    event_type: validate.reqString,
    policy: validate.reqString,
  }),
};
