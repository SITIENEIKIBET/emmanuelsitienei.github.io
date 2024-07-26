import React from 'react';
import IMG1 from '../../assets/Mall_Customer.png';
import IMG2 from '../../assets/Customer_Analysis.png';
import IMG3 from '../../assets/Social_Media.png';
import IMG4 from '../../assets/HR_Analytics.png';
import IMG5 from '../../assets/Procurement.png';
import IMG6 from '../../assets/Warehouse.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Microsoft Fabric Mall Customer Analysis',
      img: IMG1,
      description:
        'This project leveraged Microsoft Fabric alongside PySpark and machine learning techniques to conduct Mall Customer Segmentation.',
      technologies: 'SQL, Python, Power BI, Microsoft Fabric, Lakehouse, API Data',
      link: 'https://www.linkedin.com/in/emmanuel-sitienei--data-analyst/details/projects/?profileId=ACoAABtBr-cB6juuguMClth4LZUP6wk0KvxBfec',
      github: 'https://github.com/SITIENEIKIBET',
    },
    {
      id: 2,
      title: 'HR Analytics Dashboard',
      img: IMG4,
      description:
        'This project utilized Power BI to develop an HR Analytics Dashboard, offering a comprehensive view of key workforce metrics and trends.',
      technologies: 'Power BI',
      link: 'https://www.linkedin.com/in/emmanuel-sitienei--data-analyst/details/projects/?profileId=ACoAABtBr-cB6juuguMClth4LZUP6wk0KvxBfec',
      github: 'https://github.com/SITIENEIKIBET',
    },
    {
      id: 3,
      title: 'Cutomer Analysis',
      img: IMG2,
      description: 'Build Customer Analysis Dashboard To know the Sum of quantity per Item purchased by customers',
      technologies: 'Microsoft Fabric Dataflow Ge2|Lakehouse|SQL Analytics endpoint|Power BI',
      link: 'https://www.linkedin.com/in/emmanuel-sitienei--data-analyst/details/projects/?profileId=ACoAABtBr-cB6juuguMClth4LZUP6wk0KvxBfec',
      github: 'https://github.com/SITIENEIKIBET',
    },
    {
      id: 4,
      title: 'SOCIAL MEDIA ANALYSIS',
      img: IMG3,
      description:
        'Build Social Media Analysis Project, the data is first preprocessed, cleaned, tranformed by removing Nulls, removing duplicates, and checking on appropriate datatypes',
      technologies: 'MYSQL|SQL',
      link: 'https://www.linkedin.com/in/emmanuel-sitienei--data-analyst/details/projects/?profileId=ACoAABtBr-cB6juuguMClth4LZUP6wk0KvxBfec',
      github: 'https://github.com/SITIENEIKIBET/SOCIAL-MEDIA-ANALYSIS',
    },
    {
      id: 5,
      title: 'Unclaimed Financial Assets Authority Procurement Implementation Dashboard',
      img: IMG5,
      description:
        'The Procurement Implementation Dashboard Leverages Data Analytics Techniques to help understand how Departments utilize its resources',
      technologies: 'Power BI, Microsoft Fabric',
      link: 'https://www.linkedin.com/in/emmanuel-sitienei--data-analyst-engineer/details/projects/1716400218182/single-media-viewer/?profileId=ACoAABtBr-cB6juuguMClth4LZUP6wk0KvxBfec',
      github: 'https://github.com/SITIENEIKIBET',
    },
    {
      id: 6,
      title: 'Designing Data Warehouse To Store and Analyze Sales Data',
      img: IMG6,
      description:
        'Created Datawarehouse Fact Tables and Dimension Tables(Including SCDs) to store historical and current sales data in Microsoft Fabric ',
      technologies: 'Microsoft Fabric Lakehouse, T-SQL, DataFlow Gen2 ETL,Power BI',
      link: 'https://www.linkedin.com/in/emmanuel-sitienei--data-analyst-engineer/details/projects/562192440/multiple-media-viewer/?profileId=ACoAABtBr-cB6juuguMClth4LZUP6wk0KvxBfec&treasuryMediaId=1716401629303',
      github: 'https://github.com/SITIENEIKIBET',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
