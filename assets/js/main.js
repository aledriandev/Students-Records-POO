let students = [];

function listStudents() {
    return students;
}

function Student (name, teachPoints, lifePoints) {
    this.name = name;
    this.teachPoints = teachPoints;
    this.lifePoints = lifePoints;
    this.status = 'ACTIVE';
}

function addStudent() {
    let name = prompt("Nombre de la estudiante").toUpperCase();
    let teachPoints = parseInt(prompt("Porcentaje Técnico"));
    let lifePoints = parseInt(prompt("Porcentaje Habilidades Socio-Emocionales"));
    if (name != null && teachPoints != NaN && lifePoints != NaN){
        let student = new Student(name, teachPoints, lifePoints);
        students.push(student);
        return student;
    }

}

function showStudent(student) {
    let result = '';
    if (student != undefined) {
        result = `<div class='row container'>
                            <div class='col-md-12'>
                                <div class='container-student'>
                                    <p><strong>${student.name} </strong></p>
                                    <p><strong>Tech Skills:</strong> ${student.teachPoints}</p>
                                    <p><strong>Life Skills:</strong> ${student.lifePoints}</p>
                                    <p><strong>Status:</strong> ${student.status}</p>
                                </div>
                            </div>
                        </div>`;
    }
    return result;
}

function showListStudents(students) {
    var result = "";
    for(var i in students)
    {
        result += showStudent(students[i]);
    }
    return result;
}

function dropout(students) {
    students = students.filter(function(student){
        let condition = (student.teachPoints + student.lifePoints)/2
        return (condition >= 70 );
    });
    return students;
}

function employability(students) {
    let filtered = students.filter(function(student){
        let condition = (student.teachPoints + student.lifePoints)/2
        return (condition >= 70 );
    });
    return filtered;
}

document.getElementById("addStudent").onclick=(event)=>{
    event.preventDefault();
    let student = addStudent();
    $('#container-students').html(showStudent(student));
};
document.getElementById("printAll").onclick=(event)=>{
    event.preventDefault();
    let students = listStudents();
    $('#container-students').html(showListStudents(students));
};
document.getElementById("updateDropout").onclick=(event)=>{
    event.preventDefault();
    students = dropout(students);
    $('#container-students').html(showListStudents(students));
};
document.getElementById("runEmployability").onclick=(event)=>{
    event.preventDefault();
    let students = listStudents();
    let studentsTop = employability(students);
    $('#container-students').html(showListStudents(studentsTop));
};
