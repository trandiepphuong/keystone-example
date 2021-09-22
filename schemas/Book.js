const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
    fields: {
        name: {
            type: Text,
            isRequired: true
        },
        author: {
            type: Text,
            isRequired: true
        },
        genre: {
            type: Text,
            isRequired: true
        },
        description: {
            type: Text,
            isRequired: true
        },
        edition: {
            type: Text,
            isRequired: true
        },
        readers: {
            type: Relationship,
            ref: 'User.books',
            many: true
        }
    }
}