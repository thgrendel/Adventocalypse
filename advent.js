var advent = {
  bilder: ['0108_advent_hohensalzburg_003.jpeg',
    '1157102485.jpg',
    'Colmar.Weihnachtsmarkt.01_02.jpg',
    'IGP9189.jpg',
    'JCKS63RGEC9J.jpg',
    'Rathaus-Christkindlmarkt-Wiener-Imbiss-Stand-c-STADTBEKANNT-Hofinger-728x485.jpg',
    'Stuttgarter_Weihnachtsmarkt_Stand_1_Thomas_Niedermueller.jpg',
    'Upload_Lange_Christkindlmarkt.jpg',
    'weihnachtsmaerkte_03_07.jpg',
    'Weihnachtsmarkt-Michelstadt-01.jpg',
    'weihnachtsmarkt-niederlande-erfurt.jpeg'],

  nowplaying: [],



  changeStandl: function () {
    console.log('changestandl', arguments);
    var imgcount = this.bilder.length;
    var rnd = this.getRandomIntInclusive(0, imgcount -1);
    var newImg = 'img/' + this.bilder[rnd];
    $('#standl').css("background-image", "url(" + newImg + ")");
    var playernum = 'audio-' + this.getRandomIntInclusive(1, 11);
    var player = document.getElementById(playernum);
    player.play();
    player.volume = 1;
    if (this.nowplaying.length > 0) {
      this.nowplaying.forEach(
        function(item) {
          var volplayer = document.getElementById(item);
          if (volplayer.volume > 0) {
            volplayer.volume -= 0.1;
            console.log(item, volplayer.volume);
          }
        }
      );
    }
    this.nowplaying.push(playernum);
    console.log(player.volume)
  },

  getRandomIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  makeItStop: function () {
    console.log('trying to stop');
    if (this.nowplaying.length > 0) {
      this.nowplaying.forEach(
        function(item) {
          var volplayer = document.getElementById(item);
          if (volplayer.volume > 0) {
            console.log(volplayer);
            if (!volplayer.paused) volplayer.pause();
          }
        }
      );
    }
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    return false;
  }
};

console.log(advent);

