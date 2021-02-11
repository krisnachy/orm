const article = require("./models/article");

const {Article} = require('./models')

// Article.findAll().then(article =>
//     console.log(article))

//Jika ingin mengambil data dengan kondisi
Article.findAll({
    where: {
        approved: false
    }
})
.then(article => console.log(article))

// Article.findOne({
//     where: { id: 1}
// })
// .then(article => console.log(article))