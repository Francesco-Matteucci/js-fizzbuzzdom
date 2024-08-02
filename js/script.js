
/* MILESTONE 2:
Creiamo un elemento che faccia da contenitore nel DOM e poi riempiamolo con i degli elementi via JS.
Possiamo usare varie tecniche  (template literals, innerHTML, appendecc)
MILESTONE 3:
Applichiamo stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto ci sono usare varie tecniche (style , className, classList)
Se siete a corto di idee per lo stile, potreste prendere spunto dallo screenshot fornito in consegna. */



//* Recupero gli elementi dal DOM

//* Utilizzo un for per stampare dei numeri da 1 a 100
//* Cerco quali numeri sono multipli di 3 e stampo Fizz al posto del numero
//* Cerco quali numeri sono multipli di 5 e stampo Buzz al posto del numero
//* Cerco quali numeri sono sia multipli di 3 e di 5 e stampo FizzBuzz al posto del numero





//* Recupero gli elementi dal DOM
const result = document.getElementById('result');
console.log(result);



//* Utilizzo un for per stampare dei numeri da 1 a 100, utilizzando Fizz per i multipli di 3, Buzz per i multipli di 5, e FizzBuzz per i multipli di entrambi
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

