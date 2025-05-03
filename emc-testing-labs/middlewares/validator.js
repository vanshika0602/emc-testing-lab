const Joi = require('joi');

exports.signupSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: ['com', 'net'] } })
        .min(6)
        .max(60)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$'))
        .required()
        .messages({
            'string.pattern.base': 'Password must contain at least one lowercase letter, one uppercase letter, and one number, and be at least 8 characters long.'
        }),
});

exports.signinSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: ['com', 'net'] } })
        .min(6)
        .max(60)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$'))
        .required()
        .messages({
            'string.pattern.base': 'Password must contain at least one lowercase letter, one uppercase letter, and one number, and be at least 8 characters long.'
        }),
});

exports.createLabSchema = Joi.object({
    user_id: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .message("Invalid user_id format")
        .required(),

    company_name: Joi.string()
        .min(2)
        .max(100)
        .required(),

    accreditation: Joi.string()
        .min(2)
        .max(100)
        .required(),

    contact: Joi.number()
        .min(1000000000) // Adjust based on contact format
        .required(),

    location: Joi.string()
        .min(2)
        .max(100)
        .required(),

    expertise: Joi.string()
        .min(2)
        .max(100)
        .required(),

    industries: Joi.array()
        .items(Joi.string().min(1))
        .required(),

    testingServices: Joi.array()
        .items(Joi.string().min(1))
        .required(),

    description: Joi.string()
        .min(10)
        .required(),

    profile_menu: Joi.object().required(),

    logo: Joi.string().uri().optional(),

    verified: Joi.boolean().optional()
});
