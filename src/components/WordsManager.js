// WordsManager.js

const words = [
    'jar', 'geese', 'knowledgeable', 'cross', 'stream', 'signal', 'groovy', 'icy', 
    'awake', 'achiever', 'ruthless', 'burst', 'strange', 'curious', 'grouchy', 
    'abiding', 'average', 'confess', 'laugh', 'waggish', 'noiseless', 'tedious', 
    'teeny', 'endurable', 'jelly', 'share', 'female', 'detail', 'noxious', 'rigid', 
    'quill', 'town', 'loud', 'lacking', 'quince', 'rabbits', 'successful', 'captain', 
    'elated', 'tricky', 'match', 'sponge', 'dizzy', 'notebook', 'gaping', 'busy', 'amazing', 
    'cactus', 'fuel', 'broken', 'ducks', 'rule', 'steel', 'popcorn', 'accessible', 'fragile', 
    'sign', 'knowing', 'rural', 'paste', 'robust', 'fly', 'worm', 'purpose', 'letters', 'surprise',
    'ice', 'agreement', 'afternoon', 'wrong', 'delay', 'advertisement', 'suppose', 'pray', 'invite',
    'threatening', 'versed', 'repair', 'punch', 'reply', 'enormous', 'meal', 'homely', 'rice', 'stone',
    'try', 'frightening', 'abashed', 'far', 'care', 'stingy', 'standing', 'fruit', 'clean', 'load',
    'voracious', 'roll', 'disillusioned', 'hospitable', 'stimulating', 'record', 'berry', 'permit',
    'omniscient', 'lethal', 'voice', 'oven', 'gifted', 'fashionable', 'yam', 'elderly', 'valuable',
    'quilt', 'pizzas', 'clear', 'wait', 'sophisticated', 'agonizing', 'trot', 'divergent', 'boy',
    'utter', 'melodic', 'tough', 'attraction', 'joke', 'wander', 'burly', 'skinny', 'approve', 'maid',
    'hole', 'nifty', 'literate', 'terrific', 'search', 'separate', 'fireman', 'delight', 'warn',
    'lettuce', 'imagine', 'brief', 'ground', 'quick', 'grip', 'round', 'uneven', 'juice', 'frighten',
    'adorable', 'tacit', 'observe', 'weather', 'exotic', 'doubt', 'basketball', 'functional',
    'fabulous', 'swift', 'malicious', 'system', 'rambunctious', 'quizzical', 'absent', 'teeth',
    'obese', 'request', 'tart', 'toes', 'jobless', 'shave', 'wave', 'squeak', 'exciting',
    'mute', 'hilarious', 'red', 'force', 'cannon', 'toy', 'pen', 'poke', 'rail', 'vulgar',
    'talk', 'languid', 'whisper', 'adventurous', 'found', 'partner', 'friendly', 'bee',
    'move', 'aunt', 'boast', 'goblin', 'supreme', 'spare', 'fix', 'dust', 'demonic',
    'nippy', 'babies', 'writer', 'rainstorm', 'person', 'fail', 'grubby', 'tired',
    'realize', 'occur', 'stir', 'scrumptious', 'house', 'chase', 'science', 'unsuitable',
    'lean', 'sofa', 'chickens', 'creator', 'intend', 'exultant', 'worry', 'frame', 'gold',
    'yoke', 'comparison', 'gun', 'present', 'crate', 'crush', 'drunk', 'tour', 'crazy', 'bed',
    'excite', 'butter', 'slope', 'panoramic', 'remain', 'existence', 'intelligent', 'degree',
    'boorish', 'tremendous', 'fallacious', 'rat', 'truthful', 'airplane', 'selective', 'men',
    'better', 'chess', 'expansion', 'throne', 'pathetic', 'growth', 'tug', 'pocket', 'weary',
    'murder', 'friends', 'show', 'false', 'beef', 'arithmetic', 'reduce', 'press', 'ten', 'soap',
    'puddle', 'excellent', 'position', 'pretend', 'peaceful', 'suggestion', 'wound', 'attract',
    'noodles', 'toothbrush', 'spiteful', 'bathe', 'nutty', 'squeamish', 'drop', 'hulking', 'ski',
    'ready', 'thankful', 'wriggle', 'terrible', 'whole', 'hellish', 'form', 'fluffy', 'cowardly', 'free', 'fish','narrative', 'mantle', 'utterance', 'regal', 'mist',
    'arduous', 'byzantine', 'intricate', 'perplexing', 'enigmatic',
    'conundrum', 'cacophony', 'esoteric', 'paradoxical', 'labyrinthine',
    'reticulated', 'multifarious', 'procrastination', 'perspicacious', 'indefatigable',
    'exacerbate', 'idiosyncratic', 'insouciant', 'obfuscate', 'quintessential',
    'superfluous', 'serendipity', 'mellifluous', 'effervescent', 'ubiquitous',
    'grandiloquent', 'ineffable', 'extemporaneous', 'equanimity', 'mellifluous',
    'circumlocution', 'perspicacious', 'ineffable', 'magnanimous', 'antediluvian',
    'sophisticated', 'paraphernalia', 'interminable', 'sagacious', 'incandescent',
    'inscrutable', 'ineffable', 'nebulous', 'supercilious', 'indomitable'
   ];
   
   const selectRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
   };
   
   export default {
    selectRandomWord,
   };
   