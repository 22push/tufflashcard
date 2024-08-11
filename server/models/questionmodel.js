const sql = require("./db.js");

const Question = function (question) {
    this.id = question.id;
    this.description = question.description;
    this.diff_level = question.diff_level;
    this.answer = question.answer;
    this.explanation = question.explanation;
};
Question.create = (newQuestions, result) => {
    sql.query("INSERT INTO questions SET ?", newQuestions, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created questions: ", { id: res.insertId, ...newQuestions });
        result(null, { id: res.insertId, ...newQuestions });
    });
};
Question.getAll = (title, result) => {
    let query = "SELECT * FROM questions";

    if (title) {
        query += ` WHERE title LIKE '%${title}%'`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("questions: ", res);
        result(null, res);
    });
};

Question.deletebyID = (id, result) => {
    sql.query("DELETE FROM questions WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted questions with id: ", id);
        result(null, res);
    });
}

Question.UpdatequesById = (id, newQuestionData, result) => {
    sql.query(
        "UPDATE questions SET description = ?, diff_level = ?, answer = ?, explanation = ? WHERE id = ?",
        [newQuestionData.description, newQuestionData.diff_level, newQuestionData.answer, newQuestionData.explanation, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated question: ", { id: id, ...newQuestionData });
            result(null, { id: id, ...newQuestionData });
        }
    );
};


module.exports = Question;