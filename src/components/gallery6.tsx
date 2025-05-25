'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';
import Image from 'next/image';

export interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface Gallery6Props {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const Gallery6 = ({ heading = '', items = [] }: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on('select', updateSelection);
    return () => {
      carouselApi.off('select', updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className='py-20 px-12 bg-[#f5f0e8]'>
      <div className='mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16'>
        <h2 className='text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6'>
          {heading}
        </h2>

        <div className='mt-8 flex shrink-0 items-center justify-start gap-2'>
          <Button
            size='icon'
            variant='outline'
            onClick={() => {
              carouselApi?.scrollPrev();
            }}
            disabled={!canScrollPrev}
            className='disabled:pointer-events-auto'>
            <ArrowLeft className='size-5' />
          </Button>

          <Button
            size='icon'
            variant='outline'
            onClick={() => {
              carouselApi?.scrollNext();
            }}
            disabled={!canScrollNext}
            className='disabled:pointer-events-auto'>
            <ArrowRight className='size-5' />
          </Button>
        </div>
      </div>

      <div className='w-full px-4'>
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              '(max-width: 768px)': {
                dragFree: true,
              },
            },
          }}
          className='relative'>
          <CarouselContent className='-mr-4 ml-8 2xl:mr-[max(0rem,calc(50vw-700px-1rem))] 2xl:ml-[max(8rem,calc(50vw-700px+1rem))]'>
            {items.map((item) => (
              <CarouselItem key={item.id} className='pl-4 md:max-w-[452px]'>
                <a
                  href={item.url}
                  className='group flex flex-col justify-between'>
                  <div>
                    <div className='flex aspect-3/2 overflow-clip rounded-xl'>
                      <div className='flex-1'>
                        <div className='relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105'>
                          <Image
                            width={200}
                            height={200}
                            src={item.image}
                            alt={item.title}
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='mb-2 line-clamp-3 pt-4 text-lg font-medium break-words md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl'>
                    {item.title}
                  </div>

                  <div className='mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9'>
                    {item.summary}
                  </div>

                  <Button className='flex items-center text-sm w-[120px]'>
                    Ver más{' '}
                    <ArrowRight className='ml-2 size-5 transition-transform group-hover:translate-x-1' />
                  </Button>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery6 };
