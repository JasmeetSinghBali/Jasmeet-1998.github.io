const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}


function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}




const textNodes = [
  {
    id: 1,
    text: 'You are Trapped in Dungeon with Your Friend.You See a barrel.What do you do?',
    options: [
      {
        text: 'Move the Barrel',
        setState: { blueGoo: true },
        nextText: 2
      },
      {
        text:'Do Nothing',
        nextText:4
      }
    ]
  },
  {
    id: 2,
    text: 'The Barrel rolls aside and You  find a Secret Tunnel.What Do You Do?',
    options: [
      {
        text: 'Enter the Tunnel',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'You Start To Escape But Your Friend Is too Weak to Go With You & Your Friend hands you a Note.What Do You Do?',
    options: [
      {
        text: 'Destroy the Note and Find the Exit',
        nextText: 7
      },
      {
        text: 'Read The Note ',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'You & Your Friend Waited and Were Killed By Your Captor After They Got Bored With You . ',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Your Friend Hands you a Note.What Do You Do?',
    options: [
      {
        text: 'Light a Match',
        nextText: 8
      }
    ]
  },
  {
    id: 6,
    text: 'It Is Too Dark to read the Note. What Do you do?',
    options: [
      {
        text: 'Dont Bother Just Leave',
        nextText: 7
      },
      {
        text:'Light the Match',
        nextText:14
      }
    ]
  },
  {
    id: 7,
    text: 'you Crawl Through the Tunnel  and the tunnel leads to  a beach . What Do you Do?',
    options: [
      {
        text: 'Head to the Beach and Escape this Hell!',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'The Note Says Dont Leave Me Here. Do you Leave Your Friend or Stay?',
    options: [
      {
        text: 'Stay',
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    text: 'hello friend,Welcome to the end. Some Games Are Not Meant to Be Won.\n Creds:For the Game-Lines to Mr. Robot(TV Series)',
    options: [
      {
        text: 'play again',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You Used the Stranded Boat at the beach Outside the Tunnel Leaving Your Friend Behind! ',
    options: [
      {
        text: 'Congratulations, You Are Heading To a new World, Click to Play Again!',
        nextText: 12
      },
      {
        text:'Read the Note By Your Friend',
        nextText:13
      }
    ]
  },
  {
    id: 12,
    text: 'You are Trapped in Dungeon with Your Friend.Is it the Same Dungeon? You See a barrel.What do you do?',
    options: [
      {
        text: 'Move the Barrel',
        setState: { blueGoo: true },
        nextText: 2
      },
      {
        text: 'Sit Next To Your Friend',
        nextText: 5
      },
      {
        text:'Do Nothing',
        nextText:4
      }
    ]
  },
  {
    id: 13,
    text: 'the Note Says "Dont Leave Me Here" ',
    options: [
      {
        text: 'Do you wanna Play again',
        nextText: 12
      }
    ]
  },
  {
    id:14,
    text:'You Could Do that Action Earlier If you Cared About Your Friend.',
    options:[
      {
        text:'Continue',
        nextText:7
      }
    ]
  }

]

startGame()
