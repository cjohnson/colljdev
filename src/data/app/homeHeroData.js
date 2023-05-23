import { faLocationDot, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function getData() {
  return {
    title: 'Pursuing a career in Software Engineering.',
    description: 'Collin Johnson is pursuing a degree in Computer Science and Engineering (CSE) at the University of Michigan College of Engineering. He is a Software Development Trainee intern at AdvantageCS.',
    image: {
      src: '/mugs/mug-homepage.jpg',
      alt: 'Collin Johnson'
    },
    iconInfo: {
      labels: [
        {
          key: 0,
          icon: faLocationDot,
          content: 'Ann Arbor, Michigan'
        },
        {
          key: 1,
          icon: faGraduationCap,
          content: 'University of Michigan'
        }
      ],
      links: [
        {
          key: 0,
          href: 'https://linkedin.com/in/collj/',
          icon: faLinkedin,
          callToAction: 'Connect on LinkedIn'
        },
        {
          key: 1,
          href: 'https://github.com/cjohnson/',
          icon: faGithub,
          callToAction: 'Follow on Github'
        }
      ]
    }
  };
}