import React from 'react'

function useSpeedTypingGame(time) {

    const [text, setText] = React.useState("");
    const [count, setCount] = React.useState();
    const [timeRemaining, setTimeRemaining] = React.useState(time)
    const [isGame, setIsGame] = React.useState(false);
    const textRef = React.useRef(null)

    function handleChange(e) {
        const { value } = e.target
        setText(value)
    }

    function WordCount(str) {
        const wordsArray = str.trim().split(" ")
        const filteredWords = wordsArray.filter(word => word !== "");
        setCount(filteredWords.length)
    }

    function startGame() {
        setIsGame(true)
        setTimeRemaining(time)
        setText("")
        setCount(0)
        textRef.current.disabled = false
        textRef.current.focus()
    }

    function resetGame() {
        setIsGame(false)
        setTimeRemaining(time)
    }

    React.useEffect(() => {
        if (isGame && timeRemaining > 0) {
            const timeout = setTimeout(() => {
                setTimeRemaining(time => time - 1);
            }, 1000);

            return () => clearTimeout(timeout)
        } else if (timeRemaining === 0) {
            WordCount(text)
            setIsGame(false)
        }

    }, [timeRemaining, isGame])

    return { count, textRef, isGame, text, handleChange, timeRemaining, startGame, resetGame, setText }
}

export default useSpeedTypingGame