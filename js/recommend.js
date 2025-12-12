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
        youtube: "https://youtu.be/R9ncBUcInTM?si=oPy4K1Atndj0ZB0Q"
      },
      {
        song: "Ob-La-Di, Ob-La-Da",
        album: "The Beatles (White Album)",
        youtube: "https://youtu.be/9x5WY_jmsko?si=zwztGyktFfSUHAxq"
      },
      {
        song: "Penny Lane",
        album: "Magical Mystery Tour",
        youtube: "https://youtu.be/S-rB0pHI9fU?si=PgmAOc191JzO8rsp"
      },
      {
        song: "All You Need Is Love",
        album: "Magical Mystery Tour",
        youtube: "https://youtu.be/_7xMfIp-irg?si=RNNCV2BsaW0fx0ls"
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
        youtube: "https://youtu.be/HuS5NuXRb5Y?si=7SbBbu_Xjxsqxn6E"
      },
      {
        song: "The Long and Winding Road",
        album: "Let It Be",
        youtube: "https://youtu.be/fR4HjTH_fTM?si=E-p84IVO_zoktusr"
      },
      {
        song: "Julia",
        album: "The Beatles (White Album)",
        youtube: "https://youtu.be/TZip_br_v3w?si=ZeRA58BeRcxxeRtc"
      },
      {
        song: "For No One",
        album: "Revolver",
        youtube: "https://youtu.be/hgJ7dmr_ysU?si=hs2MR5Lq3kCpV7EN"
      }
    ],
    energetic: [
      {
        song: "Twist and Shout",
        album: "Please Please Me",
        youtube: "https://youtu.be/2RicaUqd9Hg?si=BHSvw8meu5u6ZSSU"
      },
      {
        song: "Help!",
        album: "Help!",
        youtube: "https://youtu.be/2Q_ZzBGPdqE?si=EEpkoCjITka9s7So"
      },
      {
        song: "Drive My Car",
        album: "Rubber Soul",
        youtube: "https://youtu.be/6ZwNO_zAqOo?si=BKCWrADYqcraPtjM"
      },
      {
        song: "A Hard Day's Night",
        album: "A Hard Day's Night",
        youtube: "https://youtu.be/Yjyj8qnqkYI?si=0iIF52yO5XC5Mu_O"
      },
      {
        song: "Helter Skelter",
        album: "The Beatles (White Album)",
        youtube: "https://youtu.be/vWW2SzoAXMo?si=iHPs75EH7FyzOtOJ"
      }
    ],
    calm: [
      {
        song: "Blackbird",
        album: "The Beatles (White Album)",
        youtube: "https://youtu.be/Man4Xw8Xypo?si=vjU-YX8YkI9VXHsU"
      },
      {
        song: "Across the Universe",
        album: "Let It Be",
        youtube: "https://youtu.be/90M60PzmxEE?si=nEoLzKMn8IDz2EbQ"
      },
      {
        song: "Here, There and Everywhere",
        album: "Revolver",
        youtube: "https://youtu.be/KQetemT1sWc?si=QvNTy6D4XnVRYoFu"
      },
      {
        song: "Something",
        album: "Abbey Road",
        youtube: "https://youtu.be/UelDrZ1aFeY?si=-F-dphHbw_vBcSTg"
      },
      {
        song: "In My Life",
        album: "Rubber Soul",
        youtube: "https://youtu.be/mBqqeqcJM_0?si=Tbj2EEN8gSDcKAIe"
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