function handValue (hand) {
  let handTotal = 0
  for (var i = 0; i < hand.length; i++) {

if (hand[i] === "K" || hand[i] === "J" || hand[i] ==="Q") {
   handTotal += 10
 } else if (hand[i] === "A"){
    if (handTotal <= 10){
      handTotal += 11
    } else{
    handTotal += 1
  }
  }else{
    handTotal += (+hand[i])
  }
}
return handTotal
}


console.log(handValue(["9", "A", "3"]))
// let cardFace = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// /*
//    Implement a Blackjack hand value calculator.
//
//    Open up the `index.html` file and your console
//    to watch the assertions pass as you write your code.
//
//    Also remember, that the parameter `hand` will be an array, so
//    you'll need to parse through that first before you can start to
//    write your logic.
// */
//
//
// //given a hand
//
//
// let hand = []
// let cardType= ["spades", "hearts", "diamonds", "clubs"];
// let cardValues= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
//
// let cardFace = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
//
// let deck = (cardFace.length * cardType.length)
// console.log(deck)
//
// let pair = []
//
//
//
// for (var i = 0; i < cardFace.length; i++) {
//   for (var i = 0; i < cardValues.length; i++) {
//     let cardFace = cardValue;
//
//     if total <= 10 {var "A" = 11}
//     else{ var "A" = 1
//     };
//
//   }
//   console.log(pair)
// }
//
//
// // const cards{
//   // {cardName : cardFace[0];
//   // cardValue: [11, 1];},
//   //
//   // {cardName: cardFace[1];
//   // cardValue: cardValues[0] },
//   //
//   // {cardName: cardFace[2];
//   // cardValue: cardValues[1]},
//   //
//   // {cardName: cardFace[3];
//   // cardValue: cardValues[4]},
// // }
//

//
//
// /* -----  Hints ------
//
// 1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
// K, Q, J ==> Worth 10
// A       ==> Worth 1 or 11
//
// */
