module.exports = (Schema, model) => model('Top-Picks', new Schema({
    title: String,
    summary: String,
    link: String
}))