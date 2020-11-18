import React from 'react';
import './App.css';
import Poll from 'react-polls'
import styled from 'styled-components'

function App() {
  const pollQuestion = 'What framework do you prefer?'
  const _pollAnswers = [
  { option: 'React', votes: 0 },
  { option: 'Vue', votes: 0 },
  { option: 'Angular', votes: 0 }
]

const [pollAnswers, setPollAnswers] = React.useState(_pollAnswers)

const pollStyles = {
  questionSeparator: false,
  questionSeparatorWidth: 'question',
  questionBold: false ,
  questionColor: '#4F70D6',
  align: 'center',
  theme: 'cyan'
}

  const handleOnVote = (vote: any) => {
    const newPollAnswers = pollAnswers.map((answer: any) => {
      if (answer.option === vote) answer.votes++
      return answer
    })

    setPollAnswers(newPollAnswers)
  }

  const handleCreateLocal = () => {
    localStorage.setItem('react-polls', JSON.stringify([{ option: 'Vue', question: 'What framework do you prefer?', url: 'http://localhost:3000/' }]))
  }

  const autoAddVote = () => {
    setTimeout(() => {
      const chooseAnswer = Math.floor(Math.random() * (3 - 1) + 0)
      console.log(chooseAnswer)
        handleOnVote(pollAnswers[chooseAnswer].option)
    }, Math.random() * 5000)
  }

  // React.useEffect(() => {
  //   autoAddVote()
  // }, [pollAnswers])

  return (
    <div>
      <button onClick={handleCreateLocal}>create</button>
      <Wrapper>
        <Poll question={pollQuestion} answers={pollAnswers} onVote={handleOnVote} noStorage={false} customStyles={pollStyles} />
        <Time>time</Time>
      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  border: 1px solid black;
  position: relative;

  > article {
    align-items: flex-start !important;
    padding: 0;

    > ul {
      /* background: lightblue; */
      > li > div {
        background: #f2f3f4 !important;
        border-radius: 30px !important;

        > div {
          border-radius: 30px !important;
        }

        > div > span {
          color: red !important;
        }
      }
    }

    > h3 {
      color: red !important;
      font-size: 32px;
      font-weight: bold !important;

      align-self: unset !important;
    }

    > p {
      color: black !important;
      font-size: 14px;
    }
  }
`

const Time = styled.p`
  margin: 0;
  font-size: 14px;

  position: absolute;
  bottom: 0;
  right: 0;
`
