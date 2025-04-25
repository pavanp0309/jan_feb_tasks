//Q1
let x = 7;
let y = 2;
let z = x++ + ++y - --x + y--;

//x++ = 7 -->x = 8
//++y = 3 -->y = 3
//--x = 7 -->x = 7
//y-- = 3 -->y = 2
// z  = 8 + 3 - 7 + 2 = 6


//Q2
let p = 4;
let q = 5;
p = p++ + ++q;
// p++ = 4 -->p = 5
// ++q = 6 -->q = 6
// p = 4 + 6 = 10
q = --q - q--;
// --q = 5 -->q = 5
// q-- = 5 -->q = 4
//q = 5-5 = 0
p +=q++ + --p;
//p = p+ q++ + --p
//  = 10 + 0 + 9 = 13
//p =19 ; q = 1


//Q3
let score = 20;
score += ++score;
//score = score + ++score
//      = 20 + 21 = 41
// score = 41
score -= score--;
//score = score - score--;
//      = 41 - 41 = 0
//score = 0

score *= --score - score--;
//score = score * (--score - score--);
//      = 0 * (-1 - 0)
//score = 0


score /= ++score - score--;
//score = score/ (++score - score--)
//      = 0 / (1 - 1)
//score = NaN


//Q4
let a = 5;
let b = 8;
let result;
result = a++ > 5 && ++b >8;
//     = 5 > 5 --> a = 6; b = 8-->short-circuiting
//     = false && true = false
result = --a < 5 || b-- < 10;
//     =  5 <5  ||  8 <10  // a = 5; b = 7
//     =  false || true = true
result = !(++a ==5) && b++ > 8;
//     = !(6 == 5) && 7 > 8 // a = 6; b = 8
//     = !(false) && false 
//     = true && false = false

//Q5
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
let m = (y2-y1)/(x2-x1);
//    = (10 - 2)/(6-2)
//    = 8 / 4 = 2