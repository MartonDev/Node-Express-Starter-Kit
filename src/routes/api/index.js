const bcrypt = require('bcrypt')

module.exports.example = (req, res) => {

  bcrypt.hash('TEST_PASSWORD', 10, (err, hash) => {

    if(err) {

      res.status(500).json({ success: false, error: err })
      return

    }

    res.status(200).json({ success: true, hash: hash })

  })

}
