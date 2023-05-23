import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
          svg: 'icons/location-sharp.svg',
          icon: faLocationDot,
          alt: 'Location icon',
          content: 'Ann Arbor, Michigan'
        },
        {
          key: 1,
          svg: 'icons/school-sharp.svg',
          icon: faGraduationCap,
          alt: 'School icon',
          content: 'University of Michigan'
        }
      ],
      links: [
        {
          key: 0,
          href: 'https://linkedin.com/in/collj/',
          svg: 'socials/logo-linkedin.svg',
          icon: faLinkedin,
          alt: 'LinkedIn logo',
          callToAction: 'Connect on LinkedIn'
        },
        {
          key: 1,
          href: 'https://github.com/cjohnson/',
          svg: 'socials/logo-github.svg',
          icon: faGithub,
          alt: 'Github logo',
          callToAction: 'Follow on Github'
        }
      ]
    }
  };
}