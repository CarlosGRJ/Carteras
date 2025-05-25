import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  avatars: Array<{
    image: string;
    fallback: string;
  }>;
}

interface Hero151Props {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  testimonial?: Testimonial;
  images: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
}

const Hero151 = ({
  heading = 'Diseño elegante en cada detalle.',
  description = 'Cada pieza está diseñada para ofrecerte elegancia, comodidad y presencia.',
  button = {
    text: 'Get Started',
    url: '#',
  },
  testimonial = {
    quote: 'Justo lo que buscaba: elegante y práctica.',
    author: 'Carlos Rojas',
    avatars: [
      {
        image: 'https://shadcnblocks.com/images/block/avatar-1.webp',
        fallback: 'AB',
      },
      {
        image: 'https://shadcnblocks.com/images/block/avatar-2.webp',
        fallback: 'CD',
      },
      {
        image: 'https://shadcnblocks.com/images/block/avatar-3.webp',
        fallback: 'EF',
      },
    ],
  },
  images = {
    first: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
    second: 'https://shadcnblocks.com/images/block/placeholder-dark-2.svg',
    third: 'https://shadcnblocks.com/images/block/placeholder-dark-3.svg',
    fourth: 'https://shadcnblocks.com/images/block/placeholder-dark-7-tall.svg',
  },
}: Hero151Props) => {
  return (
    <header id='home' className='p-12 md:py-20 w-full bg-[#fbeed9]'>
      <div className='flex flex-col items-center gap-8 md:flex-row'>
        <div className='flex-1'>
          <div className='flex flex-col gap-4 lg:gap-8'>
            <h1 className='max-w-[80%] text-4xl leading-tight font-semibold text-foreground lg:text-5xl xl:text-7xl'>
              {heading}
            </h1>
            <p className='text-lg leading-relaxed text-muted-foreground xl:text-2xl'>
              {description}
            </p>
          </div>
          <div className='my-6 lg:my-10'>
            <Button asChild size='lg'>
              <a href={button.url}>{button.text}</a>
            </Button>
          </div>
          <div className='flex flex-wrap items-center gap-3'>
            <div className='relative flex -space-x-[1.5rem]'>
              {testimonial.avatars.map((avatar, index) => (
                <Avatar
                  key={index}
                  className={`relative z-${
                    index + 1
                  }0 flex h-12 w-12 flex-shrink-0 rounded-full border-2 border-white object-cover`}>
                  <AvatarImage src={avatar.image} alt='' />
                  <AvatarFallback>{avatar.fallback}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div>
              <p className='mb-1 text-sm text-muted-2-foreground italic'>
                &quot;{testimonial.quote}&quot;
              </p>
              <p className='text-sm font-medium text-muted-2-foreground'>
                {testimonial.author}
              </p>
            </div>
          </div>
        </div>
        <div className='w-full flex-1'>
          <div className='w-full max-w-[50rem]'>
            <AspectRatio ratio={1 / 1} className='h-full w-full'>
              <div className='grid h-full w-full grid-cols-2 grid-rows-2 gap-[3.5%]'>
                <div className='overflow-hidden rounded-[5.2%] border border-muted bg-muted'>
                  <Image
                    width={200}
                    height={200}
                    src={images.first}
                    alt=''
                    className='object-fit h-full w-full object-center'
                  />
                </div>

                <div className='overflow-hidden rounded-[5.2%] border border-muted bg-muted'>
                  <Image
                    width={200}
                    height={200}
                    src={images.second}
                    alt=''
                    className='object-fit h-full w-full object-center'
                  />
                </div>

                <div className='overflow-hidden rounded-[5.2%] border border-muted bg-muted'>
                  <Image
                    width={200}
                    height={200}
                    src={images.third}
                    alt=''
                    className='object-fit h-full w-full object-center'
                  />
                </div>

                <div className='overflow-hidden rounded-[5.2%] border border-muted bg-muted'>
                  <Image
                    width={200}
                    height={200}
                    src={images.fourth}
                    alt=''
                    className='object-fit h-full w-full object-center'
                  />
                </div>
              </div>
            </AspectRatio>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Hero151 };
