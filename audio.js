var data = {
    title:[
        'Mary Gu - ne vlyublyajsya',
        'Miyagi and Jendshpil - tamada',
        //'XATUBA - Со мной воюет сатана',
        'Xcho - eskiz ',
        'Xcho - ty i ya',
        'gadus@ - rejesor',  
    ],
    song:[
       'music/Mary Gu - Не влюбляйся.mp3',
       'music/miyagi-jendshpil-tamada.mp3',
       //'music/XATUBA - Со мной воюет сатана.mp3',
       'music/Xcho - Эскизы.mp3',
       'music/xcho-ty-i-ja_456245667.mp3',
       'music/Градусы - Режисер (Я в этом фильме главный актер, я сценарист, и я режисер).mp3',
    ],
    poster :[
        'https://melomanoff.net/uploads/posts/2020-11/medium/1605906003-175278398.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbg2poqR_UZUmXJSdPmilZxqoYlD1btJKTqR4L3SeRn5HR5rbyyagE5CUhtqPj4pjKPig&usqp=CAU',
        //'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPI8alYrp45H14wMZtWzXt2ZpkdKB4nt4D3nh5Lnt4JXEVuGa-a2zDCMnP0pzJHibRCqI&usqp=CAU',
        'data:image/jpeg;base64,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',
        'data:image/jpeg;base64,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',
        'https://i.ytimg.com/vi/WqJ3MZlMoZE/mqdefault.jpg',
        
    ]

}

var song = new Audio()
var currentSong = 0

window.onload = function () {
playSong()

}
     

function playSong() {
    song.src = data.song[currentSong];

    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[currentSong];

    let img = document.getElementById("row1");
    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";

    let main = document.getElementById("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();
    }

    function playOrPauseSong() {
    let play = document.getElementById("play")
        
        
     if (song.paused) {
        song.play();
        play.src = "images/pause.png" 
    } else {
        song.pause();
        play.src = "images/play-button-arrowhead.png" 
     }
       
    }

    song.addEventListener("timeupdate",function(){
        console.log(song.currentTime);
        console.log(song.duration);
        let fill = document.getElementById("fill");
        let position = song.currentTime / song.duration;
        fill.style.width = position * 100+ "%";

        convertTime(song.currentTime)

        if (song.ended) {
            next ()
            } 
    })


    function  convertTime(seconds){
        let currentTime = document.getElementById("currentTime")
        let min = Math.floor(seconds / 60)
        let sec = Math.floor(seconds % 60)
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;
        currentTime.textContent = min + ":" + sec
        totalTime(Math.round(song.duration))
        console.log(seconds);
        console.log(min);
        
        
    }

    function totalTime(seconds) {
        var min = Math.floor(seconds / 60)
        var sec = Math.floor(seconds % 60)
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;

          if(isNaN(min) || isNaN(sec)){
                  return false;
          }else{

              currentTime.textContent += " / " + min + ":" + sec
          }
        
        };

    
          function next() {
            currentSong ++;
            if (currentSong >= data.song.length) {
            currentSong = 0
            }
            playSong ();
            play.src = "images/pause.png"
            }
            function pre() {
            currentSong --;
            if (currentSong < 0) {
            currentSong = data.song.length - 1;
            }
            playSong ();
            play.src = "images/pause.png"
            }
            
            
            function muted() {
                var mute = document.getElementById ("mute")
                if (song.muted) {
                song.muted = false
                mute.src = "images/volume.png" 
                } else {
                song.muted = true
                mute.src = "images/volume-mute.png"
                
                }
                }


                function increase() {
                    song.volume += 0.2;
                    }
                    
                    function decrease() {
                    song.volume -= 0.2;
                    }
          
    
    
   





