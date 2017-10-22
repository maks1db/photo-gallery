const addZero = (v) => {
    const str = v.toString();
    return (str.length === 1 ? '0' : '') + str;
};

export default addZero;