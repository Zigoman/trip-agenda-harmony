
import React, { useState } from 'react';
import AgendaHeader from '@/components/AgendaHeader';
import DayTabs from '@/components/DayTabs';
import DayAgenda from '@/components/DayAgenda';
import FooterInfo from '@/components/FooterInfo';
import { Session } from '@/components/SessionCard';

const day1Sessions: Session[] = [
  {
    id: '1-1',
    time: '8:15 AM – 8:30 AM',
    duration: '15 minutes',
    title: 'Arrival',
    participants: 'All arriving guests (Justin Gill, Mike Kehler, Nitzan Paz, Yaniv Dassa, You)',
    instructions: 'Expect traffic; aim to be at the office by 9:00 AM.'
  },
  {
    id: '1-2',
    time: '9:00 AM – 9:30 AM',
    duration: '30 minutes',
    title: 'Paperwork & Welcome Session',
    speakers: 'Aniruddha Shendrikar',
    participants: 'All guests, plus Ashish Kapoor, UI team, others',
    instructions: 'Complete any necessary paperwork.\nBrief overview of the office layout and safety guidelines.'
  },
  {
    id: '1-3',
    time: '9:30 AM – 9:45 AM',
    duration: '15 minutes',
    title: 'Move to the 7th Floor & Seating Arrangements',
    speakers: 'Aniruddha Shendrikar',
    participants: 'All guests',
    instructions: 'Familiarize yourselves with seating assignments.'
  },
  {
    id: '1-4',
    time: '9:45 AM – 10:00 AM',
    duration: '15 minutes',
    title: 'Coffee/Tea & "Welcome Connect"',
    speakers: 'Aniruddha Shendrikar',
    participants: 'All guests',
    instructions: 'Brief walkthrough of the entire multi-day agenda.\nDiscuss any device plans or immediate feedback.'
  },
  {
    id: '1-5',
    time: '10:00 AM – 10:30 AM',
    duration: '30 minutes',
    title: 'Floor Walk (Data/IT)',
    speakers: 'Aniruddha Shendrikar',
    participants: 'All guests, local Data & IT teams',
    instructions: 'Visit Data/AI, Radio, and (optionally) Platform Services areas.'
  },
  {
    id: '1-6',
    time: '10:30 AM – 11:00 AM',
    duration: '30 minutes',
    title: 'Team Structure Connect',
    speakers: 'Aniruddha Shendrikar, Ankur (optional), plus open discussion',
    participants: 'You, Justin Gill, Nitzan Paz, Yaniv Dassa',
    instructions: 'Review team org charts, upcoming positions, recruitment statuses.\nQ&A on team needs.'
  },
  {
    id: '1-7',
    time: '11:00 AM – 11:15 AM',
    duration: '15 minutes',
    title: 'Break (Coffee / "Me Time")',
    participants: 'All guests'
  },
  {
    id: '1-8',
    time: '11:15 AM – 12:00 PM',
    duration: '45 minutes',
    title: 'Data Legacy & Vision',
    speakers: 'Mike Kehler',
    participants: 'All guests',
    instructions: 'Overview of data journey so far and upcoming data offerings.'
  },
  {
    id: '1-9',
    time: '12:00 PM – 1:00 PM',
    duration: '60 minutes',
    title: 'Lunch',
    participants: 'All guests',
    instructions: 'Optional walk after lunch (ground floor or parking area).'
  },
  {
    id: '1-10',
    time: '1:00 PM – 1:30 PM',
    duration: '30 minutes',
    title: 'Product Management Connect',
    speakers: 'Yaniv Dassa',
    participants: 'All guests',
    instructions: 'Share market insights, upcoming feature roadmaps, and product visions.'
  },
  {
    id: '1-11',
    time: '1:30 PM – 2:30 PM',
    duration: '60 minutes',
    title: 'API Dates & Negotiations Meeting',
    participants: 'You, Nitzan Paz, Justin Gill, Yaniv Dassa, Ashish Kapoor, Monisha',
    instructions: 'Discuss API release timelines and any required agreements.\nAshish and Monisha will take minutes of the meeting, and share action items afterward.'
  },
  {
    id: '1-12',
    time: '2:30 PM – 3:00 PM',
    duration: '30 minutes',
    title: 'Town Hall Meeting',
    speakers: 'Tom, Mike, and other leaders',
    participants: 'All guests',
    instructions: 'Company-wide updates and Q&A.'
  },
  {
    id: '1-13',
    time: '3:00 PM – 3:15 PM',
    duration: '15 minutes',
    title: 'Coffee Break',
    participants: 'All guests'
  },
  {
    id: '1-14',
    time: '3:15 PM – 4:15 PM',
    duration: '60 minutes (approx.)',
    title: 'PlanIQ UI Retrospective',
    participants: 'You, potential attendance by Mike (schedule permitting), Ashish, UI Team',
    instructions: 'Review prior sprint outcomes, gather improvement ideas.'
  },
  {
    id: '1-15',
    time: '4:15 PM – 5:30 PM',
    duration: '75 minutes (end of day)',
    title: 'Wrap-Up & Ad Hoc Discussions',
    participants: 'All guests',
    instructions: 'Ashish may connect for feedback or any day-end adjustments.'
  },
  {
    id: '1-16',
    time: '5:30 PM onward',
    duration: 'Evening',
    title: 'Evening Activity',
    participants: 'All guests',
    instructions: 'Executive Leadership Dinner (Mike, Tom, etc.)\nPossible Team Outing (Bollywood movie, escape room, or city tour)'
  }
];

const day2Sessions: Session[] = [
  {
    id: '2-1',
    time: '9:30 AM – 10:00 AM',
    duration: '30 minutes',
    title: 'Arrival & Settling In',
    participants: 'All guests',
    instructions: 'Email checks and quick touch-bases before formal sessions begin.'
  },
  {
    id: '2-2',
    time: '10:00 AM – 10:30 AM',
    duration: '30 minutes',
    title: 'Observing Quarterly Planning Kickoff (Radio/Upland Orchestrator)',
    participants: 'You, optional for Justin/Nitzan/Yaniv',
    instructions: 'Attend as observers to see how another team structures its planning.'
  },
  {
    id: '2-3',
    time: '10:30 AM – 10:45 AM',
    duration: '15 minutes',
    title: 'Morning Snacks',
    participants: 'All guests'
  },
  {
    id: '2-4',
    time: '10:45 AM – 12:00 PM',
    duration: '~75 minutes',
    title: 'PlanIQ Backend Architecture Working Session',
    speakers: 'Nitzan Paz, Justin Gill',
    participants: 'All guests',
    instructions: 'Deep dive into current backend architecture.\nCollect feedback, define action items.'
  },
  {
    id: '2-5',
    time: '12:00 PM – 1:00 PM',
    duration: '60 minutes',
    title: 'Lunch',
    participants: 'All guests'
  },
  {
    id: '2-6',
    time: '1:00 PM – 2:00 PM',
    duration: '60 minutes',
    title: 'Bi-Weekly Executive WSR (Rescheduled)',
    speakers: 'Mike Kehler, others as relevant',
    participants: 'You, the leadership team',
    instructions: 'Combined with the usual WSR to avoid late evening calls.'
  },
  {
    id: '2-7',
    time: '2:00 PM – 2:30 PM',
    duration: '30 minutes',
    title: 'Break / "Me Time" (Buffer)',
    participants: 'All guests',
    instructions: 'Catch up on emails, handle any short ad-hoc meetings.'
  },
  {
    id: '2-8',
    time: '2:30 PM – 3:30 PM',
    duration: '60 minutes',
    title: 'Team Deep Dive (PlanIQ & Related Projects)',
    participants: 'You, PlanIQ team members',
    instructions: 'Explore further architecture details, knowledge sharing, or any urgent tasks.'
  },
  {
    id: '2-9',
    time: '3:30 PM – 4:30 PM',
    duration: '60 minutes',
    title: 'PlanIQ Architectural Roadmap & Vision',
    participants: 'All guests',
    instructions: 'High-level architecture, backend interactions, long-term vision.'
  },
  {
    id: '2-10',
    time: '4:30 PM – 4:45 PM',
    duration: '15 minutes',
    title: 'Tea Break',
    participants: 'All guests'
  },
  {
    id: '2-11',
    time: '4:45 PM – 5:30 PM',
    duration: '~45 minutes',
    title: 'Agile Workshop',
    speakers: 'You, Ashish Kapoor, Aniruddha Shendrikar',
    participants: 'All guests',
    instructions: 'Review sprint planning, grooming, and KPI tracking (burn-down charts, velocity, backlog health).\nIdentify process optimizations and address any bottlenecks.'
  },
  {
    id: '2-12',
    time: '5:30 PM – 5:45 PM',
    duration: '15 minutes',
    title: 'One-on-One with Ashish (Optional)',
    participants: 'You, Ashish',
    instructions: 'Catch up on personal action items or feedback.'
  }
];

const day3Sessions: Session[] = [
  {
    id: '3-1',
    time: '9:30 AM – 9:45 AM',
    duration: '15 minutes',
    title: 'Morning Arrival & Quick Check',
    participants: 'All guests'
  },
  {
    id: '3-2',
    time: '9:45 AM – 10:30 AM',
    duration: '45 minutes',
    title: 'PlanIQ UI Roadmap / PlanIQ 2.0',
    speakers: 'You (leading UI), with Mike, Justin, Nitzan, Yaniv',
    participants: 'All guests',
    instructions: 'Present upcoming features, discuss impact on Data & AI value additions.\nOutline short-term vs. FY25 vision.'
  },
  {
    id: '3-3',
    time: '10:30 AM – 10:45 AM',
    duration: '15 minutes',
    title: 'Morning Snacks',
    participants: 'All guests'
  },
  {
    id: '3-4',
    time: '10:45 AM – 11:45 AM',
    duration: '60 minutes',
    title: 'Team Breakout (Quarterly Planning Part 1)',
    participants: 'You, relevant sub-teams',
    instructions: 'Identify tasks, resources needed, timelines for the next quarter.'
  },
  {
    id: '3-5',
    time: '11:45 AM – 12:30 PM',
    duration: '45 minutes',
    title: 'Team Breakout (Quarterly Planning Part 2)',
    participants: 'You, relevant sub-teams',
    instructions: 'Finalize planning details and goals.'
  },
  {
    id: '3-6',
    time: '12:30 PM – 1:00 PM',
    duration: '30 minutes',
    title: 'WSR with the PING Team (Optional)',
    participants: 'Ashish, Ram, possibly you',
    instructions: 'Parallel session; you can join or use this time for other tasks (one-on-one with Ritu, etc.).'
  },
  {
    id: '3-7',
    time: '1:00 PM – 2:00 PM',
    duration: '60 minutes',
    title: 'CEC Walkthrough / Global Logic Innovations',
    participants: 'Global Logic staff, optional for Anaplan visitors',
    instructions: 'Learn about Global Logic\'s approach, new tools, and innovations.'
  },
  {
    id: '3-8',
    time: '2:00 PM – 2:30 PM',
    duration: '30 minutes',
    title: '"Me Time" / Ad Hoc Meetings',
    participants: 'All guests'
  },
  {
    id: '3-9',
    time: '2:30 PM – 2:45 PM',
    duration: '15 minutes',
    title: 'High Tea',
    participants: 'All guests'
  },
  {
    id: '3-10',
    time: '2:45 PM – 3:45 PM',
    duration: '60 minutes',
    title: 'Quarterly Planning Breakout (Continuation)',
    participants: 'You, relevant sub-teams',
    instructions: 'Wrap up any outstanding planning items.'
  },
  {
    id: '3-11',
    time: '3:45 PM – 4:00 PM',
    duration: '15 minutes',
    title: 'Retrospective & Wrap-Up',
    participants: 'All guests',
    instructions: 'Capture the final action items and confirm the next steps.'
  },
  {
    id: '3-12',
    time: '4:00 PM – 5:30 PM',
    duration: '~90 minutes (until end of day)',
    title: 'Team Party',
    participants: 'Entire Data Team, Mike, others',
    instructions: 'Social gathering, informal discussions, and networking.'
  }
];

const day4Sessions: Session[] = [
  {
    id: '4-1',
    time: '9:00 AM – 9:30 AM',
    duration: '30 minutes',
    title: 'QA Meetup & Farewell Speeches',
    speakers: 'You, Mike, Justin, Nitzan, (and new QAs)',
    participants: 'All guests',
    instructions: 'Offer brief speeches on experiences, suggestions, final remarks.'
  },
  {
    id: '4-2',
    time: '9:30 AM – 10:00 AM',
    duration: '30 minutes',
    title: 'Morning Snacks',
    participants: 'All guests'
  },
  {
    id: '4-3',
    time: '10:00 AM – 10:30 AM',
    duration: '30 minutes',
    title: 'Farewell Session',
    participants: 'All guests',
    instructions: 'Confirm any last-minute items, goodbyes, next steps.'
  },
  {
    id: '4-4',
    time: '10:30 AM – 11:30 AM',
    duration: '60 minutes',
    title: 'Buffer (Optional Activities)',
    participants: 'All guests',
    instructions: 'It could be a late checkout or last ad-hoc meeting.\nIf you plan to head straight to the airport from the office, coordinate luggage and transportation details in advance.'
  },
  {
    id: '4-5',
    time: '11:30 AM',
    duration: 'Departure',
    title: 'Departure to Airport',
    participants: 'All guests',
    instructions: 'Flight Time: ~4:00 PM\nTravel time to airport ~2 hours (traffic-dependent).\nArrive by 1:00–1:30 PM for check-in and formalities.'
  }
];

const Index = () => {
  const [activeDay, setActiveDay] = useState(1);

  const getDaySessions = (day: number) => {
    switch (day) {
      case 1:
        return day1Sessions;
      case 2:
        return day2Sessions;
      case 3:
        return day3Sessions;
      case 4:
        return day4Sessions;
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-anaplan-neutral-athens pb-10">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <AgendaHeader />
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-10">
          <DayTabs activeDay={activeDay} setActiveDay={setActiveDay} />
          
          <div className="animate-fade-in" style={{ animationDuration: "0.4s" }}>
            <DayAgenda day={activeDay} sessions={getDaySessions(activeDay)} />
          </div>
        </div>
        
        <FooterInfo />
      </div>
      
      <div className="py-8 border-t border-anaplan-neutral-ghost mt-20">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/c5b354d7-43a7-4f19-9aea-1f4334ecd7f7.png" 
              alt="Anaplan Logo" 
              className="h-8 mr-2"
            />
            <div className="text-anaplan-blue-midnight text-sm">
              Global Logic Office Trip Agenda
            </div>
          </div>
          <div className="text-anaplan-neutral-kimberly text-sm">
            © {new Date().getFullYear()} Anaplan
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
