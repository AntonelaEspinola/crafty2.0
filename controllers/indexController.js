module.exports = {
    index : (req,res) => {
        return res.render('index', {
            title : "Crafty 2.0"
        })
    }
}