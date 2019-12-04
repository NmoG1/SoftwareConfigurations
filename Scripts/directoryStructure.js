
const join = require('path').join
const git = require('simple-git')
const business = require('./createDirectory.js')
const os = require('os')
require('dotenv').config()

console.log(os.platform())
let root = 'f:'
if (os.platform().includes('win')) {
  root = 'f:/'
} else {
  root = '/mnt/f/'
}

// Construct EVS Software Hierarchy
const codeSourcePath = join(root, '_CODESOURCES')
business.createDirectory(codeSourcePath)

const bitbucketPath = join(codeSourcePath, 'BITBUCKET')
business.createDirectory(bitbucketPath)

const cnextPath = join(bitbucketPath, 'CNEXT')
business.createDirectory(cnextPath)

const ipdViaPath = join(bitbucketPath, 'IPDVIA')
business.createDirectory(ipdViaPath)

const pulsePath = join(bitbucketPath, 'PULSE')
business.createDirectory(pulsePath)

console.log(process.env.GITURL_PULSE)

git().clone(process.env.GITURL_PULSE_BUNDLE, join(pulsePath, 'evs-via-pulse-bundles'), { '-o': 'develop', '-v': true }, function () { console.log('Clone of pulse bundle Sucessful') })
git().clone(process.env.GITURL_PULSE, join(pulsePath, 'evs-via-pulse'), { '-o': 'develop', '-v': true }, function () { console.log('Clone of Pulse Backend Sucessful') })

// CONSTRUCT PERSONAL TREE
// const githubPath = join(codeSourcePath, 'GITHUB')
// if (!existsSync(githubPath)) {
//   mkdir(githubPath, function (error) {
//     console.log(error)
//   })
// }
