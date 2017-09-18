const createTable = (model) => {
    let keys = '', i = 0;

    Object.keys(model.fields).forEach( k => {
        keys += `${k} ${model.fields[k]} ${i === model.fields.lenght - 1 ? '' : ','}`;
        i++;
    });
    return `CREATE TABLE IF NOT EXISTS ${model.table} (id int(11) NOT NULL AUTO_INCREMENT, ${keys} PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`;

};

module.exports = createTable;