# tic_tac_toe
## Spis treści:
* [Tablica](#Tablica)
* [Funkcje](#Funkcje)
* [Notatka](#Notatka)
## Tablica:
winningVariants<br>
![obraz](https://user-images.githubusercontent.com/96210491/201225421-3394f75e-0467-49f9-86c3-450337e6da23.png)


## Funkcje:
* init<br>
![obraz](https://user-images.githubusercontent.com/96210491/201226954-410637af-99c4-4455-9785-87d7ce10300c.png)
* initGame
* checkWinner
* restartGame<br>
![obraz](https://user-images.githubusercontent.com/96210491/201227179-bcac62bd-f2d2-4081-8539-8185a3603a8f.png)

funkcja strzałkowa<br>
* cellClick<br>
![obraz](https://user-images.githubusercontent.com/96210491/201227019-602cc8d4-0b57-488c-a1a1-761fa90b007d.png)

## Notatka

Operatory porównania
Biorąc pod uwagę, że x = 5 , poniższa tabela opisuje operatory porównania:
==	równy 	x == 8	false	
              x == 5	true	
              x == "5"	true	
===	równej wartości i równe typu 	x === 5	true	
                x === "5"	false	
!=	nie równe 	x != 8	true	
!==	nie jest równa wartości, czy też nie równa typu 	x !== 5	false	
                                                          x !== "5"	true	
                                                          x !== 8	true	
>	lepszy niż 	x > 8	false	
<	mniej niż 	x < 8	true	
>=	większe bądź równe 	x >= 8	false	
<=	mniejsza lub równa 	x <= 8	true

Funkcja strzałkowa to skrócony zapis wyrażenia funkcyjnego:

const myFn = function() {
}

[3,1,2].sort(function(a, b) {
})

to samo co powyżej mogę zapisać za pomocą skróconego zapisu:

const myFn = () => {
}

[3,1,2].sort((a, b) => {
})

Jak widzisz główną różnicą jest zamiana słowa function zapisem przypominającym strzałkę (fat arrow).
