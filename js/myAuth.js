var provider = new firebase.auth.GoogleAuthProvider();
var user;

//sign in with a redirect window, call signInWithRedirect
function signIn(){
	console.log("Entered");
	firebase.auth().signInWithRedirect(provider);
	
	firebase.auth().getRedirectResult().then(function(result) {
	  if (result.credential) {
		// This gives you a Google Access Token. You can use it to access the Google API.
		var token = result.credential.accessToken;
		// ...
		
		window.location.href = 'menu.html';
		console.log(user.displayName);
	//window.location.href = "menu.html";
	  }
	  // The signed-in user info.
	  var user = result.user;
	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	  // ...
	});
	
	
	
	
	
};
