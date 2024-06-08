const Joi = require("joi");

const validateUser = (req, res, next) => {
  // Define the schema for user validation
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().min(3).max(100).required(),
    password: Joi.string().min(3).max(50).required(),
    role: Joi.string().valid('lecturer', 'student').required(),
  });

  // Validate the request body against the schema
  const { error } = schema.validate(req.body, { abortEarly: false });

  // If validation errors are found, respond with a 400 status and the errors
  if (error) {
    const errors = error.details.map((err) => err.message);
    res.status(400).json({ message: "Validation error", errors });
    return; // Terminate middleware execution on validation error
  }

  // If validation passes, proceed to the next route handler
  next();
};

module.exports = validateUser;
