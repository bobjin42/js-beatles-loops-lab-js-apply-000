var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay(musicians, instruments){
  var list = [];
  for(var i = 0; i < musicians.length; i++){
    var musician = musicians[i];
    var instrument = instruments[i];
    var sentence = musician + " plays " + instrument;
    list.push(sentence);
  }
  return list;
}

