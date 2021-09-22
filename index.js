const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const UserSchema = require('./schemas/User');
const BookSchema = require('./schemas/Book');
const PROJECT_NAME = 'my-app';
const adapterConfig = { mongoUri: 'mongodb://localhost/my-app' };

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
});

keystone.createList('User', UserSchema);
keystone.createList('Book', BookSchema);
module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true })],
};