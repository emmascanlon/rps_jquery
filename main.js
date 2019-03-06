
$(document).ready(function() {
  var choice = undefined
  var array = ["rock", "paper", "scissors"]
  var oppChoice = undefined
  results = null
  userWins = 0
  userLosses = 0
  userTies = 0
  oppWins =0
  oppLosses = 0
  oppTies = 0
  
  
  $('.choice_image').on('click', function() {
      //set choice variable 
      choice = this.id
      //image appears for user choice
      $("#user_choice_image").text(choice)
      //computer chooses 
      oppChoice = array[Math.floor((Math.random() * 3))]
      //opponent image appears
      $("#opponent_choice_image").text(oppChoice)
      //result determined
      analyze_results();
      post_results()
    });
    
    //User_record updates
    //Opponent's record updates

  
  
  
  
  function analyze_results() {
    switch (choice) {
          case "rock":
            if (oppChoice === "rock") {
          results = "tie"
          userTies += 1 
          oppTies += 1
          $("#result").text("It's a Tie!")
        } else if (oppChoice === "paper") {
          results = "loss"
         userLosses += 1
         oppWins += 1
          $("#result").text("You Lose!")
        } else if (oppChoice === "scissors") {
          results = "win"
          oppLosses +=1
          userWins += 1
          $("#result").text("You Win!")

          }
        break
    
        case "scissors":
          if (oppChoice === "scissors") {
            results = "tie"
            userTies = 1
            oppTies = 1
            $("#result").text("It's a Tie!")
          } else if (oppChoice === "rock") {
            results = "loss"
            userLosses += 1
            oppWins += 1
          $("#result").text("You Lose!")
          } else if (oppChoice === "paper") {
            results = "win"
          oppLosses +=1
          userWins += 1
          $("#result").text("You Win!")
          }
          break
          case "paper":
            if (oppChoice === "paper") {
              results = "tie"
              userTies = 1
              oppTies = 1
              $("#result").text("It's a Tie!")
            } else if (oppChoice === "scissors") {
              results = "loss"
            userLosses += 1
            oppWins += 1
          $("#result").text("You Lose!")
            } else if (oppChoice === "rock") {
              results = "win"
          oppLosses +=1
          userWins += 1
          $("#result").text("You Win!")
            }
            break
  }}

  function post_results() {
    $("#user_wins").text(userWins)
    $("#user_losses").text(userLosses)
    $("#user_ties").text(userTies)
    $("#opp_wins").text(oppWins)
    $("#opp_losses").text(oppLosses)
    $("#opp_ties").text(oppTies)
  }
  
  $('#reset').on('click', function () {
    userWins = 0
    userTies = 0
    userLosses = 0
    oppWins = 0
    oppTies = 0
    oppLosses = 0
    $("#user_wins").text(userWins)
    $("#user_losses").text(userLosses)
    $("#user_ties").text(userTies)
    $("#opp_wins").text(oppWins)
    $("#opp_losses").text(oppLosses)
    $("#opp_ties").text(oppTies)
  })


  });