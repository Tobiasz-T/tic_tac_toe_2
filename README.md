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
![obraz](https://user-images.githubusercontent.com/96210491/201227745-e3632bdf-2f29-4cd8-b652-de2d7b71ae2d.png)

funkcja strzałkowa<br>
* cellClick<br>
![obraz](https://user-images.githubusercontent.com/96210491/201227931-93e83c1d-71f6-49da-8576-95cb570c5d5d.png)



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
