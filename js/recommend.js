$(function(){
  // ==========================================================
  // Music Recommendation Section
  // ==========================================================
  const recommendations = {
    happy: [
      {
        song: "Here Comes The Sun",
        album: "Abbey Road",
        youtube: "https://www.youtube.com/embed/KQetemT1sWc"
      },
      {
        song: "Good Day Sunshine",
        album: "Revolver",
        youtube: "https://www.youtube.com/embed/R9ncBUcInTM"
      },
      {
        song: "Ob-La-Di, Ob-La-Da",
        album: "The Beatles (White Album)",
        youtube: "https://www.youtube.com/embed/9x5WY_jmsko"
      },
      {
        song: "Penny Lane",
        album: "Magical Mystery Tour",
        youtube: "https://www.youtube.com/embed/S-rB0pHI9fU"
      },
      {
        song: "All You Need Is Love",
        album: "Magical Mystery Tour",
        youtube: "https://www.youtube.com/embed/_7xMfIp-irg"
      }
    ],
    sad: [
      {
        song: "Yesterday",
        album: "Help!",
        youtube: "https://www.youtube.com/embed/NrgmdOz227I"
      },
      {
        song: "Eleanor Rigby",
        album: "Revolver",
        youtube: "https://www.youtube.com/embed/HuS5NuXRb5Y"
      },
      {
        song: "The Long and Winding Road",
        album: "Let It Be",
        youtube: "https://www.youtube.com/embed/fR4HjTH_fTM"
      },
      {
        song: "Julia",
        album: "The Beatles (White Album)",
        youtube: "https://www.youtube.com/embed/TZip_br_v3w"
      },
      {
        song: "For No One",
        album: "Revolver",
        youtube: "https://www.youtube.com/embed/hgJ7dmr_ysU"
      }
    ],
    energetic: [
      {
        song: "Twist and Shout",
        album: "Please Please Me",
        youtube: "https://www.youtube.com/embed/2RicaUqd9Hg"
      },
      {
        song: "Help!",
        album: "Help!",
        youtube: "https://www.youtube.com/embed/2Q_ZzBGPdqE"
      },
      {
        song: "Drive My Car",
        album: "Rubber Soul",
        youtube: "https://www.youtube.com/embed/6ZwNO_zAqOo"
      },
      {
        song: "A Hard Day's Night",
        album: "A Hard Day's Night",
        youtube: "https://www.youtube.com/embed/Yjyj8qnqkYI"
      },
      {
        song: "Helter Skelter",
        album: "The Beatles (White Album)",
        youtube: "https://www.youtube.com/embed/vWW2SzoAXMo"
      }
    ],
    calm: [
      {
        song: "Blackbird",
        album: "The Beatles (White Album)",
        youtube: "https://www.youtube.com/embed/Man4Xw8Xypo"
      },
      {
        song: "Across the Universe",
        album: "Let It Be",
        youtube: "https://www.youtube.com/embed/90M60PzmxEE"
      },
      {
        song: "Here, There and Everywhere",
        album: "Revolver",
        youtube: "https://www.youtube.com/embed/KQetemT1sWc"
      },
      {
        song: "Something",
        album: "Abbey Road",
        youtube: "https://www.youtube.com/embed/UelDrZ1aFeY"
      },
      {
        song: "In My Life",
        album: "Rubber Soul",
        youtube: "https://www.youtube.com/embed/mBqqeqcJM_0"
      }
    ]
  };

  $('#recommend-btn').on('click', function(){
    const mood = $('#mood').val();
    const songsForMood = recommendations[mood];
    const randomIndex = Math.floor(Math.random() * songsForMood.length);
    const result = songsForMood[randomIndex];

    const resultHtml = `
      <h3>${result.song}</h3>
      <p>앨범: ${result.album}</p>
      <iframe width="560" height="315" src="${result.youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
    $('#recommend-result').html(resultHtml);
  });
});