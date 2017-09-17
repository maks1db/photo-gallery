module.exports = (obj, props=[]) => {
    
    let result = {};
    Object.assign(result, obj);

    props.forEach(x=> delete result[x]);
    return result;
};