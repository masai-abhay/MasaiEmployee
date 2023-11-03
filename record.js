// fill in javascript code here
/*
let myform = document.querySelector("form")
let name = document.getElementById("name")
let IemployeeD = document.getElementById("IemployeeD")
let department = document.getElementById("department")
let exp = document.getElementById("exp")
let email = document.getElementById("email")
let mbl = document.getElementById("mbl") 
let tbody = document.querySelector("tbody")

let alldata = []

myform.addEventListener("submit", function(e)
{
    e.preventDefault();

    let data = {};
    data.input1 = name.value;
    data.input2 = IemployeeD.value;
    data.input3 = department.value;
    data.input4 = exp.value;
    data.input5 = email.value;
    data.input6 = mbl.value;
    data.input7 = role(exp.value); //expriance

       
function role(expriance) {
  if (expriance > 5) 
  {
      return "Senior";
  } 
  else if (expriance >= 2 && expriance <= 5)
   {
      return "Junior";
  } else 
  {
      return "Fresher";
  }
}

    alldata.push(data);
    tbody.innerHTML = null   /// for not repect value again
   
    function displaydata(){
    alldata.map((ele , index) =>     //index add
    {
        let row = document.createElement("tr");   // add rows td1 to td8 
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
    
        td1.innerText = ele.input1;
        td2.innerText = ele.input2;
        td3.innerText = ele.input3;
        td4.innerText = ele.input4;
        td5.innerText = ele.input5;
        td6.innerText = ele.input6;
        td7.innerText = ele.input7;

        // td8.innerHTML =`<button onclick="delete(${index})">Delete</button>`;   // button create impotent


        let delebtn = document.createElement("button")
        delebtn.innerHTML = "Delete"
        delebtn.setAttribute("data-index", index);

       td8.append(delebtn);

       delebtn.addEventListener("click", function(){

        let dindex = delebtn.getAttribute("data-index");

   alldata.splice(dindex, 1);

       //console.log(dindex)
    

    //console.log(alldata)
   role( displaydata,alldata) 

       })

      row.append(td1,td2,td3,td4,td5,td6,td7,td8)     //append it
      tbody.append(row)
      

      
      })
    }
    })*/
  

    document.addEventListener('DOMContentLoaded', function () {
        let form = document.querySelector('form');
        let table = document.querySelector('tbody');
    
        form.addEventListener('submit', function (e) {
            e.preventDefault();
    
            let name = document.getElementById('name').value;
            let IemployeeD = document.getElementById('IemployeeD').value;
            let department = document.getElementById('department').value;
            let experience = parseInt(document.getElementById('exp').value);
            let email = document.getElementById('email').value;
            let mobile = document.getElementById('mbl').value;
    
            let role = 'Trainee';
            if (experience > 5) {
                role = 'Senior';
            } else if (experience >= 2 && experience <= 5) {
                role = 'Junior';
            }
    
            let newRow = table.insertRow(-1);
            newRow.innerHTML = `
                <td>${name}</td>
                <td>${IemployeeD}</td>
                <td>${department}</td>
                <td>${experience} years</td>
                <td>${email}</td>
                <td>${mobile}</td>
                <td>${role}</td>
                <td><button onclick="deleteRow(this)">Delete</button></td>`;
    
            form.reset();
        });
    });
    
    function deleteRow(button) {
        let row = button.parentElement.parentElement;
        row.remove();
    }