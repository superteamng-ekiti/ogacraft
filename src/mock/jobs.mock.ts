interface Job {
    title: string;
    description: string;
    client: string;
    budget: string;
    location: string;
    deadline?: string;
    status: "new" | "urgent" | "ongoing" | "completed";
    review?: number;
}

export const jobs: Job[] = [
    {
        title: "Install Solar Panel",
        description: "Need a complete installation for a 3-bedroom apartment with battery backup. Experience with solar inverter systems required.",
        client: "John Musa",
        budget: "₦500,000",
        location: "Ikeja, Lagos",
        deadline: "Urgent",
        status: "new"
    },
    {
        title: "Fix Electrical Fault",
        description: "Main fuse keeps tripping at my apartment. Suspect wiring issue. Need same-day fix if possible.",
        client: "Amaka O.",
        budget: "₦150,000",
        location: "Yaba, Lagos",
        deadline: "Urgent",
        status: "urgent"
    },
    {
        title: "Wiring for 2-bedroom Flat",
        description: "Interior and exterior wiring.",
        client: "Jide M.",
        budget: "₦200,000",
        location: "Ajah, Lagos",
        deadline: "Due in 2 days",
        status: "ongoing"
    },
    {
        title: "Home Intercom Setup",
        description: "Install intercom for 5 rooms.",
        client: "Mrs. Bello",
        budget: "₦180,000",
        location: "Yaba, Lagos",
        deadline: "Ongoing",
        status: "ongoing"
    },
    {
        title: "Solar Panel Troubleshoot",
        description: "One panel not charging.",
        client: "Uche A.",
        budget: "₦150,000",
        location: "Ikeja, Lagos",
        deadline: "Urgent",
        status: "ongoing"
    },
    {
        title: "Water Heater Setup",
        description: "Installed dual water heaters.",
        client: "Ngozi F.",
        budget: "₦170,000",
        location: "Surulere, Lagos",
        status: "completed",
        review: 5
    },
]