//1 Dichiarazione Variabii

let part_price
let name_tag
let distance_tag
let age_tag
let final_price
let n_binary
let n_carriage
let n_site
let myFunction
const element = document.querySelector('div.drop');

//2 Bottone per il salvataggio dei dati inseriti
let button = document.getElementById('save_data');
//3 Condizioni per il calcolo del prezzo del biglietto in base ai km ed all'età
button.addEventListener('click', function(){

    name_tag = document.getElementById('nome').value;
    
    distance_tag = document.getElementById('distance_km').value;

    age_tag = document.getElementById('age_customer').value;

    const price_km = 0.21;
    part_price = (distance_tag * price_km);

    if (age_tag < 18){
        final_price = (part_price - (part_price * 0.2)).toFixed(2);    
    }
    
    else if (age_tag >= 65){
        final_price = (part_price - (part_price * 0.4)).toFixed(2);    
    }

    else{
        final_price = part_price.toFixed(2);
    }

//4  Creazione di numeri casuali per binario, carrozza e posto

     n_binary = Math.floor( Math.random() * 20) + 1;

     n_carriage = Math.floor( Math.random() * 20) + 1;
     
     n_site = Math.floor( Math.random() * (100000 - 90000) ) + 90000;
     
     //5 Stampa dei valori su schermo
     
     document.getElementById('nome-pass').innerHTML = name_tag;
     document.getElementById('client_price').innerHTML ='Il costo del biglietto è di' +" "+ final_price + "€";
     document.getElementById('client_name').innerHTML ='Il biglietto è intestato a:' +" " + name_tag;
     document.getElementById('n_id_binary').innerHTML = n_binary;
     document.getElementById('n_id_carriage').innerHTML = n_carriage;
     document.getElementById('n_id_site').innerHTML = n_site;
     element.classList.add('animate__backInDown');
})








