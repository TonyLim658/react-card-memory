import React from 'react';
import notRevealedImage from '../images/piggy512x512.png';
import {AnswerObject} from './CardBoard';
// Styles
import { Wrapper } from './Card.style'

type Props = {
    num: number;
    userAnswer: AnswerObject | undefined;
    cardRevealed: boolean[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    imagePath: string;
}

const Card: React.FC<Props> = ({
    num,
    userAnswer,
    callback,
    imagePath,
    cardRevealed
}) => (
    <Wrapper>
        <div className='card'>
                <button disabled={cardRevealed[num] || userAnswer?.firstCardSelected === num || userAnswer?.secondCardSelected === num} 
                        onClick={callback} value={num}>
                    <img src={cardRevealed[num] ? imagePath : notRevealedImage} alt={imagePath} />
                </button>
        </div>
    </Wrapper>
);

export default Card;