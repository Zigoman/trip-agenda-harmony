import {allMembers} from "@/data/general.ts";

export interface AgendaItem {
    timeStart: string;
    timeEnd: string;
    title: string;
    participants?: string[];
    instructions?: string[];
    location?: string;
}

export interface DayAgendaType {
    day: number;
    items: AgendaItem[];
}