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
        youtube: "https://www.youtube.com/embed/6xXw3cR14u0"
      },
      {
        song: "Ob-La-Di, Ob-La-Da",
        album: "The Beatles (White Album)",
        youtube: "https://www.youtube.com/embed/Qh4Y_j_d5tI"
      },
      {
        song: "Penny Lane",
        album: "Magical Mystery Tour",
        youtube: "https://www.youtube.com/embed/S-rB0pHIFpQ"
      },
      {
        song: "All You Need Is Love",
        album: "Magical Mystery Tour",
        youtube: "https://www.youtube.com/embed/dsuxEaL_Nio"
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
        youtube: "https://www.youtube.com/embed/HuS5p4RjJ4s"
      },
      {
        song: "The Long and Winding Road",
        album: "Let It Be",
        youtube: "https://www.youtube.com/embed/fT6Q1z_o4lY"
      },
      {
        song: "Julia",
        album: "The Beatles (White Album)",
        youtube: "https://www.youtube.com/embed/sIqP-k1y0EU"
      },
      {
        song: "For No One",
        album: "Revolver",
        youtube: "https://www.youtube.com/embed/2-nFh8E8Cq4"
      }
    ],
    energetic: [
      {
        song: "Twist and Shout",
        album: "Please Please Me",
        youtube: "https://www.youtube.com/embed/eFW2s1g3_9o"
      },
      {
        song: "Help!",
        album: "Help!",
        youtube: "https://www.youtube.com/embed/Qy3H7IeK52g"
      },
      {
        song: "Drive My Car",
        album: "Rubber Soul",
        youtube: "https://www.youtube.com/embed/EZoY9s8sQ1M"
      },
      {
        song: "A Hard Day's Night",
        album: "A Hard Day's Night",
        youtube: "https://www.youtube.com/embed/YpS8y18tT6Y"
      },
      {
        song: "Helter Skelter",
        album: "The Beatles (White Album)",
        youtube: "https://www.youtube.com/embed/u_J6hX2o32E"
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
        youtube: "https://www.youtube.com/embed/90gpY1uE91s"
      },
      {
        song: "Here, There and Everywhere",
        album: "Revolver",
        youtube: "https://www.youtube.com/embed/sK9kMhJ_0xY"
      },
      {
        song: "Something",
        album: "Abbey Road",
        youtube: "https://www.youtube.com/embed/Jl5gN31eKck"
      },
      {
        song: "In My Life",
        album: "Rubber Soul",
        youtube: "https://www.youtube.com/embed/z9ypFjX-82g"
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