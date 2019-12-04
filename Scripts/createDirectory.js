const fs = require('fs')

const createDirectory = (directoryPath) => {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdir(directoryPath, function (error) {
      if (error) {
        console.log(error)
      } else {
        console.info('Directory {} created', directoryPath)
      }
    })
  }
  
}

module.exports = {
  createDirectory: createDirectory
}
