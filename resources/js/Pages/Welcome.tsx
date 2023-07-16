import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import LandingLayout from '@/Layouts/LandingLayout';
import styled from 'styled-components';

const StyledOuterDiv = styled.div`
    align-items: start;
    margin: 5%;
`;

const StyledP = styled.p`
    margin: auto;
`;

const StyledHeader = styled.h2`
    margin: auto;
    margin-right: 1rem;
`;

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
<LandingLayout>
    <Head title="Welcome" />
    <StyledOuterDiv className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center bg-gray-100 selection:bg-red-500 selection:text-white">
        <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
            {auth.user ? (
                <Link
                    href={route('dashboard')}
                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Dashboard
                </Link>
            ) : ''}
        </div>
        <div className="max-w-7xl mx-auto p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <a
                    href={route('login')}
                    className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                >
                    <StyledHeader className="text-xl font-semibold text-gray-900 dark:text-white">
                        Login
                    </StyledHeader>
                    <StyledP className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                        Ready to review and edit your pantry? Login Now!
                    </StyledP>
                </a>

                <a
                    href={route('register')}
                    className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                >
                    <StyledHeader className="text-xl font-semibold text-gray-900 dark:text-white">
                        Register
                    </StyledHeader>
                    <StyledP className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                        New to Pocket Pantry? Click here to create a new account.
                    </StyledP>
                </a>
            </div>
        </div>
    </StyledOuterDiv>
</LandingLayout>


            
    );
}
