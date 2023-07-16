import ApplicationLogo from '@/Components/ApplicationLogo';
import { PropsWithChildren } from 'react';
import { styled } from 'styled-components';

const LandingApplicationLogo = styled(ApplicationLogo)`
    height: auto;
    margin: auto;
`;


export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <LandingApplicationLogo className="w-80" header={false} />
                {children}
            </div>
        </div>
    );
}