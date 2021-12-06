// const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => {
  
  if(env('NODE_ENV') === 'production'){
    // const config = parse(process.env.DATABASE_URL);
   
    return {
      defaultConnection:'default',
      connections:{
        default:{
          connector: 'bookshelf',
          settings: {
            client: 'mysql',
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
            database: process.env.DATABASE_NAME,
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
          },
          ssl: {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
          },
          options: {
             useNullAsDefault: true,
          },
          // settings: {
          //   client: 'postgres',
          //   host: config.host,
          //   port: config.port,
          //   database: config.database,
          //   username: config.user,
          //   password: config.password,
          //   ssl: {
          //     rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
          //   },
          // },
          // options: {
          //   ssl: env.bool('DATABASE_SSL', false),
          // },
        }
      }
    }
  }

  return{
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
}
};
