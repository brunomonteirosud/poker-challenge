export interface Card {
    value: number;
    suit: number;
}

export interface Player {
    name?: string;
    cards: Card[];
    rank: number;
    score: number;
}