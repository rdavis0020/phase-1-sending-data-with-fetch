function submitData(name, email) {
    const configurationObject = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ name: name, email: email })
    };
  
    return fetch('http://localhost:3000/users', configurationObject)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the response to JSON
      })
      .then(data => {
        // Access the newly converted object and get the new id
        const newId = data.id;
  
        // Append the new id to the DOM
        const idElement = document.createElement('p');
        idElement.textContent = `New ID: ${newId}`;
        document.body.appendChild(idElement);
  
        // Return the data for testing purposes
        return data;
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
  
        // Append the error to the DOM for visibility
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
      });
  }
  