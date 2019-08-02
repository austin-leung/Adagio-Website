function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  document.getElementById("welcome").innerHTML = 'Hi, ' + profile.getName();
  document.getElementById("calend").innerHTML = '''
  <h3 class="mb-3 font-weight-normal"> Ready to start? Hop into a lesson listed below whenever convenient!</h2>
    <br>
    <iframe src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=bWVicm9uYmFtZXNAZ21haWwuY29t&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%230B8043&amp;title=Adagio%20Lesson%20Schedule&amp;showNav=1&amp;showDate=1&amp;showPrint=1&amp;showTabs=1&amp;showCalendars=0" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
    <br>
    <br>
  <h6 class="mb-3 font-weight-normal">Follow the Zoom meeting link in the description to join the lesson at the listed time.</h6>''';
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
  document.getElementById("welcome").innerHTML = '';
  document.getElementById("calend").innerHTML = '<h3 class="mb-3 font-weight-normal">You must sign in to view lessons.</h3>';
}
