# ShopifyWebhookApp
The app captures the webhook info whch is triggered on an event in shopify and saves in db for further processing.
to install `npm install`<br>
to run `npm app`<br>
Shopify webhook can only send data to https servers for that you need to have ngrok in your sytem.<br>
Install ngrok in your system open your port localhost:3000 publically using ngrok<br>
On shopify cart create a webhook for some event copy the ngrok link there for your local server<br>
with addition route `/savetodb`<br>
when that event occurs on your shopify store the webhook will be triggered and req of that webhook will hit your endpoint which then will be saved in db<br>
The responses can be viewed and edited too in the app.
