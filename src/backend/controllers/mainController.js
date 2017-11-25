module.exports.dateEnd = (req, res) => {
    res.json(
        {
            date: new Date(2017,10,25,23,59,59)
        }
    );
};