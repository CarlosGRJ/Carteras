import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MailIcon, PhoneIcon } from 'lucide-react';
import Link from 'next/link';

const Contact02Page = () => (
  <div className='min-h-screen flex items-center justify-center py-16 px-20 bg-white'>
    <div className='w-full max-w-screen-xl mx-auto px-6 xl:px-0'>
      <b className='text-muted-foreground'>Contáctame</b>
      <h2 className='mt-3 text-3xl md:text-4xl font-bold tracking-tight'>
        ¿Tienes dudas? Escríbeme directamente
      </h2>
      <p className='mt-3 text-base sm:text-lg'>
        Puedes escribirme por WhatsApp, rellenar el formulario o mandarme un
        correo directamente.
      </p>
      <div className='mt-24 grid lg:grid-cols-2 gap-16 md:gap-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12'>
          <div>
            <div className='h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full'>
              <MailIcon />
            </div>
            <h3 className='mt-6 font-semibold text-xl'>Correo</h3>
            <p className='my-2.5 text-muted-foreground'>
              Estoy aquí para ayudarte
            </p>
            <Link
              className='font-medium text-primary'
              href='mailto:akashmoradiya3444@gmail.com'>
              akashmoradiya3444@gmail.com
            </Link>
          </div>

          <div>
            <div className='h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full'>
              <PhoneIcon />
            </div>
            <h3 className='mt-6 font-semibold text-xl'>Teléfono</h3>
            <p className='my-2.5 text-muted-foreground'>
              Lun-Vi from 9am to 6pm.
            </p>
            <Link className='font-medium text-primary' href='tel:+525541934044'>
              +52 55 4193 4044
            </Link>
          </div>
        </div>

        {/* Form */}
        <Card className='bg-accent shadow-none'>
          <CardContent className='p-6 md:p-10'>
            <form>
              <div className='grid md:grid-cols-2 gap-x-8 gap-y-5'>
                <div className='col-span-2 sm:col-span-1'>
                  <Label htmlFor='firstName'>Nombre</Label>
                  <Input
                    placeholder='Nombre'
                    id='firstName'
                    className='mt-1.5 bg-white h-11 shadow-none'
                  />
                </div>
                <div className='col-span-2 sm:col-span-1'>
                  <Label htmlFor='lastName'>Apellido</Label>
                  <Input
                    placeholder='Apellido'
                    id='lastName'
                    className='mt-1.5 bg-white h-11 shadow-none'
                  />
                </div>
                <div className='col-span-2'>
                  <Label htmlFor='email'>Correo</Label>
                  <Input
                    type='email'
                    placeholder='Correo'
                    id='email'
                    className='mt-1.5 bg-white h-11 shadow-none'
                  />
                </div>
                <div className='col-span-2'>
                  <Label htmlFor='message'>Mensaje</Label>
                  <Textarea
                    id='message'
                    placeholder='Mensaje'
                    className='mt-1.5 bg-white shadow-none'
                    rows={6}
                  />
                </div>
              </div>
              <Button className='mt-6 w-full' size='lg'>
                Enviar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default Contact02Page;
