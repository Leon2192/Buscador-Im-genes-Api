import React from 'react';
import logounsplash from './logounsplash.png';
import { Image } from 'react-bootstrap';

const HeaderComponent = () => {
    return <Image 
    width={130}
    height={110}
    src={logounsplash} />
}

export default HeaderComponent;