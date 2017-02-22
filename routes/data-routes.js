let Article = require('../mongoose/article.js');

module.exports = (app) => {

    app.post('/submitcomment', (req, res) => {

        console.log(req.body);

        let newComment = {
            name: req.body.name,
            comment: req.body.comment
        };

        Article.findOneAndUpdate(
            {title: req.body.title},
            {$push: {"comments": newComment}},
            {safe: true, upsert: true},
            (err, model) => {
            }
        );
    });

    app.delete('/deletecomment', (req, res) => {

        console.log(req.body);

        Article.update(
            {title: req.body.title},
            {$pull: {"comments": {"comment": req.body.comment}}},
            (err, model) => {
            }
        );
    })
}
