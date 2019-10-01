import React from 'react';
import IconGithub from './github';
import IconLinkedin from './linkedin';
import Icontwitter from './twitter';
;


function GetIcon({name}){

    switch (name) {
        case 'Github':
            return <IconGithub />;
        case 'Linkedin':
            return <IconLinkedin />   
        case 'Twitter':
            return <Icontwitter />
        default:
            break;
    }
}

export default GetIcon;
