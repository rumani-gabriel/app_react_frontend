import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#75cfb8' : '#000')};
    white-space: nowarp;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#000')} 
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')}
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease_in-out;
    margin-top: 2.5rem;

    &:hover{
        transition: all 0.2s ease_in-out;
        background: ${({primary}) => (primary ? '#00917c':'#007965')};
        
    }

`
