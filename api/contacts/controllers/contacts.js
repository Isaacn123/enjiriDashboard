'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
 const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
    async postrequest(ctx){
        console.log("postrequest");
        let entity;

    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.contacts.create(data, { files });
    } else {
      entity = await strapi.services.contacts.create(ctx.request.body);
    }

    // Send mails here with my custom funciton 

    await strapi.plugins['email'].services.email.send({
        to: 'nsambai72@gmail.com',
        from: 'joelrobuchon@strapi.io',
        cc: 'nsambai722@gmail.com',
        bcc: 'ghislainearabian@strapi.io',
        replyTo: 'nsambai72@gmail.com',
        subject: 'Use strapi email provider successfully',
        text: 'Hello world!',
        html: 'Hello world!',
      });

      ctx.send("EMAIL SENT Here on Contacts");
     

    return sanitizeEntity(entity, { model: strapi.models.contacts });
  },
    
};
