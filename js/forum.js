// Manage topics, posts, and replies in localStorage
let topics = JSON.parse(localStorage.getItem('topics')) || {};

function displayTopics(query = '') {
  // Retrieve topics from localStorage
  topics = JSON.parse(localStorage.getItem('topics')) || {};

  // Clear the current topic list in the DOM
  const topicList = document.getElementById('topicList');
  topicList.innerHTML = '';

  // Loop through each topic in topics object and display
  for (let topic in topics) {
      // Check if the topic matches the search query
      if (topic.toLowerCase().includes(query)) {
          const topicData = topics[topic];
          
          // Create a list item for each topic
          const li = document.createElement('li');
          li.innerHTML = `
              <strong>${topic}</strong> - Created by ${topicData.createdBy} on ${topicData.dateCreated}
              <br>Total Posts: ${topicData.posts.length}
              <button onclick="viewPosts('${topic}')">View Posts</button>
          `;
          
          // Append to the topic list
          topicList.appendChild(li);
      }
  }
}

function searchForum() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filter = document.getElementById('searchFilter').value;

  if (filter === 'topics') {
      displayTopics(query);
  } else if (filter === 'posts') {
      displayPosts(query);
  } else if (filter === 'replies') {
      displayReplies(query);
  }
}

function createTopic() {
    const title = document.getElementById('topicTitle').value.trim();
    if (title && !topics[title]) {
        topics[title] = {
            createdBy: localStorage.getItem('current_user') || 'Anonymous',
            dateCreated: new Date().toLocaleDateString(),
            posts: []
        };
        localStorage.setItem('topics', JSON.stringify(topics));
        displayTopics();
        document.getElementById('topicTitle').value = '';
    } else {
        alert("Topic already exists or title is empty!");
    }
    console.log("Current Topics in LocalStorage:", JSON.parse(localStorage.getItem('topics')));
    displayTopics();
    titleInput.value = '';
}

function viewPosts(topic) {
    document.getElementById('topics-section').style.display = 'none';
    document.getElementById('posts-section').style.display = 'block';
    document.getElementById('replies-section').style.display = 'none';
    document.getElementById('create-topic').style.display = 'none';

    document.getElementById('currentTopicTitle').textContent = topic;
    const postList = document.getElementById('postList');
    postList.innerHTML = '';
    topics[topic].posts.forEach((post, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${post.title}</strong> - Created by ${post.createdBy} on ${post.dateCreated}
            <br>Total Replies: ${post.replies.length}
            <button onclick="viewReplies('${topic}', ${index})">View Replies</button>
        `;
        postList.appendChild(li);
    });
}

function toggleDescription() {
  const descriptionField = document.getElementById('postDescription');
  const postTitle = document.getElementById('postTitle').value.trim();
  descriptionField.style.display = postTitle ? 'block' : 'none';
}

function createPost() {
  const topic = document.getElementById('currentTopicTitle').textContent;
  const title = document.getElementById('postTitle').value.trim();
  const description = document.getElementById('postDescription').value.trim();
  const fileInput = document.getElementById('postFile');

  if (title) {
      const post = {
          title,
          description,
          createdBy: localStorage.getItem('current_user') || 'Anonymous',
          dateCreated: new Date().toLocaleDateString(),
          replies: [],
          file: fileInput.files.length ? fileInput.files[0].name : null // Dummy file upload
      };
      topics[topic].posts.push(post);
      localStorage.setItem('topics', JSON.stringify(topics));
      viewPosts(topic);
      document.getElementById('postTitle').value = '';
      document.getElementById('postDescription').value = '';
      fileInput.value = '';
  } else {
      alert("Post title cannot be empty!");
  }
}

function viewReplies(topic, postIndex) {
    document.getElementById('topics-section').style.display = 'none';
    document.getElementById('posts-section').style.display = 'none';
    document.getElementById('replies-section').style.display = 'block';
    document.getElementById('create-topic').style.display = 'none';

    const post = topics[topic].posts[postIndex];
    document.getElementById('currentPostTitle').textContent = post.title;
    const replyList = document.getElementById('replyList');
    replyList.innerHTML = '';
    post.replies.forEach(reply => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${reply.createdBy}</strong> on ${reply.dateCreated}: ${reply.content}`;
        replyList.appendChild(li);
    });
}

function createReply() {
    const topic = document.getElementById('currentTopicTitle').textContent;
    const postTitle = document.getElementById('currentPostTitle').textContent;
    const replyContent = document.getElementById('replyContent').value.trim();

    if (replyContent) {
        const postIndex = topics[topic].posts.findIndex(post => post.title === postTitle);
        const reply = {
            content: replyContent,
            createdBy: localStorage.getItem('current_user') || 'Anonymous',
            dateCreated: new Date().toLocaleDateString()
        };
        topics[topic].posts[postIndex].replies.push(reply);
        localStorage.setItem('topics', JSON.stringify(topics));
        viewReplies(topic, postIndex);
        document.getElementById('replyContent').value = '';
    } else {
        alert("Reply cannot be empty!");
    }
}

// Search supporter functions
function displayPosts(query = '') {
  const topic = document.getElementById('currentTopicTitle').textContent;
  const postList = document.getElementById('postList');
  postList.innerHTML = '';

  topics[topic].posts.forEach((post, index) => {
      // Check if the post title matches the search query
      if (post.title.toLowerCase().includes(query)) {
          const li = document.createElement('li');
          li.innerHTML = `
              <strong>${post.title}</strong> - Created by ${post.createdBy} on ${post.dateCreated}
              <br>Total Replies: ${post.replies.length}
              <button onclick="viewReplies('${topic}', ${index})">View Replies</button>
          `;
          postList.appendChild(li);
      }
  });
}

function displayReplies(query = '') {
  const topic = document.getElementById('currentTopicTitle').textContent;
  const postTitle = document.getElementById('currentPostTitle').textContent;
  const replyList = document.getElementById('replyList');
  replyList.innerHTML = '';

  const postIndex = topics[topic].posts.findIndex(post => post.title === postTitle);
  const replies = topics[topic].posts[postIndex].replies;

  replies.forEach(reply => {
      // Check if the reply content matches the search query
      if (reply.content.toLowerCase().includes(query)) {
          const li = document.createElement('li');
          li.innerHTML = `<strong>${reply.createdBy}</strong> on ${reply.dateCreated}: ${reply.content}`;
          replyList.appendChild(li);
      }
  });
}

function backToTopics() {
  // Hide the posts and replies sections
  document.getElementById('posts-section').style.display = 'none';
  document.getElementById('replies-section').style.display = 'none';
  
  // Show the topics section
  document.getElementById('topics-section').style.display = 'block';
  document.getElementById('create-topic').style.display = 'block';

  // Refresh the topics list to make sure everything is up to date
  displayTopics();
}

function backToPosts() {
    const topic = document.getElementById('currentTopicTitle').textContent;
    viewPosts(topic);
}

window.onload = function() {
  displayTopics();
};

function openProfile() {
  window.location.href = 'profile.html';
}
