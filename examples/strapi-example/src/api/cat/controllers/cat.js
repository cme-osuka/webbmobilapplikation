'use strict';

/**
 * cat controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cat.cat');
