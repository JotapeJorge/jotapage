fetch('bio.txt')
  .then(response => response.text())
  .then(htmlText => {
    // Display the HTML content on your web page
    document.getElementById('bio').innerHTML = htmlText;
  });