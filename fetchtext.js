fetch('text/bio.txt')
  .then(response => response.text())
  .then(bioText => {
    // Display the bio text on your web page
    document.getElementById('bio').innerHTML = bioText;
  })
  .catch(error => {
    console.error('Error fetching bio:', error);
  });

fetch('text/book.txt')
  .then(response => response.text())
  .then(bookText => {
    // Display the book text on your web page
    document.getElementById('book').innerHTML = bookText;
  })
  .catch(error => {
    console.error('Error fetching book:', error);
  });
