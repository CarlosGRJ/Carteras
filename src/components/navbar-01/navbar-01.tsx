'use client';

import { Button } from '@/components/ui/button';
import { Logo } from './logo';
import { NavMenu } from './nav-menu';
import { NavigationSheet } from './navigation-sheet';
import { MessageSquare } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar01Page = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`h-16 bg-background border-b ${isSticky ? 'sticky' : ''}`}>
      <div className='h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className='hidden md:block' />

        <div className='flex items-center gap-3'>
          <Button
            className='bg-[#25D366] hover:bg-[#1da851] text-white font-semibold'
            asChild>
            <a
              href='https://wa.me/525541934044'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2'>
              <MessageSquare className='h-5 w-5' />
              Contáctame
            </a>
          </Button>

          {/* Mobile Menu */}
          <div className='md:hidden'>
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar01Page;
