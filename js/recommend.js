$(function(){
  // ==========================================================
  // Music Recommendation Section
  // ==========================================================
  const recommendations = {
    happy: {
      song: "Here Comes The Sun",
      album: "Abbey Road",
      youtube: "https://www.youtube.com/embed/KQetemT1sWc"
    },
    sad: {
      song: "Yesterday",
      album: "Help!",
      youtube: "https://www.youtube.com/embed/NrgmdOz227I"
    },
    energetic: {
      song: "Twist and Shout",
      album: "Please Please Me",
      youtube: "https://www.youtube.com/embed/eFW2s1g3_9o"
    },
    calm: {
      song: "Blackbird",
      album: "The Beatles (White Album)",
      youtube: "https://www.youtube.com/embed/Man4Xw8Xypo"
    }
  };

  $('#recommend-btn').on('click', function(){
    const mood = $('#mood').val();
    const result = recommendations[mood];
    const resultHtml = `
      <h3>${result.song}</h3>
      <p>앨범: ${result.album}</p>
      <iframe width="560" height="315" src="${result.youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
    $('#recommend-result').html(resultHtml);
  });
});