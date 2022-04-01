
export function checkEmptyInput() {
    var isEmpty = false,
      fname = document.getElementById("fname").value,
      lname = document.getElementById("lname").value,
      dob = document.getElementById("dob").value,
      gender = document.getElementById("gender").value,
      aadhar = document.getElementById("aadhar").value,
      city = document.getElementById("city").value,
      date = document.getElementById("date").value,
      time = document.getElementById("time").value,
      lab = document.getElementById("lab").value,
      report = document.getElementById("report").value,
      result = document.getElementById("result").value;
    if (fname === "") {
      alert("First Name Connot Be Empty");
      isEmpty = true;
    } else if (lname === "") {
      alert("Last Name Connot Be Empty");
      isEmpty = true;
    } else if (dob === "") {
      alert("date of birth Connot Be Empty");
      isEmpty = true;
    } else if (gender === "") {
      alert("Gender Connot Be Empty");
      isEmpty = true;
    }else if (date === ""){
       alert("Date cannot be empty");
    } 
    else if (city === "") {
      alert("City Connot Be Empty");
      isEmpty = true;
    } else if (time === "") {
      alert("Time Connot Be Empty");
      isEmpty = true;
    } else if (lab === "") {
      alert("Lab Connot Be Empty");
      isEmpty = true;
    } else if (report === "") {
      alert("Report Connot Be Empty");
      isEmpty = true;
    } else if (result === "") {
      alert("Result Connot Be Empty");
      isEmpty = true;
    } else if (aadhar === "") {
      alert("Aadhar Connot Be Empty");
      isEmpty = true;
    }
    return isEmpty;
  }
  export function reset() {
    var table, tr;
    table = document.getElementById("table1");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      tr[i].style.display = "none";
    }
  }
  