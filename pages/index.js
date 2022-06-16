// import React from 'react'
import {styled} from '../src/stitches.config'
import { Tweet } from '../src/tweet';
import { loggin } from '../src/log_func';

// import { styled } from './stitches.config';

const Button = styled('button',{
backgroundColor: "white",
});

function App(){
    return(
        <div className={Button}>
            <Tweet text='Pao' />

        </div>
    )
};

export default App

