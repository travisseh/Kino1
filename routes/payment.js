const express = require("express")
const middleware = require("../middleware")
const router = express.Router()
const bodyParser = require("body-parser")



router.post('/payment/subscribed', bodyParser.raw({type: 'application/json'}), (request, response) => {
    let event;
  
    try {
      event = JSON.parse(request.body);
    }
    catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
    }
  
   console.log(event)
  
    // Return a response to acknowledge receipt of the event
    response.json({received: true});
  });

module.exports = router