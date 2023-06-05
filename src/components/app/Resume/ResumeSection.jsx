import React from 'react';

import ResumeFeature from './ResumeFeature';

export default function ResumeSection({ themeContext, title, features }) {
  const featuresList = features.map(
    feature => <ResumeFeature
      key={feature.key}
      themeContext={themeContext}
      position={feature.position}
      relation={feature.relation}
      organization={feature.organization}
      timePeriod={feature.timePeriod}
      description={feature.description}
      extras={feature.extras} />
  );

  return (
    <div className="resume-section-container py-2 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
      <div className="resume-section max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <div className="resume-section-title pb-5">
          <h1 className="text-2xl lg:text-3xl lg:text-gray-700 dark:lg:text-gray-200">{title}</h1>
        </div>
        <ol className="resume-features ml-3 relative border-l-2 border-gray-300 dark:border-gray-700">
          {featuresList}
        </ol>
      </div>
    </div>
  );
}