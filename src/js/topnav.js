// loadNav.js
const activeId = document.currentScript.getAttribute('active');


fetch('./src/html/topnav.html') // Fetch the topnav.html file
  .then(response => response.text()) // Get the response as plain text (HTML)
  .then(html => {
    // Insert the fetched HTML into the container div
    document.getElementById('topnav-container').innerHTML = html;
    const activePage = document.getElementById(activeId);
    activePage.setAttribute("class", "active");

  })
  .catch(error => { // Add error handling
    console.error('Error loading navigation:', error);
  });


