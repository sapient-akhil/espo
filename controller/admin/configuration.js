const createError = require("http-errors");
const { configurationServices } = require("../../services/index");
const randomstring = require("randomstring");

module.exports = {
  createUpdateConfiguration: async (req, res, next) => {
    try {
      const req_data = req.body;

      const role = await JSON.parse(req_data.role);
      const venue_type = await JSON.parse(req_data.venue_type);
      const venue_size = await JSON.parse(req_data.venue_size);
      const event_type = await JSON.parse(req_data.event_type)

      req_data.role = role;
      req_data.venue_type = venue_type;
      req_data.venue_size = venue_size;
      req_data.event_type = event_type;

      const existConfigurationId =
        await configurationServices.findByConfigurationId();
   
      if (existConfigurationId.length) {
        const configurationData =
          await configurationServices.createUpdateConfiguration(
            existConfigurationId[0].configuration_id,
            req_data
          );

        return res.status(201).send({
          success: true,
          message: "Configuration data is loaded successfully.",
          data: configurationData,
        });
      }

      req_data.configuration_id = await randomstring.generate(17);

      const configurationData =
        await configurationServices.createUpdateConfiguration(
          req_data.configuration_id,
          req_data
        );
      return res.status(201).send({
        success: true,
        message: "Configuration data is loaded successfully.",
        data: configurationData,
      });
    } catch (error) {
      next(error);
    }
  },
  allConfiguration: async (req, res, next) => {
    try {
      const configuration = await configurationServices.findAllConfiguration();

      res.status(201).send({
        success: true,
        message: "All configuration data fetch successfully.",
        data: configuration,
      });
    } catch (error) {
      next(error);
    }
  },
};
