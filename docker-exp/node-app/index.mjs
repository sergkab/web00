import fs from 'fs'

fs.appendFile('my-file.txt', 'File createt by Node.js', (err) => {
  if (err) throw err
  console.log('File saved')
})


