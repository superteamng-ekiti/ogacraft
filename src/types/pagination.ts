export type PaginatedData<T> = {
    data: T[];
    pagination: {
        total: number;
        limit: number;
        page: number;
        pages: number;
    };
}

export type PaginatedJobs<T> = {
    jobs: T[];
    pagination: {
        total: number;
        limit: number;
        page: number;
        pages: number;
    };
}

export type PaginatedArtisans<T> = {
    artisans: T[];
    pagination: {
        total: number;
        limit: number;
        page: number;
        pages: number;
    };
}