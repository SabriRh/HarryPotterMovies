// Model for Movie
export interface Movie {
    id: string;
    title: string;
    release_date: string;
    duration: string;
    budget: string;
}
// extanded model for Movie Details
export interface MovieDetails extends Movie {
    poster: string;
    summary: string;
    box_office: string;
    producers: string[];
    cinematographers: string[];
}