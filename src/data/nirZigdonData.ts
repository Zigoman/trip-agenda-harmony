import { DayAgendaType } from "@/types";
import {PlanIQ_Traveling_Members, PlanIQ_UI_Members} from "@/data/general.ts";

export const nirZigdonAgenda: DayAgendaType[] = [
    {
        day: 1,
        items: [
            {
                timeStart: "08:15",
                timeEnd: "08:30",
                title: "Arrival",
                speakers: "",
                participants: [...PlanIQ_Traveling_Members],
                instructions: [
                    "Expect traffic; aim to be at the office by 9:00 AM."
                ],
                location: ""
            },
            {
                timeStart: "09:00",
                timeEnd: "09:30",
                title: "Paperwork & Building Orientation",
                speakers: "Aniruddha Shendrikar",
                participants: [
                    ...PlanIQ_Traveling_Members,
                    ...PlanIQ_UI_Members
                ],
                instructions: [
                    "Complete any necessary paperwork.",
                    "Brief overview of the office layout and safety guidelines."
                ],
                location: ""
            },
            {
                timeStart: "09:30",
                timeEnd: "09:45",
                title: "Move to the 7th Floor & Seating Arrangements",
                speakers: "Aniruddha Shendrikar",
                participants: [...PlanIQ_Traveling_Members],
                instructions: [
                    "Familiarize yourselves with seating assignments."
                ],
                location: "7th Floor"
            },
            {
                timeStart: "09:45",
                timeEnd: "10:00",
                title: "Welcome Connect",
                speakers: "Aniruddha Shendrikar",
                participants: [...PlanIQ_Traveling_Members],
                instructions: [
                    "Brief walkthrough of the entire multi-day agenda.",
                    "Discuss any device plans or immediate feedback."
                ],
                location: ""
            },
            {
                timeStart: "10:00",
                timeEnd: "10:30",
                title: "Floor Walk & Team Introductions",
                speakers: "Aniruddha Shendrikar",
                participants: [...PlanIQ_Traveling_Members, "local Data & IT teams"],
                instructions: [
                    "Visit Data/AI, Radio, and (optionally) Platform Services areas."
                ],
                location: ""
            },
            {
                timeStart: "10:30",
                timeEnd: "11:00",
                title: "Team Structure & Recruitment Updates",
                speakers:
                    "Aniruddha Shendrikar, Ankur, plus open discussion",
                participants: ["Nir Zigdon", "Justin Gill", "Nitzan Paz", "Yaniv Dassa"],
                instructions: [
                    "Review team org charts, upcoming positions, recruitment statuses.",
                    "Q&A on team needs."
                ],
                location: ""
            },
            {
                timeStart: "11:00",
                timeEnd: "11:15",
                title: "Break (Coffee / 'Me Time')",
                speakers: "",
                participants: [],
                instructions: [],
                location: ""
            },
            {
                timeStart: "11:15",
                timeEnd: "12:00",
                title: "Data Legacy & Vision",
                speakers: "Mike Kehler",
                participants: [...PlanIQ_Traveling_Members],
                instructions: [
                    "Overview of data journey so far and upcoming data offerings."
                ],
                location: ""
            },
            {
                timeStart: "12:00",
                timeEnd: "13:00",
                title: "Lunch",
                speakers: "",
                participants: [],
                instructions: [
                    "Optional walk after lunch (ground floor or parking area)."
                ],
                location: ""
            },
            {
                timeStart: "13:00",
                timeEnd: "13:30",
                title: "Product Management Connect",
                speakers: "Yaniv Dassa",
                participants: [...PlanIQ_Traveling_Members],
                instructions: [
                    "Share market insights, upcoming feature roadmaps, and product visions."
                ],
                location: ""
            },
            {
                timeStart: "13:30",
                timeEnd: "14:30",
                title: "Expected API Dates & Negotiations",
                speakers: "",
                participants: [
                    "Nir Zigdon",
                    "Nitzan Paz",
                    "Justin Gill",
                    "Yaniv Dassa",
                    "Ashish Kapoor",
                    "Monisha"
                ],
                instructions: [
                    "Discuss API release timelines and any required agreements.",
                    "Ashish and Monisha will take minutes of the meeting, sand hare action itemsafterwardd"
                ],
                location: ""
            },
            {
                timeStart: "14:30",
                timeEnd: "15:00",
                title: "Town Hall Meeting",
                speakers: "Tom, Mike, and other leaders",
                participants: [...PlanIQ_Traveling_Members],
                instructions: [
                    "Company-wide updates and Q&A."
                ],
                location: ""
            },
            {
                timeStart: "15:00",
                timeEnd: "15:15",
                title: "Coffee Break",
                speakers: "",
                participants: [],
                instructions: [],
                location: ""
            },
            {
                timeStart: "15:15",
                timeEnd: "16:15",
                title: "PlanIQ UI Retrospective",
                speakers: "",
                participants: ["Nir Zigdon", "Mike (schedule permitting)", "Ashish Kapoor", ...PlanIQ_UI_Members],
                instructions: [
                    "Review prior sprint outcomes, gather improvement ideas."
                ],
                location: ""
            },
            {
                timeStart: "16:15",
                timeEnd: "17:30",
                title: "Wrap-Up & Ad Hoc Discussions",
                speakers: "",
                participants: [],
                instructions: [
                    "Ashish may connect for feedback or any day-end adjustments."
                ],
                location: ""
            },
            {
                timeStart: "17:30",
                timeEnd: "TBD",
                title:
                    "Evening Activity: Executive Leadership Dinner / Team Outing",
                speakers: "",
                participants: [],
                instructions: [
                    "Options:",
                    "Executive Leadership Dinner (Mike, Tom, etc.)",
                    "Possible Team Outing (Bollywood movie, escape room, or city tour)"
                ],
                location: ""
            }
        ]
    },
    {
        day: 2,
        items: [
            {
                timeStart: "09:30",
                timeEnd: "10:00",
                title: "Arrival & Settling In",
                speakers: "",
                participants: [],
                instructions: [
                    "Email checks and quick touch-bases before formal sessions begin."
                ],
                location: ""
            },
            {
                timeStart: "10:00",
                timeEnd: "10:30",
                title: "Quarterly Planning Kickoff (Observation)",
                speakers: "",
                participants: [
                    "Nir Zigdon",
                    "Justin Gill",
                    "Nitzan Paz",
                    "Yaniv Dassa"
                ],
                instructions: [
                    "Attend as observers to see how another team structures its planning."
                ],
                location: ""
            },
            {
                timeStart: "10:30",
                timeEnd: "10:45",
                title: "Morning Snacks",
                speakers: "",
                participants: [],
                instructions: [],
                location: ""
            },
            {
                timeStart: "10:45",
                timeEnd: "12:00",
                title: "PlanIQ Backend Architecture",
                speakers: "Nitzan Paz, Justin Gill",
                participants: [...PlanIQ_Traveling_Members],
                instructions: [
                    "Deep dive into current backend architecture.",
                    "Collect feedback, define action items."
                ],
                location: ""
            },
            {
                timeStart: "12:00",
                timeEnd: "13:00",
                title: "Lunch",
                speakers: "",
                participants: [],
                instructions: [],
                location: ""
            },
            {
                timeStart: "13:00",
                timeEnd: "14:00",
                title: "Bi-Weekly Executive WSR with Mike",
                speakers: "Mike Kehler, others as relevant",
                participants: ["Nir Zigdon", "leadership team"],
                instructions: [
                    "Combined with the usual WSR to avoid late evening calls."
                ],
                location: ""
            },
            {
                timeStart: "14:00",
                timeEnd: "14:30",
                title: "Break / 'Me Time' (Buffer)",
                speakers: "",
                participants: [],
                instructions: [
                    "Catch up on emails, handle any short ad-hoc meetings."
                ],
                location: ""
            },
            {
                timeStart: "14:30",
                timeEnd: "15:30",
                title: "Team Deep Dive",
                speakers: "",
                participants: ["Nir Zigdon", "PlanIQ team members"],
                instructions: [
                    "Explore further architecture details, knowledge sharing, or any urgent tasks."
                ],
                location: ""
            },
            {
                timeStart: "15:30",
                timeEnd: "16:30",
                title: "PlanIQ Architectural Roadmap",
                speakers: "",
                participants: [...PlanIQ_Traveling_Members],
                instructions: [
                    "High-level architecture, backend interactions, long-term vision."
                ],
                location: ""
            },
            {
                timeStart: "16:30",
                timeEnd: "16:45",
                title: "Tea Break",
                speakers: "",
                participants: [],
                instructions: [],
                location: ""
            },
            {
                timeStart: "16:45",
                timeEnd: "17:30",
                title: "Agile Best Practices & KPIs",
                speakers: "You, Ashish Kapoor, Aniruddha Shendrikar",
                participants: [],
                instructions: [
                    "Review sprint planning, grooming, and KPI tracking (burn-down charts, velocity, backlog health).",
                    "Identify process optimizations and address any bottlenecks."
                ],
                location: ""
            },
            {
                timeStart: "17:30",
                timeEnd: "17:45",
                title: "One-on-One with Ashish",
                speakers: "",
                participants: ["Ashish Kapoor"],
                instructions: [
                    "Catch up on personal action items or feedback."
                ],
                location: ""
            }
        ]
    },
    {
        day: 3,
        items: [
            {
                timeStart: "09:30",
                timeEnd: "09:45",
                title: "Morning Arrival & Quick Check",
                speakers: "",
                participants: [],
                instructions: [],
                location: ""
            },
            {
                timeStart: "09:45",
                timeEnd: "10:30",
                title: "PlanIQ 2.0 UI Roadmap & What's New",
                speakers: "You (leading UI), with Mike, Justin, Nitzan, Yaniv",
                participants: [],
                instructions: [
                    "Present upcoming features, discuss impact on Data & AI value additions.",
                    "Outline short-term vs. FY25 vision."
                ],
                location: ""
            },
            {
                timeStart: "10:30",
                timeEnd: "10:45",
                title: "Morning Snacks",
                speakers: "",
                participants: [],
                instructions: [],
                location: ""
            },
            {
                timeStart: "10:45",
                timeEnd: "11:45",
                title: "Quarterly Planning – Breakout Session 1",
                speakers: "",
                participants: ["Nir Zigdon", ...PlanIQ_UI_Members],
                instructions: [
                    "Identify tasks, resources needed, timelines for the next quarter."
                ],
                location: ""
            },
            {
                timeStart: "11:45",
                timeEnd: "12:30",
                title: "Quarterly Planning – Breakout Session 2",
                speakers: "",
                participants: ["Nir Zigdon", ...PlanIQ_UI_Members],
                instructions: ["Finalize planning details and goals."],
                location: ""
            },
            {
                timeStart: "12:30",
                timeEnd: "13:00",
                title: "WSR with the PING Team",
                speakers: "",
                participants: ["Ashish Kapoor", "Ram", "Nir Zigdon"],
                instructions: [
                    "Parallel session; you can join or use this time for other tasks (one-on-one with Ritu, etc.)."
                ],
                location: ""
            },
            {
                timeStart: "13:00",
                timeEnd: "14:00",
                title: "CEC Walkthrough",
                speakers: "",
                participants: ["Global Logic staff", "optional for Anaplan visitors"],
                instructions: [
                    "Learn about Global Logic's approach, new tools, and innovations."
                ],
                location: ""
            },
            {
                timeStart: "14:00",
                timeEnd: "14:30",
                title: "\"Me Time\" / Ad Hoc Meetings",
                speakers: "",
                participants: [],
                instructions: [],
                location: ""
            },
            {
                timeStart: "14:30",
                timeEnd: "14:45",
                title: "High Tea",
                speakers: "",
                participants: [],
                instructions: [],
                location: ""
            },
            {
                timeStart: "14:45",
                timeEnd: "15:45",
                title: "Quarterly Planning – Finalization",
                speakers: "",
                participants: ["Nir Zigdon", ...PlanIQ_UI_Members],
                instructions: [
                    "Wrap up any outstanding planning items."
                ],
                location: ""
            },
            {
                timeStart: "15:45",
                timeEnd: "16:00",
                title: "Retrospective & Wrap-Up",
                speakers: "",
                participants: [],
                instructions: [
                    "Capture the final action items and confirm the next steps."
                ],
                location: ""
            },
            {
                timeStart: "16:00",
                timeEnd: "17:30",
                title: "Data Team Party",
                speakers: "",
                participants: ["Entire Data Team", "Mike", "others"],
                instructions: [
                    "Social gathering, informal discussions, and networking."
                ],
                location: ""
            }
        ]
    },
    {
        day: 4,
        items: [
            {
                timeStart: "09:00",
                timeEnd: "09:30",
                title: "QA Meetup & Leadership Farewell",
                speakers: "You, Mike, Justin, Nitzan, (and new QAs)",
                participants: [],
                instructions: [
                    "Offer brief speeches on experiences, suggestions, final remarks."
                ],
                location: ""
            },
            {
                timeStart: "09:30",
                timeEnd: "10:00",
                title: "Morning Snacks",
                speakers: "",
                participants: [],
                instructions: [],
                location: ""
            },
            {
                timeStart: "10:00",
                timeEnd: "10:30",
                title: "Farewell & Final Check-Ins",
                speakers: "",
                participants: [],
                instructions: [
                    "Confirm any last-minute items, goodbyes, next steps."
                ],
                location: ""
            },
            {
                timeStart: "10:30",
                timeEnd: "11:30",
                title: "Buffer (Optional Activities)",
                speakers: "",
                participants: [],
                instructions: [
                    "It could be a late checkout or last ad-hoc meeting.",
                    "If you plan to head straight to the airport from the office, coordinate luggage and transportation details in advance."
                ],
                location: ""
            },
            {
                timeStart: "11:30",
                timeEnd: "13:30",
                title: "Departure to Airport",
                speakers: "",
                participants: [],
                instructions: [
                    "Travel time to airport ~2 hours (traffic-dependent).",
                    "Arrive by 1:00–1:30 PM for check-in and formalities."
                ],
                location: ""
            }
        ]
    }
];

// If you also want to store your “Notes & Reminders” content separately:
export const nirZigdonNotes = {
    actionItems: [
        "Ashish & Monisha will capture meeting minutes during specific discussions (API negotiations, etc.).",
        "Provide feedback to Aniruddha if any changes or additional sessions are needed."
    ],
    eveningActivities: "Discuss with Aniruddha whether you want to adjust or add a city tour, group dinner, or alternative team-bonding activities.",
    luggageLogistics: "Confirm checkout plans in the morning or arrange for the driver to stop at the hotel en route to the airport.",
    flexibility: "Times are approximate. Some sessions or breaks may shift slightly based on discussions and team availability."
};