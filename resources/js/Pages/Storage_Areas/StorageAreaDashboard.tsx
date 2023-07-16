import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import styled from "styled-components";

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

export default function StorageAreaDashboard({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {

    return (
        <Authenticated user={auth.user}>
            <div className="max-w-7xl mx-auto p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <a
                    // href={route('storage-areas')}
                    className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                >
                    <StyledHeader className="text-xl font-semibold text-gray-900 dark:text-white">
                        View Your Storage Areas
                    </StyledHeader>
                    <StyledP className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                        Click here to view and explore existing Storage Areas
                    </StyledP>
                </a>

                <a
                    // href={route('new-storage-area')}
                    className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                >
                    <StyledHeader className="text-xl font-semibold text-gray-900 dark:text-white">
                        New Storage Area
                    </StyledHeader>
                    <StyledP className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                        Click here to create a new Storage Area.
                    </StyledP>
                </a>
            </div>
        </div>
        </Authenticated>
    );

};