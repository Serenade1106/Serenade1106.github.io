const container = document.getElementById('container');
const sweetTexts = ['SWEET', 'HEALTHY', 'AUTUMNAL', 'NOSTALGIC', 'FRESHNESS', 'PETRICHOR', 'COMFORTING', 'FLORAL NOTES', 'WINTERY', 'CHILDHOOD'];

const redColors = ['#990000', '#A00000', '#FF9999', '#FF7F7F', '#FF6666', '#FF4C4C', '#FF3333', '#FF1919', '#FF0000', '#EC0000'];

const positions = [
    { left: '515px', top: '167px' },
    { left: '487px', top: '229px' },
    { left: '310px', top: '282px' },
    { left: '244px', top: '338px' },
    { left: '217px', top: '414px' },
    { left: '203px', top: '494px' },
    { left: '217px', top: '573px' },
    { left: '244px', top: '651px' },
    { left: '296px', top: '719px' },
    { left: '472px', top: '784px' }
];


const rectangleStates = new Array(10).fill(false);


const textBlinkStates = new Array(10).fill(false);

for (let i = 0; i < 10; i++) {
    const rectangle = document.createElement('div');
    rectangle.classList.add('rectangle', 'white');

    const sweetText = document.createElement('span');
    sweetText.classList.add('sweet-text', 'black');
    sweetText.textContent = sweetTexts[i];

    rectangle.appendChild(sweetText);


    rectangle.style.left = positions[i].left;
    rectangle.style.top = positions[i].top;

    container.appendChild(rectangle);

    rectangle.addEventListener('click', function () {
        if (rectangleStates[i]) {
            rectangleStates[i] = false;
            rectangle.classList.remove('red');
            rectangle.classList.add('white');
            sweetText.classList.remove('white-text');
            sweetText.classList.add('black');
    
            clearInterval(textBlinkStates[i]);
        } else {
            rectangleStates[i] = true;
            rectangle.classList.remove('white');
            rectangle.style.backgroundColor = redColors[i];
            sweetText.classList.remove('black');
            sweetText.classList.add('white-text');
      
            textBlinkStates[i] = setInterval(function () {
                if (sweetText.style.visibility === 'hidden') {
                    sweetText.style.visibility = 'visible';
                } else {
                    sweetText.style.visibility = 'hidden';
                }
            }, 500); 
        }
    });
}



const showWordsButton = document.getElementById('showWordsButton');

showWordsButton.addEventListener('click', () => {
    const words = ['AI','A 6-YEAR-OLD KID','AN OBSERVER WHO DRAWS','A GIRL STUDYING ABROAD IN A FOREIGN COUNTRY','AI','SOMEONE WHO IS TAKING A CLASS BUT CANNOT UNDERSTAND IT','BEAUTIFUL GIRL','AI', 'BUSINESS MAJOR ROMANTIC BOY','AN INTJ WHO DOES NOT WANT TO DO HER HOMEWORK'];

    const wordPositions = [
        { left: '4591px', top: '165px' },
        { left: '4395px', top: '227px' },
        { left: '4454px', top: '292px' },
        { left: '4056px', top: '335px' },
        { left: '4824px', top: '410px' },
        { left: '4200px', top: '500px' },
        { left: '4660px', top: '582px' },
        { left: '4777px', top: '655px' },
        { left: '4420px', top: '715px' },
        { left: '4150px', top: '775px' }
    ];

    for (let i = 0; i < words.length; i++) {
        const textElement = document.createElement('div');
        textElement.classList.add('text-box', 'white-text');
        textElement.textContent = words[i];
        textElement.style.position = 'absolute';
        textElement.style.left = wordPositions[i].left;
        textElement.style.top = wordPositions[i].top;
        textElement.style.whiteSpace = 'nowrap'; 
        container.appendChild(textElement);
    
    }
});


const showSentenceButton = document.getElementById('showSentenceButton');

const sentencePositions = [
    { left: '1726px', top: '165px' },
    { left: '1604px', top: '227px' },
    { left: '1862px', top: '292px' },
    { left: '1701px', top: '335px' },
    { left: '1793px', top: '410px' },
    { left: '1957px', top: '500px' },
    { left: '1560px', top: '582px' },
    { left: '1915px', top: '655px' },
    { left: '1829px', top: '715px' },
    { left: '1698px', top: '775px' }
];

const sentences = [
    '“At its peak ripeness, the fragrance is characterized by a delightful sugary aroma attributed to natural sugars like glucose and fructose.”',

    '"An apple a day keeps the doctor away"',

    '“Reminds me of fall and slightly chilly weather. The red ones are always sweet and discreet, while the green ones are vibrant with some tartness.”',

    '“It smells sweet and has its own unique flavor. It reminds me of the previous Christmas Eve when the family would get together every year. Symbolizing peace and quiet.”',

    '“The scent is refreshing, reminiscent of the air after a rain, and is widely appreciated for its invigorating and pleasant qualities. Many people utilize it to eliminate odors in various settings, such as kitchens.”',

    '“It reminds me of a smell after it rains, the stickiness of dirt mixed with rain. I can then think of the excitement I once I had when I was picking from the tree.”',

    ' “As the aroma of the oven is turned on, a taste of happiness surrounds me. I love making my own pies, and the smell of fresh, bubbling, fresh fruit turning into caramelized, cinnamon-scented pies reminds me of walking from a freezing snowy field into a cabin with a campfire in the middle of winter.” ',

    ' “Keen noses might discern understated fruity and floral undertones within the fragrance, bestowing it with a multi-dimensional quality that is truly pleasing. ”',

    '“Smells like winter snow outside your house, a frozen lake, a starry Christmas town on Christmas Eve.”',

    '“It always reminds me of the taste of home, the sweetness of a splash of red that I saw set on the dining room table when I came home from school as a child.”'
];

showSentenceButton.addEventListener('click', () => {
    for (let i = 0; i < sentences.length; i++) {
        const textElement = document.createElement('div');
        textElement.classList.add('text-box','sentence-text');
        textElement.textContent = sentences[i];
        textElement.style.position = 'absolute';
        textElement.style.left = sentencePositions[i].left;
        textElement.style.top = sentencePositions[i].top;
        textElement.style.whiteSpace = 'nowrap'; 
        container.appendChild(textElement);
    }
});






document.getElementById('createRectanglesButton').addEventListener('click', function () {
    const container = document.getElementById('container');

    const colors = ['#A60000', '#AC0000', '#C60000', '#CC0000', '#D20000', '#D20000', '#DF0000', '#E50000', '#B90000', '#B30000', '#F20000'];

    const positions = [
        { left: '450px', top: '282px' },
        { left: '473px', top: '338px' },
        { left: '754px', top: '414px' },
        { left: '758px', top: '505px' },
        { left: '731px', top: '586px' },
        { left: '703px', top: '660px' },
        { left: '650px', top: '719px' },
        { left: '608px', top: '781px' },
        { left: '636px', top: '295px' },
        { left: '554px', top: '324px' },
        { left: '371px', top: '762px' },
    ];
  

    for (let i = 0; i < 11; i++) {
        const rectangle = document.createElement('div');
        rectangle.style.backgroundColor = colors[i];
        rectangle.style.width = '4106px';
        rectangle.style.height = '32px';
        rectangle.style.position = 'absolute';
        rectangle.style.left = positions[i].left;
        rectangle.style.top = positions[i].top;
        rectangle.style.opacity = '0';
        container.appendChild(rectangle);

    
        let opacity = 0;
        const interval = setInterval(function () {
            if (opacity < 1) {
                opacity += 0.1;
                rectangle.style.opacity = opacity;
            } else {
                clearInterval(interval);
            }
        }, 500); 
    }
});





const button = document.getElementById('scrollButton');

button.addEventListener('click', function () {
    window.scrollTo(document.body.scrollWidth, 0);
});

const leftButton = document.getElementById('scrollLeftButton'); 

leftButton.addEventListener('click', function () {
    window.scrollTo(0, 0);
});