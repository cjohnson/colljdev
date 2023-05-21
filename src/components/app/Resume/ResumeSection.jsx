import React from 'react';

export default function ResumeSection({ title, features }) {
  const featuresList = features.map(
    feature => <ResumeFeature
      key={feature.position}
      position={feature.position}
      relation={feature.relation}
      organization={feature.organization}
      timePeriod={feature.timePeriod}
      description={feature.description} />
  );

  return (
    <div className="resume-section-container py-2 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
      <div className="resume-section max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <div className="resume-section-title pb-5">
          <h1 className="text-2xl lg:text-3xl lg:text-gray-700">{title}</h1>
        </div>
        <ol className="resume-features ml-3 relative border-l-2 border-gray-300 dark:border-gray-700">
          {featuresList}
        </ol>
      </div>
    </div>
  );
}

function ResumeFeature({ position, relation, organization, timePeriod, description }) {
  return (
    <li key={position} className="resume-feature mb-10 ml-4">
      <div className="vertical-timeline-point absolute w-3 lg:w-4 h-3 lg:h-4 bg-gray-300 rounded-full mt-1.5 lg:mt-2 -left-[6.57px] lg:-left-[8.88px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <h2 className="resume-feature-title sm:text-2xl lg:text-2xl tracking-tight font-regular text-gray-900 dark:text-white">
        <span className="font-bold">{position}</span> {relation} <span className="font-bold">{organization}</span>
      </h2>
      <h3 className="resume-feature-time-period mb-2 tracking-tight font-light text-gray-500 dark:text-white">{timePeriod}</h3>
      {description !== null && <p className="resume-feature-description font-normal text-gray-500 dark:text-white">{description}</p>}
    </li>
  );
}