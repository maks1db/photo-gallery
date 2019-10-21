module.exports.dateEnd = (req, res) => {
    res.json({
        date: new Date(2018, 10, 15, 23, 59, 59)
    });
};

module.exports.dateVoteEnd = (req, res) => {
    res.json({
        date: new Date(2018, 10, 22, 10, 0, 0)
    });
};
