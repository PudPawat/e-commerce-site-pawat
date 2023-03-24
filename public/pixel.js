window.QGSettings = {
    "appId": "54f567e3ef89096a7b68",
    "debug": false,
    "personalizationEnabled": true,
    "vapidPublicKey": "BJ5rVHfbQWKVSsGSy3bvDm6Ot8vjvd3tZWmm3axRZuX7Db1WSmtAYcxfC90i_T64ExKqTXvDDWk-CvJX2giyZkA",
    "push": {
       "delay": 0,
       "requestSelf": true,
       "fakePrompt": true,
       "secondsBetweenPrompts": 3600,
       "crossSitesEnabled": true,
       "restrictOrigin": false,
       "useNotifyEndpoint": false,
       "allowedPushDomains": null,
       "prompt": {
          "buttonColor": "#d398f3",
          "isMiddle": false,
          "laterText": "Not Now",
          "message": "Click Allow on the next prompt to subscribe to our push notifications",
          "overlay": true,
          "subscribeText": "Enable",
          "title": "[test] Pawat Stay updated on the latest Offers and News"
       },
       "cymp": {
          "color": "#62906e",
          "desktop": {
             "message": "Click on the lock above and set \"Notification\" to \"Always allow on this site\""
          },
          "mobile": {
             "message": "Click on the lock in the URL bar, go to \"Site Settings\" and then allow \"Notifications\""
          },
          "textColor": "white",
          "threshold": 1
       },
       "optInTip": {
          "title": "[test] Stay tuned to the latest Offers and News",
          "message": "Turn on notifications with these simple steps:\n 1. Click the icon on the address bar as shown in the example above.\n 2. Allow notifications.",
          "bgColor": "#d9f1ce",
          "textColor": "#000000",
          "location": "right",
          "overlay": true
       },
       "onSubscribedPopup": {
          "enabled": false,
          "htmlBody": "",
          "showOverlay": true
       },
       "optInTipEnabled": true
    },
    "qgendpoint": "https://.aiqua.io/notify.html",
    "origin": "https://e-commerce-site-pawat-9mmw.vercel.app/",
    "inWebEnabled": true
 };
 if(window.qg && window.qg.queue) {
     window.qg.queue.unshift(('init', QGSettings));
 }
 !function(q,g,r,a,p,h,js){
     if(!q.qg){
         js=q.qg=function() {
             js.callmethod ? js.callmethod.call(js, arguments) : js.queue.push(arguments);
             js.queue = [];
         }
     }
     if(q.qg.initialized){return;}
     window.qg.queue.unshift(['init',window.QGSettings])
     p=g.createElement(r);
     p.async=!0;
     p.src=a;
     h=g.getElementsByTagName(r)[0];
     console.log("q:",q,"g:",g,"a:",a,"r:",r)
     h.parentNode.insertBefore(p,h);
     q.qg.initialized = true;
 }(window,document,'script','https://cdn.qgraph.io/v3/r/aiqua.js');