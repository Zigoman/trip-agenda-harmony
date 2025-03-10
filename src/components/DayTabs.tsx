import React from 'react';

type DayTabsProps = {
  activeDay: number;
  setActiveDay: (day: number) => void;
  numberOfDays: number;
};

const DayTabs: React.FC<DayTabsProps> = ({ activeDay, setActiveDay, numberOfDays }) => {
  return (
      <div className="flex space-x-1 mb-6 border-b border-anaplan-neutral-ghost">
        {Array.from({ length: numberOfDays }, (_, i) => i + 1).map((day) => (
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
