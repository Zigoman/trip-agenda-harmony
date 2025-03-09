
import React from 'react';

type DayTabsProps = {
  activeDay: number;
  setActiveDay: (day: number) => void;
};

const DayTabs: React.FC<DayTabsProps> = ({ activeDay, setActiveDay }) => {
  return (
    <div className="flex space-x-1 mb-6 border-b border-anaplan-neutral-ghost">
      {[1, 2, 3, 4].map((day) => (
        <button
          key={day}
          onClick={() => setActiveDay(day)}
          className={`agenda-tab ${activeDay === day ? 'active' : 'inactive'}`}
        >
          Day {day}
        </button>
      ))}
    </div>
  );
};

export default DayTabs;
