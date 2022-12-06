var slideNumber = 1;

var slides = [

    {
          transition: 'move-down',
          color:'#ffffff',
          duration: 3600,
          run: function () {
              $('.name').css('display','block');
              anime({
                  targets: '.name path',
                  strokeDashoffset: [anime.setDashoffset, 0],
                  easing: 'easeInOutSine',
                  duration: 10000,
                  direction: 'alternate',
                  loop: false
              });
          },
      },
    {
        transition: 'move-down',
        color:'#00b8ff',
        duration:2800,
        run: function () {
            typingTimeline(['#a1','#a2','.html','.css','.javascript'])
            anime({
                targets: '.imgs img',
                easing: 'easeInOutSine',
                duration: 200,
                opacity:1,
                delay : function(el,k,v){
                    return 1400 + k*400;
                }
            })

        }
    },
    // {
    //     transition: 'move-left',
    //     duration:2800,
    //     color:'#e74c3c',
    //     run: function () {
    //         typingTimeline(['#b1','#b2','.php','.python','.nodejs'])
    //     }
    // },
    // {
    //     transition: 'move-up',
    //     color:'#ffffff',
    //     run: function () {
    //
    //     }
    // },


];

function start(){
slides[0].run()
setTimeout(function(){

    document.onwheel = nextSlide
                    },slides[0].duration)

particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },

  }

);
var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {

});
}

function nextSlide() {
    if (slides[slideNumber] == undefined) return;
    transform(slides[slideNumber].transition);
    color(slides[slideNumber-1].color,slides[slideNumber].color);
    document.onwheel = null;
    setTimeout(function () {
        slides[slideNumber].run();
        $('.s-'+(slideNumber-1)).hide();

        setTimeout(function(){

            document.onwheel = nextSlide
                            },slides[slideNumber++].duration)
    },1600);


}

function color(bc,pc){
window.pJSDom[0].pJS.fn.vendors.destroypJS();
window["pJSDom"] = [];
    anime({
        targets: 'body',
        easing: 'easeInOutSine',
        duration: 800,
        backgroundColor:bc,
        complete: function(){

                    console.log(pc);
                    anime({
                        targets: 'body',
                        easing: 'linear',
                        duration: 700,
                        opacity:[0,1]
                    });

                    particlesJS('particles-js',

                      {
                        "particles": {
                          "number": {
                            "value": 80,
                            "density": {
                              "enable": true,
                              "value_area": 800
                            }
                          },
                          "color": {
                            "value": pc
                          },
                          "shape": {
                            "type": "circle",
                            "stroke": {
                              "width": 0,
                              "color": pc
                            },
                            "polygon": {
                              "nb_sides": 5
                            },
                          },
                          "opacity": {
                            "value": 0.5,
                            "random": false,
                            "anim": {
                              "enable": false,
                              "speed": 1,
                              "opacity_min": 0.1,
                              "sync": false
                            }
                          },
                          "size": {
                            "value": 5,
                            "random": true,
                            "anim": {
                              "enable": false,
                              "speed": 40,
                              "size_min": 0.1,
                              "sync": false
                            }
                          },
                          "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": pc,
                            "opacity": 0.4,
                            "width": 1
                          },
                          "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "attract": {
                              "enable": false,
                              "rotateX": 600,
                              "rotateY": 1200
                            }
                          }
                        },
                        "interactivity": {
                          "detect_on": "canvas",

                          "modes": {
                            "grab": {
                              "distance": 400,
                              "line_linked": {
                                "opacity": 1
                              }
                            },
                            "bubble": {
                              "distance": 400,
                              "size": 40,
                              "duration": 2,
                              "opacity": 8,
                              "speed": 3
                            },
                            "repulse": {
                              "distance": 200
                            },
                            "push": {
                              "particles_nb": 4
                            },
                            "remove": {
                              "particles_nb": 2
                            }
                          }
                        },

                      });

}});


}

function transform(transition) {

    let posx,posy,tranx,trany;
    switch (transition) {
        case 'move-right':
            posx = '-100vw';
            tranx = '+=100vw'
            posy = 0
            trany = "-=0";
            break;
        case 'move-left':
            posx = '+100vw';
            tranx = '-=100vw'
            posy = 0
            trany = "-=0";
            break;
        case 'move-down':
            posy = '+100vh';
            trany = '-=100vh'
            posx = 0
            tranx = "-=0";
            break;
        case 'move-up':
            posy = '+100vh';
            trany = '-100vh'
            posx = 0
            tranx = "-=0";
            break;

    }
              let s2 =  $('.s-'+(slideNumber));
              s2.css('top',posy);
              s2.css('left',posx);
              s2.css('display','block');
                anime(
                    {
                        targets: ['.s-'+slideNumber,'.s-'+(slideNumber-1)],
                        easing: 'easeInOutSine',
                        duration: 1500,
                        translateX:tranx,
                        translateY:trany,
                        loop: false
                    }
                );
}

function typing (el,cText = 0){
                let text = $(el).attr('text')
                if(cText >= text.length){

                }else {
                    $(el).text($(el).text() + text[cText]);
                    setTimeout(typing,50,el,cText+1);

                }
            }

function typingTimeline(els){
var t = 0
els.forEach(function(el){
setTimeout(typing,t,el);
t = t + $(el).attr('text').length*50+100;
});
}


start()




