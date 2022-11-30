'use strict';

/**
 * cat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cat.cat');
