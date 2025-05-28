'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { NavMenu } from './nav-menu';
import Logo from '../ui/Logo';
import { useState } from 'react';

export const NavigationSheet = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle></SheetTitle>
        <SheetDescription></SheetDescription>
        <Logo />
        <NavMenu
          orientation='vertical'
          className='mt-12'
          onLinkClick={() => setOpen(false)}
        />
      </SheetContent>
    </Sheet>
  );
};
