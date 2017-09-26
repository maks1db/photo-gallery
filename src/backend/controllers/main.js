module.exports.dateEnd = (req, res) => {
    res.json(
        {
            date: new Date(2017,10,1,20,0,0)
        }
    );
};