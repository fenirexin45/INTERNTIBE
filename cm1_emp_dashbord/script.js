// Sample employee data
const employees = [
  { name: "Mary", age: 25, department: "HR", role: "Manager", salary: 90000 },
  { name: "Joseph", age: 27, department: "Engineering", role: "Developer", salary: 60000 },
  { name: "Richard", age: 26, department: "Sales", role: "Executive", salary: 45000 },
  { name: "Adam", age: 32, department: "Engineering", role: "Tech Lead", salary: 70000 },
  { name: "Evan", age: 29, department: "HR", role: "Recruiter", salary: 48000 },
];

let currentEmployees = [...employees]; // Will change with filter/search

// Use forEach() to generate table
function renderTable(data) {
  const tbody = document.getElementById("employeeTableBody");
  tbody.innerHTML = "";
  data.forEach(emp => {
    const row = `<tr>
      <td>${emp.name}</td>
      <td>${emp.age}</td>
      <td>${emp.department}</td>
      <td>${emp.role}</td>
      <td>${emp.salary}</td>
    </tr>`;
    tbody.innerHTML += row;
  });

  document.getElementById("employeeCount").innerText = `Employees Displayed: ${data.length}`;
}

// Use map() to convert names to uppercase
function convertNamesToUppercase() {
  currentEmployees = currentEmployees.map(emp => ({
    ...emp,
    name: emp.name.toUpperCase()
  }));
  renderTable(currentEmployees);
  // map(): used to convert each employee's name to uppercase
}

// Use reduce() to calculate average salary
function calculateAverageSalary() {
  if (currentEmployees.length === 0) return;
  const total = currentEmployees.reduce((sum, emp) => sum + emp.salary, 0);
  const average = (total / currentEmployees.length).toFixed(2);
  document.getElementById("averageSalaryResult").innerText = `Average Salary: ₹${average}`;
  // reduce(): used to sum all salaries and calculate the average
}

// Use filter() to filter employees by department
document.getElementById("departmentFilter").addEventListener("change", (e) => {
  const dept = e.target.value;
  currentEmployees = dept
    ? employees.filter(emp => emp.department === dept)
    : [...employees];
  renderTable(currentEmployees);
  // filter(): selects employees based on department
});

// Use find() to search for employee by name
document.getElementById("searchInput").addEventListener("input", (e) => {
  const name = e.target.value.toLowerCase();
  const found = employees.find(emp => emp.name.toLowerCase().includes(name));
  if (name === "") {
    document.getElementById("searchResult").innerText = "";
  } else if (found) {
    document.getElementById("searchResult").innerText =
      `Found: ${found.name}, ${found.age} yrs, ${found.role} in ${found.department}, Salary ₹${found.salary}`;
  } else {
    document.getElementById("searchResult").innerText = "No match found";
  }
  // find(): returns first employee whose name includes search string
});

// Toggle light/dark mode using a CSS class
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Initial render
renderTable(currentEmployees);
