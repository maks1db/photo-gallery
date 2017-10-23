module.exports.dateEnd = (req, res) => {
    res.json(
        {
            date: new Date(2017,10,19,23,59,59)
        }
    );
};