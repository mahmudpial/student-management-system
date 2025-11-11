let students = [];

const form = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const gradeInput = document.getElementById("grade");
const studentTableBody = document.getElementById("studentTableBody");
const studentIndex = document.getElementById("studentIndex");

// Display all students
function displayStudents() {
  studentTableBody.innerHTML = "";
  students.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${index + 1}</td>
          <td>${student.name}</td>
          <td>${student.age}</td>
          <td>${student.grade}</td>
          <td>
            <button class="edit-btn" onclick="editStudent(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
          </td>
        `;
    studentTableBody.appendChild(row);
  });
}

// Add or Update student
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();
  const grade = gradeInput.value.trim();

  if (studentIndex.value === "") {
    // Add new student
    students.push({ name, age, grade });
  } else {
    // Update existing student
    const index = parseInt(studentIndex.value);
    students[index] = { name, age, grade };
    studentIndex.value = "";
    form.querySelector("button").textContent = "Add Student";
  }

  form.reset();
  displayStudents();
});

// Edit student
function editStudent(index) {
  const student = students[index];
  nameInput.value = student.name;
  ageInput.value = student.age;
  gradeInput.value = student.grade;
  studentIndex.value = index;
  form.querySelector("button").textContent = "Update Student";
}

// Delete student
function deleteStudent(index) {
  if (confirm("Are you sure you want to delete this student?")) {
    students.splice(index, 1);
    displayStudents();
  }
}

// Initial Display
displayStudents();
