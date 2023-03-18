'use strict';

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  async findOne(ctx) {
    // some custom logic here
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    // console.log(query)

    const entity = await strapi.entityService.findMany("api::article.article", query);
    // console.log(entity)

    const sanitizedEntity = await this.sanitizeOutput(entity);

    console.log('ENTITY2', entity[0])

    return entity[0];
  },
}));