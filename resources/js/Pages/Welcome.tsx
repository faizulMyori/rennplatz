import { Link, Head, router } from '@inertiajs/react';
import { PageProps } from '@/types';
import { useState } from 'react';
import { clearInterval } from 'timers';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) { 
    const tagLine:Array<String> = [
        'Welcome to Rennplatz', 
        'Your integrity is our priority',
        'Rennplatz is now loading'
    ]

    const [randomTagLine, setRandomTagLine] = useState(0)
    
    const generateRandomTagLine = () => {
        const randomTagLine = Math.floor(Math.random() * tagLine.length);
        setRandomTagLine(randomTagLine)
    }

    const intervalTimer = setInterval(generateRandomTagLine, 1000);

    const timerChangePage = setTimeout(() => {
        router.visit('/login', { method: 'get' })
    }, 1500);
    return (
        <>
            <Head />
            <div className="flex h-dvh bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="m-auto p-6 lg:p-8 w-full lg:w-2/5 md:w-4/5">
                    <div className="flex justify-center w-1/4 m-auto animate-bounce">
                        <img src="/icon.png" alt="" />
                    </div>

                    <div className='text-center font-bold'>{tagLine[randomTagLine]}</div>
                </div>
            </div>
        </>
    );
}

