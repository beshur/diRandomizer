window.onload = start;

function start() {
  console.log('start');
  var $button = document.querySelector('button')
  $button.focus();
  $button.addEventListener('click', function(event) {
    console.log('button clicked');
    printChannel(randomize())
  })
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
    "key": "trance",
    "name": "Trance",
    "description": "Emotive dance music which embraces incredible melodies, future-facing production and energetic anthems heard worldwide."
  },
  {
    "key": "vocaltrance",
    "name": "Vocal Trance",
    "description": "Lush vocals paired together with emotive dance music. Beautiful melodies and endless energy."
  },
  {
    "key": "chillout",
    "name": "Chillout",
    "description": "Electronic sounds, mellow mid-tempo rhythms, and a groove meant to calm the senses and ease the mind."
  },
  {
    "key": "house",
    "name": "House",
    "description": "Born in Chicago and now global, house music is always evolving but remains true to its pure 4/4 structure."
  },
  {
    "key": "harddance",
    "name": "Hard Dance",
    "description": "Concrete kicks and punching rhythms, hard dance is a tougher side of music with sharp edges and aggressive power."
  },
  {
    "key": "eurodance",
    "name": "EuroDance",
    "description": "Pop music infused with a high energy 4/4 pulse. Heavy on the synthesizers, the melodies and the vocals."
  },
  {
    "key": "progressive",
    "name": "Progressive",
    "description": "Always moving forward, progressive continues to reinvent itself into new sounds and styles made for the floor."
  },
  {
    "key": "goapsy",
    "name": "Goa-Psy Trance",
    "description": "A very psychedelic form of trance, Goa-Psy Trance is a sound full of arpeggiated synths and trippy effects."
  },
  {
    "key": "hardcore",
    "name": "Hardcore",
    "description": "Strictly for the hardcore. These are the biggest and boldest bangers, and the hardest hitting tracks."
  },
  {
    "key": "djmixes",
    "name": "DJ Mixes",
    "description": "From techno, deep house, progressive and trance – check out the sounds of the DJ deep in the mix."
  },
  {
    "key": "lounge",
    "name": "Lounge",
    "description": "Music to chill to. Music made for when it’s all about kicking off your shoes, laying back, and totally relaxing."
  },
  {
    "key": "ambient",
    "name": "Ambient",
    "description": "Electronic sounds and atmospheric textures create a genre to enhance your state of mind and take you deeper."
  },
  {
    "key": "drumandbass",
    "name": "Drum and Bass",
    "description": "Born in the mid 90s, drum and bass is all about fast breakbeats, urban vibes, and rib rattling basslines."
  },
  {
    "key": "classictechno",
    "name": "Oldschool Techno & Trance ",
    "description": "Go back in time and hear the biggest and best tracks within techno and trance that defined a decade of dance culture."
  },
  {
    "key": "breaks",
    "name": "Breaks",
    "description": "Inspired by hip hop and UK rave music, breaks features broken up drum loops and creative samples, synths and fx."
  },
  {
    "key": "gabber",
    "name": "Gabber",
    "description": "The hardest form of techno with punishing tracks designed to drive the crowds into a sweaty frenzy."
  },
  {
    "key": "techno",
    "name": "Techno",
    "description": "Techno is a true musical force full of structure and style. Robotic, mechanical and full of soul, always facing the future."
  },
  {
    "key": "soulfulhouse",
    "name": "Soulful House",
    "description": "House music saturated with feeling – full of melodies, vocals and true soul. Steady warm 4/4 vibes."
  },
  {
    "key": "futuresynthpop",
    "name": "Future Synthpop",
    "description": "Finest selection of futurepop and synthpop."
  },
  {
    "key": "electro",
    "name": "Electro House",
    "description": "Buzzing basslines, huge kicks, party rocking drops. House music packed full of gigantic bass and massive synths."
  },
  {
    "key": "tribalhouse",
    "name": "Tribal House",
    "description": "The percussive side of the house and tech house scene, tribal house takes drums and puts them in the forefront."
  },
  {
    "key": "funkyhouse",
    "name": "Funky House",
    "description": "Focused on the funkiest grooves, with plenty of the guitar licks and clever samples placed around a 4/4 swing."
  },
  {
    "key": "minimal",
    "name": "Minimal",
    "description": "Minimal fuses elements of house, techno and electronica and strips it back to focus on the spaces between the sound."
  },
  {
    "key": "hardstyle",
    "name": "Hardstyle",
    "description": "Hard techno & hardcore. A global phenomenon with powerful kicks, distorted effects and infectious melodies."
  },
  {
    "key": "exposurenyc",
    "name": "XExposure NYC",
    "description": "A fine selection of New York City sounds!"
  },
  {
    "key": "spacemusic",
    "name": "Space Dreams",
    "description": "Ambient space music for expanding minds."
  },
  {
    "key": "techhouse",
    "name": "Tech House",
    "description": "Blending the warmth of house music with the cold structural precision of techno, tech house bridges the divide."
  },
  {
    "key": "psychill",
    "name": "PsyChill",
    "description": "Downtempo psychedelic dub grooves, goa ambient, and world beats."
  },
  {
    "key": "chilloutdreams",
    "name": "Chillout Dreams",
    "description": "The perfect musical soundtrack for when you want to close your eyes, get truly comfortable, and drift away."
  },
  {
    "key": "classiceurodance",
    "name": "Classic EuroDance",
    "description": "European pop music born in the 90s full of high energy sounds and big hooks – now heard in gyms and malls worldwide."
  },
  {
    "key": "club",
    "name": "Club Sounds",
    "description": "The music heard in the biggest venues worldwide. From prime time pushers to deeper house shakers - the sounds of now."
  },
  {
    "key": "classictrance",
    "name": "Classic Trance",
    "description": "The classic melodies, the epic breakdowns and gigantic builds. Re-experience Trance music in her prime."
  },
  {
    "key": "dubstep",
    "name": "Dubstep",
    "description": "The wobbles of the bass, the party rocking beats, and the biggest crowd destroying drops."
  },
  {
    "key": "discohouse",
    "name": "Disco House",
    "description": "The feel good sound inspired from 70s disco combined with the warm kick drum of modern house music."
  },
  {
    "key": "oldschoolhouse",
    "name": "Oldschool House",
    "description": "The biggest classics and secret weapons – this is a true treasure chest of house tracks from back in the day."
  },
  {
    "key": "liquiddnb",
    "name": "Liquid DnB",
    "description": "Smooth as water, with the fast paced rhythms, liquid DNB flows with rolling ease without losing momentum."
  },
  {
    "key": "chiptunes",
    "name": "XChiptunes",
    "description": "Playing the best chiptunes and video game music."
  },
  {
    "key": "latinhouse",
    "name": "Latin House",
    "description": "The sounds of Salsa, Brazilian beats and Latin Jazz with the steady grooves of modern East Coast dance music."
  },
  {
    "key": "ukgarage",
    "name": "XUK Garage",
    "description": "The latest and greatest in UK Garage!!"
  },
  {
    "key": "oldschoolacid",
    "name": "Oldschool Acid",
    "description": "Acid, one of the characteristics of the TB-303, is celebrated here with the best tracks from house, techno and trance."
  },
  {
    "key": "classicvocaltrance",
    "name": "Classic Vocal Trance",
    "description": "Classic sounds of Vocal Trance"
  },
  {
    "key": "cosmicdowntempo",
    "name": "XCosmic Downtempo",
    "description": "A downtempo journey into the cosmos"
  },
  {
    "key": "deepnudisco",
    "name": "Deep Nu-Disco",
    "description": "Elements of house, funk, and disco. Mid-tempo beats, soulful grooves and head nodding selections."
  },
  {
    "key": "vocalchillout",
    "name": "Vocal Chillout",
    "description": "Relaxing vibes and a collection of vocal songs providing the laid back soundtrack to your day."
  },
  {
    "key": "deephouse",
    "name": "Deep House",
    "description": "House music crafted for the smaller and mid-sized rooms - deeper tracks full of silky, smooth grooves."
  },
  {
    "key": "epictrance",
    "name": "Epic Trance",
    "description": "Trance in its most boisterous form. Uplifting melodies on top of high energy beats create these euphoric anthems."
  },
  {
    "key": "handsup",
    "name": "Hands Up",
    "description": "A channel showcasing everything from hard dance, trance and happy hardcore to lift the spirits (and the arms)."
  },
  {
    "key": "clubdubstep",
    "name": "Club Dubstep",
    "description": "The bassbin rattling, speaker-freaking hits of Dubstep – all tried, tested and approved to work in the clubs."
  },
  {
    "key": "progressivepsy",
    "name": "Progressive Psy",
    "description": "Progress your mind to undiscovered psychedelic dimensions."
  },
  {
    "key": "downtempolounge",
    "name": "Downtempo Lounge",
    "description": "Head nodding beats, chilled vocals, and lush soundscapes to bring down the sun and start the night."
  },
  {
    "key": "darkdnb",
    "name": "Dark DnB",
    "description": "Evil, gritty and twisted Drum & Bass. at 160+ BPM, hear the darkest basslines and the hardest hitting percussion."
  },
  {
    "key": "deeptech",
    "name": "Deep Tech",
    "description": "A fusion of deep house & techno. Punchy grooves, spaced out sounds and forward thinking productions."
  },
  {
    "key": "classiceurodisco",
    "name": "Classic EuroDisco",
    "description": "Conceived in the European discos  in the 70s, evolving through the decades into modern electronic masterpieces."
  },
  {
    "key": "liquiddubstep",
    "name": "Liquid Dubstep",
    "description": "Smooth, rolling and steady – this fresh formation of Dubstep keeps the sounds you love with a flowing groove."
  },
  {
    "key": "glitchhop",
    "name": "Glitch Hop",
    "description": "The sound of digital malfunctions, electric hum and bit rate distortions perfectly placed alongside laid-back hip hop beats."
  },
  {
    "key": "eclectronica",
    "name": "XEcLectronica",
    "description": "Creative music influenced from techno to chill out, indie to IDM – a unique and undefinable listening experience."
  },
  {
    "key": "bigroomhouse",
    "name": "Big Room House",
    "description": "Fusing together house elements from the past and the present - prime time music full of uplifting high energy."
  },
  {
    "key": "mainstage",
    "name": "Mainstage",
    "description": "The sound of the largest events. From the gargantuan festivals, the huge main rooms and the biggest DJs."
  },
  {
    "key": "russianclubhits",
    "name": "Russian Club Hits",
    "description": "Russia's hottest club hits."
  },
  {
    "key": "umfradio",
    "name": "UMF Radio",
    "description": "UMF Radio 24/7"
  },
  {
    "key": "umf_stage1",
    "name": "XUMF Stage 1",
    "description": "Live from Ultra Music Festival 2013!!"
  },
  {
    "key": "umf_stage2",
    "name": "XUMF Stage 2",
    "description": "Live from Ultra Music Festival 2013!!"
  },
  {
    "key": "umf_stage3",
    "name": "XUMF Stage 3",
    "description": "Live from Ultra Music Festival 2013!!"
  },
  {
    "key": "umf_stage4",
    "name": "XUMF Stage 4",
    "description": "Live from Ultra Music Festival 2013!!"
  },
  {
    "key": "umf_stage5",
    "name": "XUMF Stage 5",
    "description": "Live from Ultra Music Festival 2013!!"
  },
  {
    "key": "chillhop",
    "name": "ChillHop",
    "description": "Hip hop, trip hop, downtempo beats and jazz, blended together in a mellow, laid back style for perfect listening."
  },
  {
    "key": "sankeys",
    "name": "XSankeys Radio",
    "description": "The sound of Sankeys Worldwide."
  },
  {
    "key": "trap",
    "name": "Trap",
    "description": "Born out of Southern Hip-Hop and influenced by techno, trap is analog drum machines with hip-hop aesthetics."
  },
  {
    "key": "chillstep",
    "name": "Chillstep",
    "description": "The brilliant combination of dubstep rhythms with the mellow grooves of chillout. A unique sound all its own."
  },
  {
    "key": "hardtechno",
    "name": "Hard Techno",
    "description": "Tough as nails warehouse jams full of cold aggression, sinister structures and pounding rhythms that hit hard."
  },
  {
    "key": "moombahton",
    "name": "XMoombahton",
    "description": "Hot House meets Dancehall Reggaeton"
  },
  {
    "key": "vocallounge",
    "name": "Vocal Lounge",
    "description": "Laid back grooves and a collection of smooth vocals soothe the ears and relax the mind."
  },
  {
    "key": "scousehouse",
    "name": "XScouse House",
    "description": "Bouncy and Pumping House Beats"
  },
  {
    "key": "electronicpioneers",
    "name": "Electronic Pioneers",
    "description": "The trailblazers, the renegades and the experimental musicians who gave early inspiration with electronic instruments."
  },
  {
    "key": "psybient",
    "name": "Psybient",
    "description": "The psychedelic side of ambient."
  },
  {
    "key": "electropop",
    "name": "Electropop",
    "description": "Catchy pop music blended together with vintage synthesizers and electronic instrumentation. "
  },
  {
    "key": "undergroundtechno",
    "name": "Underground Techno",
    "description": "From gritty Berlin streets to dark corners of Brooklyn, this is techno made by artists pushing the genre further. "
  },
  {
    "key": "bassline",
    "name": "Bassline",
    "description": "Blending together elements of house music, speed garage, and techno – it’s all about the low end frequencies."
  },
  {
    "key": "bassnjackinhouse",
    "name": "Bass & Jackin' House",
    "description": "From the funkiest grooves to the dirtiest beats. Hard-hitting, high energy 4/4 club cuts to move the masses."
  },
  {
    "key": "drumstep",
    "name": "Drumstep",
    "description": "A hybrid of half-time dubstep and intense drum 'n bass."
  },
  {
    "key": "futuregarage",
    "name": "Future Garage",
    "description": "2step Garage rhythms, chunky bass line driven grooves and plenty of forward thinking innovation."
  },
  {
    "key": "jungle",
    "name": "Jungle",
    "description": "Jungle keeps the breakbeat tempos high and celebrates the diverse ideas found within urban and rave music."
  },
  {
    "key": "nightcore",
    "name": "Nightcore",
    "description": "Pitched up vocals, happy hardcore beats, and high energy music non-stop."
  },
  {
    "key": "nudisco",
    "name": "Nu Disco",
    "description": "Modern disco music blending the familiar funk of the 70s and 80s with futuristic beats and up to date grooves."
  },
  {
    "key": "oldschoolrave",
    "name": "Oldschool Rave",
    "description": "Grab your whistles, white gloves and reach for the laser beams. This is the sound of raving when raving was new."
  },
  {
    "key": "00sclubhits",
    "name": "00s Club Hits",
    "description": "Your favorite dance tunes from the start of the decade. Familiar hits and overlooked classics in abundance."
  },
  {
    "key": "bigbeat",
    "name": "Big Beat",
    "description": "Heavily focused on breakbeats and dusty samples. A defining 90s musical movement still going strong today."
  },
  {
    "key": "ebm",
    "name": "XEBM",
    "description": "Originating in the early 80s as a mix of industrial, punk and electropop, EBM changed the landscape of dance music and is still going strong today. "
  },
  {
    "key": "electroswing",
    "name": "Electro Swing",
    "description": "The combination of 1920s-1940s jazz and swing music, big band horns and modern day electro house.\r\n"
  },
  {
    "key": "darkpsytrance",
    "name": "Dark PsyTrance",
    "description": "The darker form of PsyTrance, which is a sound all its own – direct from Goa to your headphones."
  },
  {
    "key": "dub",
    "name": "Dub",
    "description": "An emphasis on the bass and drums, delayed effects, sampled vocals and smokey Reggae inspired vibes."
  },
  {
    "key": "jazzhouse",
    "name": "Jazz House",
    "description": "One of the biggest cultural soundtracks with the infectious thump of house music. Expect sultry saxophones, trumpets, and finger snapping grooves."
  },
  {
    "key": "idm",
    "name": "XIDM",
    "description": "Experimental, influential and pushing the boundaries of electronic music. Truly a sound to experience. "
  },
  {
    "key": "indiedance",
    "name": "Indie Dance",
    "description": "The spirit of Rock & Roll with an electronic soul. Club culture and live music combined."
  },
  {
    "key": "liquidtrap",
    "name": "Liquid Trap",
    "description": "The smoother side of Trap but still packed with mechanical grooves and hip hop moods. \r\n"
  },
  {
    "key": "detroithousentechno",
    "name": "Detroit House & Techno",
    "description": "Where would dance music be without Detroit? The city that started it all continues to inspire and educate. "
  },
  {
    "key": "dubtechno",
    "name": "Dub Techno",
    "description": "The beloved sounds of deep techno saturated with tape delays, heavy reverb and ice cold atmospherics."
  },
  {
    "key": "chillntropicalhouse",
    "name": "Chill & Tropical House",
    "description": "The sounds of Chill & Tropical House are expertly made for lounging and dancing alike with its deeper house vibes."
  },
  {
    "key": "futurebeats",
    "name": "XFuture Beats",
    "description": "Gritty, off-kilter and typically instrumental, the Future Beats sound is perfectly married with modern technology and hip hop idealism."
  },
  {
    "key": "melodicprogressive",
    "name": "Melodic Progressive",
    "description": "The melodic side of progressive house, packed with driving rhythms and forward thinking sounds."
  },
  {
    "key": "atmosphericbreaks",
    "name": "Atmospheric Breaks",
    "description": "Spaced out, melodic and full of warmth - these broken beat dance tunes will keep you dazed and amused."
  },
  {
    "key": "indiebeats",
    "name": "Indie Beats",
    "description": "Smooth, groovy and full of cutting-edge, fresh ideas - beats to kick back and enjoy far from the club setting."
  },
  {
    "key": "futurebass",
    "name": "Future Bass",
    "description": "Hard basslines, booming beats and insatiable grooves. Inspired by Trap, Juke and Garage - molded together into a unique booming style."
  },
  {
    "key": "synthwave",
    "name": "Synthwave",
    "description": "Influenced by video games and movie soundtracks of the 80s, Synthwave's mission continues today with great new music keeping things future retro."
  },
  {
    "key": "vocalhouse",
    "name": "Vocal House",
    "description": "The glorious 4/4 thump of House music paired perfectly with the human voice. Sultry, soulful, sexy sounds."
  },
  {
    "key": "edm",
    "name": "EDM Hits",
    "description": "Where dance meets pop. Crossover favorites, stadium-sized anthems and the biggest electronic tunes in existence."
  },
  {
    "key": "lofihiphop",
    "name": "LoFi Hip-Hop",
    "description": "Tastefully designed LoFi tunes with textured atmospheres & head nodding beats - designed for the ears."
  },
  {
    "key": "lofiloungenchill",
    "name": "LoFi Lounge & Chill",
    "description": ""
  }
];
}
