// This file will hold all the constant values

const SPADES = 4;
const CLUBS = 3;
const HEARTS = 2;
const DIAMONDS = 1;

const ACE = 13;
const KING = 12;
const QUEEN = 11;
const JACK = 10;
const VALUE_10 = 9;
const VALUE_9 = 8;
const VALUE_8 = 7;
const VALUE_7 = 6;
const VALUE_6 = 5;
const VALUE_5 = 4;
const VALUE_4 = 3;
const VALUE_3 = 2;
const VALUE_2 = 1;

export const CARD_SUITS = [SPADES, CLUBS, HEARTS, DIAMONDS];
export const CARD_VALUES = [ACE, KING, QUEEN, JACK, VALUE_10, VALUE_9, VALUE_8, VALUE_7, VALUE_6, VALUE_5, VALUE_4, VALUE_3, VALUE_2]

export const SHUFFLE_TIMES = 3;
export const CARDS_PER_PLAYER = 2;

export enum DeckStatus {
    NEW = 0,
    SHUFFLED = 1,
    INCOMPLETE = 2
}

export enum GameStatus {
    NEW = 0,
    ONGOING = 1,
    FINISHED = 2
}

export enum RoundStatus {
    READY = 0,
    STARTED = 1,
    RANKED = 2
}

export enum PokerRanks {
    HIGH_CARD = 1,
    PAIR = 2,
    STRAIGHT = 3,
    FLUSH = 4,
    STRAIGHT_FLUSH = 5
}