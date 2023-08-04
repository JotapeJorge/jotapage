// Function to fetch the timestamp data
async function fetchTimestampData() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/JotapeJorge/Brazilian-Football-Data/main/data-json/timestamps.json');
      const data = await response.json();

      // Access the timestamp from the JSON data
      const timestamp = data.Timestamp['0'];

      // Format the timestamp
      const formattedTimestamp = formatTimestamp(timestamp);

      // Display the formatted timestamp on the webpage
      const timestampContainer = document.getElementById('timestampContainer');
      timestampContainer.textContent = formattedTimestamp;
    } catch (error) {
      console.error('Error fetching timestamp data:', error);
    }
  }

  // Function to format the timestamp as "Atualizado no dia d às h:m"
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Março', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `Atualizado em ${day} de ${month} de ${year} às ${hours}h${minutes}`;
  }

  // Call the function to fetch and display the timestamp data
  fetchTimestampData();
