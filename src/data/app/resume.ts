export default function getResume() {
  return {
    sections: [
      {
        title: 'Education',
        features: [
          {
            organization: 'The University of Michigan College of Engineering',
            timePeriod: 'August 2022 - Present',
            description: 'Pursuing a Bachelor of Science in Engineering in Computer Science and Engineering.',
            extras: 'Expected Graduation December 2025'
          },
          {
            organization: 'Dexter High School',
            timePeriod: 'September 2018 - June 2022'
          },
          {
            organization: 'Washtenaw Community College',
            timePeriod: 'June 2021 - June 2022 (Dual-enrollment with High School)'
          }
        ]
      },
      {
        title: 'Work Experience',
        features: [
          {
            position: 'Software Development Trainee',
            relation: 'at',
            organization: 'AdvantageCS',
            timePeriod: 'May 2023 - Present'
          },
          {
            position: 'Help Desk Support Specialist',
            relation: 'at',
            organization: 'ICPSR',
            timePeriod: 'June 2022 - April 2023',
            description: 'Started as a technical support specialist helping professors use the lecture hall technology effectively. Quickly transitioned from tech support to software development, developing a dedicated full-stack solution to analyze the program’s registration data using a MySQL database, Node.js backend, and a Vue.js frontend, which was eventually re-written in React.js.'
          }
        ]
      },
      {
        title: 'School Projects and Activities',
        features: [
          {
            position: 'Trombone Marcher',
            relation: 'in the',
            organization: 'Michigan Marching Band',
            timePeriod: 'August 2022 - Present'
          },
          {
            position: 'Team Member',
            relation: 'on',
            organization: 'DTDC',
            timePeriod: 'August 2022 - December 2022',
            description: 'Proposed and presented a  project involving autonomous quadcopter drones. Used Python and Git collaboratively to deliver a markeable product.',
            extras: 'Michigan Engineering 100 Team'
          },
          {
            position: 'Programming Student Lead',
            relation: 'on',
            organization: 'Dreadbots',
            timePeriod: 'June 2021 - June 2022',
            extras: 'First Robotics Competition Team 3656'
          },
          {
            position: 'Programmer',
            relation: 'on',
            organization: 'Dreadbots',
            timePeriod: 'September 2018 - June 2022',
            extras: 'First Robotics Competition Team 3656'
          },
          {
            position: 'Primary Robot Driver',
            relation: 'on',
            organization: 'Dreadbots',
            timePeriod: 'February 2022 - June 2022',
            extras: 'First Robotics Competition Team 3656'
          },
          {
            position: 'Strategy/Scouting Student Lead',
            relation: 'on',
            organization: 'Dreadbots',
            timePeriod: 'June 2019 - June 2021',
            extras: 'First Robotics Competition Team 3656'
          }
        ]
      }
    ]
  }
}