import { Metadata } from "next";
import { ReactNode } from "react";
import { ClerkProvider} from '@clerk/nextjs';
import { Inter } from "next/font/google";
import '../globals.css';

export const metaData: Metadata  = {
    title: 'Threads',
    description: 'A clone of Meta Threads app in NextJs'
}

type Props = {
    children: ReactNode;
}

const inter = Inter({subsets: ["latin"]});

export default function RootLayout ({children}: Props) {
return (
    <ClerkProvider>
        <html lang="en">
            <body className={`${inter.className} bg-dark-1`}>
                {children}
            </body>
        </html>
    </ClerkProvider>  
);
}