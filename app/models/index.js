const fs = require('fs')
const modelsPath = `${__dirname}/`
const { removeExtensionFromFile } = require('../middleware/utils')

/*
 * Load models dynamically
 */
module.exports = () => {
  // Loop models path and loads every file as a model except this file
  fs.readdirSync(modelsPath).filter((file) => {
    // Take filename and remove extension
    const modelFile = removeExtensionFromFile(file)
    // Prevents loading of this file
    return modelFile !== 'index' ? require(`./${modelFile}`) : ''
  })
}
