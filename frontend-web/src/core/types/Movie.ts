export type MoviesResponse = {
    content: Movie[];
    totalPages: number;
}

export type Movie = {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
    synopsis: string;
    genreId: number;
    genreName: string;
    review: Review[];
}

export type Genre = {
    id: number;
    name: string;
}

export type ReviewsResponse = {
    content: Review[];
}

export type Review = {
    id: number;
    text: string;
    userName: string;
}