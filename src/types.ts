export interface AgendaItem {
    // Replaces time/duration with explicit start/end
    timeStart: string;
    timeEnd: string;
    title: string;
    speakers?: string;
    participants?: string[];      // Must be an array of participant names
    instructions?: string[];      // Array of strings, each is one instruction
    location?: string;
}

export interface DayAgendaType {
    day: number;
    items: AgendaItem[];
}