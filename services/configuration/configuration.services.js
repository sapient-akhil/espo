const configurationModel = require("./configuration.model");

module.exports = {
  findAllConfiguration: async () => {
    return new Promise(async (resolve) => {
      return resolve(
        await configurationModel.find({ active: true }, { __v: 0 })
      );
    });
  },
  findByConfigurationId: async () => {
    return new Promise(async (resolve) => {
      return resolve(await configurationModel.find());
    });
  },
  createUpdateConfiguration: async (configuration_id, req_data) => {
    // console.log("req_data", req_data);
    return new Promise(async (resolve) => {
      await configurationModel.findOneAndUpdate(
        { configuration_id },
        { ...req_data },
        { upsert: true }
      );
      return resolve(await configurationModel.find({ configuration_id }));
    });
  },
};
