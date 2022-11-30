module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  {
    "name": 'strapi::cors',
    config: {
      enabled: true,
      header: "*",
      origin: "*"
    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
