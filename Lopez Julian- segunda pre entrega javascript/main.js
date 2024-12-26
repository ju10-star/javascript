const Song = function(artist, name, gender){
    this.artist= artist
    this.name= name
    this.gender= gender
}

let song1 = new Song("no.ice", "feel the break", "tech house")
let song2 = new Song("Cassian", "Shiver", "melodic techno")
let song3 = new Song("dretchler", "what u gonna do", "tech house")
let song4 = new Song("dretchler", "i cant belive it", "tech house")
let song5 = new Song("nsj.ofc", "verdes", "minimal tech house")

let list = [song1, song2, song3, song4, song5]

function addsong() {
    let artist= prompt("define song artist: ")
    let name= prompt("define song name: ")
    let gender= prompt("definde song gender: ")

    if(isNaN(artist) || isNaN(name) || isNaN(gender)){
        alert("define valid atributtes")
        return
    }
    let song = new Song(artist, name, gender)
    list.push(song)
    console.log(list)
}

function searchSong() {
    let keyWord = prompt("search song: ")
    let result = list.filter((x)=> x.name.toUpperCase().includes.keyWord)
    if (result.length >0){
        console.table(result)
    }else{
        alert("dont have any results")
    }
}


console.log(list)
addsong()
searchSong()