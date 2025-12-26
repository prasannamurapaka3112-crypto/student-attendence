document.getElementById("attendanceForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let attendance = {
        name: document.getElementById("name").value,
        roll: document.getElementById("roll").value,
        className: document.getElementById("className").value,
        date: document.getElementById("date").value,
        status: document.getElementById("status").value
    };

    let records = JSON.parse(localStorage.getItem("attendance")) || [];
    records.push(attendance);
    localStorage.setItem("attendance", JSON.stringify(records));

    alert("Attendance saved successfully!");
    this.reset();
});