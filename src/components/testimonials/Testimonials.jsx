import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/john-kamari-6aaa38119',
      name: 'John Kamari Mbugua',
      role: 'Cyber Security Analyst. Network and Systems Support Engineer. JavaScript | Rails | React | Redux. Improving open-source projects, one commit at a time.',
      test: 'As a Data Analyst|Data Engineer|Fabric Analytics Engineer|BI Developer and a problem solver, I think Emmanuel Sitienei is a great talent and asset to have. I met Emmanuel while Interning at Unclaimed Financial Assets Authority and since then he has drastically progressed in his understanding of the data analysis process. He always has a professional environment and has good relation with his peers which makes it easier to communicate with him and get a glimpse of what he does with data!.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/yishak-wesego/',
      name: 'David Mutuku',
      role: 'Software Engineer | Technical Support Engineer Intern at Unclaimed Financial Assets Authority',
      test: "Working with Emmanuel has been transformative; His precision in data analysis and engineering prowess consistently exceed expectations, making them an invaluable asset to any project."
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/evance-odhiambo-23336b234/',
      name: 'Evance Odhiambo',
      role: 'Full Stack Developer| PHP|LARAVEL| PostgreSQL | JavaScript | React | Redux | Html&Css | Python at AHADI Corporation',
      test: 'I worked with Emmanuel in the same team and his communication skills are very strong. His Data Analysis and Modelling skills are one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he\'s a good team worker, but also because he has very good skills and I know he has much more potential to be shown.',
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/rajeev-gadi-7963b2122/',
      name: 'Rajeev Gadi',
      role: 'Office 365 | Power Apps | Power Automate | Share Point | SQL | Office Script.',
      test: "It happened that as I browsed down the list of Linkedin Network, I landed on Emmanuel's Profile and I stopped by to look at it and it really captured my attention on what the guy was doing for real he's passionate about anything data, He couldn't spend a day or so without posting achievements, milestones and learning materials related to data. When it comes to professional skills, he is really committed to work, always doing his best and going beyond the requirements of the project he's building.",
    },
    {
      id: 5,
      link: 'https://www.linkedin.com/in/conny-mutungi-8667a4103/',
      name: 'Conny Mutungi',
      role: 'Senior Project Manager at ICT Authority',
      test: "I had the pleasure of meeting with Emmanuel Sitienei during interviews for The Presidential Digital Talent Programme. Emmanuel impressed me with his expertise in data analytics and their dedication to excellence. I highly recommended him for the programme the first time I went through his Resume..",
    },
    {
      id: 6,
      link: 'https://www.linkedin.com/in/ochieng-okumu2024/',
      name: 'Ochieng Okumu',
      role: 'Data Analytics Engineer|Presidential Digital Talent President| Cheerful Team Player',
      test: "I have collaboratated with Emmmanuel in desighning innovative solutions revolving around insightful data-driven decision-making, and it was amazing how collaborative he was, we shared ideas on how to solve data problems to ensure invaluable data decision-making processes",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials