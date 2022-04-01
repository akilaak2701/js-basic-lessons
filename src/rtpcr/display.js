 
export function move() {
    
      if (!checkEmptyInput()) {
        document.getElementById("msg").style.display = "none";
        var fname = document.getElementById("fname").value,
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
        let store_obj = {
          firstname: fname,
          lastname: lname,
          "date of birth": dob,
          gender: gender,
          aadhar: aadhar,
          city: city,
          date: date,
          time: time,
          lab: lab,
          report: report,
          result: result,
        };
        var newRow = table.insertRow(table.length),
          cell1 = newRow.insertCell(0),
          cell2 = newRow.insertCell(1),
          cell3 = newRow.insertCell(2),
          cell4 = newRow.insertCell(3),
          cell5 = newRow.insertCell(4),
          cell6 = newRow.insertCell(5),
          cell7 = newRow.insertCell(6),
          cell8 = newRow.insertCell(7),
          cell9 = newRow.insertCell(8),
          cell10 = newRow.insertCell(9),
          cell11 = newRow.insertCell(10);
        cell1.innerHTML = store_obj["firstname"];
        cell2.innerHTML = store_obj["lastname"];
        cell3.innerHTML = store_obj["date of birth"];
        cell4.innerHTML = store_obj["gender"];
        cell5.innerHTML = store_obj["aadhar"];
        cell6.innerHTML = store_obj["city"];
        cell7.innerHTML = store_obj["date"];
        cell8.innerHTML = store_obj["time"];
        cell9.innerHTML = store_obj["lab"];
        cell10.innerHTML = store_obj["report"];
        cell11.innerHTML = store_obj["result"];
      }
    }
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
