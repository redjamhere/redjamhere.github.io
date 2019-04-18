function gameBegin() {
  $('.btn').text('Начать заного')
  var words = [
    "keyboard",
    "smartphone",
    "apple",
    "display",
    "pixel"
  ]
  
  var word = words[Math.floor(Math.random() * words.length)]
  
  var answer = []
  
  for (let i = 0; i< word.length; i++) {
    answer[i] = "_"
  }
  
  var remain = word.length;
  
  while(remain > 0) {
    alert(answer.join(""));
    
    var guess = prompt("Угадайте букву или нажмите отмена для выхода из игры")
    if (guess===null) {
      break
    } else if (guess.length !== 1) {
      alert('Пожалуйста, введите только одну букву.')
    } else {
      for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
          answer[j] = guess
          remain--
        }
      }
    }
  }
  alert (answer.join(" "))
  alert ("Отлично! Было загадано слово " + word.toUpperCase())
}