window.onload = function() {
	var fb = new Firebase("https://flickering-inferno-1483.firebaseio.com/");

	var submit = document.getElementById("submit");
	var textbox = document.getElementById("message");
	
	fb.data("stored-messages");

	fb.limit(10).on('value', function(snapshot) {
		var data = snapshot.val();
		console.log(snapshot.storedMessages);
	});

	submit.onclick = function() {
		fb.push( {storedMessages: textbox.value} );
	}
}