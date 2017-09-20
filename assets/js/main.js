const app = {

    students: [],

    listStudents: function () {
        return app.students;
    },

    Student: function (name, teachPoints, lifePoints) {
        this.name = name;
        this.teachPoints = teachPoints;
        this.lifePoints = lifePoints;
        this.status = 'ACTIVE';
    },

    addStudent: function () {
        let name = prompt("Nombre de la estudiante").toUpperCase();
        let teachPoints = parseInt(prompt("Porcentaje Técnico"));
        let lifePoints = parseInt(prompt("Porcentaje Habilidades Socio-Emocionales"));
        if (name != null && teachPoints != NaN && lifePoints != NaN){
            let student = new app.Student(name, teachPoints, lifePoints);
            app.students.push(student);
            return student;
        }
    },

    showStudent: function (student) {
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
    },

    showListStudents: function (students) {
        var result = "";
        for(var i in students)
        {
            result += app.showStudent(students[i]);
        }
        return result;
    },

    dropout: function (students) {
        students = students.filter(function(student){
            let condition = (student.teachPoints + student.lifePoints)/2
            return (condition >= 70 );
        });
        return students;
    },

    employability: function (students) {
        let filtered = students.filter(function(student){
            let condition = (student.teachPoints + student.lifePoints)/2
            return (condition >= 70 );
        });
        return filtered;
    },

    setup: function(){
        document.getElementById("addStudent").onclick=(event)=>{
            event.preventDefault();
            let student = app.addStudent();
            $('#container-students').html(app.showStudent(student));
        };
        document.getElementById("printAll").onclick=(event)=>{
            event.preventDefault();
            let students = app.listStudents();
            $('#container-students').html(app.showListStudents(students));
        };
        document.getElementById("updateDropout").onclick=(event)=>{
            event.preventDefault();
            app.students = app.dropout(app.students);
            $('#container-students').html(app.showListStudents(app.students));
        };
        document.getElementById("runEmployability").onclick=(event)=>{
            event.preventDefault();
            let students = app.listStudents();
            let studentsTop = app.employability(students);
            $('#container-students').html(app.showListStudents(studentsTop));
        };
    }
}

app.setup();