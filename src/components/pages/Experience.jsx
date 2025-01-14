import { useState } from 'react';
import '../../styles/Experience.css';

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);

//   <section class="experience">
//   <div class="experience__container">
//       <div class="experience__content bottom">
//           <div class="experience__item">
//               <img class="education__pic__item" src="../img/logo/mlsa.png" alt="">
//               <h3>Microsoft Learn Student Ambassador | Microsoft</h3>
//               <p>As a Microsoft Learn Student Ambassador, I represent my institution and engage with fellow 
//                   students to promote learning and collaboration within the Microsoft ecosystem.</p>
//                   <ul>
//                       <li>
//                           <h4>Beta Level | Fab 2024 - Present</h4>
//                           <p>As a Beta Level Microsoft Learn Student Ambassador, I actively engage with students 
//                               to promote learning and collaboration within the Microsoft ecosystem, 
//                               while also participating in various programs and events to enhance the student experience.</p>
//                       </li>
//                       <li>
//                           <h4>Alpha Level | Jan 2024 - Fab 2024</h4>
//                           <p>As an Alpha Level Microsoft Learn Student Ambassador, I actively 
//                               participate in early-stage programs and provide feedback to enhance the student learning experience.</p>
//                       </li>
//                       <li>
//                           <h4>New | Jan 2024 - Jan 2024</h4>
//                           <p>During this brief period, I embraced the responsibilities of a newly appointed Microsoft 
//                               Learn Student Ambassador, eagerly immersing myself in the role and its requirements.</p>
//                       </li>
//                   </ul>
//           </div>
//       </div>
//       <div class="experience__content bottom" style="display: none;">
//           <div class="experience__item">
//               <img class="education__pic__item" src="../img/logo/zeroplastic-logo.jpeg" alt="">
//               <h3>Director of Social Media Management | ZeroPlastic NDT</h3>
//               <h4>Jan 2024 - Present</h4>
//               <p>As the Director of Social Media Management at ZeroPlastic NDT, I oversee and strategize the 
//                   company's social media presence to effectively communicate our mission and values while engaging 
//                   with our audience. My responsibilities include crafting compelling content, managing social media 
//                   platforms, analyzing performance metrics, and implementing strategies to enhance brand visibility 
//                   and engagement.</p>
//           </div>
//       </div>
//       <div class="experience__content bottom" style="display: none;">
//           <div class="experience__item">
//               <img class="education__pic__item" src="../img/logo/dfec.jpg" alt="">
//               <h3>Social Media Manager | OSDEM-DFEC Science Project</h3>
//               <h4>Oct 2023 - Present</h4>
//               <p>As a Social Media Manager at OSDEM-DFEC Science Project, I volunteer my time and skills to help 
//                   provide free educational opportunities to students who aspire to become engineers and doctors in Sri Lanka.
//                    Through strategic social media campaigns, we aim to bridge educational gaps and empower students, ensuring 
//                    they have access to the knowledge they need to pursue their dreams.</p>
//           </div>
//       </div>
//       <div class="experience__content bottom" style="display: none;">
//           <div class="experience__item">
//               <img class="education__pic__item" src="../img/logo/ahzemsgraphics.png" alt="">
//               <h3>Proprietor | Ahzem's Graphics</h3>
//               <h4>April 2022 - Present</h4>
//               <p>As the proprietor of Ahzem's Graphics, I lead and manage all aspects of the business, specializing 
//                   in providing high-quality graphic design services tailored to meet the needs of clients. From 
//                   conceptualization to execution, I ensure each project reflects creativity, professionalism, and 
//                   attention to detail, delivering visually captivating solutions that exceed expectations.</p>
//           </div>
//       </div>
//       <div class="experience__content bottom" style="display: none;">
//           <div class="experience__item">
//               <img class="education__pic__item" src="../img/logo/nolimit.jpg" alt="">
//               <h3>Employee | Nolimit SriLanka</h3>
//               <p> At NOLIMIT Sri Lanka, I had the opportunity to engage in various roles within the retail sector, 
//                   gaining valuable experience and skills along the way.</p>
//                   <ul>
//                       <li>
//                           <h4>Cashier | Dec 2021 - Dec 2022</h4>
//                           <p>Managed transactions and interacted with customers, gaining essential customer service and financial management skills.</p>
//                       </li>
//                       <li>
//                           <h4>Salesperson | Nov 2021 - Dec 2021</h4>
//                           <p> Focused on marketing, product knowledge, and customer service, learning how to promote products effectively.</p>
//                       </li>
//                       <li>
//                           <h4>Sales Trainee | Oct 2021 - Nov 2021</h4>
//                           <p> Concentrated on enhancing customer service skills, understanding the importance of delivering exceptional service to customers.</p>
//                       </li>
//                   </ul>
//           </div>
//       </div>
//   </div>
  
//   <div class="design__container">
//       <div class="circle active">
//           <div class="circle__design ">
//               <img src="../img/logo/microsoft.png" alt="">
//           </div>
//           <div class="circle__content">
//               <p>Microsoft Learn Student Ambassador | Microsoft</p>
//           </div>
//       </div>
//       <div class="circle">
//           <div class="circle__design">
//               <img src="../img/logo/zeroplastic-logo.jpeg" alt="">
//           </div>
//           <div class="circle__content">
//               <p>Director of Social Media Management | ZeroPlastic NDT</p>
//           </div>
//       </div>
//       <div class="circle">
//           <div class="circle__design">
//               <img src="../img/logo/dfec.jpg" alt="">
//           </div>
//           <div class="circle__content">
//               <p>Social Media Manager | OSDEM-DFEC Science Project</p>
//           </div>
//       </div>
//       <div class="circle">
//           <div class="circle__design">
//               <img src="../img/logo/ahzemsgraphics.png" alt="">
//           </div>
//           <div class="circle__content">
//               <p>Proprietor | Ahzem's Graphics</p>
//           </div>
//       </div>
//       <div class="circle">
//           <div class="circle__design">
//               <img src="../img/logo/nolimit.jpg" alt="">
//           </div>
//           <div class="circle__content">
//               <p>Cashier | Nolimit SriLanka</p>
//           </div>
//       </div>
//   </div>

//   <div class="horizontal-line"></div>

// </section>

  const experiences = [
    {
      logo: '/img/logo/mlsa.png',
      companyLogo: '/img/logo/microsoft.png',
      title: 'Microsoft Learn Student Ambassador | Microsoft',
      description: 'As a Microsoft Learn Student Ambassador, I represent my institution and engage with fellow students to promote learning and collaboration within the Microsoft ecosystem.',
      positions: [
        {
          level: 'Beta Level',
          period: 'Feb 2024 - Present',
          details: 'As a Beta Level Microsoft Learn Student Ambassador, I actively engage with students to promote learning and collaboration within the Microsoft ecosystem, while also participating in various programs and events to enhance the student experience.'
        },
        {
          level: 'Alpha Level',
          period: 'Jan 2024 - Feb 2024',
          details: 'As an Alpha Level Microsoft Learn Student Ambassador, I actively participate in early-stage programs and provide feedback to enhance the student learning experience.'
        },
        {
          level: 'New',
          period: 'Jan 2024 - Jan 2024',
          details: 'During this brief period, I embraced the responsibilities of a newly appointed Microsoft Learn Student Ambassador, eagerly immersing myself in the role and its requirements.'
        }
      ]
    },
    {
      logo: '/img/logo/zeroplastic-logo.jpeg',
      companyLogo: '/img/logo/zeroplastic-logo.jpeg',
      title: 'Director of Social Media Management | ZeroPlastic NDT',
      period: 'Jan 2024 - Present',
      description: 'As the Director of Social Media Management at ZeroPlastic NDT, I oversee and strategize the company\'s social media presence to effectively communicate our mission and values while engaging with our audience.'
    },
    {
      logo: '/img/logo/dfec.jpg',
      companyLogo: '/img/logo/dfec.jpg',
      title: 'Social Media Manager | OSDEM-DFEC Science Project',
      period: 'Oct 2023 - Present',
      description: 'As a Social Media Manager at OSDEM-DFEC Science Project, I volunteer my time and skills to help provide free educational opportunities to students who aspire to become engineers and doctors in Sri Lanka.'
    },
    {
      logo: '/img/logo/ahzemsgraphics.png',
      companyLogo: '/img/logo/ahzemsgraphics.png',
      title: 'Proprietor | Ahzem\'s Graphics',
      period: 'April 2022 - Present',
      description: 'As the proprietor of Ahzem\'s Graphics, I lead and manage all aspects of the business, specializing in providing high-quality graphic design services tailored to meet the needs of clients.'
    },
    {
      logo: '/img/logo/nolimit.jpg',
      companyLogo: '/img/logo/nolimit.jpg',
      title: 'Employee | Nolimit SriLanka',
      description: 'At NOLIMIT Sri Lanka, I had the opportunity to engage in various roles within the retail sector, gaining valuable experience and skills along the way.',
      positions: [
        {
          level: 'Cashier',
          period: 'Dec 2021 - Dec 2022',
          details: 'Managed transactions and interacted with customers, gaining essential customer service and financial management skills.'
        },
        {
          level: 'Salesperson',
          period: 'Nov 2021 - Dec 2021',
          details: 'Focused on marketing, product knowledge, and customer service, learning how to promote products effectively.'
        },
        {
          level: 'Sales Trainee',
          period: 'Oct 2021 - Nov 2021',
          details: 'Concentrated on enhancing customer service skills, understanding the importance of delivering exceptional service to customers.'
        }
        ]
    },
    {
        logo: '/img/logo/gavel.jpg',
        companyLogo: '/img/logo/gavel.jpg',
        title: 'Web Master | Gavel Club of ITUM',
        period: 'April 2024 - Present',
        description: 'As the Web Master of the Gavel Club of ITUM, I manage and maintain the club\'s website, ensuring that it remains up-to-date and user-friendly. I also collaborate with club members to create engaging content and promote club activities'

    }
  ];

  return (
    <section className="experience">
      <div className="experience__container">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className={`experience__content bottom ${activeExperience === index ? '' : 'hidden'}`}
            style={{ display: activeExperience === index ? 'block' : 'none' }}
          >
            <div className="experience__item">
              <img className="education__pic__item" src={exp.logo} alt={exp.title} />
              <h3>{exp.title}</h3>
              {exp.period && <h4>{exp.period}</h4>}
              <p>{exp.description}</p>
              {exp.positions && (
                <ul>
                  {exp.positions.map((pos, i) => (
                    <li key={i}>
                      <h4>{pos.level} | {pos.period}</h4>
                      <p>{pos.details}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="design__container">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className={`circle ${activeExperience === index ? 'active' : ''}`}
            onClick={() => setActiveExperience(index)}
          >
            <div className="circle__design">
              <img src={exp.companyLogo} alt={exp.title} />
            </div>
            <div className="circle__content">
              <p>{exp.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="horizontal-line"></div>
    </section>
  );
};

export default Experience;