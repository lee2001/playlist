/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Aye","I'm In Love With You","Best in me","What can I do?"];
var artists = ["Davido","Eyfa","Marvin Sapp","Tye Tribbett"];
var imagesLinks = ["http://tooxclusive.com/wp-content/uploads/2014/02/Davido-Aye-Screenshot.jpg","https://www.bellanaija.com/wp-content/uploads/2012/02/Sarkodie-Efya.jpg","https://i.ytimg.com/vi/U-UAP_LMpqc/hqdefault.jpg","https://i.ytimg.com/vi/Oe9qRXe9yAc/hqdefault.jpg"];
var songLength = ["412","518","834","743"];
var songLink = ["https://www.youtube.com/watch?v=uZ-_HIoEBE8","https://www.youtube.com/watch?v=j-T42ulYMcU","https://www.youtube.com/watch?v=U-UAP_LMpqc","https://www.youtube.com/watch?v=Oe9qRXe9yAc"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above




    // BELOW Use forEach Loop to display the data from each of your array's in the correct di
    
    
    

function emptySongInfo(){
    console.log('emptying');
    //$("#songs").empty();
  $('#songs').empty();
   $('#artists').empty();
   $('#lengths').empty();
   $('#images').empty();
   $('#links').empty();
   
   $('#song').empty();
   $('#artist').empty();
   $('#length').empty();
   $('#image').empty();
   $('#link').empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
  var ongs = $('#song').val(); 
  var arti = $('#artist').val();
  var leng = $("#length").val();
  var age = $("#image").val();
  var ink = $("#link").val();
    
    songs.push(ongs);
    artists.push(arti);
    imagesLinks.push(age);
    songLength.push(leng);
    songLink.push(ink);
    
}
function displaySongInfo(){
//  $('#song').empty();
//     $('#artist').empty();
//     $('#length').empty();
//     $('#image').empty();
//     $('#link').empty();
    
    
    
  songs.forEach(function(so) {
        $('#songs').append("<p>" + so + "</p>");
    });
    
    artists.forEach(function(art){
        $('#artists').append("<p>" + art + "</p>");
    });
    
    imagesLinks.forEach(function(img) {
        $('#images').append("<img src=" + img + ">");
    });
    
    songLength.forEach(function(son) {
        $('#lengths').append("<p>" + son + "</p>");
    });
    
    songLink.forEach(function(lin) {
        $('#links').append("<a href =" + lin + ">Listen Now</a>");
    
    });
       
}
$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

 displaySongInfo();
