import React, { useState } from 'react';
// Styles
import { Wrapper } from './CardBoard.style'
// Components
import Card from './Card'
// Images
import img1 from '../images/boarding_pass.jpg';
import img2 from '../images/code.png';
import img3 from '../images/nook.jpg';

export type AnswerObject = {
    firstCardSelected: number | undefined;
    secondCardSelected: number | undefined;
}
const EMPTY_ANSWER = {firstCardSelected: undefined, secondCardSelected: undefined}

const CardBoard = () => {
    const [userAnswer, setUserAnswer] = useState<AnswerObject>(EMPTY_ANSWER);
    const [cardRevealed, setCardRevealed] = useState<boolean[]>([]);
    const cardImg = [undefined, img1, img2, img1, img2, img3, img3];

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
            const correct = cardImg[answerObject.firstCardSelected] === cardImg[answerObject.secondCardSelected];
            cardRevealed[answerObject?.firstCardSelected] = 
                                    cardRevealed[answerObject.secondCardSelected] = correct;
            console.log(cardRevealed);
            // TODO waiting with state
            setUserAnswer(EMPTY_ANSWER);
        }
    };

    return (
        <Wrapper>
            <div className='cardboard'>
                <Card
                    num={1}
                    callback={checkAnswer}
                    imagePath={img1}
                    userAnswer={userAnswer}
                    cardRevealed={cardRevealed}
                />
                <Card
                    num={2}
                    callback={checkAnswer}
                    imagePath={img2}
                    userAnswer={userAnswer}
                    cardRevealed={cardRevealed}
                />
                <Card
                    num={3}
                    callback={checkAnswer}
                    imagePath={img1}
                    userAnswer={userAnswer}
                    cardRevealed={cardRevealed}
                />
                <Card
                    num={4}
                    callback={checkAnswer}
                    imagePath={img2}
                    userAnswer={userAnswer}
                    cardRevealed={cardRevealed}
                />
                <Card
                    num={5}
                    callback={checkAnswer}
                    imagePath={img3}
                    userAnswer={userAnswer}
                    cardRevealed={cardRevealed}
                />
                <Card
                    num={6}
                    callback={checkAnswer}
                    imagePath={img3}
                    userAnswer={userAnswer}
                    cardRevealed={cardRevealed}
                />
            </div>
        </Wrapper>
    );
}

export default CardBoard;