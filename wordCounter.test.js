const wordCounter  = require('./wordCounter.js');
 
const testString1 = "Banan test Katt Hund Banan test tja"
const testString2 = ""
const htmlString = `You get on with life as a engineer,
You're a pretty kinda person.
You like collecting stamps and collecting stamps.
You like to contemplate beer.
But when you start to daydream,
Your mind turns straight to wine.

Five six seven eight...

Sometimes I look at you and I look into your eyes,
I notice the way you think about wine with a smile,
Curved lips you just can't disguise.
But you think it's beer making your life worthwhile.
Why is it so hard for you to decide which you love more?
Beer or...
Wine?

You like to use words like 'magic' and 'cheers.'
You like to use words about beer.
But when you stop your talking,
Your mind turns straight to wine.

Five six seven eight...

Sometimes I look at you and I look into your eyes,
I notice the way you think about wine with a smile,
Curved lips you just can't disguise.
But you think it's beer making your life worthwhile.
Why is it so hard for you to decide which you love more?
Beer or...
Wine?`;

const japanesestring = "ドべみ移咽宇　は引　挨リム　遠　ッキ温竹姻気ぜょ　メペ安隠　ア　マ　無　火ラヽんゅニ波閲　ぱー　サっし壱ぜぎぉ偉　何"

const svenskstring = `Jag såg hur vi var stjärnor
Som landat i havet
När vi tog första stegen
Ifrån oceanen
Det slog mig den gången
När vi vadade fram genom vattnet
 
Jag la mig på marken
Och tackade himlen
Att vi fick stiga på land
Att vi fick känna på sanden
Nu kan vi säga
Att vi har varit på jorden
 
Ja, jag var där
Hur underbart var det
Hur underbart var inte det
Jag var nära, jag var nära,
Jag var nära, jag var där
 
En stund på jorden, en stund på jorden
Jag var nära, jag var nära,
Jag var nära, jag var där
En stund på jorden, en stund på jorden
 
Jag vann över bergen
Jag delade på havet
Jag var den starkaste av oss
Men den svagaste ändå
 
Jag fick hålla dig i handen
När du fick lämna dina drömmar
Och försonas sen med tiden
Jag fick se dig tacka livet, trots allt
 
Nu kan vi säga
Att vi har varit på jorden
 
Säga: jag var där
Hur underbart var det
Hur underbart var inte det
Jag var nära, jag var nära,
Jag var nära, jag var där
 
En stund på jorden, en stund på jorden
Jag var nära, jag var nära,
Jag var nära, jag var där
En stund på jorden, en stund på jorden
 
Ja, jag var där
Hur underbart var det
En stund på jorden
En stund på jorden, en stund på jorden
Jorden`

const numberstring = "9 9329 74 074 1 9 99 9 9 9 9 9 41123";

const mixedstring = "9 9329 74 074 1 9 99 )= (&( % % 9! ! 9 9 9 !!  9 41123";


test('simple word counter with simple list', () => {
    expect(wordCounter.wordFreq(testString1)).toStrictEqual([["Banan", 2], ["test", 2], ["Katt", 1], ["Hund", 1], ["tja", 1]]);
  });

  test('empty string', () => {
    expect(wordCounter.wordFreq(testString2)).toStrictEqual("empty string");
  });

  test('htmlString', () => {
    expect(wordCounter.wordFreq(htmlString)).toStrictEqual([["you", 14], ["to", 8], ["I", 6], ["You", 5], ["like", 5], ["", 5], ["your", 5], ["a", 4], ["and", 4], ["beer", 4]]);
  });

  test('japanesestring', () => {
    expect(wordCounter.wordFreq(japanesestring)).toStrictEqual([[ 'ドべみ移咽宇', 1 ],[ 'は引', 1 ],[ '挨リム', 1 ],[ '遠', 1 ],[ 'ッキ温竹姻気ぜょ', 1 ],[ 'メペ安隠', 1 ],[ 'ア', 1 ],[ 'マ', 1 ],[ '無', 1 ],[ '火ラヽんゅニ波閲', 1 ]]);
  });

  test('svenskstring', () => {
    expect(wordCounter.wordFreq(svenskstring)).toStrictEqual([[ 'var', 26 ],[ '', 18 ],[ 'på', 17 ],[ 'Jag', 15 ],[ 'nära,', 12 ],[ 'jag', 11 ],[ 'stund', 11 ],[ 'vi', 9 ],[ 'jorden', 8 ],[ 'där', 7 ]]);
  });    

  test('numberstring', () => {
    expect(wordCounter.wordFreq(numberstring)).toStrictEqual([[ '9', 7 ],[ '1', 1 ],[ '74', 1 ],[ '99', 1 ],[ '9329', 1 ],[ '41123', 1 ],[ '074', 1 ]]);
  });    
  
  test('mixedstring', () => {
    expect(wordCounter.wordFreq(mixedstring)).toStrictEqual([[ '9', 6 ],[ '%', 2 ],[ '1', 1 ],[ '74', 1 ],[ '99', 1 ],[ '9329', 1 ],[ '41123', 1 ],[ '074', 1 ],[ ')=', 1 ],[ '(&(', 1 ]]);
  });          