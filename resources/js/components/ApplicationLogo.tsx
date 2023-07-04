import logo from '/public/images/pocket_pantry.png';

export default function ApplicationLogo({ className = '' }) {
    return (
        <div className={className}>
            <img src={logo} />
        </div> 
    );
}
