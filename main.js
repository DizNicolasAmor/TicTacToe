/*
TicTacToe
- - - - - - - - - -
http://codepen.io/DizNicolasAmor/pen/vgbgRz 
Author:  Diz, Nicolás Amor (https://github.com/DizNicolasAmor)
This project is a challenge posed by FreeCodeCamp.
*/


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
    // look for the empty spaces in the following order 
    var importantLockers = [4, 0, 8, 2, 6, 1, 5, 7, 3];
    
    for(var i=0; i<8; i++){
      var move = $('#'+importantLockers[i]).text();
      if(move===''){
        lockers[importantLockers[i]] = computer;
        $('#'+importantLockers[i]).text(computer);
        i=8;
      }
    }
  };  //computersTurn();
  
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
