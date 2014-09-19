window.onload = function() {
	var fb = new Firebase('https://flickering-inferno-1483.firebaseio.com/');

	var submit = document.getElementById('submit');
	var textbox = document.getElementById('message');
	
	var postsRef = fb.child('posts');

	submit.onclick = addPost;

	function addPost() {
		postsRef.push({
			content: textbox.value,
			date: new Date().toLocaleDateString('en-US')
		});
	}

	postsRef.on('child_added', function(data) {
		var postData = data.val();
		var post = document.createElement('div');
		var postContent = document.createTextNode(postData.content);
		post.appendChild(postContent);
		
		var date = document.createElement('div');
		var dateContent = document.createTextNode(postData.date);
		date.appendChild(dateContent);
		post.appendChild(date);

		var posts = document.getElementById('messages');
		posts.insertBefore(post, posts.firstChild);
	});
}