
module.exports = {
    index: async ctx =>{

        await strapi.plugins['email'].services.email.send({
            to: 'nsambai72@gmail.com',
            from: 'nsambai72@gmail.com',
            cc: 'nsambai72@gmail.com',
            bcc: 'nsambai72@gmail.com',
            replyTo: 'nsambai72@gmail.com',
            subject: 'Use strapi email provider successfully',
            text: 'Hello world!',
            html: 'Hello world!',
          });

          ctx.send("EMAIL SENT");
          ctx.unauthorized(`You're not logged in!`);
     }
}