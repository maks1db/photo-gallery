module.exports = (obj, props=[]) => {

    if (typeof props === 'string') {
        props = [props];
    }
    
    let result = {};
    Object.assign(result, obj);

    props.forEach(x=> delete result[x]);
    return result;
};