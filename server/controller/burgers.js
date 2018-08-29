const db = require('../config/orm');

module.exports = (function(){
    return {
        index: function(req, res){
            res.sendfile(path.join(__dirname, './public/index.html'))
        },
      /*   findOne: (req, res) => {
            console.log(`Body: ${req.body}, ID: ${req.params.id}`);
            var burger = req.parmas.id
            db.findOne(burger, function(dbBurger) {
                res.json(dbBurger);
            })
        },
        */
    } 
})();