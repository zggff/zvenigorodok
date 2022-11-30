export interface Review {
    user: string;
    text: string;
    date: Date;
    target: ReviewTarget;
}
export type ReviewTarget = 'Tyres' | 'Cleaning' | 'HomeMaster';
