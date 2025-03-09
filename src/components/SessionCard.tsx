
import React, { useState } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export type Session = {
  time: string;
  duration: string;
  title: string;
  speakers?: string;
  participants: string;
  instructions?: string;
  id: string;
};

type SessionCardProps = {
  session: Session;
};

const SessionCard: React.FC<SessionCardProps> = ({ session }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="session-card animate-slide-up">
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="md:w-1/4 mb-3 md:mb-0">
          <div className="time-chip mb-2">{session.time}</div>
          <div className="text-sm text-anaplan-neutral-comet">{session.duration}</div>
        </div>
        
        <div className="md:w-3/4">
          <h3 className="session-title">{session.title}</h3>
          
          <Accordion type="single" collapsible>
            <AccordionItem value="details" className="border-none">
              <AccordionTrigger 
                onClick={() => setIsExpanded(!isExpanded)}
                className="py-2 text-anaplan-blue-mariner hover:text-anaplan-blue-matisse hover:no-underline"
              >
                Session Details
              </AccordionTrigger>
              <AccordionContent className="pt-3">
                <div className="space-y-3 text-anaplan-neutral-mulledwine">
                  {session.speakers && (
                    <div>
                      <span className="font-medium text-anaplan-blue-midnight">Speakers:</span> {session.speakers}
                    </div>
                  )}
                  
                  <div>
                    <span className="font-medium text-anaplan-blue-midnight">Participants:</span> {session.participants}
                  </div>
                  
                  {session.instructions && (
                    <div>
                      <span className="font-medium text-anaplan-blue-midnight">Key Instructions:</span>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        {session.instructions.split('\n').map((instruction, i) => (
                          <li key={i}>{instruction}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
