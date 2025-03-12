// src/pages/Index.tsx (example)
import React, { useState } from "react";
import AgendaHeader from "@/components/AgendaHeader";
import DayTabs from "@/components/DayTabs";
import DayAgenda from "@/components/DayAgenda";

import { nirZigdonAgenda } from "@/data/nirZigdonData";
import {yanivDassaAgenda} from "@/data/yanivDassaData.ts";
import {useSearchParams} from "react-router-dom";
import {DayAgendaType} from "@/types.ts";
import {nitzanJustinAgenda} from "@/data/nitzanJustinData.ts";

const Index: React.FC = () => {
  // 1) Grab the query param
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("id") || "";

  // 2) Decide which agenda/notes to load via switch
  let agendaToShow: DayAgendaType[] = [{day: 1, items: []}];
  // let notesToShow = null;

  switch (userId) {
    case "nir.zigdon":
      agendaToShow = nirZigdonAgenda;
      break;
      case "nitzan.paz":
        agendaToShow = nitzanJustinAgenda;
        break;
    case "justin.gill":
      agendaToShow = nitzanJustinAgenda;
      break;
    case "yaniv.dassa":
      agendaToShow = yanivDassaAgenda;
      break;
    default:
      break;
  }

  const [activeDay, setActiveDay] = useState(0);
  const currentDay = agendaToShow[activeDay];
  return (
      <div className="min-h-screen bg-anaplan-neutral-athens pb-10">
        <div className="max-w-5xl mx-auto py-8">
          <AgendaHeader />

          <div className="bg-white shadow-sm rounded-lg p-6 px-2 mb-10">
            {/* If your DayTabs use 1-based day indexing, shift accordingly */}
            <DayTabs
                activeDay={activeDay + 1}
                setActiveDay={(day) => setActiveDay(day - 1)}
                numberOfDays={agendaToShow.length}
            />
            <div className="animate-fade-in" style={{ animationDuration: "0.4s" }}>
              {/* Now pass in the day as a string and the items array */}
              <DayAgenda day={currentDay.day} items={currentDay.items} />
            </div>
          </div>

          {/* Show notes if you want */}
          {/*<FooterInfo notes={notesToShow} />*/}
        </div>
      </div>
  );
};

export default Index;
