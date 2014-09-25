$(document).ready(function() {
	var fb = new Firebase('https://flickering-inferno-1483.firebaseio.com/');	
	var postsRef = fb.child('posts');

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
		$("#messages").prepend("<div>"+date+"</div>");		
		$("#messages").prepend("<div>"+content+"</div>");		
	});
});
