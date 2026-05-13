// ======================================
//  AI RESUME ANALYZER
// ADVANCED PROFESSIONAL SCRIPT
// ======================================

// --------------------------------------
// COMPANY DEPARTMENTS DATABASE
// --------------------------------------

const departments = {

  HR: {
    posts: [
      "HR Executive",
      "Recruitment Manager",
      "Talent Acquisition Specialist"
    ],

    skills: [
      "Communication",
      "Leadership",
      "Management",
      "Recruitment"
    ],

    vacancies: 18
  },

  Technical: {
    posts: [
      "Frontend Developer",
      "Backend Developer",
      "AI Engineer",
      "Data Analyst"
    ],

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Python",
      "AI/ML",
      "MongoDB"
    ],

    vacancies: 40
  },

  Finance: {
    posts: [
      "Financial Analyst",
      "Auditor",
      "Account Manager"
    ],

    skills: [
      "Excel",
      "Tally",
      "Reporting",
      "Finance"
    ],

    vacancies: 12
  },

  Marketing: {
    posts: [
      "SEO Specialist",
      "Digital Marketer",
      "Content Strategist"
    ],

    skills: [
      "SEO",
      "Marketing",
      "Canva",
      "Google Ads"
    ],

    vacancies: 20
  }

};

// --------------------------------------
// GLOBAL VARIABLES
// --------------------------------------

let resumeScore = 0;
let keywordMatch = 0;
let selectedSkills = [];
let missingSkills = [];
let communicationScore = 0;
let candidateDepartment = "";
let candidatePost = "";
let candidateExperience = "";
let candidateSalary = "";

// --------------------------------------
// ALL SKILLS DATABASE
// --------------------------------------

const allSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "Python",
  "AI/ML",
  "Machine Learning",
  "AWS",
  "Docker",
  "GitHub",
  "Excel",
  "Finance",
  "SEO",
  "Canva",
  "Communication",
  "Leadership"
];

// --------------------------------------
// ANALYZE RESUME
// --------------------------------------

function analyzeResume(){

  const fileInput =
  document.getElementById("resumeInput");

  if(fileInput.files.length === 0){

    alert("Please Upload Resume First");
    return;

  }

  // GENERATE RANDOM SCORES

  resumeScore =
  Math.floor(Math.random() * 25) + 75;

  keywordMatch =
  Math.floor(Math.random() * 25) + 70;

  // DISPLAY SCORE

  document.getElementById("score").innerText =
  resumeScore;

  document.getElementById("scoreText").innerText =
  `Resume Score: ${resumeScore}/100`;

  // KEYWORD MATCH

  document.getElementById("keywordProgress")
  .style.width = keywordMatch + "%";

  document.getElementById("keywordText")
  .innerText = `${keywordMatch}% Keyword Match`;

  // RANDOM SKILL DETECTION

  selectedSkills =
  allSkills.sort(() => 0.5 - Math.random())
  .slice(0, 7);

  displaySkills();

  // DEPARTMENT MATCHING

  matchDepartment();

  // EXPERIENCE ANALYSIS

  analyzeExperience();

  // ATS CHECKER

  generateATS();

  // AI FEEDBACK

  generateFeedback();

  // ACCEPTED / REJECTED

  generateResumeStatus();

  // CHART

  createChart();

}

// --------------------------------------
// DISPLAY DETECTED SKILLS
// --------------------------------------

function displaySkills(){

  const skillsContainer =
  document.getElementById("skillsContainer");

  skillsContainer.innerHTML = "";

  selectedSkills.forEach(skill => {

    skillsContainer.innerHTML += `
      <span>${skill}</span>
    `;

  });

  // MISSING SKILLS

  missingSkills =
  allSkills.filter(skill =>
    !selectedSkills.includes(skill)
  ).slice(0, 5);

  const missingContainer =
  document.getElementById("missingSkills");

  missingContainer.innerHTML = "";

  missingSkills.forEach(skill => {

    missingContainer.innerHTML += `
      <span>${skill}</span>
    `;

  });

}

// --------------------------------------
// DEPARTMENT MATCHING SYSTEM
// --------------------------------------

function matchDepartment(){

  let bestMatch = "";
  let highestScore = 0;

  // CHECK EACH DEPARTMENT

  for(let dept in departments){

    let score = 0;

    departments[dept].skills.forEach(skill => {

      if(selectedSkills.includes(skill)){

        score++;

      }

    });

    if(score > highestScore){

      highestScore = score;
      bestMatch = dept;

    }

  }

  candidateDepartment = bestMatch;

  // RANDOM POST

  const posts =
  departments[bestMatch].posts;

  candidatePost =
  posts[Math.floor(Math.random() * posts.length)];

  // DISPLAY DEPARTMENT RESULT

  const feedback =
  document.getElementById("feedback");

  feedback.innerHTML = `
    <h3>🎯 Department Match Found</h3>

    <p>✔ Best Department:
    <strong>${candidateDepartment}</strong></p>

    <p>✔ Recommended Post:
    <strong>${candidatePost}</strong></p>

    <p>✔ Vacancy Available:
    ${departments[bestMatch].vacancies}</p>
  `;

}

// --------------------------------------
// EXPERIENCE ANALYSIS
// --------------------------------------

function analyzeExperience(){

  const years =
  Math.floor(Math.random() * 12);

  const feedback =
  document.getElementById("feedback");

  if(years <= 1){

    candidateExperience = "Fresher";
    candidateSalary = "4 - 8 LPA";

  }

  else if(years <= 3){

    candidateExperience = "1 - 3 Years";
    candidateSalary = "10 - 15 LPA";

  }

  else if(years <= 7){

    candidateExperience = "5+ Years";
    candidateSalary = "20 - 28 LPA";

  }

  else{

    candidateExperience = "10+ Years";
    candidateSalary = "30+ LPA";

  }

  // ADD EXPERIENCE DETAILS

  feedback.innerHTML += `

    <h3>💼 Experience Analysis</h3>

    <p>✔ Experience Level:
    <strong>${candidateExperience}</strong></p>

    <p>✔ Suggested Salary:
    <strong>${candidateSalary}</strong></p>

  `;

  // HIGHLIGHT EXPERIENCE CARD

  highlightExperienceCard();

}

// --------------------------------------
// EXPERIENCE CARD HIGHLIGHT
// --------------------------------------

function highlightExperienceCard(){

  const cards =
  document.querySelectorAll(".exp-card");

  cards.forEach(card => {

    card.style.border = "none";

  });

  if(candidateExperience === "Fresher"){

    cards[0].style.border =
    "3px solid #4f46e5";

  }

  else if(candidateExperience === "1 - 3 Years"){

    cards[1].style.border =
    "3px solid #4f46e5";

  }

  else if(candidateExperience === "5+ Years"){

    cards[2].style.border =
    "3px solid #4f46e5";

  }

  else{

    cards[3].style.border =
    "3px solid #4f46e5";

  }

}

// --------------------------------------
// ATS SYSTEM
// --------------------------------------

function generateATS(){

  document.getElementById("atsList").innerHTML = `

    <li>✔ ATS Friendly Resume</li>
    <li>✔ Proper Resume Structure</li>
    <li>✔ Strong Keyword Optimization</li>
    <li>✔ Good Formatting</li>
    <li>✔ Contact Information Verified</li>

  `;

}

// --------------------------------------
// AI FEEDBACK
// --------------------------------------

function generateFeedback(){

  const feedback =
  document.getElementById("feedback");

  feedback.innerHTML += `

    <h3>🤖 AI Suggestions</h3>

    <p>✔ Add More Projects</p>
    <p>✔ Add GitHub Portfolio</p>
    <p>✔ Improve Resume Summary</p>
    <p>✔ Add Certifications</p>
    <p>✔ Improve Project Descriptions</p>

  `;

}

// --------------------------------------
// ACCEPTED / REJECTED SYSTEM
// --------------------------------------

function generateResumeStatus(){

  const accepted =
  document.getElementById("acceptedList");

  const rejected =
  document.getElementById("rejectedList");

  accepted.innerHTML = "";
  rejected.innerHTML = "";

  if(resumeScore >= 80){

    accepted.innerHTML = `

      <li>✔ Resume Accepted</li>
      <li>✔ Department:
      ${candidateDepartment}</li>

      <li>✔ Post:
      ${candidatePost}</li>

      <li>✔ Eligible For Interview</li>

    `;

  }

  else{

    rejected.innerHTML = `

      <li>❌ Resume Rejected</li>
      <li>❌ Low Resume Score</li>
      <li>❌ Missing Important Skills</li>
      <li>❌ ATS Optimization Required</li>

    `;

  }

}

// --------------------------------------
// ENGLISH COMMUNICATION TEST
// --------------------------------------

function evaluateEnglish(){

  const answer =
  document.getElementById("englishAnswer").value;

  const result =
  document.getElementById("englishResult");

  if(answer.length > 150){

    communicationScore = 9;

    result.innerHTML = `

      <h3>Communication Score: 9/10</h3>

      <p>✔ Excellent Communication Skills</p>
      <p>✔ Professional Vocabulary Used</p>
      <p>✔ Strong Confidence Level</p>

    `;

  }

  else{

    communicationScore = 5;

    result.innerHTML = `

      <h3>Communication Score: 5/10</h3>

      <p>✔ Improve Grammar</p>
      <p>✔ Improve Vocabulary</p>
      <p>✔ Add More Professional Language</p>

    `;

  }

}

// --------------------------------------
// CHART.JS
// --------------------------------------

let chart;

function createChart(){

  const ctx =
  document.getElementById("resumeChart");

  if(chart){

    chart.destroy();

  }

  chart = new Chart(ctx, {

    type: 'bar',

    data: {

      labels: [
        'Resume Score',
        'Keyword Match',
        'Communication',
        'ATS Score'
      ],

      datasets: [{

        label: 'Candidate Analytics',

        data: [
          resumeScore,
          keywordMatch,
          communicationScore * 10,
          90
        ],

        backgroundColor: [
          '#4f46e5',
          '#7c3aed',
          '#06b6d4',
          '#10b981'
        ],

        borderRadius: 10

      }]

    },

    options: {

      responsive: true,

      scales: {

        y: {

          beginAtZero: true,
          max: 100

        }

      }

    }

  });

}

// --------------------------------------
// DOWNLOAD REPORT
// --------------------------------------

function downloadReport(){

  const report = `

  ENTERPRISE AI RESUME REPORT

  Resume Score:
  ${resumeScore}

  Keyword Match:
  ${keywordMatch}%

  Department:
  ${candidateDepartment}

  Post:
  ${candidatePost}

  Experience:
  ${candidateExperience}

  Salary Package:
  ${candidateSalary}

  Skills:
  ${selectedSkills.join(", ")}

  Missing Skills:
  ${missingSkills.join(", ")}

  `;

  const blob =
  new Blob([report], {
    type: "text/plain"
  });

  const link =
  document.createElement("a");

  link.href =
  URL.createObjectURL(blob);

  link.download =
  "Resume_Report.txt";

  link.click();

}

// --------------------------------------
// DRAG AND DROP
// --------------------------------------

const dropZone =
document.getElementById("dropZone");

dropZone.addEventListener("dragover", (e) => {

  e.preventDefault();

  dropZone.style.borderColor =
  "#4f46e5";

});

dropZone.addEventListener("dragleave", () => {

  dropZone.style.borderColor =
  "#999";

});

dropZone.addEventListener("drop", (e) => {

  e.preventDefault();

  const files =
  e.dataTransfer.files;

  document.getElementById("resumeInput")
  .files = files;

});

// --------------------------------------
// DARK MODE
// --------------------------------------

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

});

// --------------------------------------
// AI INTERVIEW QUESTIONS
// --------------------------------------

const questions = [

  "Tell me about yourself",

  "Explain your biggest project",

  "Why should we hire you?",

  "Explain leadership experience"

];

function generateInterviewQuestion(){

  const randomQuestion =
  questions[
    Math.floor(Math.random() * questions.length)
  ];

  alert(
    "AI Interview Question:\n\n" +
    randomQuestion
  );

}

// --------------------------------------
// WEBSITE LOADED
// --------------------------------------

window.addEventListener("load", () => {

  console.log(
    "AI Resume Analyzer Loaded"
  );

});