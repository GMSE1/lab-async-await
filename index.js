// Step 2: Create displayPosts function
function displayPosts(posts) {
  const postList = document.querySelector('#post-list');
  
  // Loop through posts
  posts.forEach(post => {
    // Create li tag
    const li = document.createElement('li');
    
    // Create h1 tag and add title as textContent
    const h1 = document.createElement('h1');
    h1.textContent = post.title;
    
    // Create p tag and add body as textContent
    const p = document.createElement('p');
    p.textContent = post.body;
    
    // Append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);
    
    // Append li to ul
    postList.appendChild(li);
  });
}

// Step 3: Refactor with Async/Await
// Create function to house fetch and apply async
async function fetchPosts() {
  try {
    // Apply await to fetch
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    
    // Call displayPosts function after fetch
    displayPosts(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// Call the async function
fetchPosts();