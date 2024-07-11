const apiUrl = 'https://jsonplaceholder.typicode.com/users';
// Make a GET request using the Fetch API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then( res => {
    console.log(res);
    const data = res;
    let rows ='';
    data.forEach(userData => {
        rows +=
        `<tr>
            <td>${userData.id}</td>
            <td>${userData.name}</td>
            <td>${userData.username}</td>
            <td>${userData.email}</td>

        </tr>`;
        
    });
    document.getElementById('tableBody').innerHTML = rows;
  })
  .catch(error => {
    console.log('Error', error);
  })
    


   
