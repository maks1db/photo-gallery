export default (value) => {
    return value.replace(/[\*:\\|"'<>?\/]/g, '_');
};