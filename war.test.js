let expect = chai.expect;

describe('MyFunction', function() {
    describe('#deal', function() {
        it('should divide the deck and deliver to each player', function() {
            let player1 = new Player ('Kate')
            let player2 = new Player ('Laila')
            
            gameDeck.createDeck()
            //gameDeck.shuffle()
            gameDeck.deal() 
            // player1.hand = deal(26);
            // player2.hand = deal(26);
            expect(player1.hand).to.be.a('array');
        }); 

        let gameDeck = new Deck ()
        it('length of player deck should be 26', function() {
            expect(player2.hand.length).to.equal(26);
        });
    });
});