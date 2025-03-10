import { DayAgendaType } from "@/types";

export const nirZigdonAgenda: DayAgendaType[] = [
    {
        day: 1,
        items: [
            {
                timeStart: "8:15 AM",
                timeEnd: "8:30 AM",
                title: "Arrival",
                participants: [
                    "All arriving guests",
                    "Justin Gill",
                    "Mike Kehler",
                    "Nitzan Paz",
                    "Yaniv Dassa",
                    "You" // 'You' will become "Nir Zigdon" in code if you do a text-replace
                ],
                instructions: [
                    "Expect traffic; aim to be at the office by 9:00 AM."
                ]
            },
            {
                timeStart: "9:00 AM",
                timeEnd: "9:30 AM",
                title: "Paperwork & Welcome Session",
                speakers: "Aniruddha Shendrikar",
                participants: ["All guests", "Ashish Kapoor", "UI team", "others"],
                instructions: [
                    "Complete any necessary paperwork.",
                    "Brief overview of the office layout and safety guidelines."
                ]
            },
            {
                timeStart: "9:30 AM",
                timeEnd: "9:45 AM",
                title: "Move to the 7th Floor & Seating Arrangements",
                speakers: "Aniruddha Shendrikar",
                participants: ["All guests"],
                instructions: ["Familiarize yourselves with seating assignments."]
            },
        ],
    },
    {
        day: 2,
        items: [
            {
                timeStart: "9:30 AM",
                timeEnd: "10:00 AM",
                title: "Arrival & Settling In",
                instructions: [
                    "Email checks and quick touch-bases before formal sessions begin."
                ]
            },
            {
                timeStart: "10:00 AM",
                timeEnd: "10:30 AM",
                title: "Observing Quarterly Planning Kickoff (Radio/Upland Orchestrator)",
                participants: [
                    "You",
                    "optional for Justin/Nitzan/Yaniv"
                ],
                instructions: [
                    "Attend as observers to see how another team structures its planning."
                ]
            },
        ],
    },
    {
        day: 3,
        items: [
        ],
    },
    {
        day: 4,
        items: [
        ],
    },
];

// (Optional) If you also want to store your “Notes & Reminders” content separately:
export const nirZigdonNotes = {
    actionItems: [
        "Ashish & Monisha will capture meeting minutes during specific discussions (API negotiations, etc.).",
        "Provide feedback to Aniruddha if any changes or additional sessions are needed."
    ],
    eveningActivities: "Discuss with Aniruddha whether you want to adjust or add a city tour, group dinner, or alternative team-bonding activities.",
    luggageLogistics: "Confirm checkout plans in the morning or arrange for the driver to stop at the hotel en route to the airport.",
    flexibility: "Times are approximate. Some sessions or breaks may shift slightly based on discussions and team availability."
};