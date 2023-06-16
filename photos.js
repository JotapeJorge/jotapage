 function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  }
  
  var images = ["https://github.com/JotapeJorge/jotape/raw/main/images/JP1.JPG", 
                "https://github.com/JotapeJorge/jotape/raw/main/images/JP2.JPG", 
                "https://github.com/JotapeJorge/jotape/raw/main/images/JP3.jpg",
                "https://github.com/JotapeJorge/jotape/raw/main/images/JP4.jpg",
                "https://github.com/JotapeJorge/jotape/raw/main/images/JP5.JPG",
                "https://github.com/JotapeJorge/jotape/raw/main/images/JP6.JPG",
                "https://github.com/JotapeJorge/jotape/raw/main/images/JP7.JPG",
                "https://github.com/JotapeJorge/jotape/raw/main/images/JP8.JPG",
                "https://github.com/JotapeJorge/jotape/raw/main/images/JP9.JPG",
                "https://github.com/JotapeJorge/jotape/raw/main/images/JP10.jpg"];
  images = shuffle(images);
  var selectedImage = images[0];
  
  
