function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll("main > section");
    sections.forEach((section) => {
        section.style.display = "none";
    });

    // Show the selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = "block";
    }
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "test@example.com" && password === "password") {
        document.getElementById("loginStatus").textContent = "Login successful!";
    } else {
        document.getElementById("loginStatus").textContent = "Invalid credentials.";
    }
}

function bookAppointment() {
  // Get the appointment section element
  const appointmentSection = document.getElementById("appointment");
  
  // Find elements within the appointment section
  const name = appointmentSection.querySelector("#patientName").value;
  const date = appointmentSection.querySelector("#appointmentDate").value;
  const doctor = appointmentSection.querySelector("#doctor").value;

  if (name && date && doctor) {
      document.getElementById("bookingResult").textContent = `Appointment Successfully booked with ${doctor} on ${date}.`;
  } else {
      document.getElementById("bookingResult").textContent = "Please fill all fields.";
  }
}
  
window.onload = () => {
    showSection('home');
  
    const form = document.getElementById("yojana-form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const income = parseInt(document.getElementById("income").value);
      const rationCard = document.getElementById("ration-card").value.toLowerCase();
      const state = document.getElementById("state").value.toLowerCase();
  
      const eligibleSchemes = [];
  
      if (income < 100000 || rationCard === "yellow" || rationCard === "orange") {
        eligibleSchemes.push("Ayushman Bharat - PM-JAY");
      }
      if (income < 100000 && (rationCard === "yellow" || rationCard === "orange")) {
        eligibleSchemes.push("RSBY");
      }
      if (income < 120000 && state === "tamil-nadu") {
        eligibleSchemes.push("CMCHIS");
      }
      if ((rationCard === "yellow" || rationCard === "orange") && income < 100000 && state === "maharashtra") {
        eligibleSchemes.push("MJPJAY");
      }
      if (state === "odisha" && income < 60000) {
        eligibleSchemes.push("Biju Swasthya Kalyan Yojana");
      }
      if ((state === "andhra pradesh" || state === "telangana") && rationCard === "white") {
        eligibleSchemes.push("Aarogyasri Scheme");
      }
      if (state === "gujarat" && income < 400000) {
        eligibleSchemes.push("Mukhyamantri Amrutum Yojana");
      }
      if (state === "karnataka") {
        eligibleSchemes.push("Yeshasvini Health Insurance Scheme");
      }
      if (state === "andhra pradesh" && rationCard === "white" && income < 500000) {
        eligibleSchemes.push("Dr. YSR Aarogyasri");
      }
      if (state === "delhi" && income < 300000) {
        eligibleSchemes.push("Delhi Arogya Kosh");
      }
  
      const resultsDiv = document.getElementById("results");
      if (eligibleSchemes.length > 0) {
        resultsDiv.innerHTML = `<h3>You're eligible for:</h3><ul>` +
          eligibleSchemes.map(scheme => `<li>${scheme}</li>`).join('') +
          `</ul>`;
      } else {
        resultsDiv.innerHTML = `<p>No schemes matched your criteria. Try updating your details.</p>`;
      }
    });
  };


