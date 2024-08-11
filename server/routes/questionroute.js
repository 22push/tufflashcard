module.exports = app => {
    const questions = require('./../controllers/question.controller')
    var router = require("express").Router();

    // console.log("shiii...........");
    router.get("/" , questions.findAll);

    router.post("/", questions.create);

    router.delete("/:id", questions.deletebyID);

    router.patch("/:id", questions.updatebyId);

    app.use('/questions', router);
};