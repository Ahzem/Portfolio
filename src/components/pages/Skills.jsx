import { Link } from 'react-router-dom';
import '../../styles/Skills.css';

const Skills = () => {
  const skillGroups = {
    programming: [
      { name: 'HTML', icon: '/img/logo/html-240.png' },
      { name: 'CSS', icon: '/img/logo/css-240.png' },
      { name: 'JavaScript', icon: '/img/logo/javascript-240.png' },
      { name: 'PHP', icon: '/img/logo/php-240.png' },
      { name: 'Python', icon: '/img/logo/python-240.png' },
      { name: 'Java', icon: '/img/logo/java-240.png' },
    ],
    web: [
      { name: 'React', icon: '/img/logo/icons8-reactjs.png' },
      { name: 'Node.js', icon: '/img/logo/icons8-nodejs.png' },
      { name: 'Express.js', icon: '/img/logo/icons8-expressjs.png' },
      { name: 'MongoDB', icon: '/img/logo/mongodb.png' },
      { name: 'MySQL', icon: '/img/logo/my-sql-240.png' },
    ],
    tools: [
      { name: 'Azure', icon: '/img/logo/azure-240.png' },
      { name: 'AWS', icon: '/img/logo/icons8-aws.png' },
      { name: 'Google Cloud', icon: '/img/logo/icons8-google-cloud.png' },
      { name: 'Git', icon: '/img/logo/git-240.png' },
      { name: 'Figma', icon: '/img/logo/figma-240.png' },
      { name: 'VS Code', icon: '/img/logo/vs-code-240.png' },
      { name: 'Postman', icon: '/img/logo/postman-96.png' },
      { name: 'Canva', icon: '/img/logo/canva-240.png' },
    ],
    languages: [
      { name: 'English', proficiency: 100 },
      { name: 'Tamil', proficiency: 180 },
      { name: 'Sinhala', proficiency: 160 },
    ]
  };

  return (
    <section className="skills__section">
      <Link to="/menu" className="back-button">
        <img src="/img/icons/icons8-back.png" alt="Back Button" />
      </Link>

      <div className="skills__header">
        <h2>Skills</h2>
      </div>

      <div className="all__in__one">
        <div className="programming__skills">
          <div className="skills__header">
            <h3>Programming</h3>
          </div>
          <div className="skills__container">
            {skillGroups.programming.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill__icon">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <div className="skill__text">
                  <h4>{skill.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web Skills */}
        <div className="web__skills">
          <div className="skills__header">
            <h3>Web</h3>
          </div>
          <div className="skills__container">
            {skillGroups.web.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill__icon">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <div className="skill__text">
                  <h4>{skill.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Skills */}
        <div className="tools__skills">
          <div className="skills__header">
            <h3>Tools</h3>
          </div>
          <div className="skills__container">
            {skillGroups.tools.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill__icon">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <div className="skill__text">
                  <h4>{skill.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Skills */}
        <div className="languages__skills">
          <div className="skills__header">
            <h3>Languages</h3>
          </div>
          <div className="skills__container">
            {skillGroups.languages.map((language, index) => (
              <div key={index} className="skill">
                <div className="skill__icon">
                  <div className={`circle-wrap ${language.name.toLowerCase()}`}>
                    <div className="circle">
                      <div className="mask full">
                        <div className={`${language.name.toLowerCase().slice(0, 3)}_fill`}></div>
                      </div>
                      <div className="mask half">
                        <div className={`${language.name.toLowerCase().slice(0, 3)}_fill`}></div>
                      </div>
                      <div className="inside-circle">{language.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;