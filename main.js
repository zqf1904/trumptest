// You can get your username and user key from your Developer Portal
// You must have already created and compiled a bot before you can talk to it
var pb = new Pandorabot("aiaas.pandorabots.com", "1409612605655", "trumpdatingadvice", "a098f0f853a5f60d99d12dc2366bbfd2");
function doTalk() {
  var input = document.getElementById("yousay").value;
  var old_html = document.getElementById("response").innerHTML
  document.getElementById("yousay").value = "";
  pb.talk(input, function(data) {
    var response = data["responses"];
      document.getElementById("response").innerHTML = old_html + "<br/>You: " + input+ "<br/>" + "Trump: " + response;
    console.log(response);
  });
}
