let students = [];
let editIndex = -1;

const studentForm = document.getElementById('student-form');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const studentList = document.getElementById('student-list');

studentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = nameInput.value;
    const age = ageInput.value;

    if (name === '' || age === '') return;

    if (editIndex > -1) {
        students[editIndex] = { name, age };
        editIndex = -1;
        studentForm.querySelector('button').textContent = 'Adicionar Aluno';
    } else {
        students.push({ name, age });
    }

    renderStudents();
    nameInput.value = '';
    ageInput.value = '';
});

function renderStudents() {
    studentList.innerHTML = '';
    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.textContent = `${student.name}, ${student.age} anos`;

        const actions = document.createElement('div');

        const editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.textContent = 'Edit';
        editButton.onclick = () => editStudent(index);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteStudent(index);

        actions.appendChild(editButton);
        actions.appendChild(deleteButton);
        li.appendChild(actions);
        studentList.appendChild(li);
    });
}

function editStudent(index) {
    nameInput.value = students[index].name;
    ageInput.value = students[index].age;
    editIndex = index;
    studentForm.querySelector('button').textContent = 'Save Changes';
    nameInput.focus();
}

function deleteStudent(index) {
    students.splice(index, 1);
    renderStudents();
}

renderStudents();