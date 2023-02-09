function Clan(nameClan) {
  var displayName = function (greetings) {
    console.log(greetings + ' ' + 'to' + ' ' + nameClan)
  }
  return displayName;
}

var func = Clan("NWS");

func('welcome');