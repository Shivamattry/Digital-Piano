// there are allhe variables that can be configured
var keyDownTime = 0.2;    //duration of key moving down and then up on pressing/clicking
var flashColor = "red"; //this color will be flashed when a key is pressed/clicked 
var bigKeyboardKeyBGColor = "lavenderblush"; //this is the original background color of big keyboard key 
var smallKeyboardKeyBGColor = "pink"; //this is the original background color of small keybaord key
var duration = 2; //duration of the tone played on key press/click

//dictionary: maps id to corresponding note and octave
const dict = {
                "big-key-1" : ["C", 2],
                "big-key-2" : ["D", 2],
                "big-key-3" : ["E", 2],
                "big-key-4" : ["F", 2],
                "big-key-5" : ["G", 2],
                "big-key-6" : ["A", 2], 
                "big-key-7" : ["B", 2],
                "big-key-8" : ["C", 3],
                "big-key-9" : ["D", 3],
                "big-key-10" : ["E", 3],
                "big-key-11" : ["F", 3],
                "big-key-12" : ["G", 3],
                "big-key-13" : ["A", 3],
                "big-key-14" : ["B", 3],
                "big-key-15" : ["C", 4],
                "big-key-16" : ["D", 4],
                "big-key-17" : ["E", 4],
                "big-key-18" : ["F", 4],
                "big-key-19" : ["G", 4],
                "big-key-20" : ["A", 4],
                "big-key-21" : ["B", 4],
                "big-key-22" : ["C", 5],
                "big-key-23" : ["D", 5],
                "big-key-24" : ["E", 5],
                "big-key-25" : ["F", 5],
                "big-key-26" : ["G", 5],
                "big-key-27" : ["A", 5],
                "big-key-28" : ["B", 5],
                
                "small-key-1" : ["C#", 2],
                "small-key-2" : ["D#", 2],
                "small-key-3" : ["F#", 2],
                "small-key-4" : ["G#", 2],
                "small-key-5" : ["A#", 2],
                "small-key-6" : ["C#", 3],
                "small-key-7" : ["D#", 3],
                "small-key-8" : ["F#", 3],
                "small-key-9" : ["G#", 3],
                "small-key-10" : ["A#", 3],
                "small-key-11" : ["C#", 4],
                "small-key-12" : ["D#", 4],
                "small-key-13" : ["F#", 4],
                "small-key-14" : ["G#", 4],
                "small-key-15" : ["A#", 4],
                "small-key-16" : ["C#", 5],
                "small-key-17" : ["D#", 5],
                "small-key-18" : ["F#", 5],
                "small-key-19" : ["G#", 5],
                "small-key-20" : ["A#", 5]
           };


//this function takes care of all the things which should happen after keyboard key press
function handleKeyPress(key) {
    
    //moving keyboard key down
    if(getViewport()[0]>=641)
        key.style.animationName = "moveDownDesktop";
    else
        key.style.animationName = "moveDownMobile";    
    key.style.animationDuration = keyDownTime + "s";
    key.style.backgroundColor = flashColor;
    window.setTimeout(function(){ key.style.animation = "none";
                                  if(key.classList.contains("big-keyboard-key")) //if big keyboard-key is pressed/clicked
                                  {  
                                    key.style.backgroundColor = bigKeyboardKeyBGColor;
                                  }
                                  else                                           //if small keyboard-key is pressed/clicked   
                                  {
                                    key.style.backgroundColor = smallKeyboardKeyBGColor;  
                                  }  
                                }, keyDownTime*1000);   
                                
    //playing corresponding sound
    var sound = document.getElementById('sound').value;
    var note_octave = findNoteAndOctave(key);
    var note = note_octave[0];
    var octave = note_octave[1]; 
    Synth.play(sound, note, octave, duration);             
}


//this function find corresponding note and octave of keyboard key
function findNoteAndOctave (key) {
      return dict[key.id];
}

//update sample rate
function updateSampleRate() {
    Synth.setSampleRate(parseInt(document.getElementById("sample-rate").value));
}

//update volume of the tone
function updateVolume() {
    Synth.setVolume(parseInt(document.getElementById("volume").value)/100);
}

//when the actual keyboard key is press instead of mouse click
window.onkeypress = function() {
                        var x = event.keyCode || event.which;
                        var y = String.fromCharCode(x);
                        var id = getCorrespondingKeyId(y);
                        handleKeyPress(document.getElementById(id));
                    };

//this function return id of the piano key which is pressed
function getCorrespondingKeyId(y) {
    var id = undefined;
    switch(y) {
        case "1":
                    id = "small-key-1";
                    break;
        case "3":
                    id = "small-key-2";
                    break;
        case "6":   
                    id = "small-key-3";
                    break; 
        case "8":
                    id = "small-key-4";
                    break;
        case "0":
                    id = "small-key-5";
                    break;
        case "q":            
        case "Q":
                    id = "small-key-6";
                    break;
        case "e":            
        case "E":
                    id = "small-key-7";
                    break;
        case "y":            
        case "Y":
                    id = "small-key-8";
                    break;
        case "i":            
        case "I":
                    id = "small-key-9";
                    break; 
        case "p":            
        case "P":
                    id = "small-key-10";
                    break;
        case "a":            
        case "A":
                    id = "small-key-11";
                    break;
        case "d":             
        case "D":
                    id = "small-key-12";
                    break;
        case "h":             
        case "H":
                    id = "small-key-13";
                    break;
        case "k":            
        case "K":
                    id = "small-key-14";
                    break; 
        case ";":
                    id = "small-key-15";
                    break;
        case "x":                        
        case "X":
                    id = "small-key-16";
                    break; 
        case "v":
        case "V":    
                    id = "small-key-17";
                    break; 
        case "m":
        case "M":    
                    id = "small-key-18";
                    break;
        case ".":
                    id = "small-key-19";
                    break; 
        case "@":
                    id = "small-key-20";
                    break;
        case "~":
                    id = "big-key-1";
                    break;
        case "2":
                    id = "big-key-2";
                    break;
        case "4":   
                    id = "big-key-3";
                    break; 
        case "5":
                    id = "big-key-4";
                    break;
        case "7":
                    id = "big-key-5";
                    break;
        case "9": 
                    id = "big-key-6";
                    break;
        case "-": 
                    id = "big-key-7";
                    break;
        case "=":
                    id = "big-key-8";
                    break;
        case "w":            
        case "W":
                    id = "big-key-9";
                    break; 
        case "r":            
        case "R":
                    id = "big-key-10";
                    break;
        case "t":            
        case "T":
                    id = "big-key-11";
                    break;
        case "u":             
        case "U":
                    id = "big-key-12";
                    break;
        case "o":             
        case "O":
                    id = "big-key-13";
                    break;
        case "[": 
                    id = "big-key-14";
                    break; 
        case "]":
                    id = "big-key-15";
                    break;
        case "s": 
        case "S":
                    id = "big-key-16";
                    break; 
        case "f":
        case "F":    
                    id = "big-key-17";
                    break; 
        case "g":
        case "G":    
                    id = "big-key-18";
                    break;
        case "j":
        case "J":    
                    id = "big-key-19";
                    break; 
        case "l":
        case "L":    
                    id = "big-key-20";
                    break;  
        case "\"": 
                    id = "big-key-21";
                    break;
        case "z":
        case "Z":     
                    id = "big-key-22";
                    break; 
        case "c":
        case "C":    
                    id = "big-key-23";
                    break;
        case "b": 
        case "B":
                    id = "big-key-24";
                    break; 
        case "n":
        case "N":    
                    id = "big-key-25";
                    break; 
        case ",":   
                    id = "big-key-26";
                    break;
        case "/":  
                    id = "big-key-27";
                    break; 
        case "#":  
                    id = "big-key-28";
                    break;                                                                                                       
    }
    return id;
}                    

//this function returns viewport width and height
//source: https://stackoverflow.com/a/2035211/9155914
function getViewport() {

    var viewPortWidth;
    var viewPortHeight;
   
    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined') {
      viewPortWidth = window.innerWidth,
      viewPortHeight = window.innerHeight
    }
   
   // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined'
    && typeof document.documentElement.clientWidth !=
    'undefined' && document.documentElement.clientWidth != 0) {
       viewPortWidth = document.documentElement.clientWidth,
       viewPortHeight = document.documentElement.clientHeight
    }
   
    // older versions of IE
    else {
      viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
      viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
    }
    return [viewPortWidth, viewPortHeight];
}