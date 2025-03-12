import { DayAgendaType } from "@/types";
import {PlanIQ_Traveling_Members, PlanIQ_UI_Members} from "@/data/general.ts";

export const nirZigdonAgenda: DayAgendaType[] = [
    {
        day: 1,
        items: [
            {
                timeStart: "09:00",
                timeEnd: "09:30",
                title: "Welcome Session + Floor Visit to Cabin giving Floor Walkthrough",
                participants: ["Mike Kehler", "Ankur", "Aniruddha Shendrikar"],
                location: "Podium"
            },
            {
                timeStart: "09:30",
                timeEnd: "10:00",
                title: "Settling down time + Mail Time + Coffee Time",
                participants: ["Mike Kehler", "Ankur", "Aniruddha Shendrikar"],
                instructions: ["Setup the wifi, laptop, access"],
                location: "Mike's Cabin"
            },
            {
                timeStart: "10:00",
                timeEnd: "10:30",
                title: "Welcome connect: Mike-Nitzan-Nir-Justin",
                participants: [
                    "Mike Kehler",
                    "Nitzan Paz",
                    "Nir Zigdon",
                    "Justin Gill",
                    "Ankur",
                    "Aniruddha Shendrikar"
                ],
                instructions: [
                    "Agenda Walkthrough for the day",
                    "Teams travelling information sharing",
                    "Any adhoc plan to accommodate",
                    "Positions confirmations, if needed",
                    "Anything to cater for townhall"
                ],
                location: "Mike's Cabin"
            },
            {
                timeStart: "10:30",
                timeEnd: "11:00",
                title: "Data/AI Team Meet Up - Floor Walk",
                participants: [
                    "Mike Kehler",
                    "Nitzan Paz",
                    "Nir Zigdon",
                    "Justin Gill",
                    "Data/AI Team"
                ],
                instructions: [
                    "Meet and Greet with Mike's - Data/AI team members on the floor"
                ]
            },
            {
                timeStart: "11:00",
                timeEnd: "11:30",
                title: "Data/AI Management connect",
                participants: [
                    "Nitzan Paz",
                    "Justin Gill",
                    "Nir Zigdon",
                    "Yaniv Dassa",
                    "Ankur",
                    "Aniruddha Shendrikar"
                ],
                instructions: [
                    "GL overview",
                    "Team Structure and leadership",
                    "Upcoming positions",
                    "Asks from Nitzan, Justin, Nir, Yaniv"
                ],
                location: "Meeting Room"
            },
            {
                timeStart: "11:30",
                timeEnd: "11:45",
                title: "Me time / Coffee Time"
            },
            {
                timeStart: "11:45",
                timeEnd: "12:30",
                title: "Anaplan Data-AI legacy and vision",
                participants: [
                    "Mike Kehler",
                    "Nitzan Paz",
                    "Nir Zigdon",
                    "Justin Gill",
                    "Ankur",
                    "Aniruddha Shendrikar",
                    "Data/AI Team"
                ],
                location: "Meeting Room"
            },
            {
                timeStart: "12:30",
                timeEnd: "13:30",
                title: "Lunch with Podium Walk (depends on weather)",
                participants: [
                    "Mike Kehler",
                    "Nitzan Paz",
                    "Nir Zigdon",
                    "Justin Gill",
                    "ADO-leadership & team",
                    "Vinay",
                    "Abhishek",
                    "Ankur",
                    "Aniruddha Shendrikar"
                ],
                location: "7th Floor Breakout Area"
            },
            {
                timeStart: "13:30",
                timeEnd: "14:30",
                title: "PlanIQ: Product Management connect",
                participants: [
                    "Mike Kehler",
                    "Nitzan Paz",
                    "Nir Zigdon",
                    "Justin Gill",
                    "Yaniv Dassa",
                    "Aniruddha Shendrikar",
                    ...PlanIQ_UI_Members
                ],
                instructions: [
                    "Product insights",
                    "Current benchmarking and market segments",
                    "PlanIQ Impactful features",
                    "Immediate product asks",
                    "Near future product roadmap"
                ],
                location: "Meeting Room"
            },
            {
                timeStart: "14:30",
                timeEnd: "15:00",
                title: "PlanIQ: BE - FE API intigration SoS",
                participants: [
                    "Nitzan Paz",
                    "Nir Zigdon",
                    "Justin Gill",
                    "Yaniv Dassa",
                    "Ashish Kapoor",
                    "Monisha Malik"
                ],
                location: "Meeting Room"
            },
            {
                timeStart: "15:00",
                timeEnd: "16:15",
                title: "Townhall",
                participants: [
                    "Mike Kehler",
                    "Nitzan Paz",
                    "Nir Zigdon",
                    "Justin Gill",
                    "Yaniv Dassa",
                    "ADO/Ghost/CW Teams",
                    "Madhusudan",
                    "Vinay",
                    "Abhishek",
                    "Ankur",
                    "Sumit",
                    "Mehak"
                ],
                instructions: [
                    "Facilitation by host",
                    "Townhall",
                    "QnA",
                    "R&R"
                ],
                location: "GL Cafe"
            },
            {
                timeStart: "16:15",
                timeEnd: "16:45",
                title: "Tea/Coffee Break"
            },
            {
                timeStart: "16:45",
                timeEnd: "17:15",
                title: "PlanIQ: UI Retrospective",
                participants: [ ...PlanIQ_UI_Members],
                location: "Meeting Room"
            },
            {
                timeStart: "17:15",
                timeEnd: "17:30",
                title: "Retrospective wrap up of the day to identify action items",
                participants: [ ...PlanIQ_UI_Members],
                instructions: [
                    "Seek feedback and arrange necessary changes (if any) for next day"
                ],
                location: "Mike's Cabin"
            },
            {
                timeStart: "17:30",
                timeEnd: "21:30",
                title: "Bollwood Mov.",
                participants: [...PlanIQ_UI_Members]
            }
        ]
    },
    {
        day: 2,
        items: [
            {
                timeStart: "09:30",
                timeEnd: "10:00",
                title: "Settling down time + Mail check",
                location: "Mike's Cabin"
            },
            {
                timeStart: "10:00",
                timeEnd: "11:00",
                title:
                    "Observe: the ADO Quarterly Planning Sessions for Product Roadmap & Architectural Vision",
                participants: [
                    "Mike Kehler",
                    "Nitzan Paz",
                    "Nir Zigdon",
                    "Justin Gill",
                    "Ankur",
                    "Aniruddha Shendrikar",
                    "Data AI Leads?"
                ],
                instructions: ["ADO Quarterly Planning proceedings"]
            },
            {
                timeStart: "11:00",
                timeEnd: "11:30",
                title: "Morning Snacks"
            },
            {
                timeStart: "11:30",
                timeEnd: "12:30",
                title: "Working session: PlanIQ BE architectural",
                participants: [
                    "Mike Kehler",
                    "Nitzan Paz",
                    "Nir Zigdon",
                    "Justin Gill",
                    "Aniruddha Shendrikar",
                    "PlanIQ team",
                    "Devansh"
                ],
                instructions: ["PlanIQ backend API services and intigration"],
                location: "Meeting Room"
            },
            {
                timeStart: "12:30",
                timeEnd: "13:30",
                title: "Lunch",
                participants: [
                    "Mike Kehler",
                    "Nitzan Paz",
                    "Nir Zigdon",
                    "Justin Gill",
                    "ADO-leadership & team",
                    "Vinay",
                    "Abhishek",
                    "Ankur",
                    "Aniruddha Shendrikar"
                ],
                location: "7th Floor Breakout Area"
            },
            {
                timeStart: "13:30",
                timeEnd: "14:00",
                title: "Bi-Weekly exec WSR PlanIQ",
                participants: [
                    "Mike Kehler",
                    "Nitzan Paz",
                    "Nir Zigdon",
                    "Justin Gill",
                    "Aniruddha Shendrikar",
                    "Data/AI QA members"
                ],
                instructions: [
                    "PlanIQ Bi-Weekly executive WSR and weekly WSR can be cloubed"
                ],
                location: "Meeting Room"
            },
            {
                timeStart: "14:00",
                timeEnd: "14:30",
                title:
                    "Me time/ Mail check\n<Adhoc meeting can be adjusted here if required>",
                location: "Mike's Cabin"
            },
            {
                timeStart: "14:30",
                timeEnd: "15:15",
                title: "Deep dive: PlanIQ UI",
                participants: [...PlanIQ_UI_Members],
                instructions: ["Agile KPIs, Scrum best practices"],
                location: "Meeting Room"
            },
            {
                timeStart: "15:15",
                timeEnd: "15:45",
                title: "PlanIQ BE architectural / Roadmap Vision",
                participants: [
                    "Mike Kehler",
                    "Nitzan Paz",
                    "Nir Zigdon",
                    "Justin Gill",
                    "Aniruddha Shendrikar",
                    ...PlanIQ_UI_Members,
                    "QA members"
                ],
                instructions: [
                    "PlanIQ BE FY-25 roadmap vision.",
                    "FY-Q2 value delivarables and focus"
                ],
                location: "Meeting Room"
            },
            {
                timeStart: "15:45",
                timeEnd: "16:15",
                title: "Hi Tea - Snacks",
                participants: ["Mike Kehler"]
            },
            {
                timeStart: "16:15",
                timeEnd: "16:45",
                title: "Agile Workshop",
                participants: ["Nir Zigdon", "Aniruddha Shendrikar", "Ashish Kapoor"],
                instructions: ["Agile KPIs, Scrum best practices"]
            },
            {
                timeStart: "16:45",
                timeEnd: "17:15",
                title:
                    "1-1 Nir - Ashish\n+\nRetrospective wrap up of the day to identify action items",
                participants: ["Nir Zigdon", "Ashish Kapoor"],
                location: "Meeting Room"
            }
        ]
    },
    {
        day: 3,
        items: [
            {
                timeStart: "09:30",
                timeEnd: "10:00",
                title: "Settling down time + Mail check",
                location: "Mike's Cabin"
            },
            {
                timeStart: "10:00",
                timeEnd: "10:30",
                title: "PlanIQ UI Roadmap",
                participants: [
                    "Mike Kehler",
                    "Nir Zigdon",
                    "Nitzan Paz",
                    "Justin Gill",
                    "Yaniv Dassa",
                    "Aniruddha Shendrikar",
                    ...PlanIQ_UI_Members,
                    "QA"
                ],
                instructions: [
                    "What kind of work is expected from the team apart from tech debts or code refactoring"
                ],
                location: "Meeting Room"
            },
            {
                timeStart: "10:30",
                timeEnd: "11:00",
                title: "DSM for PlanIQ + PING OR TBD",
                participants: [
                    "Mike Kehler",
                    "Aniruddha Shendrikar",
                    ...PlanIQ_UI_Members,
                    "PING team"
                ],
                instructions: ["Daily Scrum meeting"],
                location: "Meeting Room"
            },
            {
                timeStart: "11:00",
                timeEnd: "11:30",
                title: "Morning Snacks"
            },
            {
                timeStart: "11:30",
                timeEnd: "12:30",
                title: "PlanIQ UI Q2 planning breakout - 1",
                participants: [...PlanIQ_UI_Members],
                location: "Meeting Room"
            },
            {
                timeStart: "12:30",
                timeEnd: "13:30",
                title: "Lunch",
                participants: [
                    "Mike Kehler",
                    "Nitzan Paz",
                    "Nir Zigdon",
                    "Justin Gill",
                    "ADO-leadership & team",
                    "Vinay",
                    "Abhishek",
                    "Ankur",
                    "Aniruddha Shendrikar"
                ],
                location: "7th Floor Breakout Area"
            },
            {
                timeStart: "13:30",
                timeEnd: "14:00",
                title: "WSR PING",
                participants: [
                    "Mike Kehler",
                    "Yali (Virtual)",
                    "Aniruddha Shendrikar",
                    "Ankur",
                    "PING team"
                ],
                instructions: ["PING WSR"]
            },
            {
                timeStart: "14:00",
                timeEnd: "14:30",
                title: "CEC Walkthrough",
                participants: ["Mike Kehler", "Aniruddha Shendrikar", "Ankur"]
            },
            {
                timeStart: "14:30",
                timeEnd: "15:30",
                title: "Organizational GL Design Practices",
                participants: [
                    "Mike Kehler",
                    "Nir Zigdon",
                    "Nitzan Paz",
                    "Justin Gill",
                    "Aniruddha Shendrikar",
                    "Ankur"
                ]
            },
            {
                timeStart: "15:30",
                timeEnd: "16:00",
                title:
                    "Me time/ Mail check\n<Adhoc meeting can be adjusted here if required>"
            },
            {
                timeStart: "16:00",
                timeEnd: "16:30",
                title: "Hi Tea - Snacks"
            },
            {
                timeStart: "16:30",
                timeEnd: "17:15",
                title: "PlanIQ UI Q2 planning breakout - 2",
                participants: [...PlanIQ_UI_Members],
                location: "Meeting Room"
            },
            {
                timeStart: "17:15",
                timeEnd: "17:30",
                title: "Retrospective wrap up of the day to identify action items",
                participants: ["Nir Zigdon", "Ashish Kapoor"]
            },
            {
                timeStart: "17:30",
                timeEnd: "21:30",
                title: "Evening event",
                participants: [
                    "Mike Kehler",
                    "Tom",
                    "Anaplan Leaders",
                    "Data/AI Team"
                ]
            }
        ]
    },
    {
        day: 4,
        items: [
            {
                timeStart: "09:30",
                timeEnd: "10:00",
                title: "Settling down time + Mail check",
                location: "Mike's Cabin"
            },
            {
                timeStart: "10:00",
                timeEnd: "10:30",
                title: "QA Meetup - Show n Tell",
                participants: [
                    "Mike Kehler",
                    "Nir Zigdon",
                    "Nitzan Paz",
                    "Justin Gill",
                    "Aniruddha Shendrikar",
                    "Data/AI QA members"
                ],
                instructions: [
                    "QA team current and proposed org with intro",
                    "QA presentation",
                    "Expectations from QA"
                ],
                location: "Meeting Room"
            },
            {
                timeStart: "10:30",
                timeEnd: "11:30",
                title: "Team address by Anaplan leaders before Farewell",
                participants: [
                    "Anaplan leaders",
                    "Vinay",
                    "Abhishek",
                    "Ankur",
                    "Aniruddha Shendrikar",
                    "Data/AI Team"
                ]
            },
            {
                timeStart: "10:30",
                timeEnd: "11:00",
                title: "Morning Snacks"
            },
            {
                timeStart: "11:00",
                timeEnd: "11:15",
                title: "Farewell Session for Nir",
                participants: [
                    "Mike Kehler",
                    "Nir Zigdon",
                    "Vinay",
                    "Abhishek",
                    "Ankur",
                    "Aniruddha Shendrikar"
                ],
                location: "Meeting Room"
            },
            {
                timeStart: "11:15",
                timeEnd: "11:30",
                title: "Lunch pack?"
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