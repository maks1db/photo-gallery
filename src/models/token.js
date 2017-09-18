export default {
    table: 'tokens',
    fields: {
        uid: {
            type: 'varchar(50)',
        },
        userId: {
            type: 'int(11)',
            src: 'user'
        }
    }
};