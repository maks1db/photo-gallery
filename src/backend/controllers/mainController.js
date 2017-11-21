module.exports.dateEnd = (req, res) => {
    res.json(
        {
            date: new Date(2017,10,21,22,59,59)
        }
    );
};