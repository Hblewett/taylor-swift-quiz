
const albums = [
    //Debut
    {
        name: "Taylor Swift",
        color: "#79A889",
        image: "images/taylorswift.png",
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
            { title: "Mary's Song (Oh My My My)",
                aliases: ["Mary's Song", "Marys song"]},
            "Our Song",
            { title: "I'm Only Me When I'm With You",
                aliases: ["im only me when im with you", "iomwiwy"]},
            "Invisible",
            { title: "A Perfectly Good Heart",
                aliases: ["apgh"]},
            {title: "Teardrops on my guitar - Pop Version",
                aliases: ["teardrops on my guitar", "tomg"]}
        ]
    },
    
    //Fearless
    {
        name: "Fearless",
        color: "#D6B85A",
        image: "images/fearless.png",
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
            "Bye Bye Baby",
            { title: "If This Was A Movie",
                aliases: ["itwam"]}
        ]
    },
    
    //Speak Now
    {
        name: "Speak Now",
        color: "#9B78B5",
        image: "images/speaknow.png",
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
    
    //Red
    {
        name: "Red",
        color: "#B5545B",
        image: "images/red.png",
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
            { title: "The Very First Night",
                aliases: ["tvfn"]},
            { title: "All Too Well (10 Minute Version)",
                aliases: ["ATWTMV"]}
        ]
    },
    
    //1989
    {
        name: "1989",
        color: "#8BBBD5",
        image: "images/1989.png",
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
            { title: "Is It Over Now?",
                aliases: ["is it over now", "iion"]},
            { title: "Bad Blood (feat. Kendrick Lamar)",
                aliases: ["bad blood"]}
        ]
    },
    
    //Reputation
    {
        name: "reputation",
        color: "#555555",
        image: "images/reputation.png",
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

    //Lover
    {
        name: "Lover",
        color: "#E9A5BE",
        image: "images/lover.png",
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
            "Daylight",
            { title: "All Of The Girls You Loved Before",
                aliases: ["aotgylb"]}
        ]
    },

    //folklore
    {
        name: "folklore",
        color: "#A0A0A0",
        image: "images/folklore.png",
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
            "the lakes"                      
        ]
    },  

    //evermore
    {
        name: "evermore",
        color: "#B48761",
        image: "images/evermore.png",
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
            { title: "right where you left me",
                aliases: ["rwylm"] },
            { title: "it's time to go",
                aliases: ["ittg", "its time to go"] }
        ]
    },

    //Midnigts
    {
        name: "Midnights",
        color: "#354B80",
        image: "images/midnights.png",
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
                aliases: ["karma", "kfis"] },
            { title: "You're Losing Me",
                aliases: ["youre losing me"]}
        ]
    },

    //TTPD
    {
        name: "THE TORTURED POETS DEPARTMENT",
        color: "#8E877F",
        image: "images/ttpd.png",
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

    //The Life of a Showgirl
    {
        name: "The Life of a Showgirl",
        color: "#5BAFA9",
        image: "images/thelifeofashowgirl.png",
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
    },

    //The Holiday Collection
    {
        name: "The Taylor Swift Holiday Collection",
        color: "#D21404",
        image: "images/holiday.png",
        songs: [
            "Last Christmas",
            {title: "Christmases When You Were Mine",
                aliases: ["cwywm"]},
            "Santa Baby",
            "Silent Night",
            { title: "Christmas Must Be Something More",
                aliases: ["cmbsm"]},
            "White Christmas",
            "Christmas Tree Farm"
        ]
    },

    //Beautiful Eyes
    {
        name: "Beautiful Eyes",
        color: "#FFAA4D",
        image: "images/beautifuleyes.png",
        songs: [
            "Beautiful Eyes",
            { title: "Should've Said No (Alternate Version)",
                aliases: ["shouldve said no"]},
            { title: "Teardrops on My Guitar (Acoustic Version)",
                aliases: ["teardrops on my guitar", "tomg"]},
            { title: "Picture to Burn (Radio Edit)",
                aliases: ["picture to burn"]},
            { title: "I'm Only Me When I'm With you",
                aliases: ["im only me when im with you", "iomwiwy"]},
            { title: "I Heart ?",
                aliases: ["I heart"]}
        ]
    },

    //Movies / Soundtracks
    {
        name: "Movies / Soundtracks",
        color: "#DDB8E8",
        songs: [
            {
                title: "Crazier",
                hint: "Hannah Montana: The Movie (2009)"
            },
            {
                title: "Safe & Sound",
                aliases: ["safe and sound"],
                hint: "The Hunger Games (2012)"
            },
            {
                title: "Eyes Open",
                hint: "The Hunger Games (2012)"
            },
            {
                title: "Sweeter Than Fiction",
                hint: "One Chance (2013)"
            },
            {
                title: "I Don't Wanna Live Forever",
                aliases: ["I dont wanna live forever", "idwlf"],
                hint: "Fifty Shades Darker (2017)"
            },
            {
                title: "Beautiful Ghosts",
                hint: "Cats (2019)"
            },
            {
                title: "Macavity",
                hint: "Cats (2019)"
            },
            {
                title: "Only The Young",
                hint: "Miss Americana (2020)"
            },
            {
                title: "Carolina",
                hint: "Where The Crawdads Sing (2022)"
            },
            {
                title: "I Knew It, I Knew You",
                aliases: ["I knew it I knew you", "IKIKY"],
                hint: "Toy Story 5 (2026)"
            }
        ]
    },

    //Features
    {
        name: "Features",
        color: "#DDB8E8",
        songs: [
            {
                title: "Best Days of Your Life",
                alias: ["bdoyl"],
                hint: "Kellie Pickler (2008)"
            },
            {
                title: "Half Of My Heart",
                aliases: ["homh"],
                hint: "John Mayer (2009)"
            },
            {
                title: "Two Is Better Than One",
                aliases: ["tibto"],
                hint: "BOYS LIKE GIRLS (2009)"
            },
            {
                title: "Both Of Us",
                hint: "B.o.B (2012)"
            },
            {
                title: "Highway Don't Care",
                aliases: ["highway dont care"],
                hint: "Tim McGraw (2013)"
            },
            {
                title: "Babe",
                hint: "Sugarland (2018)"
            },
            {
                title: "Gasoline",
                hint: "HAIM (2020)"
            },
            {
                title: "Birch",
                hint: "Big Red Machine (2021)"
            },
            {
                title: "Renegade",
                hint: "Big Red Machine (2021)"
            },
            {
                title: "The Joker and The Queen",
                aliases: ["tjatq"],
                hint: "Ed Sheeran (2022)"
            },
            {
                title: "The Alcott",
                hint: "The National (2023)"
            },
            {
                title: "us.",
                aliases: ["us"],
                hint: "Gracie Abrams (2024)"
            }
        ]
    },

    //Written For Others
    {
        name: "Written For Others",
        color: "#DDB8E8",
        songs: [
            {
                title: "This Is Really Happening",
                aliases: ["TIRH"],
                hint: "Britini Hoover (2007)"
            },
            {
                title: "Best Days of Your Life",
                alias: ["bdoyl"],
                hint: "Kellie Pickler (2008)"
            },
            {
                title: "Bein' With My Baby",
                aliases: ["bein with my baby"],
                hint: "Shea Fisher (2009)"
            },
            {
                title: "You'll Always Find Your Way Back Home",
                aliases: ["youll always find your way back home", "yafywbh"],
                hint: "Hannah Montana / Miley Cyrus (2009)"
            },
            {
                title: "Permanent Marker",
                hint: "Mary Sarah (2010)"
            },
            {
                title: "Better Man",
                hint: "Little Big Town (2016)"
            },
            {
                title: "This Is What You Came For",
                aliases: ["TIWYCF"],
                hint: "Calvin Harris feat. Rihanna (2016)"
            },
            {
                title: "Babe",
                hint: "Sugarland (2018)"
            }
        ]
    }

];


let guessedSongs = [];
const completedAlbums = [];
let gaveUp = false;
let gameWon = false;

/* Normalize song titles so different apostrophes work */
function normalizeTitle(title) {
    return title
        .toLowerCase()
        .trim()
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/['"]/g, "")
        .replace(/\s+/g, " ");
}

const totalSongs = albums.reduce((total, album) => {
    return total + album.songs.length;
}, 0);

// Save the player's progress
function saveProgress() {
    localStorage.setItem("taylorSwiftGuesses", JSON.stringify(guessedSongs));
}


function displayAlbums() {

    const grid = document.getElementById("albumGrid");
    grid.innerHTML = "";

    albums.forEach(album => {
     
        const column = document.createElement("div");
        column.className = "album";

        const heading = document.createElement("h2");

        // Set album heading colour
        heading.style.backgroundColor = album.color;

        if (album.image) {

            // Use album title image
            const titleImage = document.createElement("img");
            titleImage.src = album.image;
            titleImage.alt = album.name;
            titleImage.className = "albumTitleImage";

            heading.appendChild(titleImage);

        } else {

            // Use regular text if no image exists
            heading.textContent = album.name;

        }

        column.appendChild(heading);

        // Count guessed songs in this album
        const guessedCount = album.songs.filter(song => {
            const title = typeof song === "string" ? song : song.title;
            return guessedSongs.includes(title);
        }).length;

        // Create progress bar container
        const progressContainer = document.createElement("div");
        progressContainer.className = "albumProgress";

        // Create coloured progress bar
        const progressFill = document.createElement("div");
        progressFill.className = "albumProgressFill";
        progressFill.style.backgroundColor = album.color;
        progressFill.style.width =
            (guessedCount / album.songs.length * 100) + "%";

        // Create progress count
        const progressText = document.createElement("span");
        progressText.className = "albumProgressText";
        progressText.textContent =
            guessedCount + "/" + album.songs.length;

        // Add progress bar beneath album heading
        progressContainer.appendChild(progressFill);
        column.appendChild(progressContainer);
        column.appendChild(progressText);

        album.songs.forEach((song, index) => {
            
        // Add a gap before specific songs      
        const sectionStarts = {
            "Fearless": {
                "You All Over Me (feat. Maren Morris": "From The Vault",
                "If This Was A Movie": "The More Fearless Chapter"
            },
            "Speak Now": {
                "Electric Touch (feat. Fall Out Boy": "From The Vault"
            },
            "Red": {
                "Ronan": "Bonus Tracks",
                "Better Man": "From The Vault"
            },
            "1989": {
                "Slut!": "From The Vault",
                "Bad Blood (feat. Kendrick Lamar)": "Bonus Track"
            },
            "folklore": {
                "the lakes": "Bonus Track"
            },
            "evermore": {
                "right where you left me": "Bonus Tracks"
            },
            "Lover": {
                "All Of The Girls You Loved Before": "The More Lover Chapter"
            },
            "Midnights": {
                "The Great War": "3am Edition",
                "Hits Different": "The Til Dawn Edition",
                "You're Losing Me": "From The Vault"
            },
            "THE TORTURED POETS DEPARTMENT": {
                "The Black Dog": "The Anthology"
            },
            "The Life of a Showgirl": {
                "Patient Zero": "Bonus Tracks"
            },
            "The Taylor Swift Holiday Collection": {
                "Christmas Tree Farm": "Holiday Single"
            }
        };
                  
            const title = typeof song === "string" ? song : song.title;
            const sectionLabel = sectionStarts[album.name]?.[title];

        if (sectionLabel) {
            const section = document.createElement("div");
            section.className = "albumSection";
            section.textContent = sectionLabel;
            section.style.color = album.color;

            column.appendChild(section);
        }
            const songBox = document.createElement("div");
            songBox.className = "song";

            /* Remove numbering from Features, Movies, and Written for others */
            const noNumbers = ["Features", "Movies / Soundtracks", "Written For Others"].includes(album.name);

            const number = noNumbers ? "" : (index + 1) + ". ";

            // Check whether this song has been guessed
            if (guessedSongs.includes(title)) {

                songBox.textContent = number + title;
                songBox.style.backgroundColor = album.color + "55";

            } else if (gaveUp) {

                songBox.textContent = number + title;
                songBox.classList.add("missed");

            } else {

                songBox.textContent = noNumbers ? "" : (index + 1) + ".";
            }

            if (typeof song === "object" && song.hint) {

                // Put the hint beside the song
                const row = document.createElement("div");
                row.className = "hintRow";

                const hintBox = document.createElement("div");
                hintBox.className = "hintBox";
                hintBox.textContent = song.hint;

                row.appendChild(hintBox);
                row.appendChild(songBox);
                column.appendChild(row);

            } else {

                // Regular albums stay unchanged
                column.appendChild(songBox);

            }

        });

        grid.appendChild(column);

    });
}


/* Show Give Up results */
function showSummary() {

    const summaryAlbums = document.getElementById("summaryAlbums");
    const summaryTotal = document.getElementById("summaryTotal");

    summaryAlbums.innerHTML = "";

    let totalGuessed = 0;
    let totalSongs = 0;

    albums.forEach(album => {

        // Count guessed songs in this album
        const guessed = album.songs.filter(song => {
            const title = typeof song === "string"
                ? song
                : song.title;

            return guessedSongs.includes(title);
        }).length;

        const missed = album.songs.length - guessed;

        totalGuessed += guessed;
        totalSongs += album.songs.length;

        // Create album result
        const row = document.createElement("div");
        row.className = "summaryAlbum";

        const info = document.createElement("div");
        info.className = "summaryAlbumInfo";

        const name = document.createElement("span");
        name.textContent = album.name;

        const count = document.createElement("span");
        count.textContent =
            guessed + " guessed · " + missed + " missed";

        info.appendChild(name);
        info.appendChild(count);

        // Create progress bar
        const progress = document.createElement("div");
        progress.className = "summaryProgress";

        const fill = document.createElement("div");
        fill.className = "summaryProgressFill";
        fill.style.backgroundColor = album.color;
        fill.style.width =
            (guessed / album.songs.length * 100) + "%";

        progress.appendChild(fill);
        row.appendChild(info);
        row.appendChild(progress);

        summaryAlbums.appendChild(row);
    });

    // Overall score
    const percent = totalSongs
        ? Math.round(totalGuessed / totalSongs * 100)
        : 0;

    summaryTotal.textContent =
        totalGuessed + " / " + totalSongs +
        " songs guessed (" + percent + "%)";

    document.getElementById("summaryOverlay").style.display = "flex";
    document.getElementById("reopenSummary").style.display = "none";
}

/* Minimize Give Up results */
function minimizeSummary() {
    document.getElementById("summaryOverlay").style.display = "none";
    document.getElementById("reopenSummary").style.display = "block";
}

/* Share quiz results */
async function shareSummary() {

    let totalGuessed = 0;
    let totalSongs = 0;

    let results = "🎵 Taylor Swift Song Quiz 🎵\n\n";

    albums.forEach(album => {

        const guessed = album.songs.filter(song => {
            const title = typeof song === "string"
                ? song
                : song.title;

            return guessedSongs.includes(title);
        }).length;

        totalGuessed += guessed;
        totalSongs += album.songs.length;

        results += album.name + ": " +
            guessed + "/" + album.songs.length + "\n";
    });

    const percent = Math.round(totalGuessed / totalSongs * 100);

    results += "\nScore: " + totalGuessed + "/" +
        totalSongs + " (" + percent + "%)\n\n";

    results += "Can you beat my score?\n";
    results += "https://hblewett.github.io/taylor-swift-quiz/";

    // Open sharing options on supported devices
    if (navigator.share) {
        try {
            await navigator.share({
                text: results
            });
        } catch (error) {
            if (error.name !== "AbortError") {
                alert("Unable to share results.");
            }
        }
    } else {
        // Copy results if sharing is unavailable
        try {
            await navigator.clipboard.writeText(results);
            alert("Results copied to clipboard!");
        } catch (error) {
            alert("Unable to copy results.");
        }
    }
}



/* Show album completion popup */
let albumPopupQueue = [];
let albumPopupShowing = false;


function showAlbumPopup(album) {

    // Add the completed album to the queue
    albumPopupQueue.push(album);

    // Start showing popups if one isn't already showing
    if (!albumPopupShowing) {
        showNextAlbumPopup();
    }
}

function showNextAlbumPopup() {

    // Stop when all completed albums have been shown
    if (albumPopupQueue.length === 0) {
        albumPopupShowing = false;
        return;
    }

    albumPopupShowing = true;

    // Get the next completed album
    const album = albumPopupQueue.shift();

    const popup = document.getElementById("albumPopup");
    const card = document.getElementById("albumPopupCard");
    const title = document.getElementById("albumPopupTitle");
    const count = document.getElementById("albumPopupCount");

    // Set album name and colour
    title.textContent = album.name + " Complete!";
    card.style.backgroundColor = album.color;

    count.textContent =
        album.songs.length + "/" +
        album.songs.length + " songs guessed!";

    // Wait for the confetti to start
    setTimeout(() => {

        popup.style.display = "flex";

        // Show this popup for 2 seconds
        setTimeout(() => {

            popup.style.display = "none";

            // Show the next completed album
            showNextAlbumPopup();

        }, 3500);

    }, 700);
}



function launchConfetti(color, amount = 500) {

    // Create the requested number of confetti pieces
    for (let i = 0; i < amount; i++) {

        const piece = document.createElement("div");
        piece.className = "confetti";

        // Choose confetti colours
        if (color === "christmas") {

            // Alternate randomly between Christmas red and green
            const christmasColors = ["#D62828", "#228B22"];
            piece.style.backgroundColor =
                christmasColors[Math.floor(Math.random() * christmasColors.length)];

        } else if (color === "rainbow") {

            // Use random album colours
            piece.style.backgroundColor =
                albums[Math.floor(Math.random() * albums.length)].color;

        } else {

            // Use the completed album's colour
            piece.style.backgroundColor = color;

        }

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

    // Wait until the album popup finishes
    setTimeout(() => {

        // Rainbow confetti
        launchConfetti("rainbow", 500);

        // Show the separate final popup
        const finalPopup = document.getElementById("finalPopup");
        finalPopup.querySelector(".finalScore").textContent =
            totalSongs + " / " + totalSongs;

        finalPopup.style.display = "flex";

    }, 3500);

    // Keep the victory message below the input
    document.getElementById("guessMessage").textContent =
        "✨ YOU'RE A MASTERMIND! ✨";
    document.getElementById("guessMessage").classList.add("victory");

    // Disable further guesses
    document.getElementById("guessInput").disabled = true;
    document.getElementById("guessButton").disabled = true;
    document.getElementById("giveUpButton").disabled = true;
}

function closeFinalPopup() {
    document.getElementById("finalPopup").style.display = "none";
}

function checkGuess() {

    let newSongAdded = false;

    if (gaveUp || gameWon) return;
    const input = document.getElementById("guessInput");
    const guess = normalizeTitle(input.value);
    let correctGuess = false;

    albums.forEach(album => {

        
        album.songs.forEach(song => {

             // Get the title and possible alternative guesses
            const title = typeof song === "string" ? song : song.title;
            const aliases = typeof song === "string" ? [] : (song.aliases || []);

             // Check the title and all aliases
             const validGuesses = [title, ...aliases];

            if (validGuesses.some(name => normalizeTitle(name) === guess)) {

                correctGuess = true;

                if (!guessedSongs.includes(title)) {
                    guessedSongs.push(title);
                    newSongAdded = true;
                }

            }
        });

    });

    // Check for a perfect score
    const allSongsGuessed = albums.every(album =>
        album.songs.every(song => {
            const title = typeof song === "string" ? song : song.title;
            return guessedSongs.includes(title);
        })
    );

    
    // Check if any albums have been completed
    albums.forEach(album => {

        const allGuessed = album.songs.every(song => {

            const title = typeof song === "string" ? song : song.title;

            return guessedSongs.includes(title);
        });
        
        // Celebrate when an album is completed
        if (allGuessed && !completedAlbums.includes(album.name)) {
            completedAlbums.push(album.name);

            // Start confetti
            launchConfetti(
                album.name === "The Taylor Swift Holiday Collection"
                    ? "christmas"
                    : album.color
            );

            // Show album completion popup
            showAlbumPopup(album);
        }

    });
    
    // Save progress
    saveProgress();

    // Update the grid
    displayAlbums();

    
    // Update the score and percentage
    const filledCount = albums.reduce((total, album) =>
        total + album.songs.filter(song =>
            guessedSongs.includes(
                typeof song === "string" ? song : song.title
            )
        ).length, 0
    );

    const percentage = (filledCount / totalSongs * 100).toFixed(1);

    document.getElementById("score").textContent =
        "Score: " + filledCount + " / " + totalSongs +
        " (" + percentage + "%)";

    if (allSongsGuessed && !gaveUp) {
        celebrateWin();
        input.value = "";
        return;
    }


    const message = document.getElementById("guessMessage");
    
    if (newSongAdded) {
        input.value = "";
        message.textContent = "";

    } else if (correctGuess) {
        input.value = "";
        message.textContent = "Song already guessed!";

    } else {
        message.textContent = "Song not found!";
    }

    input.focus();
}


function giveUp() {

    // Ask for confirmation before giving up
    if (!confirm("Are you sure you want to give up? All remaining songs will be revealed.")) {
        return;
    }

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

    localStorage.setItem("taylorSwiftGaveUp", "true");

    showSummary();
}


/* Restore saved progress when the game opens */
function loadProgress() {
    try {
        const saved = JSON.parse(localStorage.getItem("taylorSwiftGuesses"));

        if (Array.isArray(saved)) {
            guessedSongs = saved.filter(title =>
                albums.some(album =>
                    album.songs.some(song =>
                        (typeof song === "string" ? song : song.title) === title
                    )
                )
            );
        }
    } catch (error) {
        console.log("Could not restore saved progress.");
    }

    // Mark completed albums without launching confetti
    albums.forEach(album => {
        const allGuessed = album.songs.every(song => {
            const title = typeof song === "string" ? song : song.title;
            return guessedSongs.includes(title);
        });

        if (allGuessed) {
            completedAlbums.push(album.name);
        }
    });

    // Restore a completed game
    if (guessedSongs.length === totalSongs) {
        gameWon = true;

        document.getElementById("guessMessage").textContent =
            "✨ YOU'RE A MASTERMIND! ✨";
        document.getElementById("guessMessage").classList.add("victory");

        document.getElementById("guessInput").disabled = true;
        document.getElementById("guessButton").disabled = true;
        document.getElementById("giveUpButton").disabled = true;
    }

    
    // Restore Give Up status
    if (localStorage.getItem("taylorSwiftGaveUp") === "true") {
        gaveUp = true;

        document.getElementById("guessInput").disabled = true;
        document.getElementById("guessButton").disabled = true;
        document.getElementById("giveUpButton").disabled = true;

        document.getElementById("guessMessage").textContent =
            "Game Over!";
    }

    // Display saved songs
    displayAlbums();

    
    // Restore the score and percentage
    const percentage = (guessedSongs.length / totalSongs * 100).toFixed(1);

    document.getElementById("score").textContent =
        "Score: " + guessedSongs.length + " / " + totalSongs +
        " (" + percentage + "%)";

}

/* Reset the game */
function resetGame() {
    if (confirm("Are you sure you want to reset? All your guesses will be lost.")) {
        localStorage.removeItem("taylorSwiftGuesses");
        localStorage.removeItem("taylorSwiftGaveUp");
        location.reload();
    }
}

loadProgress();

displayAlbums();

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

document.getElementById("resetButton")
    .addEventListener("click", resetGame);


/* Open How to Play instructions */
function showHelp() {
    document.getElementById("helpOverlay").style.display = "flex";
}

/* Close How to Play instructions */
function closeHelp() {
    document.getElementById("helpOverlay").style.display = "none";
}
