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

const CardBoard = () => {
    const [userAnswer, setUserAnswer] = useState<AnswerObject>();
    const [cardRevealed, setCardRevealed] = useState<boolean[]>([false, false, false, false, false,false]);

    const startTrivia = async () => {
        setUserAnswer(EMPTY_ANSWER);
        // setCardRevealed([false]);
        // TODO better setting
    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        const val: number = Number(e.currentTarget.value)
        console.log('bui');
        let answerObject: AnswerObject;
        if (userAnswer?.firstCardSelected) {
            answerObject = {
                firstCardSelected: userAnswer?.firstCardSelected,
                secondCardSelected: val
            }
            cardRevealed[userAnswer?.firstCardSelected] = cardRevealed[val] = true;
        } else {
            answerObject = {
                firstCardSelected: val,
                secondCardSelected: undefined
            }
        }
        setUserAnswer(answerObject);
        if(answerObject.secondCardSelected) {
            console.log('waiting');
            setUserAnswer(EMPTY_ANSWER);
        }
    };

    return (
        <Wrapper>
            <div className='cardboard'>
                <Card
                    num={1}
                    callback={checkAnswer}
                    imagePath='./images/master_seal.jpg'
                    userAnswer={userAnswer}
                    cardRevealed={cardRevealed}
                />
                <Card
                    num={2}
                    callback={checkAnswer}
                    imagePath='./images/master_seal.jpg'
                    userAnswer={userAnswer}
                    cardRevealed={cardRevealed}
                />
                <Card
                    num={3}
                    callback={checkAnswer}
                    imagePath='./images/master_seal.jpg'
                    userAnswer={userAnswer}
                    cardRevealed={cardRevealed}
                />
                <Card
                    num={4}
                    callback={checkAnswer}
                    imagePath='./images/master_seal.jpg'
                    userAnswer={userAnswer}
                    cardRevealed={cardRevealed}
                />
                <Card
                    num={5}
                    callback={checkAnswer}
                    imagePath='./images/master_seal.jpg'
                    userAnswer={userAnswer}
                    cardRevealed={cardRevealed}
                />
                <Card
                    num={6}
                    callback={checkAnswer}
                    imagePath='./images/master_seal.jpg'
                    userAnswer={userAnswer}
                    cardRevealed={cardRevealed}
                />
            </div>
        </Wrapper>
    );
}

export default CardBoard;