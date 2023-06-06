import { faLocationDot, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function getData() {
  return {
    title: 'Pursuing a career in Software Engineering.',
    description: 'Collin Johnson is pursuing a degree in Computer Science and Engineering (CSE) at the University of Michigan College of Engineering. He is a Software Development Trainee intern at AdvantageCS.',
    image: {
      src: '/mugs/mug-homepage.jpg',
      alt: 'Collin Johnson',
    },
    imageMobile: {
      src: '/mugs/mug-homepage-mobile.jpg',
      alt: 'Collin Johnson',
    },
    iconInfo: {
      labels: [
        {
          icon: faLocationDot,
          content: 'Ann Arbor, Michigan'
        },
        {
          icon: faGraduationCap,
          content: 'University of Michigan'
        }
      ],
      links: [
        {
          href: 'https://linkedin.com/in/collj/',
          icon: faLinkedin,
          callToAction: 'Connect on LinkedIn'
        },
        {
          href: 'https://github.com/cjohnson/',
          icon: faGithub,
          callToAction: 'Follow on Github'
        }
      ]
    }
  };
}