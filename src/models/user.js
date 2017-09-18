export default {
    table: 'users',
    fields: {
        email: {
            type: 'varchar(100)',
            private: true
        },
        name: {
            type: 'varchar(150)',
        },
        password: {
            type: 'varchar(150)',
            validation: (value) => value.length < 6 ? 'Слишком короткий пароль' : '',
            private: true
        },
        role: {
            type: 'varchar(40)',
            values: ['admin','user']
        }
    }
};