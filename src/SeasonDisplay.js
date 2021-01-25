import React from "react";
import './SeasonDisplay.css'

const seasonConfig = {
  winter: {
    text: 'Burr',
    iconName: 'snowflake'
  },
  summer: {
    text: 'Yay',
    iconName: 'sun'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const month = new Date().getMonth();
  const season = getSeason(props.lat, month);
  const { text, iconName } = seasonConfig[season]

  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon massive icon-left`}/>
      <h1>{text}</h1>
      <i className={`${iconName} icon massive icon-right`}/>
    </div>
  );
};

export default SeasonDisplay;
