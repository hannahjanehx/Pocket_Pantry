import { styled } from 'styled-components';
import logo from '/public/images/pocket_pantry.png';

const StyledImg = styled.img`
    margin: auto;
    margin-top: 10%;
`

export default function ApplicationLogo({ className = '' }) {
    return (
        <div className={className}>
            <StyledImg src={logo} />
        </div> 
    );
}
