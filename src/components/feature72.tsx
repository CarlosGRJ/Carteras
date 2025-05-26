import ProductInfoDialog from './ProductInfoDialog/ProductInfoDialog';

export interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  previews: string[];
}

interface Feature72Props {
  sectionId?: string;
  heading?: string;
  description?: string;
  linkUrl?: string;
  features?: Feature[];
  backgroundColor?: 'hombre' | 'mujer';
}

const backgroundMap = {
  hombre: 'bg-[#e0d8cb]',
  mujer: 'bg-[#faeee8]',
};

const Feature72 = ({
  sectionId = '01',
  heading = 'Powerful Features',
  description = 'Discover the powerful features that make our platform stand out from the rest. Built with the latest technology and designed for maximum productivity.',
  backgroundColor = 'hombre',
  features = [],
}: Feature72Props) => {
  return (
    <section
      id={sectionId}
      className={`p-10 py-20 ${backgroundMap[backgroundColor] ?? ''}`}>
      <div className='container flex flex-col gap-16 lg:px-16'>
        <div className='lg:max-w-sm'>
          <h2 className='mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6'>
            {heading}
          </h2>
          <p className='mb-8 text-muted-foreground lg:text-lg'>{description}</p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:gap-8 lg:grid-cols-3'>
          {features.map((feature) => (
            <div
              key={feature.id}
              className='flex flex-col overflow-clip rounded-xl border border-border'>
              <div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className='aspect-16/9 h-full w-full object-cover object-center'
                />
              </div>
              <div className='px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12'>
                <h3 className='mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6'>
                  {feature.title}
                </h3>
                <p className='text-muted-foreground lg:text-lg'>
                  {feature.description}
                </p>

                <div className='mt-6'>
                  <ProductInfoDialog
                    id={feature.id}
                    title={feature.title}
                    previews={feature.previews}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature72 };
