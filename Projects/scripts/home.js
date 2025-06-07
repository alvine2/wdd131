document.addEventListener('DOMContentLoaded', () => {

    const aboutMyself = document.querySelector('.about-myself');
    if (aboutMyself) {
        const aboutMyselfContent = `
            <h2>Good Software Developer from Uganda</h2>
           <p>
             I am a dedicated software developer from Uganda, currently studying at BYU, with 3 years of hands-on experience in coding and building digital solutions.
            </p>
             <p>
             My background includes managing digital operations and developing efficient, user-focused systems, which has sharpened both my technical and problem-solving abilities.
             </p>
            <p>
           I have worked on various projects involving web development, database management, and automation, consistently delivering clean, maintainable code and meeting project deadlines.
           </p>
         <p>
         With strong skills in programming, a passion for continuous learning, and a solid foundation in IT systems, I am well-prepared to contribute to software development teams and create impactful technology solutions.
         </p>

        `;
        aboutMyself.innerHTML = aboutMyselfContent;
    }

    const education = document.querySelector('.education');
    if (education) {
        const educationContent = `
            <h2>Education</h2>
           <p>
          I am currently pursuing a Bachelor of Science in Software Development at Brigham Young University–Idaho (BYU–Idaho), where I am gaining strong skills in web development, software engineering principles, and system design.
         </p>
         <p>
         I also completed a Software Engineering program at ALX Africa, which provided me with practical, project-based experience in full-stack development, version control (Git/GitHub), and collaborative coding.
        </p>
         <p>
         In addition, I am studying Information Technology at the International University of East Africa (IUEA) in Uganda, strengthening my technical foundation in networks, systems administration, and computer applications.
        </p>
        <p>
         These combined academic paths have equipped me with a versatile skill set in technologies such as JavaScript, Python, C#, GitHub, and MySQL, preparing me to thrive in dynamic software development environments.
        </p>

        `;
        education.innerHTML = educationContent;
    }
});
