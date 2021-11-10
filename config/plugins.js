module.exports = ({ env }) => {

  if(env('NODE_ENV') === 'production'){
    return  {
      // ...
      upload: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
          region: env('us-east-2'),
          params: {
            Bucket: env('enjiricenter'),
          },
        },
      },
      // ...
    }
  }


  return {
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('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'),
      },
      settings: {
        defaultFrom: 'nsambai72@gmail.com',
        defaultReplyTo: 'nsambai72@gmail.com',
        testAddress: 'nsambai72@gmail.com',
      },
    },

    other_plugins:{}
  }
  
 

};