const {Article} = require('./models')

Article.create({
    title: 'Ketiga',
    body: 'Body testing 3'
})
.then(article => {
    console.log(article);
})
.catch(err => console.log(err))