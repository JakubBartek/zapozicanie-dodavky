import { Button } from '@/components/ui/button'
import { useState } from 'react'
import {
  Euro,
  BookOpen,
  PhoneCall,
  Ticket,
  Truck,
  CalendarDays,
  Check,
  Info,
  ShieldCheck,
} from 'lucide-react'
import van1 from '@/assets/van1.avif'
import van2 from '@/assets/van2.avif'
import van3 from '@/assets/van3.avif'
import van4 from '@/assets/van4.avif'
import van5 from '@/assets/van5.avif'
import van0 from '@/assets/van0.jpg'
import { useNavigate } from 'react-router-dom'

const vansData = [
  {
    name: 'Renault Master',
    subtitle: '2.3 dCi 110k Minibus',
    price: '46,00',
    tags: [
      'Manuál',
      '110 koní / 81 kW',
      'Diesel',
      '2.3 l',
      'FWD',
      '5 dverí',
      'Minibus',
      'Klimatizácia',
    ],
    images: [van1, van2, van3, van4, van5],
    badges: [{ text: 'Dostupné ihneď', color: 'bg-blue-700/80' }],
  },
]

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const navigate = useNavigate()

  const images = vansData[0].images // Default images for lightbox context if needed, though we use per-card images
  const currentImageIndex = lightboxImage ? images.indexOf(lightboxImage) : -1

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentImageIndex < images.length - 1) {
      setLightboxImage(images[currentImageIndex + 1])
    } else {
      setLightboxImage(images[0])
    }
  }

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentImageIndex > 0) {
      setLightboxImage(images[currentImageIndex - 1])
    } else {
      setLightboxImage(images[images.length - 1])
    }
  }

  const scrollToContact = () => {
    navigate('/contact')
  }

  return (
    <div>
      {/* Vitajte Section */}
      <section
        id='vitajte'
        className='min-h-screen flex items-center justify-center relative overflow-hidden'
      >
        <div className='absolute inset-0 z-0'>
          <img
            src={van0}
            alt='Background'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/60' />
        </div>
        <div className='max-w-4xl mx-auto px-4 py-32 relative z-10 text-center'>
          <h1 className='text-5xl font-extrabold mb-6 text-white drop-shadow-lg'>
            Vitajte na našej stránke
          </h1>
          <p className='text-xl text-blue-100 drop-shadow-md'>
            Objavte ponuku našich vozidiel na prenájom
          </p>
        </div>
      </section>
      {/* Naše výhody Section */}
      <section
        id='vyhody'
        className='min-h-screen flex items-center justify-center relative'
      >
        <div className='max-w-6xl mx-auto px-4 py-32 relative z-10'>
          <h2 className='text-4xl font-bold mb-12 text-center text-blue-300'>
            Naše výhody
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Item 1 */}
            <div className='glass-card p-6 rounded-xl hover:bg-white/5 transition-colors'>
              <div className='mb-4 text-red-500'>
                <Euro size={48} strokeWidth={1.5} />
              </div>
              <h3 className='text-xl font-bold mb-3 text-blue-100 uppercase'>
                Šetrite čas a peniaze
              </h3>
              <p className='text-blue-200 text-sm leading-relaxed'>
                Dodávky Amilen disponujú najmodernejšími motorizáciami a preto
                vynikajú v pomere spotreby k výkonu. Keďže spĺňajú tie
                najprísnejšie emisné normy ušetríte pri vstupe do nízkoemisných
                zón a vyhnete sa zbytočnej byrokracii.
              </p>
            </div>

            {/* Item 2 */}
            <div className='glass-card p-6 rounded-xl hover:bg-white/5 transition-colors'>
              <div className='mb-4 text-red-500'>
                <BookOpen size={48} strokeWidth={1.5} />
              </div>
              <h3 className='text-xl font-bold mb-3 text-blue-100 uppercase'>
                Poistenie v cene
              </h3>
              <p className='text-blue-200 text-sm leading-relaxed'>
                Všetky vozidlá od Amilen majú poistenie proti krádeži, povinné
                zmluvné poistenie a havarijne poistenie. Aj v krízovej situácii
                sa tak môžete spoľahnúť na plnú podporu.
              </p>
            </div>

            {/* Item 3 */}
            <div className='glass-card p-6 rounded-xl hover:bg-white/5 transition-colors'>
              <div className='mb-4 text-red-500'>
                <PhoneCall size={48} strokeWidth={1.5} />
              </div>
              <h3 className='text-xl font-bold mb-3 text-blue-100 uppercase'>
                Asistencia 24/7
              </h3>
              <p className='text-blue-200 text-sm leading-relaxed'>
                Využitím služieb Amilen môžete počítať s asistenciou 24/7 v
                rámci celej EÚ. Aj v komplikovanej situácii sa môžete spoľahnúť
                na to, že v tom nie ste sami.
              </p>
            </div>

            {/* Item 4 */}
            <div className='glass-card p-6 rounded-xl hover:bg-white/5 transition-colors'>
              <div className='mb-4 text-red-500'>
                <Ticket size={48} strokeWidth={1.5} />
              </div>
              <h3 className='text-xl font-bold mb-3 text-blue-100 uppercase'>
                Diaľničná známka v cene
              </h3>
              <p className='text-blue-200 text-sm leading-relaxed'>
                Každé vozidlo Amilen je vybavené slovenskou diaľničnou známkou.
                To znamená, že už vás v rámci Slovenska nečakajú ďalšie náklady
                za spoplatnené trasy.
              </p>
            </div>

            {/* Item 5 */}
            <div className='glass-card p-6 rounded-xl hover:bg-white/5 transition-colors'>
              <div className='mb-4 text-red-500'>
                <Truck size={48} strokeWidth={1.5} />
              </div>
              <h3 className='text-xl font-bold mb-3 text-blue-100 uppercase'>
                Ihneď dostupné nové dodávky
              </h3>
              <p className='text-blue-200 text-sm leading-relaxed'>
                Okrem toho, že v Amilen nájdete okamžite dostupné vozidlá bez
                čakania, môžete si byť istí, že dostanete vždy auto s nízkym
                nájazdom kilometrov, v záruke, s nadštandardnou výbavou a
                reprezentatívnym vzhľadom.
              </p>
            </div>

            {/* Item 6 */}
            <div className='glass-card p-6 rounded-xl hover:bg-white/5 transition-colors'>
              <div className='mb-4 text-red-500'>
                <CalendarDays size={48} strokeWidth={1.5} />
              </div>
              <h3 className='text-xl font-bold mb-3 text-blue-100 uppercase'>
                Flexibilita pre váš biznis
              </h3>
              <p className='text-blue-200 text-sm leading-relaxed'>
                S dĺžkou prenájmu sa operatívne prispôsobíme vašim potrebám, či
                potrebujete dodávku na deň, alebo niekoľko mesiacov. Môžete sa
                spoľahnúť na partnera, ktorý sa prispôsobí vášmu podnikaniu.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Špecifikácie Section */}
      <section
        id='specifikacie'
        className='min-h-screen flex items-center justify-center relative'
      >
        <div className='w-full py-32 z-10'>
          <h2 className='text-4xl font-bold mb-12 text-center text-blue-300'>
            Rezervujte si
          </h2>

          <div className='w-full px-4 flex justify-center'>
            {vansData.map((van, index) => (
              <div
                key={index}
                className='max-w-md w-full glass-card p-4 md:p-6 rounded-xl shadow-2xl flex flex-col transform transition-all duration-500 md:hover:scale-[1.02]'
              >
                {/* Badges */}
                <div className='flex flex-wrap gap-2 mb-4 min-h-[28px]'>
                  {van.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className={`${badge.color} text-white px-2 py-1 rounded font-bold text-xs uppercase tracking-wider`}
                    >
                      {badge.text}
                    </span>
                  ))}
                </div>

                {/* Image */}
                <div
                  className='relative group mb-6 overflow-hidden rounded-lg bg-white/5 p-4 cursor-pointer flex-shrink-0'
                  onClick={() => setLightboxImage(van.images[0])}
                >
                  <img
                    src={van.images[0]}
                    alt={van.name}
                    className='w-full h-48 object-contain hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20'>
                    <span className='bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm'>
                      Zväčšiť
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className='mb-4'>
                  <h3 className='text-xl font-bold text-blue-100 line-clamp-1'>
                    {van.name}
                  </h3>
                  <p className='text-blue-300 text-sm mt-1 line-clamp-1'>
                    {van.subtitle}
                  </p>
                </div>

                {/* Tags */}
                <div className='flex flex-wrap gap-2 mb-6 flex-1 content-start'>
                  {van.tags.map((tag) => (
                    <span
                      key={tag}
                      className='bg-slate-700/50 text-blue-100 px-2 py-1 rounded text-xs font-medium border border-blue-500/20'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer: Price and Button */}
                <div className='flex items-center justify-between pt-4 border-t border-blue-500/20 mt-auto'>
                  <div>
                    <span className='text-blue-200 text-xs block'>Cena od</span>
                    <div className='flex items-baseline gap-1'>
                      <span className='text-blue-300 text-xl font-bold'>
                        {van.price} €
                      </span>
                      <span className='text-blue-200 text-xs'>/ deň</span>
                    </div>
                  </div>
                  <Button
                    className='bg-blue-700 hover:bg-blue-600 text-white font-bold px-4 py-2 text-sm'
                    onClick={() => {
                      const element = document.getElementById('cennik')
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Podrobnosti
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Cennik Section */}
      <section
        id='cennik'
        className='min-h-screen flex items-center justify-center relative py-20'
      >
        <div className='max-w-7xl mx-auto px-4 relative z-10 w-full'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 text-blue-100'>
              Cenník prenájmu
            </h2>
            <p className='text-xl text-blue-300 max-w-2xl mx-auto'>
              Transparentné ceny bez skrytých poplatkov. Vyberte si dĺžku
              prenájmu, ktorá vám vyhovuje.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* Tier 1: 3 hodiny */}
            <div className='glass-card p-8 rounded-xl flex flex-col hover:bg-slate-800/60 transition-colors border border-blue-500/20'>
              <div className='mb-4'>
                <h3 className='text-xl font-bold text-blue-100'>3 hodiny</h3>
                <p className='text-blue-400 text-sm'>Krátky prenájom</p>
              </div>
              <div className='mb-6'>
                <span className='text-4xl font-bold text-white'>49 €</span>
                <span className='text-blue-300'> / 3 hod</span>
              </div>
              <ul className='space-y-3 mb-8 flex-1'>
                <li className='flex items-center text-blue-200 text-sm'>
                  <Check className='w-4 h-4 mr-2 text-green-400' />
                  Limit 200 km
                </li>
                <li className='flex items-center text-blue-200 text-sm'>
                  <Check className='w-4 h-4 mr-2 text-green-400' />
                  PZP + Havarijné poistenie
                </li>
                <li className='flex items-center text-blue-200 text-sm'>
                  <Check className='w-4 h-4 mr-2 text-green-400' />
                  Diaľničná známka SR
                </li>
              </ul>
              <Button
                onClick={scrollToContact}
                className='w-full bg-blue-900/50 hover:bg-blue-800 text-blue-100 border border-blue-500/30'
              >
                Rezervovať
              </Button>
            </div>

            {/* Tier 2: 1-2 dni */}
            <div className='glass-card p-8 rounded-xl flex flex-col hover:bg-slate-800/60 transition-colors border border-blue-500/20'>
              <div className='mb-4'>
                <h3 className='text-xl font-bold text-blue-100'>1 - 2 dni</h3>
                <p className='text-blue-400 text-sm'>Krátkodobý</p>
              </div>
              <div className='mb-6'>
                <span className='text-4xl font-bold text-white'>69 €</span>
                <span className='text-blue-300'> / deň</span>
              </div>
              <ul className='space-y-3 mb-8 flex-1'>
                <li className='flex items-center text-blue-200 text-sm'>
                  <Check className='w-4 h-4 mr-2 text-green-400' />
                  Limit 400 km / deň
                </li>
                <li className='flex items-center text-blue-200 text-sm'>
                  <Check className='w-4 h-4 mr-2 text-green-400' />
                  PZP + Havarijné poistenie
                </li>
                <li className='flex items-center text-blue-200 text-sm'>
                  <Check className='w-4 h-4 mr-2 text-green-400' />
                  Diaľničná známka SR
                </li>
              </ul>
              <Button
                onClick={scrollToContact}
                className='w-full bg-blue-900/50 hover:bg-blue-800 text-blue-100 border border-blue-500/30'
              >
                Rezervovať
              </Button>
            </div>

            {/* Tier 3: 3-6 dni */}
            <div className='glass-card p-8 rounded-xl flex flex-col hover:bg-slate-800/60 transition-colors border border-blue-500/20'>
              <div className='mb-4'>
                <h3 className='text-xl font-bold text-blue-100'>3 - 6 dní</h3>
                <p className='text-blue-400 text-sm'>Strednodobý</p>
              </div>
              <div className='mb-6'>
                <span className='text-4xl font-bold text-white'>66 €</span>
                <span className='text-blue-300'> / deň</span>
              </div>
              <ul className='space-y-3 mb-8 flex-1'>
                <li className='flex items-center text-blue-200 text-sm'>
                  <Check className='w-4 h-4 mr-2 text-green-400' />
                  Limit 400 km / deň
                </li>
                <li className='flex items-center text-blue-200 text-sm'>
                  <Check className='w-4 h-4 mr-2 text-green-400' />
                  PZP + Havarijné poistenie
                </li>
                <li className='flex items-center text-blue-200 text-sm'>
                  <Check className='w-4 h-4 mr-2 text-green-400' />
                  Diaľničná známka SR
                </li>
              </ul>
              <Button
                onClick={scrollToContact}
                className='w-full bg-blue-900/50 hover:bg-blue-800 text-blue-100 border border-blue-500/30'
              >
                Rezervovať
              </Button>
            </div>

            {/* Tier 4: 7-10 dni */}
            <div className='glass-card p-8 rounded-xl flex flex-col hover:bg-slate-800/60 transition-colors border border-blue-500/20'>
              <div className='mb-4'>
                <h3 className='text-xl font-bold text-blue-100'>7 - 10 dní</h3>
                <p className='text-blue-400 text-sm'>Týždenný</p>
              </div>
              <div className='mb-6'>
                <span className='text-4xl font-bold text-white'>63 €</span>
                <span className='text-blue-300'> / deň</span>
              </div>
              <ul className='space-y-3 mb-8 flex-1'>
                <li className='flex items-center text-blue-200 text-sm'>
                  <Check className='w-4 h-4 mr-2 text-green-400' />
                  Limit 400 km / deň
                </li>
                <li className='flex items-center text-blue-200 text-sm'>
                  <Check className='w-4 h-4 mr-2 text-green-400' />
                  PZP + Havarijné poistenie
                </li>
                <li className='flex items-center text-blue-200 text-sm'>
                  <Check className='w-4 h-4 mr-2 text-green-400' />
                  Diaľničná známka SR
                </li>
              </ul>
              <Button
                onClick={scrollToContact}
                className='w-full bg-blue-900/50 hover:bg-blue-800 text-blue-100 border border-blue-500/30'
              >
                Rezervovať
              </Button>
            </div>

            {/* Tier 5: 11-20 dni */}
            <div className='glass-card p-8 rounded-xl flex flex-col hover:bg-slate-800/60 transition-colors border border-blue-500/20'>
              <div className='mb-4'>
                <h3 className='text-xl font-bold text-blue-100'>11 - 20 dní</h3>
                <p className='text-blue-400 text-sm'>Dlhodobý</p>
              </div>
              <div className='mb-6'>
                <span className='text-4xl font-bold text-white'>59 €</span>
                <span className='text-blue-300'> / deň</span>
              </div>
              <ul className='space-y-3 mb-8 flex-1'>
                <li className='flex items-center text-blue-200 text-sm'>
                  <Check className='w-4 h-4 mr-2 text-green-400' />
                  Limit 400 km / deň
                </li>
                <li className='flex items-center text-blue-200 text-sm'>
                  <Check className='w-4 h-4 mr-2 text-green-400' />
                  PZP + Havarijné poistenie
                </li>
                <li className='flex items-center text-blue-200 text-sm'>
                  <Check className='w-4 h-4 mr-2 text-green-400' />
                  Diaľničná známka SR
                </li>
              </ul>
              <Button
                onClick={scrollToContact}
                className='w-full bg-blue-900/50 hover:bg-blue-800 text-blue-100 border border-blue-500/30'
              >
                Rezervovať
              </Button>
            </div>

            {/* Tier 6: Viac ako 20 dni */}
            <div className='glass-card p-8 rounded-xl flex flex-col hover:bg-slate-800/60 transition-colors border border-blue-500/20'>
              <div className='mb-4'>
                <h3 className='text-xl font-bold text-blue-100'>
                  Viac ako 20 dní
                </h3>
                <p className='text-blue-400 text-sm'>Individuálny</p>
              </div>
              <div className='mb-6'>
                <span className='text-3xl font-bold text-white'>Dohodou</span>
              </div>
              <ul className='space-y-3 mb-8 flex-1'>
                <li className='flex items-center text-blue-200 text-sm'>
                  <Check className='w-4 h-4 mr-2 text-green-400' />
                  Individuálny limit km
                </li>
                <li className='flex items-center text-blue-200 text-sm'>
                  <Check className='w-4 h-4 mr-2 text-green-400' />
                  PZP + Havarijné poistenie
                </li>
                <li className='flex items-center text-blue-200 text-sm'>
                  <Check className='w-4 h-4 mr-2 text-green-400' />
                  Diaľničná známka SR
                </li>
              </ul>
              <Button
                onClick={scrollToContact}
                className='w-full bg-blue-900/50 hover:bg-blue-800 text-blue-100 border border-blue-500/30'
              >
                Rezervovať
              </Button>
            </div>
          </div>

          {/* Special Offer: Weekend */}
          <div className='mt-8 glass-card p-8 rounded-xl border border-blue-500/20 relative overflow-hidden'>
            <div className='absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg'>
              Špeciálna ponuka
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
              <div>
                <h3 className='text-2xl font-bold text-blue-100 mb-2'>
                  Víkendový prenájom
                </h3>
                <p className='text-blue-300 mb-4'>
                  Dodávku si prevezmete v piatok poobede a vrátite v pondelok
                  ráno.
                </p>
                <ul className='space-y-2'>
                  <li className='flex items-center text-blue-200 text-sm'>
                    <Check className='w-4 h-4 mr-2 text-green-400' />
                    Limit 800 km
                  </li>
                  <li className='flex items-center text-blue-200 text-sm'>
                    <Check className='w-4 h-4 mr-2 text-green-400' />
                    Cena s DPH
                  </li>
                </ul>
              </div>
              <div className='text-center md:text-right'>
                <div className='mb-4'>
                  <span className='text-5xl font-bold text-white'>119 €</span>
                  <span className='text-blue-300 block text-sm'>za víkend</span>
                </div>
                <Button
                  onClick={scrollToContact}
                  className='bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20 px-8'
                >
                  Rezervovať
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='glass-card p-6 rounded-xl border border-blue-500/20'>
              <h4 className='text-lg font-bold text-blue-100 mb-3 flex items-center'>
                <Info className='w-5 h-5 mr-2 text-blue-400' />
                Dôležité informácie
              </h4>
              <ul className='space-y-2 text-blue-200 text-sm'>
                <li>
                  • Vratná záloha (depozit): <strong>300 €</strong>
                </li>
                <li>
                  • Denný limit najazdených km: <strong>400 km</strong>
                </li>
                <li>
                  • Poplatok za prekročenie limitu: <strong>0,15 € / km</strong>
                </li>
                <li>
                  • Pri prenájme dlhšom ako 5 dní je denný limit km určovaný
                  individuálne
                </li>
                <li>• Ceny uvedené v tabuľke sú s DPH</li>
              </ul>
            </div>
            <div className='glass-card p-6 rounded-xl border border-blue-500/20'>
              <h4 className='text-lg font-bold text-blue-100 mb-3 flex items-center'>
                <ShieldCheck className='w-5 h-5 mr-2 text-blue-400' />V cene je
                zahrnuté
              </h4>
              <ul className='space-y-2 text-blue-200 text-sm'>
                <li>• HP (spoluúčasť 5%, min. 300 €)</li>
                <li>• PZP (Povinné zmluvné poistenie)</li>
                <li>• Slovenská a česká diaľničná známka</li>
                <li>• Bezplatné parkovanie Vášho vozidla v našom areáli</li>
                <li>• Asistenčné služby</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className='fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4'
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={showPrevImage}
            className='absolute left-4 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-blue-300 transition-colors z-10 p-4'
            aria-label='Predchádzajúci obrázok'
          >
            ‹
          </button>

          <div className='relative max-w-7xl max-h-[90vh]'>
            <button
              onClick={() => setLightboxImage(null)}
              className='absolute -top-12 right-0 text-white text-4xl hover:text-blue-300 transition-colors'
              aria-label='Zavrieť'
            >
              ×
            </button>
            <img
              src={lightboxImage}
              alt='Veľký náhľad'
              className='max-w-full max-h-[90vh] object-contain rounded-lg'
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <button
            onClick={showNextImage}
            className='absolute right-4 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-blue-300 transition-colors z-10 p-4'
            aria-label='Ďalší obrázok'
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}
