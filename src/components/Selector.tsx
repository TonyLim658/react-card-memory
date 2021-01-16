import React from 'react';

type Props = {
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Selector: React.FC<Props> = ({
    callback
})  => {

    return (
    <div>
        <p>Selector</p>
        <div>
            <button onClick={callback} value='3'>START GAME</button>
        </div>
    </div>
    );
}

export default Selector;