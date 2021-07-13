let cards_folder_path = "./cards/all/";
let PNG = ".png";
let back_cover_path = "./cards/back_covers/Emerald" + PNG;
let start_button = document.getElementById("startButton");
let img_array = document.getElementsByClassName("card");
let card_pairs_indeces;
let keys_and_images;
let used_images;
let score = 0;

let card_paths_array = [
    cards_folder_path + "C2" + PNG,
    cards_folder_path + "C3" + PNG,
    cards_folder_path + "C4" + PNG,
    cards_folder_path + "C5" + PNG,
    cards_folder_path + "C6" + PNG,
    cards_folder_path + "C7" + PNG,
    cards_folder_path + "C8" + PNG,
    cards_folder_path + "C9" + PNG,
    cards_folder_path + "C10" + PNG,
    cards_folder_path + "CA" + PNG,
    cards_folder_path + "CJ" + PNG,
    cards_folder_path + "CK" + PNG,
    cards_folder_path + "CQ" + PNG,

    cards_folder_path + "D2" + PNG,
    cards_folder_path + "D3" + PNG,
    cards_folder_path + "D4" + PNG,
    cards_folder_path + "D5" + PNG,
    cards_folder_path + "D6" + PNG,
    cards_folder_path + "D7" + PNG,
    cards_folder_path + "D8" + PNG,
    cards_folder_path + "D9" + PNG,
    cards_folder_path + "D10" + PNG,
    cards_folder_path + "DA" + PNG,
    cards_folder_path + "DJ" + PNG,
    cards_folder_path + "DK" + PNG,
    cards_folder_path + "DQ" + PNG,

    cards_folder_path + "H2" + PNG,
    cards_folder_path + "H3" + PNG,
    cards_folder_path + "H4" + PNG,
    cards_folder_path + "H5" + PNG,
    cards_folder_path + "H6" + PNG,
    cards_folder_path + "H7" + PNG,
    cards_folder_path + "H8" + PNG,
    cards_folder_path + "H9" + PNG,
    cards_folder_path + "H10" + PNG,
    cards_folder_path + "HA" + PNG,
    cards_folder_path + "HJ" + PNG,
    cards_folder_path + "HK" + PNG,
    cards_folder_path + "HQ" + PNG,

    cards_folder_path + "S2" + PNG,
    cards_folder_path + "S3" + PNG,
    cards_folder_path + "S4" + PNG,
    cards_folder_path + "S5" + PNG,
    cards_folder_path + "S6" + PNG,
    cards_folder_path + "S7" + PNG,
    cards_folder_path + "S8" + PNG,
    cards_folder_path + "S9" + PNG,
    cards_folder_path + "S10" + PNG,
    cards_folder_path + "SA" + PNG,
    cards_folder_path + "SJ" + PNG,
    cards_folder_path + "SK" + PNG,
    cards_folder_path + "SQ" + PNG
];

start_button.addEventListener("click", start);

function start(){
    this.innerHTML = "Restart Game";

    for(let i=0; i<img_array.length; i++){
        let image = img_array[i];
        image.src = back_cover_path;
        image.addEventListener("click", flipCard);
    }

    shuffle();
}

function shuffle(){
    card_pairs_indeces = {};
    keys_and_images = {};
    used_images = [];
    let key = 0;
    let length = 0;

    while(length < 8){
        if(findInMap(key)) {
            key++;
            continue;
        }
        
        let value = -1;

        while(value === -1 || findInMap(value)) value = randnum(key+1, 15);
        
        setRandomImage(key);
        card_pairs_indeces[key++] = value;
        length++;
    }
}

function findInMap(index){
    let entries = Object.entries(card_pairs_indeces);
    
    for(let [k, v] of entries) {
        if(k === index || v === index) return true;
    }

    return false;
}

function setRandomImage(key){
    let image_id = randnum(0, 51);

    while(used_images.includes(image_id)){
        image_id = randnum(0, 51);
    }
    
    used_images.push(image_id);
    keys_and_images[key] = card_paths_array[image_id];
}

function flipCard(){ 
    let back_cover = back_cover_path.replace('.', '');

    if(this.src.includes(back_cover)) {
        let id = parseInt(this.id);
        let entries = Object.entries(card_pairs_indeces);
        
        for(let [k, v] of entries) {
            if(v === id) {
                id = k;
                break;
            } else if(k === id) break;
        }

        this.src = keys_and_images[id];
    } else {
        this.src = back_cover_path;
    }
}

function checkCards(){
    
}

function randnum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}