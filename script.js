function calculateGPA(){
    var gpa = 0;
    var Subject = ['CD3281','CD3291','CS3351','CS3352','CS3361','EC3354','GE3361','MA3354'];
    var credit = {'CD3281':2,'CD3291':3,'CS3351':4,'CS3352':3,'CS3361':2,'EC3354':4,'GE3361':1,'MA3354':4};
    for(let i=0;i<8;i++)
    {
        const sb = document.getElementById(Subject[i]);
        
        gpa = parseInt(gpa) + (parseInt(sb.options[sb.selectedIndex].value)*parseInt(credit[Subject[i]]));
    }

    gpa = parseFloat(gpa)/23;
    document.getElementById("result").innerHTML="Your 3rd Semester GPA ="+gpa;
    document.getElementById("CGPA").style.display="block";
}

function getGPA(){
    document.getElementById("GPAInput").style.display="block";
}

function calculateCGPA(){
    var cgpa = parseFloat(document.getElementById("GPA1").value)+parseFloat(document.getElementById("GPA2").value)+parseFloat(document.getElementById("GPA3").value);
    cgpa = parseFloat(cgpa)/3;
    document.getElementById("printCGPA").innerHTML="Your CGPA ="+cgpa;

}