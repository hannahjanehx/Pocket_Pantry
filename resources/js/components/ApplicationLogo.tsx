import { styled } from 'styled-components';
import logo from '/public/images/pocket_pantry.png';

const StyledImg = styled.img`
    margin: auto;
    margin-top: 10%;
`;

const HeaderImg = styled.img`
    height: inherit;
`

export default function ApplicationLogo({ className = '', header = false }) {

    let displayedImg = <HeaderImg src={logo} />;
    if(!header) {
        displayedImg = <StyledImg src={logo} />;
    }
    console.log(header);
    return (
        <div className={className}>
            {displayedImg}
        </div> 
    );
}
