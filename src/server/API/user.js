let db = require('../db/index')

exports.get = (req, res) => {
    var sql = 'select * from user'
    db.query(sql, [req.query.name, req.query.password], (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}