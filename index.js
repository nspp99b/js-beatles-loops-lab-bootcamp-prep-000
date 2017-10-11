//Beatles Play Challenge

function theBeatlesPlay(musicians, instruments) {
  var playaz = new Array()
  for (let i = 0; i < musicians.length; i++) {
    playaz.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return playaz
}

//Lennon facts

function johnLennonFacts(array) {
  var faxx = new Array()
  let i = 0
  while (i < array.length) {
    faxx.push(`${array[i++]}!!!`)
  }
  return faxx
}