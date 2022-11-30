module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  url: env("PUBLIC_URL", "https://rotten-sites-look-212-116-64-212.loca.lt"),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
