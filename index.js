//magic 8 ball answers, taken from:
// https://en.wikipedia.org/wiki/Magic_8_Ball#Possible_answers
//  Every time a user runs a program, they should get a new, randomized output. You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes. To make your program truly random, the message that it outputs should be made up of at least three different pieces of data.
const aesthetic=[
'pastel', 'corporate grunge', 'cyberpunk', 'dark modern', 'light modern', 'gothic', 'pastel gothic', 'indie', 
'early internet era', 'mid-century retro', `80's retro`, 'alternative grunge', 'futuristic modern', 'neon', 'bright colorful', 'playful', 'cottagecore'];
const type=['portfolio showcase', 'shopping site', 'gallery', 'indie makeup brand', 'medicinal tea shop', 'indie jewelry', 'homemade cookies', 'cybersecurity solutions', 'homemade candles', 'handmade plush dolls', 'ceramic shop', 'personal brand' ];
const focusOn =['css animations', 'scroll reveals', 'ThreeJS', 'using an svg typing on a path', 'mouse interactions', 'text animations'];
const person = ['vampire', 'lake monster', 'alien', 'werewolf', 'client'];
  class SitePrompt {
    constructor() {
        this.aesthetic=aesthetic[Math.floor(Math.random() * aesthetic.length)];
        this.typeObj=type[Math.floor(Math.random() * type.length)];
        this.focusOn=focusOn[Math.floor(Math.random() * focusOn.length)];
        this.person=person[Math.floor(Math.random() * person.length)];
    }
    play() {
      //ie:
         // A website for a vampire's indie makeup brand with a pastel aesthetic and a focus on animations
      console.log(
        `\n Your prompt is... \n \u2728 A ${this.person}'s ${this.typeObj} with a ${this.aesthetic} aesthetic and a focus on ${this.focusOn}.\u2728   \n `
        );
    }
  }
  const mySitePrompt = new SitePrompt();
  mySitePrompt.play();