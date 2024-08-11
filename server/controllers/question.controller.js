const Question = require('./../models/questionmodel');

exports.create = (req, res) => {
    console.log("shiii...........")
    console.log(req.body);
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const question = new Question({
        id: req.body.id,
        description: req.body.description,
        diff_level: req.body.diff_level,
        answer: req.body.answer,
        explanation: req.body.explanation
    });
    Question.create(question, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Questions."
            });
        else res.send(data);
    });
};
exports.findAll = (req, res) => {
    const title = req.query.title;

    Question.getAll(title, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Questions."
            });
        else res.send(data);
    });
};
exports.deletebyID = (req, res) => {
    Question.deletebyID(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Questions with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Questions with id " + req.params.id
            });
          }
        } else res.send({ message: `Questions was deleted successfully!` });
    });
};


exports.updatebyId = (req, res) => {
    // console.log("sadfgiiiiiiiiiiiiiiiiii")
    if (!req.body) {
        return res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    Question.UpdatequesById(
        req.params.id,
        {
            description: req.body.description,
            diff_level: req.body.diff_level,
            answer: req.body.answer,
            explanation: req.body.explanation
        },
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    return res.status(404).send({
                        message: `Not found Question with id ${req.params.id}.`
                    });
                } else {
                    return res.status(500).send({
                        message: "Error updating Question with id " + req.params.id
                    });
                }
            } else return res.send(data);
        }
    );
};

