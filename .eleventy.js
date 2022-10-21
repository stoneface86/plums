
module.exports = function(eleventyConfig) {

  eleventyConfig.setBrowserSyncConfig({
    files: './_site/css/style.css'
  });
  return {
    dir: {
      input: 'demo',
      output: '_site'
    }
  };

};