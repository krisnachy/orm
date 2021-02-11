const {Article} = require('./models')

Article.destroy({
    where: {
        approved: false
    }
})
.then(() => console.log("Artikel berhasil dihapus"))