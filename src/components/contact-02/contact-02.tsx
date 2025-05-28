'use client';

import { MailIcon, PhoneIcon } from 'lucide-react';
import Link from 'next/link';

import emailjs from '@emailjs/browser';
import Turnstile from 'react-cloudflare-turnstile';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact02Page = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSent(false);
    setLoading(true);

    const form = formRef.current;
    if (!form) return;

    const firstName = (form.firstName as HTMLInputElement).value.trim();
    const lastName = (form.lastName as HTMLInputElement).value.trim();
    const email = (form.email as HTMLInputElement).value.trim();
    const message = (form.message as HTMLTextAreaElement).value.trim();

    if (!firstName || !lastName || !email || !message) {
      setLoading(false); // importante desactivar en caso de error
      toast({
        variant: 'destructive',
        title: 'Faltan campos',
        description: 'Por favor, completa todos los campos.',
      });
      return;
    }

    if (!validateEmail(email)) {
      setLoading(false);
      toast({
        variant: 'destructive',
        title: 'Correo no válido',
        description: 'Por favor, ingresa un correo electrónico válido.',
      });
      return;
    }

    if (!turnstileToken) {
      setLoading(false);
      toast({
        variant: 'destructive',
        title: 'Captcha requerido',
        description: 'Por favor, completa el captcha antes de enviar.',
      });
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
      )
      .then(() => {
        form.reset();
        toast({
          title: '¡Mensaje enviado!',
          description: 'Gracias por ponerte en contacto.',
          className: 'bg-green-500 text-white',
        });
      })
      .catch(() => {
        toast({
          variant: 'destructive',
          title: 'Error al enviar',
          description: 'Inténtalo más tarde o escribe por WhatsApp.',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id='contact'
      className='min-h-screen flex items-center justify-center py-16 px-10 sm:px-20 bg-white'>
      <div className='w-full max-w-screen-xl mx-auto xl:px-0'>
        <h2 className='mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6'>
          Contáctame
        </h2>

        <b className='text-muted-foreground'>
          ¿Tienes dudas? Escríbeme directamente
        </b>

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
                href='mailto:erikavillap73@gmail.com'>
                erikavillap73@gmail.com
              </Link>
            </div>

            <div>
              <div className='h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full'>
                <PhoneIcon />
              </div>
              <h3 className='mt-6 font-semibold text-xl'>Teléfono</h3>
              <p className='my-2.5 text-muted-foreground'>
                Lu-Vi from 9am to 6pm.
              </p>
              <Link
                className='font-medium text-primary'
                href='tel:+525541934044'>
                +52 55 4193 4044
              </Link>
            </div>
          </div>

          {/* Form */}
          <Card className='bg-accent shadow-none'>
            <CardContent className='p-6 md:p-10'>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 gap-x-8 gap-y-5'>
                  <div className='col-span-2 sm:col-span-1'>
                    <Label htmlFor='firstName'>Nombre</Label>
                    <Input
                      placeholder='Nombre'
                      id='firstName'
                      name='firstName'
                      className='mt-1.5 bg-white h-11 shadow-none'
                      required
                      aria-label='Nombre'
                    />
                  </div>

                  <div className='col-span-2 sm:col-span-1'>
                    <Label htmlFor='lastName'>Apellido</Label>
                    <Input
                      placeholder='Apellido'
                      id='lastName'
                      name='lastName'
                      className='mt-1.5 bg-white h-11 shadow-none'
                      required
                      aria-label='Apellido'
                    />
                  </div>
                  <div className='col-span-2'>
                    <Label htmlFor='email'>Correo</Label>
                    <Input
                      type='email'
                      placeholder='Correo'
                      id='email'
                      name='email'
                      className='mt-1.5 bg-white h-11 shadow-none'
                      required
                      aria-label='Correo'
                    />
                  </div>
                  <div className='col-span-2'>
                    <Label htmlFor='message'>Mensaje</Label>
                    <Textarea
                      id='message'
                      name='message'
                      placeholder='Mensaje'
                      className='mt-1.5 bg-white shadow-none'
                      rows={6}
                      required
                      aria-label='Mensaje'
                    />
                  </div>

                  <div className='col-span-2'>
                    <Turnstile
                      turnstileSiteKey={
                        process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''
                      }
                      callback={(token) => setTurnstileToken(token)}
                      theme='light'
                      size='normal'
                      retry='auto'
                      refreshExpired='auto'
                    />
                  </div>
                </div>

                {error && <p className='text-red-600 mt-4'>{error}</p>}
                {sent && (
                  <p className='text-green-600 mt-4'>
                    ¡Mensaje enviado correctamente!
                  </p>
                )}

                <Button
                  className='mt-6 w-full'
                  size='lg'
                  disabled={loading}
                  aria-label='Enviar'>
                  {loading ? 'Enviando...' : 'Enviar'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact02Page;
