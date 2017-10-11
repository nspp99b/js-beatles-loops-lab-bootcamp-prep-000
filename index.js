//Beatles Play Challenge

function theBeatlesPlay(musicians, instruments) {
  var playaz = new Array()
  for (let i = 0; i < musicians.length; i++) {
    playaz.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return playaz
}
