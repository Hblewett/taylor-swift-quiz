
const albums = [
    {
        name: "Taylor Swift",
        color: "#79A889",
        songs: [
            "Tim McGraw",
            "Picture to Burn",
            { title: "Teardrops on My Guitar - Radio Single Remix",
                aliases: ["Teardrops on My Guitar", "TOMG"]},
            { title: "A Place in this World",
                aliases: ["apitw"]},
            "Cold As You",
            "The Outside",
            { title: "Tied Together with a Smile",
                aliases: ["ttwas"]},
            "Stay Beautiful",
            { title: "Should've Said No",
                aliases: ["shouldve said no"]},
            { title: "Mary's Song (Oh My My My",
                aliases: ["Mary's Song", "Marys song"]},
            "Our Song",
            { title: "I'm Only Me When I'm With You",
                aliases: ["Om only me when im with you", "iomwiwy"]},
            "Invisible",
            { title: "A Perfectly Good Heart",
                aliases: ["apgh"]},
            {title: "Teardrops on my guitar - Pop Version",
                aliases: ["teardrops on my guitar", "tomg"]}
        ]
    },
    {
        name: "Fearless",
        color: "#D6B85A",
        songs: [
            "Fearless",
            "Fifteen",
            "Love Story",
            "Hey Stephen",
            "White Horse",
            { title: "You Belong With Me",
              aliases: ["YBWM"] },
            { title: "Breathe (feat. Colbie Caillat",
                aliases: ["breathe"]},
            "Tell Me Why",
            { title: "You're Not Sorry",
              aliases: ["Youre Not Sorry"]},
            { title: "The Way I Loved You",
                aliases: ["twily"]},
            { title: "Forever & Always (Piano Version)",
                aliases: ["forever and always", "forever & always"]},
            "The Best Day",
            "Change",
            "Jump Then Fall",
            "Untouchable",
            { title: "Come In With The Rain",
                aliases: ["ciwtr"]},
            "Superstar",
            { title: "The Other Side Of The Door",
                aliases: ["tosotd"]},
            { title: "Today Was A Fairytale",
                aliases:["twaf"]},
            { title: "You All Over Me (feat. Maren Morris",
                aliases: ["you all over me", "yaom"]},
            { title: "Mr. Perfectly Fine",
                aliases: ["mr perfectly fine"]},
            "We Were Happy",
            { title: "That's When (feat. Keith Urban)",
                aliases: ["that's when", "thats when"]},
            { title: "Don't You",
                aliases: ["dont you"]},
            "Bye Bye Baby"
        ]
    },
    {
        name: "Speak Now",
        color: "#9B78B5",
        songs: [
            "Mine",
            "Sparks Fly",
            "Back to December",
            "Speak Now",
            "Dear John",
            "Mean",
            { title: "The Story Of Us",
                aliases: ["tsou"]},
            "Never Grow Up",
            "Enchanted",
            "Better Than Revenge",
            "Innocent",
            "Haunted",
            "Last Kiss",
            "Long Live",
            "Ours",
            "Superman",
            { title: "Electric Touch (feat. Fall Out Boy",
                aliases: ["electric touch"]},
            { title: "When Emma Falls in Love",
                aliases: ["wefil"]},
            "I Can See You",
            { title: "Castles Crumbling (feat. Hayley Williams",
                aliases: ["castles crumbling"]},
            "Foolish One",
            "Timeless"
        ]
    },
    {
        name: "Red",
        color: "#B5545B",
        songs: [
            "State Of Grace",
            "Red",
            "Treacherous",
            { title: "I Knew You Were Trouble",
                aliases: ["ikywt"]},
            { title: "All Too Well",
                aliases: ["atw"]},
            "22",
            "I Almost Do",
            { title: "We Are Never Ever Getting Back Together",
                aliases: ["wanegbt"]},
            "Stay Stay Stay",
            { title: "The Last Time (feat. Gary Lightbody of Snow Patrol",
                aliases: ["the last time"]},
            "Holy Ground",
            "Sad Beautiful Tragic",
            "The Lucky One",
            { title: "Everything Has Changed (feat. Ed Sheeran",
                aliases: ["everything has changed"]},
            "Starlight",
            "Begin Again",
            { title: "The Moment I Knew",
                aliases: ["tmik"]},
            { title: "Come Back...Be Here",
                aliases: ["come back be here"]},
            "Girl At Home",
            { title: "State of Grace (Acoustic Version)",
                aliases: ["state of grace"]},
            "Ronan",
            "Better Man",
            { title: "Nothing New (feat. Pheobe Bridgers)",
                aliases: ["nothing new"]},
            "Babe",
            { title: "Message In A Bottle",
                aliases: ["miab"]},
            { title: "I Bet You Think About Me (feat. Chris Stapleton)",
                aliases: ["I bet you think about me", "ibytam"]},
            "Forever Winter",
            "Run",
            { title: "The Very First Time",
                aliases: ["tvft"]},
            { title: "All Too Well (10 Minute Version)",
                aliases: ["ATWTMV"]}
        ]
    },
    {
        name: "1989",
        color: "#8BBBD5",
        songs: [
            { title: "Welcome To New York",
                aliases: ["wtny"]},
            "Blank Space",
            "Style",
            { title: "Out Of The Woods",
                aliases: ["ootw"]},
            { title: "All You Had To Do Was Stay",
                aliases: ["ayhtdws"]},
            "Shake It Off",
            { title: "I Wish You Would",
                aliases: ["iwyw"]},
            "Bad Blood",
            "Wildest Dreams",
            { title: "How You Get The Girl",
                aliases: ["hygtg"]},
            "This Love",
            "I Know Places",
            "Clean",
            "Wonderland",
            { title: "You Are In Love",
                aliases: ["yail"]},
            "New Romantics",
            { title: "Slut!",
                aliases: ["slut"]},
            { title: "Say Don't Go",
                aliases: ['say dont go']},
            { title: "Now That We Don't Talk",
                aliases: ["now that we dont talk", "ntwdt"]},
            "Suburban Legends",
            { title: "Is It OVer Now?",
                aliases: ["is it over now", "iion"]},
            { title: "Bad Blood (feat. Kendrick Lamar)",
                aliases: ["bad blood"]}
        ]
    },
    {
        name: "reputation",
        color: "#555555",
        songs: [
            { title: "...Ready For It?",
                aliases: ["ready for it"]},
            "End Game",
            { title: "I Did Something Bad",
                aliases: ["idsb"]},
            { title: "Don't Blame Me",
                aliases: ["dont blame me"]},
            "Delicate",
            { title: "Look What You Made Me Do",
                aliases: ["lwymmd"]},
            { title: "So It Goes...",
                aliases: ["so it goes"]},
            "Gorgeous",
            "Getaway Car",
            "King Of My Heart",
            { title: "Dancing With Our Hands Tied",
                aliases: ["dwoht"]},
            "Dress",
            { title: "This Is Why We Can't Have Nice Things",
                aliases: ["tiwwchnt", "this is why we cant have nice things"]},
            { title: "Call It What You Want",
                aliases: ["ciwyw"]},
            { title: "New Year's Day",
                aliases: ["new years day"]}
        ]
    },
    {
        name: "Lover",
        color: "#E9A5BE",
        songs: [
            { title: "I Forgot That You Existed",
                aliases: ["iftye"]},
            "Cruel Summer",
            "Lover",
            "The Man",
            "The Archer",
            { title: "I Think He Knows",
                aliases: ["ithk"]},
            { title: "Miss Americana & The Heartbreak Prince",
                aliases: ["miss americana and the heartbreak prince", "maathp"]},
            "Paper Rings",
            "Cornelia Street",
            { title: "Death By A Thousand Cuts",
                aliases: ["dbatc"]},
            "London Boy",
            { title: "Soon You'll Get Better (feat. The Chicks)",
                aliases: ["soon you'll get better", "soon youll get better", "sygb"]},
            "False God",
            { title: "You Need To Calm Down",
                aliases: ["yntcd"]},
            "Afterglow",
            { title: "ME! (feat. Brendon Urie of Panic! At The Disco)",
                aliases: ["me", "me!"]},
            { title: "It's Nice To Have A Friend",
                aliases: ["its nice to have a friend", "inthaf"]},
            "Daylight"
            
        ]
    },
    {
        name: "folklore",
        color: "#A0A0A0",
        songs: [
            { title: "the 1",
                aliases: ["the one"]},
            "cardigan",
            { title: "the last great american dynasty",
                aliases: ["tlgad"]},
            { title: "exile (feat. Bon Iver",
                aliases: ["exile"]},
            "my tears ricochet",
            "mirrorball",
            "seven",
            "august",
            { title: "this is me trying",
                aliases: ["timt"]},
            "illicit affairs",
            "invisible string",
            "mad woman",
            "epiphany",
            "betty",
            "peace",
            "hoax",
            { title: "the lakes - bonus track",
                aliases: ["the lakes"]}            
        ]
    },
    
{
        name: "evermore",
        color: "#B48761",
        songs: [
            "willow",
            "champagne problems",
            "gold rush",
            { title: "'tis the damn season",
                aliases: ["tis the damn season", "ttds"] },
            "tolerate it",
            { title: "no body, no crime (feat HAIM)",
                aliases: ["no body no crime", "nbnc"] },
            "happiness",
            "dorothea",
            { title: "coney island (feat. The National)",
                aliases: ["coney island"] },
            "ivy",
            "cowboy like me",
            "long story short",
            "marjorie",
            "closure",
            { title: "evermore (feat. Bon Iver)",
                aliases: ["evermore"] },
            { title: "right where you left me - bonus track",
                aliases: ["right where you left me", "rwylm", "rwy​lmbt"] },
            { title: "it's time to go - bonus track",
                aliases: ["its time to go", "ittg", "ittgbt"] }
        ]
    },

    {
        name: "Midnights",
        color: "#354B80",
        songs: [
            "Lavender Haze",
            "Maroon",
            { title: "Anti-Hero",
                aliases: ["anti hero", "antihero"] },
            { title: "Snow On The Beach (feat. Lana Del Ray)",
                aliases: ["snow on the beach", "sotb", "sotbfldr"] },
            { title: "You're On Your Own, Kid",
                aliases: ["youre on your own kid", "yoyok"] },
            "Midnight Rain",
            { title: "Question...?",
                aliases: ["question"] },
            "Vigilante Shit",
            "Bejeweled",
            "Labyrinth",
            "Karma",
            "Sweet Nothing",
            "Mastermind",
            "The Great War",
            { title: "Bigger Than The Whole Sky",
                aliases: ["bttws"] },
            "Paris",
            "High Infidelity",
            "Glitch",
            { title: "Would've, Could've, Should've",
                aliases: ["wouldve couldve shouldve"] },
            "Dear Reader",
            "Hits Different",
            { title: "Snow On The Beach (feat. More Lana Del Ray)",
                aliases: ["snow on the beach", "sotb", "sotbfmldr"] },
            { title: "Karma (feat. Ice Spice)",
                aliases: ["karma", "kfis"] }
        ]
    },
    {
        name: "THE TORTURED POETS DEPARTMENT",
        color: "#8E877F",
        songs: [
            { title: "Fortnight (feat. Post Malone)",
                aliases: ["fortnight", "ffpm"] },
            { title: "The Tortured Poets Department",
                aliases: ["ttpd"]},
            { title: "My Boy Only Breaks His Favorite Toys",
                aliases: ["mbobhft"] },
            "Down Bad",
            { title: "So Long, London",
                aliases: ["so long london"] },
            { title: "But Daddy I Love Him",
                aliases: ["bdilh"] },
            { title: "Fresh Out The Slammer",
                aliases: ["fots"]},
            { title: "Florida!!! (feat. Florence + The Machine)",
                aliases: ["florida", "florida feat florence and the machine", "fffatm"] },
            { title: "Guilty as Sin?",
                aliases: ["guilty as sin"] },
            { title: "Who's Afraid of Little Old Me?",
                aliases: ["whos afraid of little old me", "waolom"] },
            { title: "I Can Fix Him (No Really I Can)",
                aliases: ["i can fix him", "icfh", "icfhnric"] },
            "loml",
            { title: "I Can Do It With a Broken Heart",
                aliases: ["icdiwabh"] },
            { title: "The Smallest Man Who Ever Lived",
                aliases: ["tsmwel"] },
            "The Alchemy",
            "Clara Bow",
            "The Black Dog",
            "imgonnagetyouback",
            "The Albatross",
            { title: "Chloe or Sam or Sophia or Marcus",
                aliases: ["cososom"] },
            { title: "How Did It End?",
                aliases: ["how did it end", "hdie"] },
            "So High School",
            { title: "I Hate It Here",
                aliases: ["ihih"]},
            "thanK you aIMee",
            { title: "I Look in People's Windows",
                aliases: ["i look in peoples windows", "ilipw"] },
            "The Prophecy",
            "Cassandra",
            "Peter",
            "The Bolter",
            "Robin",
            "The Manuscript"
        ]
    },
    {
        name: "The Life of a Showgirl",
        color: "#DB873D",
        songs: [
            { title: "The Fate of Ophelia",
                aliases: ["tfoo"] },
            "Elizabeth Taylor",
            "Opalite",
            "Father Figure",
            "Eldest Daughter",
            "Ruin The Friendship",
            "Actually Romantic",
            { title: "Wi$h Li$t",
                aliases: ["wish list"] },
            "Wood",
            { title: "CANCELLED!",
                aliases: ["cancelled"] },
            "Honey",
            { title: "The Life of a Showgirl",
                aliases: ["tloas"] },
            "Patient Zero",
            { title: "Cleveland!",
                aliases: ["cleveland"] },
            "Pink Clouding",
            "Babylon"
        ]
    }

];

const guessedSongs = [];


 
 /*
 // TEST ONLY: Guess every song except the last one
albums.forEach(album => {
    album.songs.forEach(song => {
        const title = typeof song === "string" ? song : song.title;

        if (title !== "Babylon") {
            guessedSongs.push(title);
        }
    });
});
*/
/*
 // TEST ONLY: Complete reputation except for one song
const testAlbum = albums.find(album => album.name === "reputation");

testAlbum.songs.forEach(song => {
    const title = typeof song === "string" ? song : song.title;

    if (title !== "Dress") {
        guessedSongs.push(title);
    }
});

*/


const completedAlbums = [];
let gaveUp = false;
let gameWon = false;

const totalSongs = albums.reduce((total, album) => {
    return total + album.songs.length;
}, 0);


function displayAlbums() {

    const grid = document.getElementById("albumGrid");
    grid.innerHTML = "";

    albums.forEach(album => {
     
        const column = document.createElement("div");
        column.className = "album";

        const heading = document.createElement("h2");
        heading.textContent = album.name;

        // Set the album heading colour
        heading.style.backgroundColor = album.color;

        column.appendChild(heading);


        
    album.songs.forEach((song, index) => {

        // Get the song title
        const title = typeof song === "string" ? song : song.title;

        const songBox = document.createElement("div");
        songBox.className = "song";

         // Check whether this song has been guessed
        if (guessedSongs.includes(title)) {

            // Correctly guessed songs keep their album colour
            songBox.textContent = (index + 1) + ". " + title;
            songBox.style.backgroundColor = album.color + "55";

        } else if (gaveUp) {

            // Reveal missed songs in red
            songBox.textContent = (index + 1) + ". " + title;
            songBox.classList.add("missed");

        } else {

            // Hide songs that haven't been guessed
            songBox.textContent = (index + 1) + ".";
        }


        column.appendChild(songBox);
    });

        grid.appendChild(column);

    });
}


function launchConfetti(color, amount = 500) {

    // Create the requested number of confetti pieces
    for (let i = 0; i < amount; i++) {

        const piece = document.createElement("div");
        piece.className = "confetti";

        // Use the completed album's colour
        piece.style.backgroundColor =
            color === "rainbow"
                ? albums[Math.floor(Math.random() * albums.length)].color
                : color;

        // Random horizontal position
        piece.style.left = Math.random() * 100 + "vw";

        // Random falling speed and delay
        piece.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        piece.style.animationDelay =
            (Math.random() * 3) + "s";

        document.body.appendChild(piece);

        // Remove confetti after animation
        piece.addEventListener("animationend", () => {
            piece.remove();
        });
    }
}


function celebrateWin() {

    if (gameWon || gaveUp) return;

    gameWon = true;

    // Launch rainbow confetti
    launchConfetti("rainbow", 500);

    // Display the victory message
    document.getElementById("guessMessage").textContent =
        "✨ YOU'RE A MASTERMIND! ✨";
    document.getElementById("guessMessage").classList.add("victory");

    // Stop further guesses
    document.getElementById("guessInput").disabled = true;
    document.getElementById("guessButton").disabled = true;
    document.getElementById("giveUpButton").disabled = true;
}



function checkGuess() {

    if (gaveUp) return;
    const input = document.getElementById("guessInput");
    const guess = input.value.trim().toLowerCase();
    let correctGuess = false;

    albums.forEach(album => {

        
        album.songs.forEach(song => {

             // Get the title and possible alternative guesses
            const title = typeof song === "string" ? song : song.title;
            const aliases = typeof song === "string" ? [] : song.aliases;

             // Check the title and all aliases
             const validGuesses = [title, ...aliases];

            if (validGuesses.some(name => name.toLowerCase() === guess)) {

                correctGuess = true;

                if (!guessedSongs.includes(title)) {
                     guessedSongs.push(title);
                }
            }
        });

    });

    
    // Check if any albums have been completed
    albums.forEach(album => {

        const allGuessed = album.songs.every(song => {

            const title = typeof song === "string" ? song : song.title;

            return guessedSongs.includes(title);
        });

        // Launch confetti only when an album is completed
        if (allGuessed && !completedAlbums.includes(album.name)) {

            completedAlbums.push(album.name);
            launchConfetti(album.color);
        }
    });


    // Update the grid
    displayAlbums();

    // Update the score
    document.getElementById("score").textContent =
    "Score: " + guessedSongs.length + " / " + totalSongs;
    
    // Check for a perfect score
    if (guessedSongs.length === totalSongs && !gaveUp) {
        celebrateWin();
        input.value = "";
        return;
    }

    const message = document.getElementById("guessMessage");

    if (correctGuess) {
        input.value = "";
        message.textContent = "";
    } else {
        message.textContent = "Song not found!";
    }

    input.focus();
}


function giveUp() {

    gaveUp = true;

    // Reveal all remaining songs
    displayAlbums();

    // Disable guessing
    document.getElementById("guessInput").disabled = true;
    document.getElementById("guessButton").disabled = true;
    document.getElementById("giveUpButton").disabled = true;

    // Display a message
    document.getElementById("guessMessage").textContent =
        "Game Over!";
}


displayAlbums();
document.getElementById("score").textContent =
    "Score: 0 / " + totalSongs;

document.getElementById("guessButton")
    .addEventListener("click", checkGuess);

document.getElementById("guessInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            checkGuess();
        }
    });

document.getElementById("giveUpButton")
    .addEventListener("click", giveUp);
