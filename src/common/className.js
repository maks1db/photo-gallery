const className = (obj, c) => {
    
    Object.keys(obj).forEach(k => {
        c += obj[k] ? ' ' + k : '';
    });
    return {className: c};
};

export default className;