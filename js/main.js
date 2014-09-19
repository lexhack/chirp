window.onload = function() {
	var fb = new Firebase('https://flickering-inferno-1483.firebaseio.com/');

	var submit = document.getElementById('submit');
	var textbox = document.getElementById('message');
	
	var posts = fb.child('posts');

	submit.onclick = addPost;

	function addPost() {
		posts.push({
			content: textbox.value,
			date: new Date().toLocaleDateString('en-US')
		});
	}

	posts.on('child_added', function(data) {
		var post = data.val();
		console.log(post);
	})
}