 function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  }
  
  var images = ["images/JP1.JPG", 
                "images/JP2.JPG", 
                "images/JP3.jpg",
                "images/JP4.jpg",
                "images/JP5.JPG",
                "images/JP6.JPG",
                "images/JP7.JPG",
                "images/JP8.JPG",
                "images/JP9.JPG",
                "images/JP10.jpg"];
  images = shuffle(images);
  var selectedImage = images[0];
  
  
