

/*MILESTONE 3:
Applichiamo stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto ci sono usare varie tecniche(style, className, classList)
Se siete a corto di idee per lo stile, potreste prendere spunto dallo screenshot fornito in consegna. */



//* Recupero gli elementi dal DOM

//* Utilizzo un for per stampare dei numeri da 1 a 100
//* Cerco quali numeri sono multipli di 3 e stampo Fizz al posto del numero
//* Cerco quali numeri sono multipli di 5 e stampo Buzz al posto del numero
//* Cerco quali numeri sono sia multipli di 3 e di 5 e stampo FizzBuzz al posto del numero





//* Recupero gli elementi dal DOM
const result = document.getElementById('result');
console.log(result);

// creo un elemento ul
const list = document.createElement('ul');

//aggiungo una classe alla lista
list.classList.add('row', 'row-cols-2', 'row-cols-sm-3', 'row-cols-md-4', 'row-cols-lg-6');

//* Utilizzo un for per stampare dei numeri da 1 a 100, utilizzando Fizz per i multipli di 3, Buzz per i multipli di 5, e FizzBuzz per i multipli di entrambi
for (let i = 1; i <= 100; i++) {
    //creo un elemento li
    const listItems = document.createElement('li');

    let content;
    let className;

    //determino il contenuto dei li
    if (i % 3 === 0 && i % 5 === 0) {
        content = 'FizzBuzz';
        className = 'fizz-buzz'
    } else if (i % 3 === 0) {
        content = 'Fizz';
        className = 'fizz'
    } else if (i % 5 === 0) {
        content = 'Buzz';
        className = 'buzz'
    } else {
        content = i;
        className = 'normal-items'
    }

    //imposto il contenuto dei li
    listItems.textContent = content;
    listItems.className = className;

    listItems.classList.add('col', 'g-4', 'd-flex', 'align-items-center', 'justify-content-center')

    //Aggiungo i li alla lista ul
    list.appendChild(listItems);

}


//Aggiungo la lista al div del DOM
result.appendChild(list);
