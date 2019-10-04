import { Card, Player } from "./interfaces";

export const isStraightFlush = (cards: Card[]): boolean => {
    if (cards[0].suit === cards[1].suit) {
        // Check the absolute value, meaning values are in sequence
        if (Math.abs(cards[0].value - cards[1].value) === 1){
            return true;
        }
    }
    return false;
}

export const isFlush = (cards: Card[]): boolean => {
    if (cards[0].suit === cards[1].suit) {
            return true;
    }
    return false;
}

export const isStraight = (cards: Card[]): boolean => {
    if (cards[0].suit !== cards[1].suit) {
        // Check the absolute value, meaning values are in sequence
        if (Math.abs(cards[0].value - cards[1].value) === 1){
            return true;
        }
    }
    return false;
}

export const isPair = (cards: Card[]): boolean => {
    if (cards[0].value === cards[1].value) {
            return true;
    }
    return false;
}

export const isHighCard = (cards: Card[]): boolean => {
    if (cards[0].value !== cards[1].value) {
        if (cards[0].suit !== cards[1].suit) {
            return true;
        }
    }
    return false;
}

const getHighestCard = (cards: Card[]) => {
    if (cards[0].value > cards[1].value){
        return cards[0];
    }
    return cards[1];
}

const compareSameRankPlayers = (card1: Card[], card2: Card[]): number =>{
    const highestCardPlayer1 = getHighestCard(card1);
    const highestCardPlayer2 = getHighestCard(card2);
    
    if (highestCardPlayer1.value < highestCardPlayer2.value){
        return 1;
    } else if (highestCardPlayer1.value > highestCardPlayer2.value){
        return -1;
    } else {
        if (highestCardPlayer1.suit < highestCardPlayer2.suit){
            return 1;
        } else if (highestCardPlayer1.suit > highestCardPlayer2.suit){
            return -1;
        }
    }
    throw new Error("Could not compare cards. Please restart the game.");
}

export const comparePlayerCards = (player1: Player, player2: Player): number => {
    if (player1.rank < player2.rank){
        return 1;
    } else if (player1.rank > player2.rank){
        return -1;
    } else {
        return compareSameRankPlayers(player1.cards, player2.cards);
    }
}