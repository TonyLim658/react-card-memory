import React, { useState } from 'react';
// Styles
import { Wrapper } from './CardBoard.style'
// Components
import Card from './Card'
// Images
import img1 from '../images/boarding_pass.jpg';
import img2 from '../images/code.png';
import img3 from '../images/nook.jpg';
import img4 from '../images/qr_code.png';
import img5 from '../images/todd_ross.jpg';

export type AnswerObject = {
    firstCardSelected: number | undefined;
    secondCardSelected: number | undefined;
}
const EMPTY_ANSWER = {firstCardSelected: undefined, secondCardSelected: undefined}

const CardBoard = () => {
    const [userAnswer, setUserAnswer] = useState<AnswerObject>(EMPTY_ANSWER);
    const [cardRevealed, setCardRevealed] = useState<boolean[]>([]);
    // TODO set as more generic
    const cardImg: string[] = [img1, img2, img1, img2, img3, img3];

    // TODO start
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
            const correct = cardImg[answerObject.firstCardSelected-1] === cardImg[answerObject.secondCardSelected-1];
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
            </div>
        </Wrapper>
    );
}

export default CardBoard;