import React from 'react';

import ResumeSection from './ResumeSection';

import getResume from '@/data/app/resume';

export default function Resume() {
  const resumeData = getResume();

  const sections = resumeData.sections.map(
    (section, index) => <ResumeSection
      key={index}
      title={section.title}
      features={section.features} />
  );

  return (
    <>
      <section className="resume bg-white dark:bg-gray-900">
        {sections}
      </section>
    </>
  );
}