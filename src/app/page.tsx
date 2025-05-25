import Contact02Page from '@/components/contact-02/contact-02';
import { Feature72 } from '@/components/feature72';
import { Hero151 } from '@/components/hero151';
import { Manfeatures, Womanfeatures } from '@/constants/products';

export default function Home() {
  return (
    <main>
      <Hero151
        images={{
          first: '/images/covers/woman/004_cartera_negra_broche.webp',
          second: '/images/covers/man/001_cartera_negra.webp',
          third: '/images/covers/woman/007_cartera_blanca_broche.webp',
          fourth: '/images/covers/man/006_cartera_cafe_logos.webp',
        }}
      />
      <Feature72
        sectionId='woman'
        heading='Carteras para Mujer'
        description='Descubre nuestra colección pensada para mujeres con estilo propio.'
        backgroundColor='mujer'
        linkUrl='#mujer'
        features={Womanfeatures}
      />
      <Feature72
        sectionId='man'
        heading='Carteras para Hombre'
        description='Descubre nuestra colección pensada para hombres con carácter y buen gusto.'
        backgroundColor='hombre'
        linkUrl='#hombre'
        features={Manfeatures}
      />
      {/* <Gallery6 heading='Productos Mujer' items={products} />
      <Gallery6 heading='Productos Hombre' items={products} /> */}
      <Contact02Page />
    </main>
  );
}
