import Joi from "joi";

export const validatePost = (name: string, age: number) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
  });
  return schema.validate({ name, age });
};
