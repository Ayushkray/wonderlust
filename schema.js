const Joi = require('joi');


module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        country: Joi.string().required(),
        location:Joi.string().required(),
        price: Joi.string().required().min(0),
        // image: Joi.object({
        // url: Joi.string().uri().allow('', null)
        // })
        image: Joi.alternatives().try(
        Joi.object({
        url: Joi.string().required(),
        filename: Joi.string().required()
  }),
  Joi.allow(null),
  Joi.object().length(0)  // allows empty object {}
)
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required()
});
