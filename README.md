# tic_tac_toe
## Spis treści:
* [Tablica](#Tablica)
* [Funkcje](#Funkcje)
* [Notatka](#Notatka)
## Tablica:
winningVariants


## Funkcje:
init
initGame
checkWinner
restartGame

funkcja strzałkowa
cellClick

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
