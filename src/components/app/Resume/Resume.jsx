import React from 'react';

import ResumeSection from './ResumeSection';

import resumeData from '@/data/resume';

export default function Resume() {
  const sections = resumeData.sections.map(
    section => <ResumeSection
      key={section.title}
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