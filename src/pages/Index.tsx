import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const galleryItems = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/9314bf30-1004-47f3-bd96-f0b5a5883e83/files/c1df68de-b732-4b85-b5d9-33ef94f54f15.jpg',
      title: 'Минималистичная коллекция',
      category: 'Премиум'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/9314bf30-1004-47f3-bd96-f0b5a5883e83/files/030106e3-572d-4007-a1ba-a95d499c8495.jpg',
      title: 'Элегантные аксессуары',
      category: 'Стиль'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/9314bf30-1004-47f3-bd96-f0b5a5883e83/files/670fb314-2ed7-490e-8d56-cee67175cea5.jpg',
      title: 'Утонченность',
      category: 'Люкс'
    },
    {
      id: 4,
      image: 'https://cdn.poehali.dev/projects/9314bf30-1004-47f3-bd96-f0b5a5883e83/files/c1df68de-b732-4b85-b5d9-33ef94f54f15.jpg',
      title: 'Современный дизайн',
      category: 'Премиум'
    },
    {
      id: 5,
      image: 'https://cdn.poehali.dev/projects/9314bf30-1004-47f3-bd96-f0b5a5883e83/files/030106e3-572d-4007-a1ba-a95d499c8495.jpg',
      title: 'Изысканность',
      category: 'Стиль'
    },
    {
      id: 6,
      image: 'https://cdn.poehali.dev/projects/9314bf30-1004-47f3-bd96-f0b5a5883e83/files/670fb314-2ed7-490e-8d56-cee67175cea5.jpg',
      title: 'Чистые линии',
      category: 'Люкс'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'gallery'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold tracking-tight">ВЕЩИ</div>
            <div className="flex gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  activeSection === 'home' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  activeSection === 'about' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  activeSection === 'gallery' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Галерея
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-6xl lg:text-8xl font-light tracking-tight mb-6">
            Пространство
          </h1>
          <h2 className="text-6xl lg:text-8xl font-light tracking-tight mb-12">
            для вещей
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light tracking-wide">
            Минималистичный подход к хранению и демонстрации ваших любимых предметов
          </p>
          <button
            onClick={() => scrollToSection('gallery')}
            className="mt-12 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-sm font-medium tracking-wider"
          >
            ПОСМОТРЕТЬ КОЛЛЕКЦИЮ
          </button>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-6 bg-secondary/30">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-4xl font-light mb-6 tracking-tight">О нас</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                Мы создаём пространства, где каждая вещь находит своё место. 
                Наш подход основан на принципах минимализма и функциональности.
              </p>
              <p className="text-muted-foreground leading-relaxed font-light">
                Чистые линии, максимум воздуха и внимание к деталям — 
                вот что делает наши решения уникальными.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Icon name="Sparkles" size={24} className="text-foreground mt-1" />
                <div>
                  <h4 className="font-medium mb-2 tracking-wide">Качество</h4>
                  <p className="text-sm text-muted-foreground font-light">
                    Только лучшие материалы и решения
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Zap" size={24} className="text-foreground mt-1" />
                <div>
                  <h4 className="font-medium mb-2 tracking-wide">Простота</h4>
                  <p className="text-sm text-muted-foreground font-light">
                    Ничего лишнего, только суть
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Heart" size={24} className="text-foreground mt-1" />
                <div>
                  <h4 className="font-medium mb-2 tracking-wide">Забота</h4>
                  <p className="text-sm text-muted-foreground font-light">
                    Внимание к каждой детали
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="min-h-screen py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h3 className="text-5xl font-light mb-4 tracking-tight">Галерея</h3>
            <p className="text-muted-foreground font-light tracking-wide">
              Избранные предметы нашей коллекции
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden bg-secondary aspect-square mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-light tracking-widest uppercase">
                    {item.category}
                  </p>
                  <h4 className="text-lg font-medium tracking-wide">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground font-light">
            © 2024 ВЕЩИ. Все права защищены.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Facebook" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Twitter" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
