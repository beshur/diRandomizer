window.onload = start;

function start() {
  console.log('start');
  var $button = document.querySelector('button')
  $button.focus();
  $button.addEventListener('click', function(event) {
    console.log('button clicked');
    printChannel(randomize())
  })
  
  printChannel(randomize())
}

function randomize() {
  var channels = getChannels()
  var id = Math.floor(Math.random()* channels.length ) + 1;
  console.log('randomize', id, channels[id-1]);
  return channels[id-1];
}

function printChannel(channel) {
  var $result = document.querySelector('.result');
  $result.innerText = '';
  
  var anchor = document.createElement('a');
  anchor.href = 'https://www.di.fm/' + channel.key;
  anchor.innerText = channel.name;
  anchor.target = '_blank';
  
  var desc = document.createElement('p');
  desc.innerText = channel.description;
  
  $result.appendChild(anchor);
  $result.appendChild(desc); 
  
  console.log('print', channel)
}

function getChannels() {
  return [
    {
      "name": "00s Club Hits",
      "key": "00sclubhits",
      "description": "Your favorite dance tunes from the start of the decade. Familiar hits and overlooked classics in abundance."
    },
    {
      "name": "Ambient",
      "key": "ambient",
      "description": "Electronic sounds and atmospheric textures create a genre to enhance your state of mind and take you deeper."
    },
    {
      "name": "Atmospheric Breaks",
      "key": "atmosphericbreaks",
      "description": "Spaced out, melodic and full of warmth - these broken beat dance tunes will keep you dazed and amused."
    },
    {
      "name": "Bass & Jackin' House",
      "key": "bassnjackinhouse",
      "description": "From the funkiest grooves to the dirtiest beats. Hard-hitting, high energy 4/4 club cuts to move the masses."
    },
    {
      "name": "Bassline",
      "key": "bassline",
      "description": "Blending together elements of house music, speed garage, and techno – it’s all about the low end frequencies."
    },
    {
      "name": "Big Beat",
      "key": "bigbeat",
      "description": "Heavily focused on breakbeats and dusty samples. A defining 90s musical movement still going strong today."
    },
    {
      "name": "Big Room House",
      "key": "bigroomhouse",
      "description": "Fusing together house elements from the past and the present - prime time music full of uplifting high energy."
    },
    {
      "name": "Breaks",
      "key": "breaks",
      "description": "Inspired by hip hop and UK rave music, breaks features broken up drum loops and creative samples, synths and fx."
    },
    {
      "name": "Chill & Tropical House",
      "key": "chillntropicalhouse",
      "description": "The sounds of Chill & Tropical House are expertly made for lounging and dancing alike with its deeper house vibes."
    },
    {
      "name": "ChillHop",
      "key": "chillhop",
      "description": "Hip hop, trip hop, downtempo beats and jazz, blended together in a mellow, laid back style for perfect listening."
    },
    {
      "name": "Chillout",
      "key": "chillout",
      "description": "Electronic sounds, mellow mid-tempo rhythms, and a groove meant to calm the senses and ease the mind."
    },
    {
      "name": "Chillout Dreams",
      "key": "chilloutdreams",
      "description": "The perfect musical soundtrack for when you want to close your eyes, get truly comfortable, and drift away."
    },
    {
      "name": "Chillstep",
      "key": "chillstep",
      "description": "The brilliant combination of dubstep rhythms with the mellow grooves of chillout. A unique sound all its own."
    },
    {
      "name": "Classic EuroDance",
      "key": "classiceurodance",
      "description": "European pop music born in the 90s full of high energy sounds and big hooks – now heard in gyms and malls worldwide."
    },
    {
      "name": "Classic EuroDisco",
      "key": "classiceurodisco",
      "description": "Conceived in the European discos  in the 70s, evolving through the decades into modern electronic masterpieces."
    },
    {
      "name": "Classic Trance",
      "key": "classictrance",
      "description": "The classic melodies, the epic breakdowns and gigantic builds. Re-experience Trance music in her prime."
    },
    {
      "name": "Classic Vocal Trance",
      "key": "classicvocaltrance",
      "description": "Classic sounds of Vocal Trance"
    },
    {
      "name": "Club Dubstep",
      "key": "clubdubstep",
      "description": "The bassbin rattling, speaker-freaking hits of Dubstep – all tried, tested and approved to work in the clubs."
    },
    {
      "name": "Club Sounds",
      "key": "club",
      "description": "The music heard in the biggest venues worldwide. From prime time pushers to deeper house shakers - the sounds of now."
    },
    {
      "name": "Dark DnB",
      "key": "darkdnb",
      "description": "Evil, gritty and twisted Drum & Bass. at 160+ BPM, hear the darkest basslines and the hardest hitting percussion."
    },
    {
      "name": "Dark PsyTrance",
      "key": "darkpsytrance",
      "description": "The darker form of PsyTrance, which is a sound all its own – direct from Goa to your headphones."
    },
    {
      "name": "Deep House",
      "key": "deephouse",
      "description": "House music crafted for the smaller and mid-sized rooms - deeper tracks full of silky, smooth grooves."
    },
    {
      "name": "Deep Nu-Disco",
      "key": "deepnudisco",
      "description": "Elements of house, funk, and disco. Mid-tempo beats, soulful grooves and head nodding selections."
    },
    {
      "name": "Deep Tech",
      "key": "deeptech",
      "description": "A fusion of deep house & techno. Punchy grooves, spaced out sounds and forward thinking productions."
    },
    {
      "name": "Detroit House & Techno",
      "key": "detroithousentechno",
      "description": "Where would dance music be without Detroit? The city that started it all continues to inspire and educate. "
    },
    {
      "name": "Disco House",
      "key": "discohouse",
      "description": "The feel good sound inspired from 70s disco combined with the warm kick drum of modern house music."
    },
    {
      "name": "DJ Mixes",
      "key": "djmixes",
      "description": "From techno, deep house, progressive and trance – check out the sounds of the DJ deep in the mix."
    },
    {
      "name": "Downtempo Lounge",
      "key": "downtempolounge",
      "description": "Head nodding beats, chilled vocals, and lush soundscapes to bring down the sun and start the night."
    },
    {
      "name": "Drum and Bass",
      "key": "drumandbass",
      "description": "Born in the mid 90s, drum and bass is all about fast breakbeats, urban vibes, and rib rattling basslines."
    },
    {
      "name": "Drumstep",
      "key": "drumstep",
      "description": "A hybrid of half-time dubstep and intense drum 'n bass."
    },
    {
      "name": "Dub",
      "key": "dub",
      "description": "An emphasis on the bass and drums, delayed effects, sampled vocals and smokey Reggae inspired vibes."
    },
    {
      "name": "Dub Techno",
      "key": "dubtechno",
      "description": "The beloved sounds of deep techno saturated with tape delays, heavy reverb and ice cold atmospherics."
    },
    {
      "name": "Dubstep",
      "key": "dubstep",
      "description": "The wobbles of the bass, the party rocking beats, and the biggest crowd destroying drops."
    },
    {
      "name": "EDM Hits",
      "key": "edm",
      "description": "Where dance meets pop. Crossover favorites, stadium-sized anthems and the biggest electronic tunes in existence."
    },
    {
      "name": "Electro House",
      "key": "electro",
      "description": "Buzzing basslines, huge kicks, party rocking drops. House music packed full of gigantic bass and massive synths."
    },
    {
      "name": "Electro Swing",
      "key": "electroswing",
      "description": "The combination of 1920s-1940s jazz and swing music, big band horns and modern day electro house.\r\n"
    },
    {
      "name": "Electronic Pioneers",
      "key": "electronicpioneers",
      "description": "The trailblazers, the renegades and the experimental musicians who gave early inspiration with electronic instruments."
    },
    {
      "name": "Electropop",
      "key": "electropop",
      "description": "Catchy pop music blended together with vintage synthesizers and electronic instrumentation. "
    },
    {
      "name": "Epic Trance",
      "key": "epictrance",
      "description": "Trance in its most boisterous form. Uplifting melodies on top of high energy beats create these euphoric anthems."
    },
    {
      "name": "EuroDance",
      "key": "eurodance",
      "description": "Pop music infused with a high energy 4/4 pulse. Heavy on the synthesizers, the melodies and the vocals."
    },
    {
      "name": "Funky House",
      "key": "funkyhouse",
      "description": "Focused on the funkiest grooves, with plenty of the guitar licks and clever samples placed around a 4/4 swing."
    },
    {
      "name": "Future Bass",
      "key": "futurebass",
      "description": "Hard basslines, booming beats and insatiable grooves. Inspired by Trap, Juke and Garage - molded together into a unique booming style."
    },
    {
      "name": "Future Garage",
      "key": "futuregarage",
      "description": "2step Garage rhythms, chunky bass line driven grooves and plenty of forward thinking innovation."
    },
    {
      "name": "Future Synthpop",
      "key": "futuresynthpop",
      "description": "Finest selection of futurepop and synthpop."
    },
    {
      "name": "Gabber",
      "key": "gabber",
      "description": "The hardest form of techno with punishing tracks designed to drive the crowds into a sweaty frenzy."
    },
    {
      "name": "Glitch Hop",
      "key": "glitchhop",
      "description": "The sound of digital malfunctions, electric hum and bit rate distortions perfectly placed alongside laid-back hip hop beats."
    },
    {
      "name": "Goa-Psy Trance",
      "key": "goapsy",
      "description": "A very psychedelic form of trance, Goa-Psy Trance is a sound full of arpeggiated synths and trippy effects."
    },
    {
      "name": "Hands Up",
      "key": "handsup",
      "description": "A channel showcasing everything from hard dance, trance and happy hardcore to lift the spirits (and the arms)."
    },
    {
      "name": "Hard Dance",
      "key": "harddance",
      "description": "Concrete kicks and punching rhythms, hard dance is a tougher side of music with sharp edges and aggressive power."
    },
    {
      "name": "Hard Techno",
      "key": "hardtechno",
      "description": "Tough as nails warehouse jams full of cold aggression, sinister structures and pounding rhythms that hit hard."
    },
    {
      "name": "Hardcore",
      "key": "hardcore",
      "description": "Strictly for the hardcore. These are the biggest and boldest bangers, and the hardest hitting tracks."
    },
    {
      "name": "Hardstyle",
      "key": "hardstyle",
      "description": "Hard techno & hardcore. A global phenomenon with powerful kicks, distorted effects and infectious melodies."
    },
    {
      "name": "House",
      "key": "house",
      "description": "Born in Chicago and now global, house music is always evolving but remains true to its pure 4/4 structure."
    },
    {
      "name": "Indie Beats",
      "key": "indiebeats",
      "description": "Smooth, groovy and full of cutting-edge, fresh ideas - beats to kick back and enjoy far from the club setting."
    },
    {
      "name": "Indie Dance",
      "key": "indiedance",
      "description": "The spirit of Rock & Roll with an electronic soul. Club culture and live music combined."
    },
    {
      "name": "Jazz House",
      "key": "jazzhouse",
      "description": "One of the biggest cultural soundtracks with the infectious thump of house music. Expect sultry saxophones, trumpets, and finger snapping grooves."
    },
    {
      "name": "Jungle",
      "key": "jungle",
      "description": "Jungle keeps the breakbeat tempos high and celebrates the diverse ideas found within urban and rave music."
    },
    {
      "name": "Latin House",
      "key": "latinhouse",
      "description": "The sounds of Salsa, Brazilian beats and Latin Jazz with the steady grooves of modern East Coast dance music."
    },
    {
      "name": "Liquid DnB",
      "key": "liquiddnb",
      "description": "Smooth as water, with the fast paced rhythms, liquid DNB flows with rolling ease without losing momentum."
    },
    {
      "name": "Liquid Dubstep",
      "key": "liquiddubstep",
      "description": "Smooth, rolling and steady – this fresh formation of Dubstep keeps the sounds you love with a flowing groove."
    },
    {
      "name": "Liquid Trap",
      "key": "liquidtrap",
      "description": "The smoother side of Trap but still packed with mechanical grooves and hip hop moods. \r\n"
    },
    {
      "name": "LoFi Hip-Hop",
      "key": "lofihiphop",
      "description": "Tastefully designed LoFi tunes with textured atmospheres & head nodding beats - designed for the ears."
    },
    {
      "name": "Lounge",
      "key": "lounge",
      "description": "Music to chill to. Music made for when it’s all about kicking off your shoes, laying back, and totally relaxing."
    },
    {
      "name": "Mainstage",
      "key": "mainstage",
      "description": "The sound of the largest events. From the gargantuan festivals, the huge main rooms and the biggest DJs."
    },
    {
      "name": "Melodic Progressive",
      "key": "melodicprogressive",
      "description": "The melodic side of progressive house, packed with driving rhythms and forward thinking sounds."
    },
    {
      "name": "Minimal",
      "key": "minimal",
      "description": "Minimal fuses elements of house, techno and electronica and strips it back to focus on the spaces between the sound."
    },
    {
      "name": "Nightcore",
      "key": "nightcore",
      "description": "Pitched up vocals, happy hardcore beats, and high energy music non-stop."
    },
    {
      "name": "Nu Disco",
      "key": "nudisco",
      "description": "Modern disco music blending the familiar funk of the 70s and 80s with futuristic beats and up to date grooves."
    },
    {
      "name": "Oldschool Acid",
      "key": "oldschoolacid",
      "description": "Acid, one of the characteristics of the TB-303, is celebrated here with the best tracks from house, techno and trance."
    },
    {
      "name": "Oldschool House",
      "key": "oldschoolhouse",
      "description": "The biggest classics and secret weapons – this is a true treasure chest of house tracks from back in the day."
    },
    {
      "name": "Oldschool Rave",
      "key": "oldschoolrave",
      "description": "Grab your whistles, white gloves and reach for the laser beams. This is the sound of raving when raving was new."
    },
    {
      "name": "Oldschool Techno & Trance ",
      "key": "classictechno",
      "description": "Go back in time and hear the biggest and best tracks within techno and trance that defined a decade of dance culture."
    },
    {
      "name": "Progressive",
      "key": "progressive",
      "description": "Always moving forward, progressive continues to reinvent itself into new sounds and styles made for the floor."
    },
    {
      "name": "Progressive Psy",
      "key": "progressivepsy",
      "description": "Progress your mind to undiscovered psychedelic dimensions."
    },
    {
      "name": "Psybient",
      "key": "psybient",
      "description": "The psychedelic side of ambient."
    },
    {
      "name": "PsyChill",
      "key": "psychill",
      "description": "Downtempo psychedelic dub grooves, goa ambient, and world beats."
    },
    {
      "name": "Russian Club Hits",
      "key": "russianclubhits",
      "description": "Russia's hottest club hits."
    },
    {
      "name": "Soulful House",
      "key": "soulfulhouse",
      "description": "House music saturated with feeling – full of melodies, vocals and true soul. Steady warm 4/4 vibes."
    },
    {
      "name": "Space Dreams",
      "key": "spacemusic",
      "description": "Ambient space music for expanding minds."
    },
    {
      "name": "Synthwave",
      "key": "synthwave",
      "description": "Influenced by video games and movie soundtracks of the 80s, Synthwave's mission continues today with great new music keeping things future retro."
    },
    {
      "name": "Tech House",
      "key": "techhouse",
      "description": "Blending the warmth of house music with the cold structural precision of techno, tech house bridges the divide."
    },
    {
      "name": "Techno",
      "key": "techno",
      "description": "Techno is a true musical force full of structure and style. Robotic, mechanical and full of soul, always facing the future."
    },
    {
      "name": "Trance",
      "key": "trance",
      "description": "Emotive dance music which embraces incredible melodies, future-facing production and energetic anthems heard worldwide."
    },
    {
      "name": "Trap",
      "key": "trap",
      "description": "Born out of Southern Hip-Hop and influenced by techno, trap is analog drum machines with hip-hop aesthetics."
    },
    {
      "name": "Tribal House",
      "key": "tribalhouse",
      "description": "The percussive side of the house and tech house scene, tribal house takes drums and puts them in the forefront."
    },
    {
      "name": "UMF Radio",
      "key": "umfradio",
      "description": "UMF Radio 24/7"
    },
    {
      "name": "Underground Techno",
      "key": "undergroundtechno",
      "description": "From gritty Berlin streets to dark corners of Brooklyn, this is techno made by artists pushing the genre further. "
    },
    {
      "name": "Vocal Chillout",
      "key": "vocalchillout",
      "description": "Relaxing vibes and a collection of vocal songs providing the laid back soundtrack to your day."
    },
    {
      "name": "Vocal House",
      "key": "vocalhouse",
      "description": "The glorious 4/4 thump of House music paired perfectly with the human voice. Sultry, soulful, sexy sounds."
    },
    {
      "name": "Vocal Lounge",
      "key": "vocallounge",
      "description": "Laid back grooves and a collection of smooth vocals soothe the ears and relax the mind."
    },
    {
      "name": "Vocal Trance",
      "key": "vocaltrance",
      "description": "Lush vocals paired together with emotive dance music. Beautiful melodies and endless energy."
    }
  ];
}
