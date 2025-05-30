export type JobStatus = "new" | "urgent" | "ongoing" | "completed";

export interface Job {
    _id: string;
    title: string;
    description: string;
    categories: string[];
    images: string[];
    location: string;
    deadline: number;
    budget: string;
    client: string;
    artisan?: string;
    status: JobStatus;
    createdAt: Date;
    updatedAt: Date;
}