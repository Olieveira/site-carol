// import React from 'react'
import {styled} from '../src/stitches.config'

// import { styled } from './stitches.config';

const Button = styled('button',{
backgroundColor: "white",
});

function App(){
    return(
        <div className={Button}>
            <a href='www.facebook.com'/>facebook
        </div>
    )
};

export default App

