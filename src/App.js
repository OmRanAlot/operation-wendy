import "./App.css";
import React, { useState } from "react";
import PuzzleBox from "./component/puzzleBox";

function App() {
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [currentHomeText, setCurrentHomeText] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [currentFinalText, setCurrentFinalText] = useState(0);
  const [showElement, setShowElement] = useState(true);
  const [text, setText] = useState("Wait a minute...");  

  const changeText = () => {
    setTimeout(() => {
      const element = document.querySelector(".shakeTHIS");
      if (element) {
        element.classList.remove("shake2");
        void element.offsetWidth;
        
        element.classList.add("shake2");
        setTimeout(() => {
          element.classList.remove("shake2");
          setText("Send a similar picture to the orginal number for the next clue!");
        }, 1000);
      }
    }, 1500);
  };


  const puzzleLocation = [
    { game: "Home", number: 0 },
    {
      game: "Mini",
      date: "April 24, 2025",
      clue: "1st Letter of 1A",
      number: 1,
      letter: "Q",
      taunt: "Your gonna get cooked",
    },
    {
      game: "Wordle",
      date: "February 13, 2025",
      clue: "2nd Letter",
      number: 2,
      letter: "U",
      taunt: "Just ask for a hint",
    },
    {
      game: "Connections",
      date: "December 5, 2024",
      clue: "First Letter",
      number: 1,
      letter: "A",
      taunt: "Its only downhill from here...",
    },
    {
      game: "Crossword",
      date: "August 3, 2020",
      clue: "31 Down",
      number: 2,
      letter: "C",
    },
    {
      game: "Wordle",
      date: "October 7, 2021",
      clue: "Last Letter",
      number: 5,
      letter: "K",
    },
    { game: "End Card", number: 6 },
  ];
  const current = puzzleLocation[currentPuzzle];

  const nextPuzzle = () => {
    setCurrentPuzzle(currentPuzzle + 1);
    console.log(currentPuzzle);
  };
  const nextHomeText = () => {
    setCurrentHomeText(currentHomeText + 1);
  };

  const nextFinalText = () => {
    const button = document.querySelector(".final-button");
    button.classList.add("fade-out");
    setTimeout(() => {
      setShowElement(false);
    }, 1000);
    setTimeout(() => {
      console.log("Narwhal - code word");
    }, 2000);

    setCurrentFinalText(currentFinalText + 1);
  };

  const nextFinalText2 = () => {
    setCurrentFinalText(currentFinalText + 1);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toUpperCase()); // updates state on every keystroke
  };

  const randomTryAgain = () => {
    const yes = ["Try Again!🔄", "No.", "Not Quite...😬", "😂😂😂", "😭🙏", "Are you just guessing?"];
    return yes[Math.floor(Math.random() * yes.length)];
  };

  const handleClick = () => {
    if (inputValue === current.letter) {
      setInputValue("");
      nextPuzzle();

      const button = document.querySelector(".next-button");
      button.classList.remove("fade-in-up");
      button.classList.add("fade-in-up-success");

      setTimeout(() => {
        button.classList.remove("fade-in-up-success");
      }, 500);
    } else if (inputValue === "") {
      setVisible2(true);
      setTimeout(() => {
        setVisible2(false);
      }, 2000);
    } else {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 2000);
    }
  };

  return (
    <div className="App">
      {current.number === 0 && currentHomeText > -1 && (
        <>
          {currentHomeText === 0 && (
            <>
              <h1 style={{ textAlign: "center" }}>
                Hopefully that puzzle wasn't too hard!
              </h1>
              <button onClick={nextHomeText} className="fade-in-up next-button">
                Next
              </button>
            </>
          )}

          {currentHomeText === 1 && (
            <>
              <h1 style={{ textAlign: "center" }}>
                Don't worry, this one will be harder 😉
              </h1>
              <button
                onClick={nextHomeText}
                className="fade-in-up-quick next-button"
              >
                Next
              </button>
            </>
          )}

          {currentHomeText === 2 && (
            <>
              <h1 style={{ textAlign: "center" }}>Good luck!😁</h1>
              <button
                onClick={nextPuzzle}
                // onClick={setCurrentPuzzle(6)}
                className="fade-in-up-quick next-nyt-button"
              >
                Play
              </button>
            </>
          )}
        </>
      )}

      {current.number !== 0 && current.number !== 6 && (
        <>
          <h1 style={{ textAlign: "center" }}>Clues</h1>
          <PuzzleBox
            game={current.game}
            number={current.number}
            date={current.date}
            clue={current.clue}

          />

          <div className="try-again-div">
            {visible ? (
              <p className="try-again">{randomTryAgain()}</p>
            ) : visible2 ? (
              <p className="try-again">Please enter something</p>
            ) : (
              <p style={{ color: "#f3f3f3" }}>.</p>
            )}
          </div>

          <input
            type="text"
            placeholder="Answer"
            style={{ textAlign: "center" }}
            className="input"
            onChange={handleInputChange}
            value={inputValue}
          />

          <button onClick={handleClick} className="fade-in-up next-button">
            Next
          </button>
        </>
      )}

      {current.number === 6 && (
        <>
          <div className="letters-container">
            {"YOU DID IT".split("").map((letter, index) => (
              <span key={index} className="letter">
                {letter}
              </span>
            ))}
          </div>
          <p className="text fly-up-letter" style={{ animationDelay: "2s" }}>
            Hope it didn't take too long...
          </p>
          <p className="text fly-up-letter" style={{ animationDelay: "4s" }}>
            But what does the word mean?
          </p>
          {showElement && (
            <button
              className="fade-in-up next-button final-button"
              style={{ animationDelay: "6s" }}
              
              onClick={nextFinalText}
            >
              What does it mean?
            </button>
          )}

          {currentFinalText >0 && (
            <>
              <div className="letters-container2">
                <h1
                  className="text fly-up-letter"
                  style={{ animationDelay: "1s" }}
                >
                  Q
                </h1>
                <h1
                  className="text fly-up-letter"
                  style={{ animationDelay: "1.1s" }}
                >
                  U
                </h1>
                <h1
                  className="text fly-up-letter"
                  style={{ animationDelay: "1.2s" }}
                >
                  A
                </h1>
                <h1
                  className="text fly-up-letter"
                  style={{ animationDelay: "1.3s" }}
                >
                  C
                </h1>
                <h1
                  className="text fly-up-letter"
                  style={{ animationDelay: "1.4s" }}
                >
                  K
                </h1>
              </div>
              <p
                className={`text2 fly-up-letter shakeTHIS`}
                style={{ animationDelay: "2s" }}
                onAnimationEnd={nextFinalText2}
              >
                {text}
              </p>
              
              
            </>
          )}
      {currentFinalText === 2 && (
        <img
        className="duck"
        src="/files/duck.jpg"
        alt="nyt game"
        onAnimationEnd={changeText}
      ></img>
      )}

        </>
      )}
    </div>
  );
}

export default App;
