// This file will hold all the constant values

const SUIT_SPADES = "Spades";
const SUIT_CLUBS = "Clubs";
const SUIT_HEARTS = "Hearts";
const SUIT_DIAMONDS = "Diamonds";

const VALUE_A = "Ace";
const VALUE_K = "King";
const VALUE_Q = "Queen";
const VALUE_J = "Jack";
const VALUE_10 = "10";
const VALUE_9 = "9";
const VALUE_8 = "8";
const VALUE_7 = "7";
const VALUE_6 = "6";
const VALUE_5 = "5";
const VALUE_4 = "4";
const VALUE_3 = "3";
const VALUE_2 = "2";

export const CARD_SUITS = [SUIT_SPADES, SUIT_CLUBS, SUIT_HEARTS, SUIT_DIAMONDS];
export const CARD_VALUES = [VALUE_A, VALUE_K, VALUE_Q, VALUE_J, VALUE_10, VALUE_9, VALUE_8, VALUE_7, VALUE_6, VALUE_5, VALUE_4, VALUE_3, VALUE_2]

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

export enum PokerRanks {
    HIGH_CARD = 1,
    PAIR = 2,
    STRAIGHT = 3,
    FLUSH = 4,
    STRAIGHT_FLUSH = 5
}