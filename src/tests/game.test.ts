import * as test from "tape";
import PokerGame from "../PokerGame";

test("Game should generate players correctly", (t: any) => {
    const game = new PokerGame(5, 2);
    t.equal(game.getPlayers().length, 5);
    t.end();
});