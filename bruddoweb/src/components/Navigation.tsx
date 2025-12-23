import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navigation() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Show navbar when mouse is in top 100px of screen
      if (e.clientY < 100) {
        setIsNavVisible(true)
      } else {
        setIsNavVisible(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleNavigation = (target: string) => {
    setIsSheetOpen(false)
    if (target.startsWith('/')) {
      navigate(target)
      window.scrollTo(0, 0)
    } else {
      // It's a section id
      if (location.pathname !== '/') {
        navigate('/')
        // Wait for navigation to complete then scroll
        setTimeout(() => {
          const element = document.getElementById(target)
          element?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        const element = document.getElementById(target)
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 px-4 md:px-24 pointer-events-none'>
      <div
        className={`absolute inset-0 bg-slate-900 shadow-lg glass-card transition-opacity duration-300 ${
          isNavVisible ? 'opacity-100' : 'opacity-0'
        } hidden md:block`}
      />
      <div className='relative mx-auto py-4 flex justify-end md:justify-center pointer-events-auto'>
        {/* Desktop Navigation */}
        <div className='hidden md:flex justify-center gap-6 flex-wrap'>
          <Button
            variant='ghost'
            onClick={() => handleNavigation('vyhody')}
            className='text-lg font-medium text-blue-300 hover:text-blue-100 hover:bg-blue-900/50'
          >
            O nás
          </Button>
          <Button
            variant='ghost'
            onClick={() => handleNavigation('specifikacie')}
            className='text-lg font-medium text-blue-300 hover:text-blue-100 hover:bg-blue-900/50'
          >
            Rezervovať
          </Button>
          <Button
            variant='ghost'
            onClick={() => handleNavigation('cennik')}
            className='text-lg font-medium text-blue-300 hover:text-blue-100 hover:bg-blue-900/50'
          >
            Cenník
          </Button>
          <Button
            variant='ghost'
            onClick={() => handleNavigation('/contact')}
            className='text-lg font-medium text-blue-300 hover:text-blue-100 hover:bg-blue-900/50'
          >
            Kontakt
          </Button>
          <Button
            variant='ghost'
            onClick={() => handleNavigation('/terms')}
            className='text-lg font-medium text-blue-300 hover:text-blue-100 hover:bg-blue-900/50'
          >
            Podmienky
          </Button>
        </div>

        {/* Mobile Navigation (Hamburger) */}
        <div className='md:hidden'>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant='default'
                size='icon'
                className='bg-blue-600/50 text-blue-300 outline-none hover:text-blue-100 hover:bg-blue-900/50'
              >
                <Menu className='h-6 w-6' />
                <span className='sr-only'>Otvoriť menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side='right'
              className='bg-slate-900 border-l border-blue-500/20'
            >
              <SheetHeader>
                <SheetTitle className='text-blue-100'>Menu</SheetTitle>
                <SheetDescription className='text-blue-300'>
                  Navigácia
                </SheetDescription>
              </SheetHeader>
              <div className='flex flex-col gap-4 mt-8'>
                <Button
                  variant='ghost'
                  onClick={() => handleNavigation('vyhody')}
                  className='text-lg font-medium text-blue-300 hover:text-blue-100 hover:bg-blue-900/50 justify-start'
                >
                  O nás
                </Button>
                <Button
                  variant='ghost'
                  onClick={() => handleNavigation('specifikacie')}
                  className='text-lg font-medium text-blue-300 hover:text-blue-100 hover:bg-blue-900/50 justify-start'
                >
                  Rezervovať
                </Button>
                <Button
                  variant='ghost'
                  onClick={() => handleNavigation('cennik')}
                  className='text-lg font-medium text-blue-300 hover:text-blue-100 hover:bg-blue-900/50 justify-start'
                >
                  Cenník
                </Button>
                <Button
                  variant='ghost'
                  onClick={() => handleNavigation('/contact')}
                  className='text-lg font-medium text-blue-300 hover:text-blue-100 hover:bg-blue-900/50 justify-start'
                >
                  Kontakt
                </Button>
                <Button
                  variant='ghost'
                  onClick={() => handleNavigation('/terms')}
                  className='text-lg font-medium text-blue-300 hover:text-blue-100 hover:bg-blue-900/50 justify-start'
                >
                  Podmienky
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
