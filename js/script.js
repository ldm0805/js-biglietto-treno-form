

// Chiedere all'utente di inserire il numero di chilometri che vuole percorrere;
// let distance = parseInt(prompt('Inserisci i chilometri che vuoi percorrere'));

const button_data_name = document.getElementById('save_data');
const button_data_distance = document.getElementById('dave_data');
const button_data_age = document.getElementById('save_data');
 
button_data_name.addEventListener('click', function(){
    let input_tag = document.getElementById('nome');
    let value_input = input_tag.value;
    console.log(value_input);
})

button_data_name.addEventListener('click', function(){
    let input_tag = document.getElementById('distance_km');
    let value_input = input_tag.value;
    console.log(value_input);
})

button_data_name.addEventListener('click', function(){
    let input_tag = document.getElementById('age_customer');
    let value_input = input_tag.value;
    console.log(value_input);
})


// Calcolare il prezzo del biglietto in base al prezzo per chilometro (0.21 € al km) e tenendo conto dell'eventuale scontistica nel caso l'età dell'utente soddisfi uno dei seguenti requisiti:
const price_km = 0.21;
let part_price = (button_data_distance * price_km);

let final_price
// SE L'utente è minorenne
//         ALLORA ha diritto ad uno sconto del 20%;
if (button_data_age < 18){
    final_price = (part_price - (part_price * 0.2).toFixed(2));
    console.log(final_price)
}

// SE L'utente ha più di 65 anni 
//         ALLORA ha diritto ad uno sconto del 40%; 
else if (button_data_age >= 65){
    final_price = (part_price - (part_price * 0.4)).toFixed(2);
    console.log(final_price)

}

// SE L'utente è maggiorenne ma ha meno di 65 anni 
//         ALLORA non ha diritto allo sconto;
else {
    final_price = part_price.toFixed(2);
    console.log(final_price)

}

