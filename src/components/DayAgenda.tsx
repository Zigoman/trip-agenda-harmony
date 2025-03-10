import React from 'react';
import AgendaItemCard from './AgendaItemCard'; // renamed from SessionCard
import { AgendaItem } from '@/types';

type DayAgendaProps = {
  day: number;
  items: AgendaItem[];
};

const DayAgenda: React.FC<DayAgendaProps> = ({ day, items }) => {
  return (
      <div className="space-y-2">
        <div className="relative mb-5">
          <div className="flex items-center">
            {/* Show day name instead of day number */}
            <div className="w-10 h-10 flex items-center justify-center bg-anaplan-blue-midnight text-white rounded-full font-bold">
              {day}
            </div>
            <h2 className="ml-3 text-2xl font-semibold text-anaplan-blue-midnight">
              Day {day}
            </h2>
          </div>
          <div className="absolute left-5 top-10 bottom-0 w-[1px] h-[calc(100%-20px)] bg-anaplan-neutral-ghost"></div>
        </div>
        {items.map((agendaItem, idx) => (
            <AgendaItemCard key={`${day}-${idx}`} item={agendaItem} />
        ))}
      </div>
  );
};

export default DayAgenda;
