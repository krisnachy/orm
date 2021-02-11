const {Article} = require('./models')

const query = {
    where: {id: 1}
}

Article.update({
    approved: false
}, query)
.then(() => {
    console.log("Artikel berhasil diupdate");
    process.exit()
})
.catch(err => {
    console.error("Gagal mengupdate");
})

/* Bentuk lain 
Article.update({
    title: "Diubah",
    body: "Isisnya juga ikut diubah",
    approved: true    
}, {
    where: {id: 1}
})
.then(() => {
    console.log("Artikel berhasil diupdate");
    process.exit()
})
.catch(err => {
    console.error("Gagal mengupdate");
}) 
*/