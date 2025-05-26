'use client';

import React, { useEffect } from 'react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import Image from 'next/image';

interface ProductInfoDialogProps {
  title: string;
  previews: string[];
  id: string;
}

function ProductInfoDialog({
  title = 'No title',
  previews,
  id,
}: ProductInfoDialogProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Ver cartera</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>{title}</DialogTitle>

        <div className='mx-auto max-w-xs'>
          <Carousel setApi={setApi} className='w-full max-w-xs'>
            <CarouselContent>
              {previews.map((preview, i) => (
                <CarouselItem key={`${id}-${i}`}>
                  <Image
                    className='rounded-xl object-contain w-full h-auto'
                    src={preview}
                    width={600}
                    height={600}
                    alt={`${title} - vista ${i + 1}`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className='py-2 text-center text-sm text-muted-foreground'>
            Slide {current} of {count}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductInfoDialog;
