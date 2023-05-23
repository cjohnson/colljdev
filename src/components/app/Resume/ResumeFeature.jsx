import React from 'react';

export default function ResumeFeature({ position, relation, organization, timePeriod, description, extras }) {
  return (
    <li key={position} className="resume-feature mb-10 ml-4">
      <div className="vertical-timeline-point absolute w-3 lg:w-4 h-3 lg:h-4 bg-gray-300 rounded-full mt-1.5 lg:mt-2 -left-[6.57px] lg:-left-[8.88px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <h2 className="resume-feature-title sm:text-2xl lg:text-2xl tracking-tight font-regular text-gray-900 dark:text-white">
        <span className="font-bold">{position}</span> {relation} <span className="font-bold">{organization}</span> {extras}
      </h2>
      <h3 className="resume-feature-time-period mb-2 tracking-tight font-light text-gray-500 dark:text-white">{timePeriod}</h3>
      {description !== null && <p className="resume-feature-description font-normal text-gray-500 dark:text-white">{description}</p>}
    </li>
  );
}