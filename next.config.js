/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// next.config.js
const withTM = require('next-transpile-modules')(['axios']);

module.exports = withTM({
  // your other next.js configuration options
});
