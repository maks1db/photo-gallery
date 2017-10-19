const className = (obj, c) => {
    if (!c) c = '';

    Object.keys(obj).forEach(k => {
        c += obj[k] ? ' ' + k : '';
    });
    return {className: c.trim()};
};

export default className;