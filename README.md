# customer-management-app

<html><head><base href="admin://mvp_main://restaurant://my_ordering_app/customers"><title>Customer Management - My Ordering App</title>
<meta name="description" content="Admin panel for managing customers in My Ordering App">
<style>
  body, html {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f4f8;
    color: #333;
    line-height: 1.6;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  header {
    background-color: #2c3e50;
    color: #ecf0f1;
    padding: 1rem;
    text-align: center;
  }
  h1, h2 {
    margin-bottom: 20px;
  }
  .admin-panel {
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    margin-top: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
  }
  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  tr:hover {
    background-color: #f5f5f5;
  }
  .btn {
    display: inline-block;
    background-color: #3498db;
    color: #fff;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
  }
  .btn:hover {
    background-color: #2980b9;
  }
  .btn-danger {
    background-color: #e74c3c;
  }
  .btn-danger:hover {
    background-color: #c0392b;
  }
  .search-bar {
    margin-bottom: 20px;
  }
  .search-bar input {
    width: 70%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  .search-bar button {
    padding: 10px 20px;
    font-size: 16px;
  }
  .pagination {
    margin-top: 20px;
    text-align: center;
  }
  .pagination a {
    color: #3498db;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
    margin: 0 4px;
  }
  .pagination a.active {
    background-color: #3498db;
    color: white;
    border: 1px solid #3498db;
  }
  .pagination a:hover:not(.active) {
    background-color: #ddd;
  }
  .nav-bar {
    background-color: #34495e;
    padding: 10px 0;
  }
  .nav-bar ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  .nav-bar li {
    margin: 0 15px;
  }
  .nav-bar a {
    color: #ecf0f1;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s;
  }
  .nav-bar a:hover {
    color: #3498db;
  }
  .nav-bar a.active {
    font-weight: bold;
    color: #3498db;
  }
  .customer-stats {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .stat-box {
    background-color: #ecf0f1;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    flex: 1;
    margin: 0 10px;
  }
  .stat-box h3 {
    margin: 0;
    font-size: 24px;
    color: #2c3e50;
  }
  .stat-box p {
    margin: 5px 0 0;
    font-size: 14px;
    color: #7f8c8d;
  }
</style>
</head>
<body>
  <header>
    <h1>Customer Management</h1>
  </header>

  <nav class="nav-bar">
    <ul>
      <li><a href="admin://mvp_main://restaurant://my_ordering_app/dashboard">Dashboard</a></li>
      <li><a href="admin://mvp_main://restaurant://my_ordering_app/menu">Menu Management</a></li>
      <li><a href="admin://mvp_main://restaurant://my_ordering_app/orders">Order Management</a></li>
      <li><a href="admin://mvp_main://restaurant://my_ordering_app/customers" class="active">Customer Management</a></li>
      <li><a href="admin://mvp_main://restaurant://my_ordering_app/analytics">Analytics</a></li>
      <li><a href="admin://mvp_main://restaurant://my_ordering_app/settings">Settings</a></li>
    </ul>
  </nav>

  <div class="container">
    <div class="admin-panel">
      <h2>Customer Overview</h2>
      
      <div class="customer-stats">
        <div class="stat-box">
          <h3>1,234</h3>
          <p>Total Customers</p>
        </div>
        <div class="stat-box">
          <h3>56</h3>
          <p>New This Month</p>
        </div>
        <div class="stat-box">
          <h3>78%</h3>
          <p>Retention Rate</p>
        </div>
        <div class="stat-box">
          <h3>$45.67</h3>
          <p>Avg. Order Value</p>
        </div>
      </div>
      
      <div class="search-bar">
        <input type="text" placeholder="Search customers...">
        <button class="btn">Search</button>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Join Date</th>
            <th>Total Orders</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1001</td>
            <td>John Doe</td>
            <td><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="2943464147074d464c694c51484459454c074a4644">[email&#160;protected]</a></td>
            <td>2023-01-15</td>
            <td>12</td>
            <td>
              <a href="admin://mvp_main://restaurant://my_ordering_app/customers/view/1001" class="btn">View</a>
              <a href="admin://mvp_main://restaurant://my_ordering_app/customers/edit/1001" class="btn">Edit</a>
            </td>
          </tr>
          <tr>
            <td>1002</td>
            <td>Jane Smith</td>
            <td><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="d6bcb7b8b3f8a5bbbfa2be96b3aeb7bba6bab3f8b5b9bb">[email&#160;protected]</a></td>
            <td>2023-02-03</td>
            <td>8</td>
            <td>
              <a href="admin://mvp_main://restaurant://my_ordering_app/customers/view/1002" class="btn">View</a>
              <a href="admin://mvp_main://restaurant://my_ordering_app/customers/edit/1002" class="btn">Edit</a>
            </td>
          </tr>
          <tr>
            <td>1003</td>
            <td>Bob Johnson</td>
            <td><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="f3919c91dd999c9b9d809c9db3968b929e839f96dd909c9e">[email&#160;protected]</a></td>
            <td>2023-03-21</td>
            <td>5</td>
            <td>
              <a href="admin://mvp_main://restaurant://my_ordering_app/customers/view/1003" class="btn">View</a>
              <a href="admin://mvp_main://restaurant://my_ordering_app/customers/edit/1003" class="btn">Edit</a>
            </td>
          </tr>
          <tr>
            <td>1004</td>
            <td>Alice Brown</td>
            <td><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="d9b8b5b0babcf7bbabb6aeb799bca1b8b4a9b5bcf7bab6b4">[email&#160;protected]</a></td>
            <td>2023-04-07</td>
            <td>3</td>
            <td>
              <a href="admin://mvp_main://restaurant://my_ordering_app/customers/view/1004" class="btn">View</a>
              <a href="admin://mvp_main://restaurant://my_ordering_app/customers/edit/1004" class="btn">Edit</a>
            </td>
          </tr>
          <tr>
            <td>1005</td>
            <td>Charlie Davis</td>
            <td><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="b5d6ddd4c7d9dcd09bd1d4c3dcc6f5d0cdd4d8c5d9d09bd6dad8">[email&#160;protected]</a></td>
            <td>2023-05-19</td>
            <td>1</td>
            <td>
              <a href="admin://mvp_main://restaurant://my_ordering_app/customers/view/1005" class="btn">View</a>
              <a href="admin://mvp_main://restaurant://my_ordering_app/customers/edit/1005" class="btn">Edit</a>
            </td>
          </tr>
        </tbody>
      </table>
      
      <div class="pagination">
        <a href="#">&laquo;</a>
        <a href="#" class="active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">&raquo;</a>
      </div>
    </div>
  </div>

  <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>
    // Search functionality
    document.querySelector('.search-bar button').addEventListener('click', function() {
      const searchTerm = document.querySelector('.search-bar input').value;
      alert(`Searching for customers with term: ${searchTerm}. In a real admin panel, this would filter the customer list.`);
    });

    // Pagination functionality
    document.querySelectorAll('.pagination a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Pagination clicked. In a real admin panel, this would load the corresponding page of customers.');
      });
    });

    // View and Edit customer functionality
    document.querySelectorAll('.btn').forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const action = this.textContent;
        const customerId = this.closest('tr').querySelector('td').textContent;
        alert(`${action} clicked for Customer ID: ${customerId}. In a real admin panel, this would open the ${action.toLowerCase()} customer details page.`);
      });
    });

    // Nav-bar functionality
    document.querySelectorAll('.nav-bar a').forEach(link => {
      link.addEventListener('click', function(e) {
        if (!this.classList.contains('active')) {
          e.preventDefault();
          const page = this.textContent;
          alert(`Navigating to ${page}. In a real admin panel, this would load the ${page} page.`);
        }
      });
    });
  </script>
</body></html>

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/customer-management-app.git
cd customer-management-app
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
