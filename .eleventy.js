module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('i');
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('robots.txt');
    eleventyConfig.addPassthroughCopy('sitemap.xml');
    return {
        passthroughFileCopy: true
    };
};