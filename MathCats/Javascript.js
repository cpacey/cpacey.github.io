const questionText = document.getElementById( 'question' );
const answerText = document.getElementById( 'answer' );
const button = document.getElementById( 'button' );
const image = document.getElementById( 'image' );
const type = document.getElementById( 'type' );

answerText.onkeydown = checkAnswerIfEnter;
type.onchange = setUpQuestion;

setUpQuestion();

function setUpQuestion() {

  const question = getQuestion( type.value );

  questionText.expected = question.answer;
  questionText.value = question.text;

  answerText.value = null;
  answerText.focus();
}

function getQuestion( questionType ) {
  const first = getRandomIntInclusive(0, 9);
  const second = getRandomIntInclusive(0, 9);

  switch( questionType ) {

    case 'add':
      return {
        answer: first + second,
        text: `${first} + ${second}`
      };

    case 'sub':
      return {
        answer: first - second,
        text: `${first} - ${second}`
      };

    case 'mul':
      return {
        answer: first * second,
        text: `${first} x ${second}`
      };

    case 'div':
      const divisor = second + 1; // Can't divide by zero, so let's do range 1-10 instead of 0-9
      return {
        answer: first,
        text: `${first * divisor} / ${divisor}`
      };

  }

  throw new "Unexpected type";
}

function checkAnswer() {

  const expected = questionText.expected;
  const answer = parseInt( answerText.value );

  if( answer === NaN ) {
    alert( "That's not a number!" )
    return;
  }

  if( answer !== expected ) {
    image.src = "data:image/jpeg;base64,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"
    // alert( "Try again!" );
    return;
  }

  answerText.readonly = true;
  image.src = null;

  ajax_get(
    'https://api.thecatapi.com/v1/images/search?size=full',
    function( data ) {
      image.src = data[0]["url"];
      setUpQuestion();
      answerText.readonly = false;
    }
  );
}

function checkAnswerIfEnter( event ) {
  const ENTER_KEY = 13;

  if( event.keyCode === ENTER_KEY ) {
    checkAnswer();
  }
}

// Shamelessly stolen from StackOverflow
function getRandomIntInclusive( min, max ) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

function ajax_get(url, callback) {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log('responseText:' + xmlhttp.responseText);
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
      callback(data);
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
