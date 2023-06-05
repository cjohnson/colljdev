import React from 'react';

import IconLabel from './IconLabel';
import IconLink from './IconLink';

export default function HomeHeroIconInfo({ themeContext, data }) {
  const iconLabels = data.labels.map(
    text => <IconLabel
      key={text.key}
      themeContext={themeContext}
      svg={text.svg}
      alt={text.alt}
      icon={text.icon}
      infoText={text.content} />
  );

  const iconLinks = data.links.map(
    link => <IconLink
      key={link.key}
      href={link.href}
      svg={link.svg}
      alt={link.alt}
      icon={link.icon}
      callToAction={link.callToAction} />
  );

  return (
    <div className="home-hero-brief-information flex flex-col space-y-3 md:space-y-5 items-start">
      {iconLabels}
      {iconLinks}
    </div>
  );
}