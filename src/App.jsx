import { useState } from 'react'
import './App.css'

const cards = [
  { 
    id: 1, 
    question: "What is React?", 
    answer: "A JavaScript library for building user interfaces",
    category: 'basics'
  },
  { 
    id: 2, 
    question: "What is JSX?", 
    answer: "Syntax extension for JavaScript that looks like HTML",
    category: 'syntax'
  },
  { 
    id: 3, 
    question: "What is a component?", 
    answer: "Building blocks of React applications",
    category: 'concepts'
  },
  { 
    id: 4, 
    question: "What is virtual DOM?", 
    answer: "Lightweight representation of the real DOM",
    category: 'performance'
  },
  { 
    id: 5,
    question: "What's this component?",
    answer: "React Context Provider",
    category: 'patterns',
    image: '/component.jpg'
  },
  { 
    id: 6, 
    question: "What's this UI pattern?", 
    answer: "Dropdown menu",
    category: 'components',
    image: '/drop-down-UI-pattern.png'
  },
  { 
    id: 7, 
    question: "Which hook is this?", 
    answer: "useState()",
    category: 'hooks',
    image: '/usestate.jpeg'
  },
  { 
    id: 8, 
    question: "What architecture is this?", 
    answer: "Component-based architecture",
    category: 'architecture',
    image: '/component-based-arch.png'
  },
  { 
    id: 9, 
    question: "What tool is this?", 
    answer: "React Developer Tools",
    category: 'tools',
    image: '/react-devtools-standalone.png'
  },
  {
    id: 10, 
    question: "What's this cloud pattern?", 
    answer: "Cloud Storage Architecture",
    category: 'cloud',
    image: '/Generic-cloud-storage-architecture.png'
  }
]

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(
    () => Math.floor(Math.random() * cards.length)
  )
  const [isFlipped, setIsFlipped] = useState(false)

  const handleNext = () => {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * cards.length)
    } while (newIndex === currentCardIndex && cards.length > 1)
    
    setCurrentCardIndex(newIndex)
    setIsFlipped(false)
  }

  const currentCard = cards[currentCardIndex]

  return (
    <div className="App">
      <div className="header">
        <h1>React Flashcards</h1>
        <p>Learn React concepts through interactive cards</p>
        <p className="card-count">Total cards: {cards.length}</p>
      </div>

      <div 
        className={`flashcard-container ${currentCard.category}`}
        onClick={() => setIsFlipped(!isFlipped)}
        role="button"
        tabIndex="0"
        aria-label={isFlipped ? "Hide answer" : "Reveal answer"}
      >
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
          <div className="front">
            {currentCard.image && (
              <img 
                src={currentCard.image} 
                alt="Visual concept" 
                className="card-image"
              />
            )}
            <div className="question-text">
              {currentCard.question}
              {currentCard.image && <span className="hover-hint">(Click to reveal answer)</span>}
            </div>
          </div>
          <div className="back">
            <div className="answer-content">
              <p className="answer">{currentCard.answer}</p>
              {currentCard.category && (
                <div className="category-tag">{currentCard.category}</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <button 
        className="next-btn" 
        onClick={handleNext}
        aria-label="Next card"
      >
        Next Card <span aria-hidden="true">➔</span>
      </button>
    </div>
  )
}

export default App