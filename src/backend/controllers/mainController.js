module.exports.dateEnd = (req, res) => {
    res.json(
        {
            date: new Date(2017,10,25,23,59,59)
        }
    );
};

module.exports.dateVoteEnd = (req, res) => {
    res.json(
        {
            date: new Date(2017,10,29,10,0,0)
        }
    );
};