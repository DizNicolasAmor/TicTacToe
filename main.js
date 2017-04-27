/*
TicTacToe
- - - - - - - - - -
http://codepen.io/DizNicolasAmor/pen/vgbgRz 
Author:  Diz, Nicolás Amor (https://github.com/DizNicolasAmor)
This project is a challenge posed by FreeCodeCamp.
*/

//level = medium;  //computer does not recognize vertical patterns. 

$(document).ready(function(){
  var lockers = ['#', '#', '#', '#', '#', '#', '#', '#', '#'];
  var player = 'X'; 
  var computer = 'O'; 
  var gameOn = false; 
  var allLockersFilled = false;
  
  //reset: computer starts and set  its value in locker #4
  function reset(){
    lockers = ['#', '#', '#', '#', '#', '#', '#', '#', '#'];
    $('.locker').text('');
    gameOn=true; 
    if(computer == 'X'){
       $('#'+4).text(computer);
      lockers[4]=computer;
    }
  }

  //choose X or O
  $('#chooseX').click(function(){
    player = 'X';
    computer = 'O'; 
    $('#choose').hide();
    reset();
  });
  
  $('#chooseO').click(function(){
    player = 'O';
    computer = 'X'; 
    $('#choose').hide();
    reset();
  });
  
  //play again?  button
  $('#playAgain').click(function(){
    $('#result').addClass('hide');
    $('#choose').show();
  });
  
  
  //click on a locker and set X or O 
  $('.locker').click(function(){
    var slot = $(this).attr('id');
    playerTurn(player, slot);
    gameOn=false; 
  });
  
  //what happens when user plays
  function playerTurn(player, id){
    var spotTaken = $('#'+id).text();
    if(spotTaken ===''){
      lockers[id] = player;
      $('#'+id).text(player);
      allLockersF();
      checkWin(lockers, player);
      if(gameOn===false){
        computersTurn();
        allLockersF();
        checkWin(lockers, computer);
      }
    }
  };

  //what happens when computer plays
  function computersTurn(){
    var noOneCanWin = true; 

    function playPattern(){
	    // look for the empty spaces in the following order 
	    var importantLockers = [4, 0, 8, 2, 6, 1, 5, 7, 3];
   
	    for(var i=0; i<9; i++){
	      var move = $('#'+importantLockers[i]).text();
	      if(move===''){
	        lockers[importantLockers[i]] = computer;
	        $('#'+importantLockers[i]).text(computer);
	        i=9;
	      }
	    }
	}

    //   ***first check if can win in next move***

    //check first row
    if(lockers[0]== computer && lockers[1]== computer && lockers[2]=="#"){
      noOneCanWin = false;
      lockers[2] = computer;
      $('#'+2).text(computer);
    }

    else if(lockers[0]== computer && lockers[2]== computer && lockers[1]=="#"){
      noOneCanWin = false;
      lockers[1] = computer;
      $('#'+1).text(computer);
    }

    else if(lockers[1]== computer && lockers[2]== computer && lockers[0]=="#"){
      noOneCanWin = false;
      lockers[0] = computer;
      $('#'+0).text(computer);
    }
    
    //check second row
    else if(lockers[3]== computer && lockers[4]== computer && lockers[5]=="#"){
      noOneCanWin = false;
      lockers[5] = computer;
      $('#'+5).text(computer);
    }

    else if(lockers[3]== computer && lockers[5]== computer && lockers[4]=="#"){
      noOneCanWin = false;
      lockers[4] = computer;
      $('#'+4).text(computer);
    }

    else if(lockers[4]== computer && lockers[5]== computer && lockers[3]=="#"){
      noOneCanWin = false;
      lockers[3] = computer;
      $('#'+3).text(computer);
    }

    //check third row
    else if(lockers[6]== computer && lockers[7]== computer && lockers[8]=="#"){
      noOneCanWin = false;
      lockers[8] = computer;
      $('#'+8).text(computer);
    }

    else if(lockers[6]== computer && lockers[8]== computer && lockers[7]=="#"){
      noOneCanWin = false;
      lockers[7] = computer;
      $('#'+7).text(computer);
    }

    else if(lockers[7]== computer && lockers[8]== computer && lockers[6]=="#"){
      noOneCanWin = false;
      lockers[6] = computer;
      $('#'+6).text(computer);
    }

    //top-left bottom-right diagonal
    else if(lockers[0]== computer && lockers[4]== computer && lockers[8]=="#"){
      noOneCanWin = false;
      lockers[8] = computer;
      $('#'+8).text(computer);
    }

    else if(lockers[0]== computer && lockers[8]== computer && lockers[4]=="#"){
      noOneCanWin = false;
      lockers[4] = computer;
      $('#'+4).text(computer);
    }

    else if(lockers[4]== computer && lockers[8]== computer && lockers[0]=="#"){
      noOneCanWin = false;
      lockers[0] = computer;
      $('#'+0).text(computer);
    }

    //bottom-left top-right diagonal
    else if(lockers[6]== computer && lockers[4]== computer && lockers[2]=="#"){
      noOneCanWin = false;
      lockers[2] = computer;
      $('#'+2).text(computer);
    }

    else if(lockers[6]== computer && lockers[2]== computer && lockers[4]=="#"){
      noOneCanWin = false;
      lockers[4] = computer;
      $('#'+4).text(computer);
    }

    else if(lockers[4]== computer && lockers[2]== computer && lockers[6]=="#"){
      noOneCanWin = false;
      lockers[6] = computer;
      $('#'+6).text(computer);
    }

    
    //  ***if not, prevent Player Win in next move***
    
    //check first row
    else if(lockers[0]== player && lockers[1]== player && lockers[2]=="#"){
      noOneCanWin = false;
      lockers[2] = computer;
      $('#'+2).text(computer);
    }

    else if(lockers[0]== player && lockers[2]== player&& lockers[1]=="#"){
      noOneCanWin = false;
      lockers[1] = computer;
      $('#'+1).text(computer);
    }

    else if(lockers[1]== player && lockers[2]== player && lockers[0]=="#"){
      noOneCanWin = false;
      lockers[0] = computer;
      $('#'+0).text(computer);
    }

    //check second row
    else if(lockers[3]== player && lockers[4]== player && lockers[5]=="#"){
      noOneCanWin = false;
      lockers[5] = computer;
      $('#'+5).text(computer);
    }

    else if(lockers[3]== player && lockers[5]== player && lockers[4]=="#"){
      noOneCanWin = false;
      lockers[4] = computer;
      $('#'+4).text(computer);
    }

    else if(lockers[4]== player && lockers[5]== player && lockers[3]=="#"){
      noOneCanWin = false;
      lockers[3] = computer;
      $('#'+3).text(computer);
    }

    //check third row
    else if(lockers[6]== player && lockers[7]== player && lockers[8]=="#"){
      noOneCanWin = false;
      lockers[8] = computer;
      $('#'+8).text(computer);
    }

    else if(lockers[6]== player && lockers[8]== player && lockers[7]=="#"){
      noOneCanWin = false;
      lockers[7] = computer;
      $('#'+7).text(computer);
    }

    else if(lockers[7]== player && lockers[8]== player && lockers[6]=="#"){
      noOneCanWin = false;
      lockers[6] = computer;
      $('#'+6).text(computer);
    }

    //top-left bottom-right diagonal
    else if(lockers[0]== player && lockers[4]== player && lockers[8]=="#"){
      noOneCanWin = false;
      lockers[8] = computer;
      $('#'+8).text(computer);
    }

    else if(lockers[0]== player && lockers[8]== player && lockers[4]=="#"){
      noOneCanWin = false;
      lockers[4] = computer;
      $('#'+4).text(computer);
    }
    
    else if(lockers[4]== player && lockers[8]== player && lockers[0]=="#"){
      noOneCanWin = false;
      lockers[0] = computer;
      $('#'+0).text(computer);
    }

    //bottom-left top-right diagonal
    else if(lockers[6]== player && lockers[4]== player && lockers[2]=="#"){
      noOneCanWin = false;
      lockers[2] = computer;
      $('#'+2).text(computer);
    }

    else if(lockers[6]== player && lockers[2]== player && lockers[4]=="#"){
      noOneCanWin = false;
      lockers[4] = computer;
      $('#'+4).text(computer);
    }

    else if(lockers[4]== player && lockers[2]== player && lockers[6]=="#"){
      noOneCanWin = false;
      lockers[6] = computer;
      $('#'+6).text(computer);
    }
    
    //   ***if not, play pattern***
    if(noOneCanWin == true){
      playPattern();
    }

}  //computersTurn()
  
  //function checkWin //  Note: CP -> currentPlayer
  function checkWin(lockers, CP){
    if(lockers[0]===CP && lockers[1]===CP &&  lockers[2]===CP){
      gameOn=true; 
      $('#gameResult').html(CP+' wins!');
      $('#result').removeClass('hide');
    }else if(lockers[3]===CP && lockers[4]===CP &&  lockers[5]===CP){
      gameOn=true; 
      $('#gameResult').html(CP+' wins!');
      $('#result').removeClass('hide');
    }else if(lockers[6]===CP && lockers[7]===CP &&  lockers[8]===CP){
      gameOn=true; 
      $('#gameResult').html(CP+' wins!');
      $('#result').removeClass('hide');
    }else if(lockers[0]===CP && lockers[3]===CP &&  lockers[6]===CP){
      gameOn=true; 
      $('#gameResult').html(CP+' wins!');
      $('#result').removeClass('hide');
    }else if(lockers[1]===CP && lockers[4]===CP &&  lockers[7]===CP){
      gameOn=true; 
      $('#gameResult').html(CP+' wins!');
      $('#result').removeClass('hide');
    }else if(lockers[2]===CP && lockers[5]===CP &&  lockers[8]===CP){
      gameOn=true; 
      $('#gameResult').html(CP+' wins!');
      $('#result').removeClass('hide');
    }else if(lockers[0]===CP && lockers[4]===CP &&  lockers[8]===CP){
      gameOn=true; 
      $('#gameResult').html(CP+' wins!');
      $('#result').removeClass('hide');
    }else if(lockers[6]===CP && lockers[4]===CP &&  lockers[2]===CP){
      gameOn=true; 
      $('#gameResult').html(CP+' wins!');
      $('#result').removeClass('hide');
    }else if(allLockersFilled===true){
      gameOn=true; 
      $('#gameResult').html("It's a tie!");
      $('#result').removeClass('hide');
    }else{
      gameOn = false; 
    }
    
  };
  
  //check if allLockersFilled
  function allLockersF(){
    allLockersFilled=true; 

    for(var j=0; j<9; j++){
      if(lockers[j]==='#'){
         allLockersFilled=false; 
         }
    }
  }
  
  
  
});  //document ready
