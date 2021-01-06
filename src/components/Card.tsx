import React from 'react';
import notRevealedImage from '../images/piggy512x512.png';
// Styles
import { Wrapper } from './Card.style'

type Props = {
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    imagePath: string;
    revealed: boolean;
}

const Card: React.FC<Props> = ({
    callback,
    imagePath,
    revealed
}) => (
    <Wrapper>
        <div className='card'>
                <button disabled={revealed}>
                    <img src={revealed ? imagePath : notRevealedImage} alt='img' />
                </button>
        </div>
    </Wrapper>
);

export default Card;