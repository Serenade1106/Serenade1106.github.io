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