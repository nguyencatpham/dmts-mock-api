const mock = require('./data')
const fs = require('fs')

const generateData = () => {
  const vu = process.env.VU || 100
  mock().then(data => {
    setTimeout(() => {
      fs.writeFileSync('mock-data.json', JSON.stringify(data));
    }, vu * 10);
  }).catch(error => {
    console.error(error)
  })
}

generateData()