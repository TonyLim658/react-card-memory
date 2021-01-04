import React, { useState } from 'react';
import notRevealedImage from '../images/piggy512x512.png';

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
    <div>
        <div className='card'>
            <button disabled={revealed}>
                <img src={revealed ? imagePath : notRevealedImage} alt='img'/>
            </button>
        </div>
    </div>
);

export default Card;