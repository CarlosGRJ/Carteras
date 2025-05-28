import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import Logo from '../ui/Logo';

const footerLinks = [
  {
    title: 'Inicio',
    href: '#home',
  },
  {
    title: 'Mujer',
    href: '#woman',
  },
  {
    title: 'Hombre',
    href: '#man',
  },
  {
    title: 'Contacto',
    href: '#contact',
  },
];

const Footer05Page = () => {
  return (
    <footer>
      <div className='max-w-screen-xl mx-auto'>
        <div className='py-12 flex flex-col justify-start items-center'>
          {/* Logo */}
          <Logo />

          <ul className='mt-6 flex items-center gap-4 flex-wrap'>
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className='text-muted-foreground hover:text-foreground font-medium'>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Separator />
        
        <div className='py-8 text-center'>
          {/* Copyright */}
          <span className='text-muted-foreground'>
            &copy; {new Date().getFullYear()} Erika Villa. Todos los derechos
            reservados. Sitio desarrollado por Carlos Rojas.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer05Page;
