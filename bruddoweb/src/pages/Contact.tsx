import { Button } from '@/components/ui/button'
import { Phone, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle')
  const [formMessage, setFormMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setFormStatus('success')
        setFormMessage('Objednávka bola úspešne odoslaná!')
        e.currentTarget.reset()
      } else {
        setFormStatus('error')
        setFormMessage('Chyba pri odosielaní. Skúste to znova.')
      }
    } catch (error: unknown) {
      console.log(error)
      setFormStatus('error')
      setFormMessage('Chyba pri odosielaní. Skúste to znova.')
    }
  }

  return (
    <section
      id='kontakt'
      className='min-h-screen flex items-center justify-center relative pt-24'
    >
      <div className='max-w-7xl mx-auto px-4 py-12 relative z-10'>
        <div className='glass-card p-8 md:p-12 rounded-xl shadow-2xl'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Left Column - Contact Info */}
            <div className='flex flex-col justify-center space-y-8'>
              <div>
                <h2 className='text-4xl md:text-5xl font-bold mb-4 text-blue-100'>
                  Kontaktujte nás
                </h2>
                <p className='text-xl text-blue-200'>
                  Máte otázku, či pripomienku? Neváhajte nás kontaktovať
                </p>
              </div>

              <div className='space-y-2 text-blue-200'>
                <p className='font-bold text-xl text-blue-100'>Amilen s.r.o.</p>
                <p>Štefánikova 6</p>
                <p>94901 Nitra</p>
                <p>IČO: 46672893</p>
                <p>DIČ: 2023524613</p>
                <p>IBAN: SK73 1100 0000 002928875487</p>
              </div>

              <div className='space-y-6'>
                <div className='flex items-center gap-4 text-blue-100'>
                  <Phone className='w-6 h-6 md:w-8 md:h-8' />
                  <span className='text-xl md:text-2xl font-medium'>
                    +421 905 126 509
                  </span>
                </div>
                <div className='flex items-center gap-4 text-blue-100'>
                  <Mail className='w-6 h-6 md:w-8 md:h-8' />
                  <span className='text-xl md:text-2xl font-medium'>
                    amilen@amilen.sk
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <form className='space-y-4' onSubmit={handleSubmit}>
                <input
                  type='hidden'
                  name='access_key'
                  value='YOUR_WEB3FORMS_ACCESS_KEY'
                />
                <input
                  type='hidden'
                  name='subject'
                  value='Nova sprava z kontaktneho formulara'
                />
                <input
                  type='hidden'
                  name='from_name'
                  value='Bruddoweb Contact Form'
                />

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium mb-2 text-blue-200'>
                      Krstné meno
                    </label>
                    <input
                      type='text'
                      name='first_name'
                      required
                      className='w-full px-4 py-3 bg-slate-800 border border-blue-800 text-blue-100 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium mb-2 text-blue-200'>
                      Priezvisko
                    </label>
                    <input
                      type='text'
                      name='last_name'
                      required
                      className='w-full px-4 py-3 bg-slate-800 border border-blue-800 text-blue-100 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium mb-2 text-blue-200'>
                      E-mail
                    </label>
                    <input
                      type='email'
                      name='email'
                      required
                      className='w-full px-4 py-3 bg-slate-800 border border-blue-800 text-blue-100 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium mb-2 text-blue-200'>
                      Telefón
                    </label>
                    <div className='flex'>
                      <input
                        type='tel'
                        name='phone'
                        defaultValue='+421'
                        className='w-full px-4 py-3 bg-slate-800 border border-blue-800 text-blue-100 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                      />
                    </div>
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium mb-2 text-blue-200'>
                      Názov spoločnosti
                    </label>
                    <input
                      type='text'
                      name='company'
                      className='w-full px-4 py-3 bg-slate-800 border border-blue-800 text-blue-100 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium mb-2 text-blue-200'>
                      IČO
                    </label>
                    <input
                      type='text'
                      name='ico'
                      className='w-full px-4 py-3 bg-slate-800 border border-blue-800 text-blue-100 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium mb-2 text-blue-200'>
                    Správa
                  </label>
                  <textarea
                    name='message'
                    required
                    className='w-full px-4 py-3 bg-slate-800 border border-blue-800 text-blue-100 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    rows={4}
                  />
                </div>

                {formStatus === 'success' && (
                  <div className='p-4 bg-green-900/50 border border-green-500 text-green-100 rounded-md'>
                    {formMessage}
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className='p-4 bg-red-900/50 border border-red-500 text-red-100 rounded-md'>
                    {formMessage}
                  </div>
                )}

                <div className='flex justify-center pt-4'>
                  <Button
                    type='submit'
                    className='bg-blue-700 hover:bg-blue-600 text-white font-bold px-8 py-6 text-lg rounded-md flex items-center gap-2'
                    disabled={formStatus === 'submitting'}
                  >
                    <Mail className='w-5 h-5' />
                    {formStatus === 'submitting'
                      ? 'Odosielam...'
                      : 'Odoslať formulár'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
