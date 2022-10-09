//Opis
window.onload = function(){// window- okno / load-załadować
    app.init();            //init (initiation)-inicjacja
}

class App{                 //deklaracja klasy o nazwiw App
    winningVariants=[      //wygrane warjanty
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    currentPlayer = "X";    // opecny gracz

    init(){                 // funkcja init()
        document.querySelectorAll(".cell").forEach(                     // query-zapytanie / selector- wypierać / all-wszystko / for each-dla każdego
            cell => cell.addEventListener("click",this.cellClick)       // cell-komórka / add-dodaj / event-wydarzenie / listener-słuchacz        
        );

        document.getElementById("restart-game").addEventListener("click",() => this.restartGame());
    } 
    cellClick = (e) =>{             //parametr e (event - zdarzenie) 
        //console.log(e.target);
        this.playerTurn(e.target)   // target-cel
    }
    initGame(){                     // inicjacja gry funkcja
       this.currentPlayer="X";      // current-obecny

       document.querySelectorAll(".cell").forEach(
       el => {el.innerHTML ="";}
       );                           // el() Szkielet. Metoda js zobacz el definiuje element, który jest używany jako odwołanie do widoku.
    };                              //  ten. el jest tworzony z właściwości tagName, className, id i atrybutów widoku, jeśli zostały określone.
    playerTurn(el){                 // turn - kolejka              
        if(el.innerHTML == "X" || el.innerHTML == "O")return;               // return - zwrócić
        el.innerHTML = this.currentPlayer;                                  // obecny gracz
        this.currentPlayer = this.currentPlayer == "X" ? "O" : "X";         // obecny gracz równa się obecny gracz równy  "X" to póżniej jest "O" i następnie "X"

        this.checkWinner();         // sprawdzanie wygranej
    }
    
    checkWinner(){                  // funkcja sprawdzanie wygranej
        for(let i=0; i < this.winningVariants.length; i++){    // pętla for
            const variant = this.winningVariants[i];
            const a=this.getCellValue(variant[0]);
            const b=this.getCellValue(variant[1]);
            const c=this.getCellValue(variant[2]);

            if(a == "" || b == "" || c == "")continue;      // if-jeśli / continue-kontynuować

            if(a == b && b == c){
                //console.log("zwycięzca "+ a);
                this.setWinner('<br>'+"zwyciężył " + a);
                this.restartGame();
            }
        }
    }
    
   restartGame(){       //funkcja restart gry
       this.initGame();
    }
    
    setWinner(str){
        document.getElementById("winner").innerHTML=str;
    }
    getCellValue(index){
        return document.querySelector(`.cell[data-index='${index}']`).innerHTML;
    }
}

const app = new App();

// Operatory porównania
// Biorąc pod uwagę, że x = 5 , poniższa tabela opisuje operatory porównania:
//==	równy 	x == 8	false	
//              x == 5	true	
//              x == "5"	true	
//===	równej wartości i równe typu 	x === 5	true	
//                x === "5"	false	
//!=	nie równe 	x != 8	true	
//!==	nie jest równa wartości, czy też nie równa typu 	x !== 5	false	
//                                                          x !== "5"	true	
//                                                          x !== 8	true	
//>	lepszy niż 	x > 8	false	
//<	mniej niż 	x < 8	true	
//>=	większe bądź równe 	x >= 8	false	
//<=	mniejsza lub równa 	x <= 8	true

//Funkcja strzałkowa to skrócony zapis wyrażenia funkcyjnego:

//const myFn = function() {
//}

//[3,1,2].sort(function(a, b) {
//})

//to samo co powyżej mogę zapisać za pomocą skróconego zapisu:

//const myFn = () => {
//}

//[3,1,2].sort((a, b) => {
//})

//Jak widzisz główną różnicą jest zamiana słowa function zapisem przypominającym strzałkę (fat arrow).