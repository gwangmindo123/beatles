$(document).ready(function() {
  $('#fullpage').fullpage({
    //options here
    licenseKey: 'gplv3-license', // Using a known GPLv3 license key string
    autoScrolling:true,
    navigation:true,
    navigationPosition:'left',
    keyboardScrolling:true,
    fixedElements: 'header',
    paddingTop: '100px' // Add padding to sections to account for the fixed header
  });
});