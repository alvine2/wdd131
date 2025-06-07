document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            projectName: "Linksend",
            imageUrl: "images/linksend.png",
            width: "893px",
            height: "784px",
            htmlLogo: "images/logos/html-logo-s.png",
            altHtml: "HTML5 Logo",
            cssLogo: "images/logos/css-logo-s.png",
            altCss: "CSS Logo",
            jsLogo: "images/logos/javaScript-logo-s.png",
            altJs: "JavaScript Logo",
            projectDescription: "Linksend is a modern shipping company website designed to provide users with seamless access to delivery services, package tracking, and shipment booking. The platform features a responsive interface, service highlights, and real-time updates to improve the customer shipping experience."
        },
        {
            projectName: "Banking App",
            imageUrl: "images/banking.png",
            width: "765px",
            height: "601px",
            htmlLogo: "images/c.webp",
            altHtml: "HTML5 Logo",
            cssLogo: "images/logos/css-logo-s.png",
            altCss: "CSS Logo",
            jsLogo: "images/logos/javaScript-logo-s.png",
            altJs: "JavaScript Logo",
            projectDescription: "This section dynamically calculates and displays the wind chill factor based on static temperature and wind speed values. It enhances the weather information table, providing accurate and relevant details for the user's convenience."
        },
        {
            projectName: "Places",
            imageUrl: "images/place-project.png",
            width: "765px",
            height: "601px",
            htmlLogo: "images/logos/html-logo-s.png",
            altHtml: "HTML5 Logo",
            cssLogo: "images/logos/css-logo-s.png",
            altCss: "CSS Logo",
            jsLogo: "images/logos/javaScript-logo-s.png",
            altJs: "JavaScript Logo",
            projectDescription: "This section dynamically calculates and displays the wind chill factor based on static temperature and wind speed values. It enhances the weather information table, providing accurate and relevant details for the user's convenience."
        },
        {
            projectName: "Maze Game",
            imageUrl: "images/maze.png",
            width: "765px",
            height: "601px",
            htmlLogo: "images/python.webp",
            altHtml: "HTML5 Logo",
            cssLogo: "images/logos/css-logo-s.png",
            altCss: "CSS Logo",
            jsLogo: "images/logos/javaScript-logo-s.png",
            altJs: "JavaScript Logo",
            projectDescription: "This section dynamically calculates and displays the wind chill factor based on static temperature and wind speed values. It enhances the weather information table, providing accurate and relevant details for the user's convenience."
        },
        {
            projectName: "Todo Admin Dashboard",
            imageUrl: "images/todo.png",
            width: "765px",
            height: "601px",
            htmlLogo: "images/logos/html-logo-s.png",
            altHtml: "HTML5 Logo",
            cssLogo: "images/logos/css-logo-s.png",
            altCss: "CSS Logo",
            jsLogo: "images/logos/javaScript-logo-s.png",
            altJs: "JavaScript Logo",
            projectDescription: "This section dynamically calculates and displays the wind chill factor based on static temperature and wind speed values. It enhances the weather information table, providing accurate and relevant details for the user's convenience."
        },
        {
            projectName: "Student System",
            imageUrl: "images/student portal.png",
            width: "765px",
            height: "601px",
            htmlLogo: "images/logos/html-logo-s.png",
            altHtml: "HTML5 Logo",
            cssLogo: "images/logos/css-logo-s.png",
            altCss: "CSS Logo",
            jsLogo: "images/logos/javaScript-logo-s.png",
            altJs: "JavaScript Logo",
            projectDescription: "This section dynamically calculates and displays the wind chill factor based on static temperature and wind speed values. It enhances the weather information table, providing accurate and relevant details for the user's convenience."
        },
        {
            projectName: "Chamber of Commerce",
            imageUrl: "images/chamber.png",
            width: "765px",
            height: "601px",
            htmlLogo: "images/logos/html-logo-s.png",
            altHtml: "HTML5 Logo",
            cssLogo: "images/logos/css-logo-s.png",
            altCss: "CSS Logo",
            jsLogo: "images/logos/javaScript-logo-s.png",
            altJs: "JavaScript Logo",
            projectDescription: "This section dynamically calculates and displays the wind chill factor based on static temperature and wind speed values. It enhances the weather information table, providing accurate and relevant details for the user's convenience."
        }
    ];

    const container = document.querySelector('.container-project-box');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const projectTitle = document.createElement('h2');
        projectTitle.textContent = project.projectName;
        projectCard.appendChild(projectTitle);

        const projectImage = document.createElement('img');
        projectImage.src = project.imageUrl;
        projectImage.width = project.width;
        projectImage.height = project.height;
        projectImage.alt = `${project.projectName} Image`;
        projectCard.appendChild(projectImage);

        const projectInfo = document.createElement('div');
        projectInfo.className = 'project-info';

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.projectDescription;
        projectInfo.appendChild(projectDescription);

        const logosDiv = document.createElement('div');
        logosDiv.className = 'logos';

        const htmlLogo = document.createElement('img');
        htmlLogo.src = project.htmlLogo;
        htmlLogo.alt = project.altHtml;
        logosDiv.appendChild(htmlLogo);

        const cssLogo = document.createElement('img');
        cssLogo.src = project.cssLogo;
        cssLogo.alt = project.altCss;
        logosDiv.appendChild(cssLogo);

        const jsLogo = document.createElement('img');
        jsLogo.src = project.jsLogo;
        jsLogo.alt = project.altJs;
        logosDiv.appendChild(jsLogo);

        projectInfo.appendChild(logosDiv);
        projectCard.appendChild(projectInfo);
        container.appendChild(projectCard);
    });
});
