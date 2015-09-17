window.onload = function() {
	var fb = new Firebase('https://flickering-inferno-1483.firebaseio.com/'); // creates Firebase object	
	var postsRef = fb.child('posts'); // reference to 

	$("#submit").on('click', function() {
		postsRef.push({
			content: $("#message").val(),
			date: new Date().toLocaleDateString('en-US')
		});
	});

	postsRef.on('child_added', function(data) {
		var postData = data.val();
		var content = postData.content;
		var date = postData.date;
		$("#messages").append("<div>"+content+"</div>");	
		$("#messages").append("<div>"+date+"</div>");
	});
}