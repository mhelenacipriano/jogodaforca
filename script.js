const listaPalavras = [{
    "id": 1,
    "palavra": "Elefante",
    "categoriaId": 1
}]
const secretWord = document.querySelector("#secretWord");
const usedLetters = document.getElementById("usedLetters")
const letterInput = document.getElementById("letterInput");



fetch('http://localhost:3000/palavras')
    .then(response => response.json())
    .then(data => {
        data.forEach(item =>listaPalavras.push({
        id: item.id,
        palavra: item.palavra,
        categoriaId: item.categoriaId
    })

    )
    const palavraSorteada = sortWord(listaPalavras);

    
    for(var i=0; i<palavraSorteada.palavra.length;i++){
        secretWord.insertAdjacentText("afterend", " _")
    }

    console.log(palavraSorteada)
    //letterInput.addEventListener("onkeyup", myFunction(palavraSorteada.palavra, letterInput.value))
})

    function sortWord(wordList){
        return wordList[Math.floor(Math.random()*wordList.length)];
    }


    function checkGuess(){
        usedLetters.insertAdjacentText("afterend", letterInput)
    }
    

    // async function myFunction(answer, guess) {
        
    //     await 
    //     console.log(answer)
    //     console.log(guess)
    //     // console.log(answer)
    //     // usedLetters.textContent = letterInput.value.toUpperCase();
    //     // console.log(letterInput.value)
    //   }
    
    const readKey = () => new Promise(resolve => letterInput.addEventListener('keypress', resolve, { once: true }));

    (async function guessLetter() {
      console.log('Press a key');
      const x = await readKey();
      usedLetters.insertAdjacentText("afterend", String.fromCharCode(x.which))
    
      console.log('Press a key');
      const y = await readKey();      
      usedLetters.insertAdjacentText("afterend", String.fromCharCode(y.which))    
    }());

