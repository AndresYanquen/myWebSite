function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const experiences = [
  {
    pathImage: "./assets/a&gconsultores.PNG",
    title: "Python Programmer",
    description: `I built a dashboard using React, hooks, and Redux to fulfill a government
    requirement for the utility company. To tackle the task of gathering and
    organizing data from diverse sources, I employed specific Python
    functionalities. Using libraries like Pandas and openpyxl, I extracted and
    processed data from Excel files, allowing for easy manipulation and
    organization`
  },
  {
    pathImage: "./assets/bancolombia-icon.png",
    title: "Internship",
    description: `To address the needs of the Department of Debt Collectors, I employed
    both React and Python in this project. Using React, I developed an intranet
    website that established a secure connection with bank databases to
    retrieve customer data. his combined React and Python solution provided an efficient and userfriendly platform for debt tracking and management in accordance with
    bank rules.`
  },
  {
    pathImage: "./assets/torre-icon.png",
    title: "Junior Software Developer",
    description: `I created a feature for gathering data from the Agile Methodology tool (Notion) and linking it with Google Data Studio by integrating the Notion API with Python. This project was challenging due to limited Notion API documentation and complex query requirements. I set up a daily data retrieval routine using Zapier for team meetings. This decreased the time for the team leaders to verify tasks and focus on blockers from the developer team. I also worked along the marketing team to get conversion rate of users in specifics landing pages and customers behaviors. This increased the customer conversion rate for the website`
  },
  {
    pathImage: "./assets/aquila-global.jpg",
    title: "Software Developer",
    description: `The company aimed to enhance its recruitment process by creating a dashboard for recruiters to track candidate proficiency and generate reports for HR managers. Simultaneously, they sought to automate payment processes to reduce human errors, choosing a payment processing company and designing a web-based management tool for this purpose. Additionally, they participated in front-end development for a Progressive Web App (PWA), implementing routes, session validations, and ensuring smooth integration with a streaming service, I colaborate closely with functional teams to meet project goals.`
  },
]

function experienceTemplate ({pathImage, title, description}) {
  return `
  <div class="details-container color-container">
  <div class="article-container">
    <img
      src="${pathImage}"
      alt="Project 1"
      class="project-img"
    />
  </div>
  <div>
    <h2 class="experience-sub-title project-title">${title} </h2>
    <div class="btn-container">
      <p> ${description}</p>
  </div>

  </div>
</div>
  `
}

const projectsId = document.querySelector("#projects-container");

experiences.forEach(experience => {
  return projectsId.innerHTML += experienceTemplate(experience)
})
