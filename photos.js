 function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  }
  
  var images = ["JP1.jpg", "JP2.jpg", "JP3.jpg", "JP4.jpg", "JP5.jpg", "JP6.jpg", "JP7.jpg", "JP8.jpg", "JP9.jpg", "JP10.jpg"]; // Add the file names of your images here
  images = shuffle(images);
  var selectedImage = images[0];
  
  