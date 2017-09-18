export default {
    table: 'photos',
    fields: {
        userId: {
            type: 'int(11)',
            src: 'users'
        },
        path: {
            type: 'text',
        },
        title: {
            type: 'varchar(150)'
        },
        description: {
            type: 'text'
        }
    }
};