
import React, { useState } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import ParticipantAvatar from './ParticipantAvatar';

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

// Define participant images - in a real app, this would come from an API
const participantImages: Record<string, string> = {
  'Ashish Kapoor': '/lovable-uploads/34516e04-10c3-4267-95cc-1d37c9f6ae8f.png',
  'Mike Kehler': '/lovable-uploads/8df15edd-9efb-4023-960e-388c9375cc28.png',
  'Justin Gill': '/lovable-uploads/19018aee-ccc8-4da2-991f-a99ff7d1355c.png',
  'Yaniv Dassa': '/lovable-uploads/a47c732f-da97-43c0-a40f-51adfda15974.png',
};

const SessionCard: React.FC<SessionCardProps> = ({ session }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Parse participants names from the string
  const parseParticipants = (participantsString: string): string[] => {
    // Split by commas, but also handle the case where we have "All guests" or similar
    if (participantsString.toLowerCase().includes('all guests')) {
      return ['All guests'];
    }
    
    // Split by common separators and clean up
    return participantsString
      .split(/,|\(|\)|\+|and/)
      .map(name => name.trim())
      .filter(name => name && name !== 'You' && !name.toLowerCase().includes('others') && !name.toLowerCase().includes('team') && name.length > 1);
  };

  const participantsList = parseParticipants(session.participants);

  return (
    <div className="session-card animate-slide-up">
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="md:w-1/4 mb-3 md:mb-0">
          <div className="time-chip mb-2">{session.time}</div>
          <div className="text-sm text-anaplan-neutral-comet">{session.duration}</div>
        </div>
        
        <div className="md:w-3/4">
          <div className="flex flex-col mb-3">
            <div className="flex items-center mb-2">
              <h3 className="session-title mb-0 mr-3">{session.title}</h3>
              <div className="flex -space-x-2 overflow-visible">
                {participantsList.slice(0, 3).map((participant, index) => (
                  <ParticipantAvatar 
                    key={`${session.id}-participant-header-${index}`}
                    name={participant}
                    imagePath={participantImages[participant]}
                  />
                ))}
                {participantsList.length > 3 && (
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-anaplan-neutral-ghost text-anaplan-neutral-comet text-sm font-medium border-2 border-white">
                    +{participantsList.length - 3}
                  </div>
                )}
              </div>
            </div>
          </div>
          
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
                  
                  {/* Participant Avatars - Complete list in expanded view */}
                  <div className="mt-4">
                    <span className="font-medium text-anaplan-blue-midnight block mb-2">All Participants:</span>
                    <div className="flex flex-wrap gap-2">
                      {participantsList.map((participant, index) => (
                        <ParticipantAvatar 
                          key={`${session.id}-participant-${index}`}
                          name={participant}
                          imagePath={participantImages[participant]}
                        />
                      ))}
                      {/* Add 'You' avatar */}
                      <ParticipantAvatar name="You" />
                    </div>
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
