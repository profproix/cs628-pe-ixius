const Resume = () => {
    return(
        <div className="resume">
            <header className="header">
                <h1>Student Name</h1>
                <p> 1234 st pl, Seattle Wa 98007 | (999) 999-9999 | myemail@gmail.com</p>
            </header>
            <section>
             <h2>Technical Proficiencies</h2>
            <p>
          ASP.NET Core | C# | Java | JavaScript | Python | SQL | Ruby | React | Redux | Ruby on Rails | MongoDB | Node | Express
            </p>
            </section>    
            <section className="section">
                <h2>Education</h2>
                <div className="education">
                    <h3>Bachelor of Science (BS) in Software Development – Western Governors University | Salt Lake City, UT July 2023</h3>
                </div>
                <h2>Education</h2>
                <div className="experince">
                    <h3>Professor of Application Development and Computer Network Engineering</h3>
                    <h2>Renton Technical College</h2>
                    <ul>
                        <li>Taught multiple upper-division undergraduate courses spanning critical industry software engineering subjects including
                        Data Science, Database Management, Application Development and Project Management</li>
                        <li>Designed and built Web Applications and Databases across various tech stacks including C# ASP .Net Core, MySQL, SQL
                        Server, Python, and Pandas. Leveraging different design patterns such as MVC and MVVM.</li>
                        <li>Collaborated with Instructional team to modernize curriculum following best practices and industry standards</li>
                        <li>Modernized curriculum across courses to match cutting edge industry standards and best practices.</li>
                        <li>Part of a strike team that redesigned all courses for BAS Application Development Program.</li>
                    </ul>
                </div>
            </section>
            <section>
                <h2>Certifications</h2>
                <ul className="certifications">
                    <li>Certificate for Software Development – Code Fellows <em>July 2018</em></li>
                    <li>CompTIA A+ – CompTIA <em>September 2022</em></li>
                    <li>CompTIA Project+ – CompTIA <em>July 2022</em></li>
                    <li>ITIL® Foundation Certificate in IT Service Management – Axelos <em>October 2022</em></li>
                </ul>
            </section>

        </div>
    )
}
export default Resume;