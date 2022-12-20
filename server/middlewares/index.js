const getProjectData = (db) => (req, res, next) => {
    const data = {};
    db.query("SELECT * FROM issues; SELECT * FROM users", (err, result) => {
        console.log('inside db.query');
        if (err) throw err;
        res.send({ issues: result[0], users: result[1] });
    });
};

exports.getProjectData = getProjectData;
