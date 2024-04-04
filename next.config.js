/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins')
const nextTranslate = require('next-translate-plugin')

module.exports = withPlugins(
  [
    nextTranslate
  ],
  {
    //basePath: "/cv",
    //output: "export",  // <=== enables static exports
    //images: {
      //unoptimized: true,
    //},
    reactStrictMode: true,
  }
)
