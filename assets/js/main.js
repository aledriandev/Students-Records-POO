function Student (name, teachPoints, lifePoints) {
    this.name = name;
    this.teachPoints = teachPoints;
    this.lifePoints = lifePoints;
    this.status = 'ACTIVE';
}

class App {
    constructor () {
        this.students = [];
    }                                                                                                                                       

    listStudents () {
        return this.students;
    }

    addStudent() {
        let name = prompt("Nombre de la estudiante").toUpperCase();
        let teachPoints = parseInt(prompt("Porcentaje Técnico"));
        let lifePoints = parseInt(prompt("Porcentaje Habilidades Socio-Emocionales"));
        if (name != null && teachPoints != NaN && lifePoints != NaN){
            let student = new Student(name, teachPoints, lifePoints);
            this.students.push(student);
            return student;
        }
    }

    showStudent (student) {
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

    showListStudents (students) {
        var result = "";
        for(var i in students)
        {
            result += this.showStudent(students[i]);
        }
        return result;
    }

    dropout (students) {
        students = students.filter(function(student){
            let condition = (student.teachPoints + student.lifePoints)/2
            return (condition >= 70 );
        });
        return students;
    }

    employability (students) {
        let filtered = students.filter(function(student){
            let condition = (student.teachPoints + student.lifePoints)/2
            return (condition >= 70 );
        });
        return filtered;
    }

    init(){
        document.getElementById("addStudent").onclick=(event)=>{
            event.preventDefault();
            let student = this.addStudent();
            $('#container-students').html(this.showStudent(student));
        };
        document.getElementById("printAll").onclick=(event)=>{
            event.preventDefault();
            let students = this.listStudents();
            $('#container-students').html(this.showListStudents(students));
        };
        document.getElementById("updateDropout").onclick=(event)=>{
            event.preventDefault();
            this.students = this.dropout(this.students);
            $('#container-students').html(this.showListStudents(this.students));
        };
        document.getElementById("runEmployability").onclick=(event)=>{
            event.preventDefault();
            let students = this.listStudents();
            let studentsTop = this.employability(students);
            $('#container-students').html(this.showListStudents(studentsTop));
        };
    }
}

$(document).ready(()=>{
    var app = new App ();
    app.init();
})