$(document).ready(function() {
  $('#fullpage').fullpage({
    //options here
    licenseKey:'OPEN-SOURCE-GPLV3-LICENSE',
    autoScrolling:true,
    scrollHorizontally: true,
    navigation:true,
    navigationPosition:'left',
    keyboardScrolling:true,
    fixedElements: 'header',
    paddingTop: '100px' // Add padding to sections to account for the fixed header
  });
});