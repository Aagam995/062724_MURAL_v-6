function ExecuteScript(strId)
{
  switch (strId)
  {
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
};
var player = GetPlayer();
var name = player.GetVar("name");
var email = player.GetVar("email");

function getActor() {
  return {
    "mbox": "mailto:" + email,
    "objectType": "Agent",
    "name": name
  };
}
