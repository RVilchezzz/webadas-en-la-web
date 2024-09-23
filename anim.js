// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "My shadow side so amplified", time: 9 }, 
  { text: "Keeps coming back dissatisfied", time: 11.7 },
  { text: "Elementary son but it's so...", time: 16 },
  { text: "My love affair with everywhere", time: 20 },
  { text: "Was innocent why do you care?", time: 22.5 },
  { text: "Someone start the car, time to go...", time: 24.9},

  { text: "You're the best I know", time: 35.5 },

  { text: "My sunny side has up and died", time: 43},
  { text: "I'm betting that when we collide", time: 44.1},
  { text: "The universe will shift into a low", time: 49},
  { text: "The travesties that we have seen", time: 54},
  { text: "Are treating me like Benzedrine", time: 54.9},
  { text: "Automatic laughter from a pro", time: 60.8 },

  { text: "My what a good day for a walk outside", time: 66 },
  { text: "I'd like to get to know you a little better, baby", time: 71 },
  { text: "God knows that I really tried", time: 74.5 },
  { text: "My what a good day for a take out bride", time: 75 },
  { text: "I'd like to say we did it for the better of", time: 82 },

  { text: "I saw you there so unaware", time: 91 },
  { text: "Those hummingbirds all in your hair", time: 91.8},
  { text: "Elementary son but it's so...", time: 97},
  { text: "The disrepair of Norma Jean", time: 101.2 },
  { text: "Could not compare to your routine", time: 103.9 },
  { text: "Balarama beauty going toe to toe", time: 108 },

  { text: "My what a good day for a let it slide", time: 113.5 },
  { text: "I'd like to say we did it for the better of", time: 119.5 },

  { text: "I thought about it", time: 127. },
  { text: "And I brought it out", time: 127.3 },
  { text: "I'm motivated by the lack of doubt", time: 133.9 },
  { text: "I'm consecrated but I'm not devout", time: 139 },
  { text: "The mother, the father, the daughter", time: 143 },

  { text: "Right on the verge, just one more dose", time: 160},
  { text: "I'm travelling from coast to coast", time: 161.9},
  { text: "My theory isn't perfect but it's close", time: 165},
  { text: "I'm almost there, why should I care?", time: 171.5},
  { text: "My heart is hurting when I share", time: 172.5},
  { text: "Someone open up, let it show", time: 177 },

  { text: "My what a good day for a walk outside", time: 182.2 },
  { text: "I'd like to think we did it for the better of", time: 188 },

  { text: "I thought about it and I brought it out", time: 197 },
  { text: "I'm motivated by the lack of doubt", time: 202.6 },
  { text: "I'm consecrated but I'm not devout", time: 208 },
  { text: "The mother, the father, the daughter", time: 212. },

  { text: "Oh you don't form in the wet sand", time: 218.7},
  { text: "You don't form at all", time: 224},
  { text: "Oh, you don't form in the wet sand", time: 229 },
  { text: "I do", time: 234.1 },
  { text: "Yeah", time: 238 },

  { text: "Oh you don't form in the wet sand", time: 238 },
  { text: "You don't form at all", time: 246 },
  { text: "Oh, you don't form in the wet sand", time: 251 },
  { text: "I do", time: 255 },
  { text: "Yeah", time: 258 },



];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time +5 ,
  );


  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 120 segundos (120,000 milisegundos)
setTimeout(ocultarTitulo, 120000);