fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
      const wrapper = document.querySelector('.wrapper');
      const table = document.createElement('table');
      table.innerHTML = `
          <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Completed</th>
          </tr>
      `;
      data.slice(0, 10).forEach(item => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${item.id}</td>
              <td>${item.title}</td>
              <td>${item.completed ? '✅' : '❌'}</td>
          `;
          table.appendChild(row);
      });
      wrapper.appendChild(table);
  });
