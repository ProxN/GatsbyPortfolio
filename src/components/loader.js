import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import IconLoader from './Icons/iconLoader';
import anime from 'animejs';

const LoaderContainer = styled.div`

    position:fixed;
    height:100%;
    width:100%;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const LoaderWraper = styled.div`

    opacity: ${props => (props.isMounted ? 1 : 0)};
    max-width:100px;
    height:100px;
    transition:all .3s;
    svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;
    }
    #A{
        opacity:0;
    }
`;
function Loader({finish}) {
    const animate = () => {
        const loader = anime.timeline({
            complete:() => finish(),
        });
        // loader.add({
        //     targets:'#logo path',
        //     strokeDashoffset: [anime.setDashoffset, 0],
        //     easing: 'easeInOutSine',
        //     duration: 2000,
        // })
        // .add({
        //     targets:'#logo #A',
        //     duration: 800,
        //     easing: 'easeInOutQuart',
        //     opacity: 1,
        // })
        // .add({
        //     targets:'.loader',
        //     easing:'easeInOutSine',
        //     duration:300,
        //     delay:200,
        //     opacity:0,
        //     zIndex:-1
        // })
    };
    const [isMounted,setIsMounted] = useState(false);
    
    useEffect(() => {
        const timeout = setTimeout( () => setIsMounted(true),10);
        animate();
        return () => clearTimeout(timeout);
    })
    return(
        <LoaderContainer className='loader'>
            <LoaderWraper isMounted={isMounted}>
                 <IconLoader />
            </LoaderWraper>
        </LoaderContainer>
    )
}

export default Loader;