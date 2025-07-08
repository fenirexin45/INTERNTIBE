// Fetch user data, build DOM table, enable Edit/Save and Delete features.

document.addEventListener('DOMContentLoaded', function () {
  const tableBody = document.querySelector('#userTable tbody');

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      users.forEach(user => {
        const row = document.createElement('tr');

        // Data cells
        const nameCell = document.createElement('td');
        nameCell.textContent = user.name;

        const emailCell = document.createElement('td');
        emailCell.textContent = user.email;

        const usernameCell = document.createElement('td');
        usernameCell.textContent = user.username;

        const phoneCell = document.createElement('td');
        phoneCell.textContent = user.phone;

        // Edit cell
        const editCell = document.createElement('td');
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        editCell.appendChild(editBtn);

        // Delete cell
        const deleteCell = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteCell.appendChild(deleteBtn);

        // Edit/Save toggle
        editBtn.addEventListener('click', function () {
          const isEditing = editBtn.textContent === 'Save';

          if (!isEditing) {
            nameCell.innerHTML = `<input type="text" value="${nameCell.textContent}">`;
            emailCell.innerHTML = `<input type="text" value="${emailCell.textContent}">`;
            usernameCell.innerHTML = `<input type="text" value="${usernameCell.textContent}">`;
            phoneCell.innerHTML = `<input type="text" value="${phoneCell.textContent}">`;
            editBtn.textContent = 'Save';
          } else {
            nameCell.textContent = nameCell.querySelector('input').value;
            emailCell.textContent = emailCell.querySelector('input').value;
            usernameCell.textContent = usernameCell.querySelector('input').value;
            phoneCell.textContent = phoneCell.querySelector('input').value;
            editBtn.textContent = 'Edit';
          }
        });

        // Delete functionality
        deleteBtn.addEventListener('click', function () {
          row.remove();
        });

        // Append all cells to the row
        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(usernameCell);
        row.appendChild(phoneCell);
        row.appendChild(editCell);
        row.appendChild(deleteCell);

        // Append row to the table
        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
});
