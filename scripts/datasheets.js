document.addEventListener('DOMContentLoaded', function() {
  // Perform AJAX request to fetch the JSON data
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://raw.githubusercontent.com/JotapeJorge/Brazilian-Football-Data/main/data-json/dataELOranking.json', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var jsonData = JSON.parse(xhr.responseText);
      console.log('JSON Data:', jsonData); // Log the fetched JSON data
      populateGrid(jsonData); // Call a function to populate the grid with the JSON data
    } else {
      console.error('Failed to fetch JSON data. Status:', xhr.status);
    }
  };
   xhr.onerror = function() {
    console.error('Error fetching JSON data.'); // Log any other errors related to the AJAX request
  };
  xhr.send();
 // Function to populate the SlickGrid with the JSON data
function populateGrid(data) {
  var columns = [
    { id: 'Rank', name: '#', field: 'Rank', minWidth: 10, maxWidth: 50, visible: true },
    { id: 'Time', name: 'Time', field: 'Time', visible: true },
    { id: 'Elo', name: 'Elo', field: 'Elo', visible: true },
    { id: '#', name: 'Rank', field: '#', minWidth: 10, maxWidth: 50, cssClass: 'hide-sm', visible: true },
    { id: 'Média', name: 'Média', field: 'Média', cssClass: 'hide-sm', visible: true },
    { id: 'Jogos', name: 'Jogos', field: 'Jogos', cssClass: 'hide-sm', visible: true },
    { id: 'Vitórias', name: 'Vitórias', field: 'Vitórias', cssClass: 'hide-sm', visible: true },
    { id: 'Derrotas', name: 'Derrotas', field: 'Derrotas', cssClass: 'hide-sm', visible: true },
    { id: 'Gols', name: 'Gols', field: 'Gols', cssClass: 'hide-sm', visible: true },
  ];
   console.log('Grid populated successfully!');

  var options = {
    enableCellNavigation: true,
    enableColumnReorder: false,
    forceFitColumns: true,
  };

  var grid = new Slick.Grid('#myGrid', data, columns, options);

  // Function to handle column visibility based on screen size
  function updateColumnVisibility() {
    var hideColumns = window.innerWidth <= 768;
    var visibleColumns = columns.filter((col) => !hideColumns || !col.cssClass || !col.cssClass.includes('hide-sm'));
    grid.setColumns(visibleColumns);
    grid.invalidate();
    grid.render();
   console.log('Column visibility updated!');
    }
 

  // Call the function initially and add a listener for future changes
 updateColumnVisibility();
    window.addEventListener('resize', updateColumnVisibility);
  }
});
