import React, {useState} from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import ParticipantAvatar from './ParticipantAvatar';
import {AgendaItem} from '@/types';
import {participantImages} from "@/data/general.ts";

type AgendaItemCardProps = {
    item: AgendaItem;
};

const AgendaItemCard: React.FC<AgendaItemCardProps> = ({item}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Helper to parse "8:15 AM" into a Date object
    function parseTime12h(time12h: string): Date {
        const [timePart, ampm] = time12h.split(" ");
        let [hour, minute] = timePart.split(":").map(Number);

        if (ampm?.toUpperCase() === "PM" && hour < 12) hour += 12;
        if (ampm?.toUpperCase() === "AM" && hour === 12) hour = 0;

        return new Date(1970, 0, 1, hour, minute || 0, 0);
    }

// Compute the duration from timeStart/timeEnd, return a nice display
    function getDurationString(timeStart: string, timeEnd: string): string {
        const start = parseTime12h(timeStart);
        const end = parseTime12h(timeEnd);
        const diffMs = end.getTime() - start.getTime();
        if (diffMs <= 0) return "";

        const diffMins = Math.floor(diffMs / 60000);
        if (diffMins < 60) {
            return `${diffMins} minutes`;
        } else {
            const hours = Math.floor(diffMins / 60);
            const remainder = diffMins % 60;
            if (!remainder) {
                return `${hours} hour${hours > 1 ? "s" : ""}`;
            }
            return `${hours}h ${remainder}m`;
        }
    }

    const duration = getDurationString(item.timeStart, item.timeEnd);


    return (<div className="session-card animate-slide-up">
        <div className="flex flex-col md:flex-row md:items-start">
            {/* Left column: Start/End time, computed duration */}
            <div className="md:w-1/4 mb-3 md:mb-0">
                {/* If you want to show e.g. "8:15 AM – 8:30 AM" as a single line: */}
                <div className="time-chip mb-2">
                    {item.timeStart} – {item.timeEnd}
                </div>
                {/* Computed duration */}
                <div className="text-sm text-anaplan-neutral-comet">{duration}</div>
            </div>

            {/* Right column: Title, participants, details */}
            <div className="md:w-3/4">
                <div className="flex flex-col mb-3">
                    <div className="flex items-center mb-2">
                        <h3 className="session-title mb-0 mr-3 flex-1">{item.title}</h3>

                        {/* Participant Avatars (for the "header" view) */}
                        <div className="flex flex-wrap -space-x-2 overflow-visible">
                            {Array.from(new Set(item.participants)).map((pName, index) => (
                                <ParticipantAvatar
                                    key={`header-${pName}-${index}`}
                                    name={pName}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <Accordion type="single" collapsible>
                    <AccordionItem value="details" className="border-none">
                        <AccordionTrigger
                            onClick={() => setIsExpanded((prev) => !prev)}
                            className="py-2 text-anaplan-blue-mariner hover:text-anaplan-blue-matisse hover:no-underline"
                        >
                            Session Details
                        </AccordionTrigger>
                        <AccordionContent className="pt-3">
                            <div className="space-y-3 text-anaplan-neutral-mulledwine">
                                {/* Speakers, if any */}
                                {item.speakers && (
                                    <div>
                                        <span
                                            className="font-medium text-anaplan-blue-midnight">Speakers:</span> {item.speakers}
                                    </div>
                                )}

                                {/* Participants (full list) */}
                                {item.participants && (
                                    <div>
                                        <span
                                            className="font-medium text-anaplan-blue-midnight">Participants:</span>{" "}
                                        {Array.from(new Set(item.participants)).join(", ")}
                                    </div>
                                )}

                                <div className="mt-4">
                                    <span className="font-medium text-anaplan-blue-midnight block mb-2">All Participants:</span>
                                    <div className="flex flex-wrap">
                                        {Array.from(new Set(item.participants)).map((pName, index) => (
                                            <ParticipantAvatar
                                                key={`expanded-${pName}-${index}`}
                                                name={pName}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Instructions (array of strings) */}
                                {item.instructions && item.instructions.length > 0 && (
                                    <div>
                                        <span
                                            className="font-medium text-anaplan-blue-midnight">Key Instructions:</span>
                                        <ul className="list-disc pl-5 mt-1 space-y-1">
                                            {item.instructions.map((instruction, i) => (
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
    </div>);
};

export default AgendaItemCard;