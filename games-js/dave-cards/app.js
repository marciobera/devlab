document.addEventListener('DOMContentLoaded', () => {

    const imgUrl = "https://raw.githubusercontent.com/marciobera/devlab/master/games-js/dave-cards/";
    // Card options
    const cardArray = [
        {
            name: 'dave1',
            img: 'images/dave1.png'
        },
        {
            name: 'dave2',
            img: 'images/dave2.png'
        },
        {
            name: 'dave3',
            img: 'images/dave3.png'
        },
        {
            name: 'dave4',
            img: 'images/dave4.png'
        },
        {
            name: 'dave5',
            img: 'images/dave5.png'
        },
        {
            name: 'dave6',
            img: 'images/dave6.png'
        },
        {
            name: 'dave7',
            img: 'images/dave7.png'
        },
        {
            name: 'dave8',
            img: 'images/dave8.png'
        },

        {
            name: 'dave1',
            img: 'images/dave1.png'
        },
        {
            name: 'dave2',
            img: 'images/dave2.png'
        },
        {
            name: 'dave3',
            img: 'images/dave3.png'
        },
        {
            name: 'dave4',
            img: 'images/dave4.png'
        },
        {
            name: 'dave5',
            img: 'images/dave5.png'
        },
        {
            name: 'dave6',
            img: 'images/dave6.png'
        },
        {
            name: 'dave7',
            img: 'images/dave7.png'
        },
        {
            name: 'dave8',
            img: 'images/dave8.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = [];
    let cardsChosenId = [];
    const cardsWon = [];

    // create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', imgUrl + 'images/blank.png')
            card.setAttribute('data-id', i.toString())
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (cardsChosen[0].img === cardsChosen[1].img) {
            // alert('You fond a match');
            cards[optionOneId].setAttribute('src', imgUrl + 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].setAttribute('src', imgUrl + 'images/white.png')
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', imgUrl + 'images/blank.png')
            cards[optionOneId].addEventListener('click', flipCard)
            cards[optionTwoId].setAttribute('src', imgUrl + 'images/blank.png')
            cards[optionTwoId].addEventListener('click', flipCard)
            // alert('Sorry, try again');
        }

        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length.toString();

        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    // flip your card
    function flipCard() {
        const cardId = parseInt(this.getAttribute('data-id'));
        cardsChosen.push(cardArray[cardId]);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img)
        this.removeEventListener('click', flipCard)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})

