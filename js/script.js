

// Chiedere all'utente di inserire il numero di chilometri che vuole percorrere;
// let distance = parseInt(prompt('Inserisci i chilometri che vuoi percorrere'));

let button = document.getElementById('save_data');

let part_price
let name_tag
let distance_tag
let age_tag
let final_price
button.addEventListener('click', function(){
    name_tag = document.getElementById('nome').value;
    console.log(name_tag)
    
    distance_tag = document.getElementById('distance_km').value;
    console.log(distance_tag)

    age_tag = document.getElementById('age_customer').value;
    console.log(age_tag)

    const price_km = 0.21;
    part_price = (distance_tag * price_km);
    console.log(part_price);

    if (age_tag < 18){
        final_price = (part_price - (part_price * 0.2).toFixed(2));
        console.log(final_price);
    }
    
    else if (age_tag >= 65){
        final_price = (part_price - (part_price * 0.4)).toFixed(2);
        console.log(final_price);
    }

    else{
        final_price = part_price.toFixed(2);
    }

    document.getElementById('nome-pass').innerHTML ='ciao'+ " " + name_tag;
    document.getElementById('nome-pass').innerHTML ='ciao'+ " " + name_tag;
    document.getElementById('nome-pass').innerHTML ='ciao'+ " " + name_tag;
})








