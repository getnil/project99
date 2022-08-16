// Create function addUser()
function addUser {
  (console.log) = "game_page.html"
  // Get value of user by id player1_name_input and player2_name_input
  document.getElementById("player1name").innerHTML = player1name + ":";
  document.getElementById("player2name").innerHTML = player2name + ":";

  // Store these values locally
  player1name = localstorage.getitem("player1name");
  player2name = localStorage.getitem("player2name");

  //Assign "game_page.html" to window.location
}

function send() {
  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;
  actual_answer = parseInt(number1) * parseInt(number2);

  question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
  input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'>";
  check_button = "<br><br><button class='btn btn-info' onclick= 'check()'>Check</button>";
  row =  question_number + input_box + check_button ;

  document.getElementById("output").innerHTML = row;

  document.getElementById("number1").value = "";
  document.getElementById("number1").value = "";

  question_turn = "player1";
  answer_turn = "player2";

  function check()
  {
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
      if(answer_turn == "player1")
      {
        player1_score = player1_score +1;
        document.getElementById("player1_score").innerHTML =      ;
      }
      else
      {
        player2_score = player2_score +1;
        document.getElementById("player2_score").innerHTML = player2_score;
      }
    }
    if(question_turn == "player1")
    {
      question_turn = "player2";
      document.getElementById("player_question").innerHTML = "Question Turn - " + player2name ;
    }
    else
    {
      question_turn = "player1"
      document.getElementById("player_question").innerHTML = "Question Turn - " + player2name ;
    }
    if(answer_turn == "player1")
    {
      answer_turn = "player2";
      document.getElementById("player_question").innerHTML = "Answer Turn - " + player2name ;
    }
    else
    {
      answer_turn = "player1"
      document.getElementById("player_question").innerHTML = "Answer Turn - " + player2name ;
    }