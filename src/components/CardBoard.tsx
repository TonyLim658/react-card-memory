import React, { useState } from 'react';
// Styles
import { Wrapper } from './CardBoard.style'
// Components
import Card from './Card'

export type AnswerObject = {
    firstCardSelected: number | undefined;
    secondCardSelected: number | undefined;
}
const EMPTY_ANSWER = {firstCardSelected: undefined, secondCardSelected: undefined}

type Props = {
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    cardImg: string[];
}

const CardBoard: React.FC<Props> = ({
    callback,
    cardImg
}) => {
    const [userAnswer, setUserAnswer] = useState<AnswerObject>(EMPTY_ANSWER);
    const [cardRevealed, setCardRevealed] = useState<boolean[]>([]);
    const [gameOver, setGameOver] = useState(false);
    // TODO set as more generic
    console.log(cardImg);

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        const val: number = Number(e.currentTarget.value)
        console.log('bui');
        let answerObject: AnswerObject;
        if (userAnswer?.firstCardSelected) {
            answerObject = {
                firstCardSelected: userAnswer?.firstCardSelected,
                secondCardSelected: val
            }
        } else {
            answerObject = {
                firstCardSelected: val,
                secondCardSelected: undefined
            }
        }
        setUserAnswer(answerObject);
        console.log(answerObject)
        if(answerObject?.firstCardSelected && answerObject?.secondCardSelected) {
            console.log('waiting');
            const correct = cardImg[answerObject.firstCardSelected-1] === cardImg[answerObject.secondCardSelected-1];
            cardRevealed[answerObject?.firstCardSelected] = 
                                    cardRevealed[answerObject.secondCardSelected] = correct;
            if((cardRevealed.length - 1) === cardImg.length && cardRevealed.every(e => e)) {
                setGameOver(true);
            }
            console.log(cardRevealed);
            // TODO waiting with state
            setUserAnswer(EMPTY_ANSWER);
        }
    };

    return (
        <Wrapper>
            {!gameOver ?
                (<div className='cardboard'>
                    {cardImg.map((path, ind) => (
                        <Card
                            key={ind}
                            num={ind+1}
                            callback={checkAnswer}
                            imagePath={path}
                            userAnswer={userAnswer}
                            cardRevealed={cardRevealed}
                        />
                    ))}
                </div>)
            : <h1><button onClick={callback}>FINI</button></h1>}
        </Wrapper>
    );
}

export default CardBoard;