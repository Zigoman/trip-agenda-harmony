
import React from 'react';
import SessionCard, { Session } from './SessionCard';

type DayAgendaProps = {
  day: number;
  sessions: Session[];
};

const DayAgenda: React.FC<DayAgendaProps> = ({ day, sessions }) => {
  return (
    <div className="space-y-2">
      <div className="relative mb-8">
        <div className="flex items-center">
          <div className="w-10 h-10 flex items-center justify-center bg-anaplan-blue-midnight text-white rounded-full font-bold">
            {day}
          </div>
          <h2 className="ml-3 text-2xl font-semibold text-anaplan-blue-midnight">
            Day {day} Agenda
          </h2>
        </div>
        <div className="absolute left-5 top-10 bottom-0 w-[1px] h-[calc(100%-20px)] bg-anaplan-neutral-ghost"></div>
      </div>

      <div className="pl-12">
        {sessions.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </div>
    </div>
  );
};

export default DayAgenda;
