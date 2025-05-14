"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

function Header() {
    const path = usePathname()
    
    useEffect(() => {
        console.log(path)
    }, [])
    
    return (
        <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
           
           
           <Link href="/dashboard">
           <div className='flex justify-center'>
                <Image src={'/image.avif'} width={50} height={50} alt='logo'/>
                    <h2 className='text-purple-700 font-bold text-3xl mt-2'>Inview</h2>
                </div> 
            </Link>
            
            <ul className='hidden md:flex gap-6'>
                <li>
                    <Link href="/dashboard" className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path==='/dashboard' && 'text-primary font-bold'}`}>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href="/questions" className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path==='/questions' && 'text-primary font-bold'}`}>
                        Questions
                    </Link>
                </li>
                <li>
                    <Link href="/upgrade" className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path==='/upgrade' && 'text-primary font-bold'}`}>
                        Upgrade
                    </Link>
                </li>
                <li>
                    <Link href="/how-it-works" className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path==='/how-it-works' && 'text-primary font-bold'}`}>
                        How it works?
                    </Link>
                </li>
            </ul>
            
            <UserButton />
        </div>
    )
}

export default Header