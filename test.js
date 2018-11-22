const madLib = 'There once was a <ADJECTIVE> <MAGICAL BEAST>, lived in the <ADJECTIVE> <PLACE>. Then he/she died...';
const answers = ['Cute','Unicorn','Fantastic','Forest']

const thing = new RegExp('<.*?>');

const replace = answers.reduce((madlib, answer) => {
    const prompt = madlib.match(thing)[0].split('');
    prompt.pop();
    prompt.shift();
    console.log(prompt.join(''));
    
    return madlib.replace(thing, answer);
}, madLib);

console.log(replace);
