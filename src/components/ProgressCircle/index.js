import React from 'react';
import './index.css';

const CircularProgressGraph = ({ progress ,radius}) => {
  const strokeWidth = 5; // Width of the progress bar stroke
//   const radius = radius; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle

  const progressOffset = ((100 - progress) / 100) * circumference; // Offset for the progress stroke

  return (
    <svg className="circular-progress" width={radius * 2} height={radius * 2}>
      <circle
        className="circular-progress-background"
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <circle
        className="circular-progress-bar"
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={progressOffset}
      />
      <text className="circular-progress-text" x="50%" y="50%" dy="0.35em" textAnchor="middle">
        {progress}%
      </text>
    </svg>
  );
};

export default CircularProgressGraph;


