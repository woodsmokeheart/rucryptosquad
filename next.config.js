/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withVideos = require("next-videos");

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};

module.exports = withPlugins([[withVideos]], nextConfig);
