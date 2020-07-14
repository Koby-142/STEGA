

    var musicStatus = localStorage.getItem('currentMusic');
document.getElementById('gamemusic').src = musicStatus;
console.log("Music Set To:" + musicStatus);
var musicStateE =localStorage.getItem('musicState')
document.getElementById(musicStateE).checked = true;

var GlobalGameCount = localStorage.getItem('GlobalGameCount');

var altcount = localStorage.getItem('altcount');
//if (altcount = 1){
//     }else{
//    localStorage.setItem('GlobalGameCount', 1); 
 //   localStorage.setItem('altcount', 1); 
//}
function localTrigger(GlobalGameCount){
    var ICId = GlobalGameCount + 1;
    var TheTitle = document.getElementById('title-input').value;
    var TheDifficulty = document.getElementById('difficulty').value;
    var TheImage = document.getElementById('preview-image').src;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    

    localStorage.setItem('title1', TheTitle); 
    localStorage.setItem('difficulty1', TheDifficulty);
    localStorage.setItem('image1', TheImage);
    localStorage.setItem('date1', today)


    localStorage.setItem('GlobalGameCount', ICId);  
    localStorage.setItem('oneitem1', item1.value);  
    localStorage.setItem('twoitem1', item2.value); 
    localStorage.setItem('threeitem1', item3.value);  
    localStorage.setItem('fouritem1', item4.value);  
    localStorage.setItem('fiveitem1', item5.value);  
    localStorage.setItem('sixitem1', item6.value);  
    localStorage.setItem('sevenitem1', item7.value);  
    localStorage.setItem('eightitem1', item8.value); 

    
    document.getElementById('creations').insertAdjacentHTML('beforeend', '<a class="creation-item" id="' + "mu3" + '"><h3>' + TheTitle + '</h3><div class="difficulty-bubble"><p class="' + TheDifficulty + '">' + TheDifficulty + '</p></div><br><p>' + today + '</p><div class="creation-play-button"><button><i class="material-icons">play_arrow</i></button></div></a>');

    var newScript = document.createElement("script");
    var inlineScript = document.createTextNode("document.getElementById('mu3').addEventListener('click', trigger);function trigger(){document.getElementById('I1').innerHTML = item1.value; ;document.getElementById('I2').innerHTML =item2.value;document.getElementById('I3').innerHTML =item3.value;document.getElementById('I4').innerHTML =item4.value;document.getElementById('I5').innerHTML =item5.value;document.getElementById('I6').innerHTML =item6.value;document.getElementById('I7').innerHTML =item7.value;document.getElementById('I8').innerHTML =item8.value;document.getElementById('m1').innerHTML = item1.value;document.getElementById('m2').innerHTML =item2.value;document.getElementById('m3').innerHTML =item3.value;document.getElementById('m4').innerHTML =item4.value;document.getElementById('m5').innerHTML =item5.value;document.getElementById('m6').innerHTML =item6.value;document.getElementById('m7').innerHTML =item7.value;document.getElementById('m8').innerHTML =item8.value;document.getElementById('imgview').src =document.getElementById('preview-image').src;popup4();document.getElementById('gameTitle4').innerHTML= document.getElementById('title-input').value;;document.getElementById('gameImg4').src=document.getElementById('preview-image').src;document.getElementById('gameDifficulty4').classList.add(document.getElementById('difficulty').value);document.getElementById('gameDifficulty4').innerHTML = document.getElementById('difficulty').value;document.getElementById('popup-wrapper4').classList.remove('flipOutY');document.getElementById('tap').play();}");
    newScript.appendChild(inlineScript); 
    document.getElementById('creations').appendChild(newScript);

 
}
