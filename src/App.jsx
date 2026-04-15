import React, { useState, useEffect } from 'react';
import { Clock, Dumbbell, Droplets, MapPin, Phone, X, Check, Menu, Instagram, MessageCircle, Globe } from 'lucide-react';
import ChatWidget from './ChatWidget';

export default function GueeGym() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isTouristPrice, setIsTouristPrice] = useState(true);
  const [language, setLanguage] = useState('id'); // 'id' or 'en'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.fade-in-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  // Translations
  const t = {
    en: {
      facilities: "Facilities",
      pricing: "Pricing",
      whyUs: "Why Us",
      joinNow: "JOIN NOW",
      stopProcrastinating: "STOP",
      procrastinating: "PROCRASTINATING.",
      startNow: "START NOW.",
      seriousGym: "Serious gym for serious results.",
      noBullshit: "No bullshit, no drama.",
      startTraining: "START TRAINING",
      openingHours: "Opening Hours",
      monSat: "Mon-Sat: 7AM - 9PM",
      sunday: "Sun: 8AM - 9PM",
      training: "Training",
      personalTrainer: "Personal Trainer",
      facilitiesText: "Facilities",
      showerLocker: "Shower & Locker",
      whyNotStarted: "WHY HAVEN'T YOU",
      started: "STARTED?",
      procrastinatingTitle: "Procrastinating on starting training",
      procrastinatingDesc: "Tomorrow, the day after, next week... when?",
      confusedTitle: "Confused where to start",
      confusedDesc: "Our trainers are ready to guide you from zero",
      notConsistentTitle: "Afraid of not being consistent",
      notConsistentDesc: "Supportive environment keeps you coming back",
      choosePlan: "CHOOSE YOUR PLAN",
      investmentBody: "Investment for a stronger body",
      daily: "DAILY",
      dailyPass: "DAILY PASS",
      perDay: "/day",
      allEquipment: "Access all gym equipment",
      lockerShower: "Locker & shower",
      choosePlanBtn: "CHOOSE PLAN",
      starter: "STARTER",
      month1: "1 MONTH",
      perMonth: "/month",
      premiumLocker: "Premium locker & shower",
      trainerConsult: "Trainer consultation",
      popular: "POPULAR",
      months3: "3 MONTHS",
      save: "Save",
      all1Month: "All from 1 month plan",
      freeTraining: "Free training program",
      committed: "COMMITTED",
      months6: "6 MONTHS",
      all3Month: "All from 3 month plan",
      freePT1: "1x free PT session",
      ultimate: "ULTIMATE",
      year1: "1 YEAR",
      bestValue: "BEST VALUE 🔥",
      all6Month: "All from 6 month plan",
      freePT2: "2x free PT sessions",
      priorityAccess: "Priority facility access",
      ptPackage: "PT PACKAGE",
      sessions10: "10 SESSIONS",
      sessions10PT: "10x personal training sessions",
      customProgram: "Customized program",
      progressMonitor: "Progress monitoring",
      ptIntensive: "PT INTENSIVE",
      sessions20: "20 SESSIONS",
      sessions20PT: "20x personal training sessions",
      mealPlan: "Meal plan guidance",
      completeFacilities: "COMPLETE",
      facilities2: "FACILITIES",
      personalTrainingTitle: "Personal Training",
      personalTrainingDesc: "Experienced trainers ready to help you reach your goals with customized programs",
      premiumLockerTitle: "Premium Locker",
      premiumLockerDesc: "Store your valuables safely. Spacious and clean lockers for maximum comfort",
      showerWCTitle: "Shower & WC",
      showerWCDesc: "Clean and modern shower facilities. Maintained daily for your comfort",
      proteinCafeTitle: "Protein Cafe",
      proteinCafeDesc: "Quality supplements and recovery drinks. Directly support your performance and recovery",
      whyGueeGym: "WHY",
      gueeGym: "GUEE GYM?",
      seriousEnv: "Serious Environment",
      seriousEnvDesc: "Focus on training, not selfies. Members here are serious about building their bodies and respect each other.",
      noComplicated: "No Complicated, No Drama",
      noComplicatedDesc: "Simple system: register, pay, train. No weird contracts, no annoying sales, no hidden fees.",
      importantYouCome: "What Matters: YOU SHOW UP",
      importantYouComeDesc: "Complete equipment, trainers on standby, proper facilities. Everything is ready, only your commitment is missing.",
      readyToStart: "READY TO START TRAINING?",
      stopExcuses: "Stop making excuses. Start today. Change your life.",
      joinNowCTA: "JOIN NOW",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      allRights: "All rights reserved.",
      designedWith: "Designed with 💪 for serious gains",
      touristPrice: "Tourist / International",
      localPrice: "Local Member",
      selectMembership: "Select your membership type:"
    },
    id: {
      facilities: "Fasilitas",
      pricing: "Pricing",
      whyUs: "Kenapa Kami",
      joinNow: "JOIN NOW",
      stopProcrastinating: "STOP",
      procrastinating: "NUNDA.",
      startNow: "MULAI SEKARANG.",
      seriousGym: "Gym serius untuk hasil serius.",
      noBullshit: "No bullshit, no drama.",
      startTraining: "MULAI LATIHAN",
      openingHours: "Jam Buka",
      monSat: "Sen-Sab: 07:00 - 21:00",
      sunday: "Ming: 08:00 - 21:00",
      training: "Training",
      personalTrainer: "Personal Trainer",
      facilitiesText: "Fasilitas",
      showerLocker: "Shower & Locker",
      whyNotStarted: "KENAPA KAMU",
      started: "BELUM MULAI?",
      procrastinatingTitle: "Nunda-nunda mulai latihan",
      procrastinatingDesc: "Besok, lusa, minggu depan... kapan?",
      confusedTitle: "Bingung mau mulai dari mana",
      confusedDesc: "Trainer kami siap guide dari nol",
      notConsistentTitle: "Takut ga konsisten",
      notConsistentDesc: "Environment yang supportive bikin lo balik terus",
      choosePlan: "PILIH PAKET",
      investmentBody: "Investasi untuk tubuh yang lebih kuat",
      daily: "HARIAN",
      dailyPass: "DAILY PASS",
      perDay: "/hari",
      allEquipment: "Akses semua alat gym",
      lockerShower: "Locker & shower",
      choosePlanBtn: "PILIH PAKET",
      starter: "STARTER",
      month1: "1 BULAN",
      perMonth: "/bulan",
      premiumLocker: "Locker & shower premium",
      trainerConsult: "Konsultasi trainer",
      popular: "POPULAR",
      months3: "3 BULAN",
      save: "Hemat",
      all1Month: "Semua dari paket 1 bulan",
      freeTraining: "Program training gratis",
      committed: "COMMITTED",
      months6: "6 BULAN",
      all3Month: "Semua dari paket 3 bulan",
      freePT1: "1x sesi PT gratis",
      ultimate: "ULTIMATE",
      year1: "1 TAHUN",
      bestValue: "BEST VALUE 🔥",
      all6Month: "Semua dari paket 6 bulan",
      freePT2: "2x sesi PT gratis",
      priorityAccess: "Prioritas akses fasilitas",
      ptPackage: "PT PACKAGE",
      sessions10: "10 PERTEMUAN",
      sessions10PT: "10x sesi personal training",
      customProgram: "Program customized",
      progressMonitor: "Monitoring progres",
      ptIntensive: "PT INTENSIVE",
      sessions20: "20 PERTEMUAN",
      sessions20PT: "20x sesi personal training",
      mealPlan: "Meal plan guidance",
      completeFacilities: "FASILITAS",
      facilities2: "LENGKAP",
      personalTrainingTitle: "Personal Training",
      personalTrainingDesc: "Trainer berpengalaman siap bantu kamu mencapai target dengan program yang disesuaikan",
      premiumLockerTitle: "Locker Premium",
      premiumLockerDesc: "Simpan barang berharga dengan aman. Locker spacious dan bersih untuk kenyamanan maksimal",
      showerWCTitle: "Shower & WC",
      showerWCDesc: "Fasilitas mandi bersih dan modern. Dijaga kebersihannya setiap hari untuk kenyamanan maksimal",
      proteinCafeTitle: "Protein Cafe",
      proteinCafeDesc: "Suplemen berkualitas dan minuman recovery. Langsung support performa dan pemulihan kamu",
      whyGueeGym: "KENAPA",
      gueeGym: "GUEE GYM?",
      seriousEnv: "Serious Environment",
      seriousEnvDesc: "Fokus latihan, bukan selfie. Member di sini serius bangun badan dan respect satu sama lain.",
      noComplicated: "No Ribet, No Drama",
      noComplicatedDesc: "Sistem simpel: daftar, bayar, latihan. Ga ada kontrak aneh, ga ada sales nyebelin, ga ada hidden fee.",
      importantYouCome: "Yang Penting: LO DATENG",
      importantYouComeDesc: "Alat lengkap, trainer standby, fasilitas proper. Semua udah ready, tinggal komitmen lo aja yang kurang.",
      readyToStart: "SIAP MULAI LATIHAN?",
      stopExcuses: "Stop cari alasan. Mulai hari ini. Ubah hidup lo.",
      joinNowCTA: "JOIN SEKARANG",
      quickLinks: "Quick Links",
      contactUs: "Hubungi Kami",
      allRights: "All rights reserved.",
      designedWith: "Designed with 💪 for serious gains",
      touristPrice: "Tourist / International",
      localPrice: "Local Member",
      selectMembership: "Pilih tipe membership:"
    }
  };

  const lang = t[language];

  // Pricing data
  const pricing = {
    tourist: {
      daily: { price: "30K", original: null },
      month1: { price: "300K", original: null },
      month3: { price: "750K", original: "900K" },
      month6: { price: "1.25JT", original: "1.8JT" },
      year1: { price: "2.2JT", original: "3.6JT" },
      pt10: { price: "1.25JT", original: null },
      pt20: { price: "2.3JT", original: null }
    },
    local: {
      daily: { price: "20K", original: null },
      month1: { price: "200K", original: null },
      month3: { price: "600K", original: null },
      month6: { price: "1JT", original: null },
      year1: { price: "2JT", original: null },
      pt10: { price: "1.25JT", original: null },
      pt20: { price: "2.3JT", original: null }
    }
  };

  const currentPricing = isTouristPrice ? pricing.tourist : pricing.local;

  // WhatsApp message template
  const getWhatsAppMessage = (packageName) => {
    const template = language === 'en' 
      ? `Hello Guee Gym,

I want to join the ${packageName} package.

Here is my data:
Name: 
WhatsApp Number: 
Email: 
Date of Birth: 
Address: `
      : `Halo Guee Gym,

Saya mau daftar paket ${packageName}.

Berikut data saya:
Nama: 
No WhatsApp: 
Email: 
Tanggal Lahir: 
Alamat: `;
    
    return `https://wa.me/6285737455112?text=${encodeURIComponent(template)}`;
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative">
      {/* FLOATING WHATSAPP BUTTON */}
      {/* FLOATING WHATSAPP BUTTON */}
<a
  href="https://wa.me/6285737455112"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 group"
  aria-label="Chat on WhatsApp"
>
  <MessageCircle className="w-7 h-7" />
  <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-sm font-semibold">
    WhatsApp
  </span>
</a>

{/* AI CHATBOT — bottom right */}
<ChatWidget language={language} />

      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg shadow-red-600/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 lg:py-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/gg.png" 
              alt="Guee Gym Logo" 
              className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
            />
            <div className="text-xl lg:text-2xl font-black tracking-tight">
              <span className="text-red-600">GUEE</span> GYM
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('facilities')} className="hover:text-red-600 transition-all duration-200 font-medium relative group">
              {lang.facilities}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={scrollToPricing} className="hover:text-red-600 transition-all duration-200 font-medium relative group">
              {lang.pricing}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('why')} className="hover:text-red-600 transition-all duration-200 font-medium relative group">
              {lang.whyUs}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
              className="hover:text-red-600 transition-all duration-200 font-medium flex items-center gap-2 hover:scale-105"
              title={language === 'en' ? 'Switch to Bahasa' : 'Switch to English'}
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'ID' : 'EN'}
            </button>
            <button 
              onClick={scrollToPricing}
              className="bg-red-600 hover:bg-red-700 px-6 py-2.5 font-bold transition-all duration-200 hover:shadow-lg hover:shadow-red-600/50 hover:scale-105"
            >
              {lang.joinNow}
            </button>
          </nav>

          {/* Hamburger Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-black/98 backdrop-blur-xl transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          {/* Close Button */}
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-red-600 transition-colors p-2 hover:rotate-90 duration-300"
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-bold">
            <button 
              onClick={() => scrollToSection('facilities')} 
              className="hover:text-red-600 transition-all hover:translate-x-2 duration-200"
            >
              {lang.facilities}
            </button>
            <button 
              onClick={scrollToPricing} 
              className="hover:text-red-600 transition-all hover:translate-x-2 duration-200"
            >
              {lang.pricing}
            </button>
            <button 
              onClick={() => scrollToSection('why')} 
              className="hover:text-red-600 transition-all hover:translate-x-2 duration-200"
            >
              {lang.whyUs}
            </button>
            <button 
              onClick={() => { setLanguage(language === 'en' ? 'id' : 'en'); setMobileMenuOpen(false); }}
              className="hover:text-red-600 transition-all flex items-center gap-3 hover:scale-105 duration-200"
            >
              <Globe className="w-6 h-6" />
              {language === 'en' ? 'Bahasa Indonesia' : 'English'}
            </button>
            <button 
              onClick={scrollToPricing}
              className="bg-red-600 hover:bg-red-700 px-12 py-4 font-bold transition-all mt-4 hover:scale-105 duration-200"
            >
              {lang.joinNow}
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-red-950/30 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1600&q=80&auto=format&fit=crop" 
            alt="Gym" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
        </div>

        <div className="relative z-20 px-6 lg:px-12 max-w-7xl mx-auto w-full pt-24 lg:pt-32 animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-2 bg-red-600/20 border border-red-600/50 backdrop-blur-sm animate-slide-in-right">
            <span className="text-red-500 font-bold text-sm lg:text-base">🔥 SPOTS CAN BE LIMITED</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-black leading-tight mb-6 lg:mb-8 animate-fade-in-up animation-delay-200">
            {lang.stopProcrastinating}<br />
            <span className="text-red-600">{lang.procrastinating}</span><br />
            {lang.startNow}
          </h1>
          <p className="text-xl lg:text-3xl text-gray-300 mb-10 lg:mb-14 max-w-2xl animate-fade-in-up animation-delay-400">
            {lang.seriousGym}<br className="hidden lg:block" /> {lang.noBullshit}
          </p>
          <button 
            onClick={scrollToPricing}
            className="bg-red-600 hover:bg-red-700 text-white px-10 lg:px-14 py-5 lg:py-6 text-lg lg:text-xl font-bold transition-all duration-200 hover:shadow-2xl hover:shadow-red-600/50 inline-flex items-center gap-3 group animate-fade-in-up animation-delay-600 hover:scale-105 active:scale-95"
          >
            {lang.startTraining}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </section>

      {/* QUICK INFO STRIP */}
      <section className="bg-gradient-to-r from-neutral-950 via-black to-neutral-950 border-y border-red-600/20 animate-fade-in">
        <div className="max-w-7xl mx-auto px-6 py-8 lg:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center gap-4 group hover-lift">
              <Clock className="text-red-600 w-8 h-8 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-sm text-gray-400">{lang.openingHours}</div>
                <div className="text-base font-bold">{lang.monSat}</div>
                <div className="text-base font-bold">{lang.sunday}</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 group hover-lift">
              <Dumbbell className="text-red-600 w-8 h-8 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-sm text-gray-400">{lang.training}</div>
                <div className="text-lg font-bold">{lang.personalTrainer}</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 group hover-lift">
              <Droplets className="text-red-600 w-8 h-8 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-sm text-gray-400">{lang.facilitiesText}</div>
                <div className="text-lg font-bold">{lang.showerLocker}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REALITY SECTION */}
      <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black mb-16 lg:mb-20 text-center fade-in-on-scroll">
            {lang.whyNotStarted}<br />
            <span className="text-red-600">{lang.started}</span>
          </h2>
          <div className="space-y-8 lg:space-y-10">
            <div className="flex items-start gap-6 p-6 bg-neutral-950/50 border border-red-600/10 hover:border-red-600/30 transition-all group fade-in-on-scroll hover-lift">
              <div className="bg-red-600/10 p-3 rounded-full group-hover:bg-red-600/20 transition-colors">
                <X className="text-red-600 w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-2">{lang.procrastinatingTitle}</h3>
                <p className="text-gray-400">{lang.procrastinatingDesc}</p>
              </div>
            </div>
            <div className="flex items-start gap-6 p-6 bg-neutral-950/50 border border-red-600/10 hover:border-red-600/30 transition-all group fade-in-on-scroll hover-lift animation-delay-200">
              <div className="bg-red-600/10 p-3 rounded-full group-hover:bg-red-600/20 transition-colors">
                <X className="text-red-600 w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-2">{lang.confusedTitle}</h3>
                <p className="text-gray-400">{lang.confusedDesc}</p>
              </div>
            </div>
            <div className="flex items-start gap-6 p-6 bg-neutral-950/50 border border-red-600/10 hover:border-red-600/30 transition-all group fade-in-on-scroll hover-lift animation-delay-400">
              <div className="bg-red-600/10 p-3 rounded-full group-hover:bg-red-600/20 transition-colors">
                <X className="text-red-600 w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-2">{lang.notConsistentTitle}</h3>
                <p className="text-gray-400">{lang.notConsistentDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-20 lg:py-32 bg-gradient-to-b from-neutral-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-red-600 to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 lg:mb-16 fade-in-on-scroll">
            <h2 className="text-4xl lg:text-6xl font-black mb-4">{lang.choosePlan}</h2>
            <p className="text-gray-400 text-lg lg:text-xl mb-8">{lang.investmentBody}</p>
            
            {/* Price Toggle */}
            <div className="inline-flex flex-col items-center gap-4">
              <p className="text-sm text-gray-400">{lang.selectMembership}</p>
              <div className="inline-flex bg-neutral-900 border border-neutral-800 rounded-lg p-1">
                <button
                  onClick={() => setIsTouristPrice(false)}
                  className={`px-6 py-3 rounded-md font-bold transition-all duration-200 ${
                    !isTouristPrice 
                      ? 'bg-red-600 text-white scale-105' 
                      : 'text-gray-400 hover:text-white hover:scale-105'
                  }`}
                >
                  {lang.localPrice}
                </button>
                <button
                  onClick={() => setIsTouristPrice(true)}
                  className={`px-6 py-3 rounded-md font-bold transition-all duration-200 ${
                    isTouristPrice 
                      ? 'bg-red-600 text-white scale-105' 
                      : 'text-gray-400 hover:text-white hover:scale-105'
                  }`}
                >
                  {lang.touristPrice}
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Daily Pass */}
            <div className="bg-neutral-950 border border-neutral-800 p-8 lg:p-10 hover:border-red-600 transition-all duration-300 group fade-in-on-scroll hover-lift hover:shadow-2xl hover:shadow-red-600/20">
              <div className="text-sm font-bold text-red-600 mb-2">{lang.daily}</div>
              <h3 className="text-3xl font-black mb-2">{lang.dailyPass}</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-black text-white">{currentPricing.daily.price}</span>
                <span className="text-gray-500">{lang.perDay}</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{lang.allEquipment}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{lang.lockerShower}</span>
                </li>
              </ul>
              <a 
                href={getWhatsAppMessage(lang.dailyPass)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white text-black py-4 font-bold hover:bg-gray-200 transition-all duration-200 group-hover:bg-red-600 group-hover:text-white active:scale-95"
              >
                {lang.choosePlanBtn}
              </a>
            </div>

            {/* 1 Month */}
            <div className="bg-neutral-950 border border-neutral-800 p-8 lg:p-10 hover:border-red-600 transition-all duration-300 group fade-in-on-scroll hover-lift hover:shadow-2xl hover:shadow-red-600/20 animation-delay-200">
              <div className="text-sm font-bold text-red-600 mb-2">{lang.starter}</div>
              <h3 className="text-3xl font-black mb-2">{lang.month1}</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-black text-white">{currentPricing.month1.price}</span>
                <span className="text-gray-500">{lang.perMonth}</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{lang.allEquipment}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{lang.premiumLocker}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{lang.trainerConsult}</span>
                </li>
              </ul>
              <a 
                href={getWhatsAppMessage(lang.month1)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white text-black py-4 font-bold hover:bg-gray-200 transition-all duration-200 group-hover:bg-red-600 group-hover:text-white active:scale-95"
              >
                {lang.choosePlanBtn}
              </a>
            </div>

            {/* 3 Months */}
            <div className="bg-neutral-950 border border-neutral-800 p-8 lg:p-10 hover:border-red-600 transition-all duration-300 group fade-in-on-scroll hover-lift hover:shadow-2xl hover:shadow-red-600/20 animation-delay-400">
              <div className="text-sm font-bold text-red-600 mb-2">{lang.popular}</div>
              <h3 className="text-3xl font-black mb-2">{lang.months3}</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-black text-white">{currentPricing.month3.price}</span>
                {currentPricing.month3.original && (
                  <span className="text-gray-500 line-through">{currentPricing.month3.original}</span>
                )}
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{lang.all1Month}</span>
                </li>
                {!isTouristPrice && (
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{lang.freeTraining}</span>
                  </li>
                )}
                {isTouristPrice && (
                  <>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{lang.save} 150K</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{lang.freeTraining}</span>
                    </li>
                  </>
                )}
              </ul>
              <a 
                href={getWhatsAppMessage(lang.months3)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white text-black py-4 font-bold hover:bg-gray-200 transition-all duration-200 group-hover:bg-red-600 group-hover:text-white active:scale-95"
              >
                {lang.choosePlanBtn}
              </a>
            </div>

            {/* 6 Months */}
            <div className="bg-neutral-950 border border-neutral-800 p-8 lg:p-10 hover:border-red-600 transition-all duration-300 group fade-in-on-scroll hover-lift hover:shadow-2xl hover:shadow-red-600/20">
              <div className="text-sm font-bold text-red-600 mb-2">{lang.committed}</div>
              <h3 className="text-3xl font-black mb-2">{lang.months6}</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-black text-white">{currentPricing.month6.price}</span>
                {currentPricing.month6.original && (
                  <span className="text-gray-500 line-through">{currentPricing.month6.original}</span>
                )}
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{lang.all3Month}</span>
                </li>
                {!isTouristPrice && (
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{lang.freePT1}</span>
                  </li>
                )}
                {isTouristPrice && (
                  <>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{lang.save} 550K</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{lang.freePT1}</span>
                    </li>
                  </>
                )}
              </ul>
              <a 
                href={getWhatsAppMessage(lang.months6)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white text-black py-4 font-bold hover:bg-gray-200 transition-all duration-200 group-hover:bg-red-600 group-hover:text-white active:scale-95"
              >
                {lang.choosePlanBtn}
              </a>
            </div>

            {/* 1 Year - BEST VALUE */}
            <div className="bg-gradient-to-br from-red-950/30 to-neutral-950 border-2 border-red-600 p-8 lg:p-10 relative group fade-in-on-scroll hover-lift shadow-2xl shadow-red-600/30 transform lg:scale-105 md:col-span-2 lg:col-span-1 animation-delay-200">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 px-6 py-2 text-sm font-bold shadow-lg">
                {lang.bestValue}
              </div>
              <div className="text-sm font-bold text-red-600 mb-2">{lang.ultimate}</div>
              <h3 className="text-3xl font-black mb-2">{lang.year1}</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-black text-white">{currentPricing.year1.price}</span>
                {currentPricing.year1.original && (
                  <span className="text-gray-500 line-through">{currentPricing.year1.original}</span>
                )}
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{lang.all6Month}</span>
                </li>
                {!isTouristPrice && (
                  <>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{lang.freePT2}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{lang.priorityAccess}</span>
                    </li>
                  </>
                )}
                {isTouristPrice && (
                  <>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{lang.save} 1.4JT</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{lang.freePT2}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{lang.priorityAccess}</span>
                    </li>
                  </>
                )}
              </ul>
              <a 
                href={getWhatsAppMessage(lang.year1)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-red-600 text-white py-4 font-bold hover:bg-red-700 transition-all duration-200 shadow-lg active:scale-95"
              >
                {lang.choosePlanBtn}
              </a>
            </div>
          </div>

          {/* PT Packages */}
          <div className="mt-16 border-t border-red-600/20 pt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-black mb-3">{lang.personalTrainer.toUpperCase()}</h3>
              <p className="text-gray-400">{language === 'en' ? 'Intensive program with experienced trainers' : 'Program intensif dengan trainer berpengalaman'}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {/* 10 Sessions */}
              <div className="bg-neutral-950 border border-neutral-800 p-8 hover:border-red-600 transition-all duration-300 group hover-lift hover:shadow-2xl hover:shadow-red-600/20">
                <div className="text-sm font-bold text-red-600 mb-2">{lang.ptPackage}</div>
                <h4 className="text-2xl font-black mb-2">{lang.sessions10}</h4>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-black text-white">{currentPricing.pt10.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{lang.sessions10PT}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{lang.customProgram}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{lang.progressMonitor}</span>
                  </li>
                </ul>
                <a 
                  href={getWhatsAppMessage(`PT ${lang.sessions10}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-white text-black py-3 font-bold hover:bg-gray-200 transition-all duration-200 group-hover:bg-red-600 group-hover:text-white active:scale-95"
                >
                  {lang.choosePlanBtn}
                </a>
              </div>

              {/* 20 Sessions */}
              <div className="bg-gradient-to-br from-red-950/20 to-neutral-950 border-2 border-red-600/50 p-8 hover:border-red-600 transition-all duration-300 group hover-lift hover:shadow-2xl hover:shadow-red-600/30">
                <div className="text-sm font-bold text-red-600 mb-2">{lang.ptIntensive}</div>
                <h4 className="text-2xl font-black mb-2">{lang.sessions20}</h4>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-black text-white">{currentPricing.pt20.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{lang.sessions20PT}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{lang.customProgram}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{lang.progressMonitor}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{lang.mealPlan}</span>
                  </li>
                </ul>
                <a 
                  href={getWhatsAppMessage(`PT ${lang.sessions20}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-red-600 text-white py-3 font-bold hover:bg-red-700 transition-all duration-200 active:scale-95"
                >
                  {lang.choosePlanBtn}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section id="facilities" className="py-20 lg:py-32 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black mb-16 lg:mb-20 text-center fade-in-on-scroll">
            <span className="text-red-600">{lang.completeFacilities}</span> {lang.facilities2}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-neutral-950 to-neutral-900 p-10 hover:from-red-950/20 hover:to-neutral-950 transition-all duration-300 border border-neutral-800 hover:border-red-600/50 group fade-in-on-scroll hover-lift">
              <Dumbbell className="w-16 h-16 text-red-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3">{lang.personalTrainingTitle}</h3>
              <p className="text-gray-400 leading-relaxed">{lang.personalTrainingDesc}</p>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-950 to-neutral-900 p-10 hover:from-red-950/20 hover:to-neutral-950 transition-all duration-300 border border-neutral-800 hover:border-red-600/50 group fade-in-on-scroll hover-lift animation-delay-200">
              <div className="w-16 h-16 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">{lang.premiumLockerTitle}</h3>
              <p className="text-gray-400 leading-relaxed">{lang.premiumLockerDesc}</p>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-950 to-neutral-900 p-10 hover:from-red-950/20 hover:to-neutral-950 transition-all duration-300 border border-neutral-800 hover:border-red-600/50 group fade-in-on-scroll hover-lift animation-delay-400">
              <Droplets className="w-16 h-16 text-red-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3">{lang.showerWCTitle}</h3>
              <p className="text-gray-400 leading-relaxed">{lang.showerWCDesc}</p>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-950 to-neutral-900 p-10 hover:from-red-950/20 hover:to-neutral-950 transition-all duration-300 border border-neutral-800 hover:border-red-600/50 group fade-in-on-scroll hover-lift animation-delay-600">
              <div className="w-16 h-16 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">{lang.proteinCafeTitle}</h3>
              <p className="text-gray-400 leading-relaxed">{lang.proteinCafeDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / POSITIONING */}
      <section id="why" className="py-20 lg:py-32 bg-gradient-to-b from-neutral-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black mb-16 lg:mb-20 text-center fade-in-on-scroll">
            {lang.whyGueeGym} <span className="text-red-600">{lang.gueeGym}</span>
          </h2>
          
          <div className="space-y-8 lg:space-y-10">
            <div className="border-l-4 border-red-600 pl-8 py-6 bg-neutral-950/30 hover:bg-neutral-950/50 transition-all fade-in-on-scroll hover-lift">
              <h3 className="font-black text-3xl mb-4 text-red-600">01</h3>
              <h4 className="font-bold text-2xl mb-3">{lang.seriousEnv}</h4>
              <p className="text-gray-300 text-lg leading-relaxed">{lang.seriousEnvDesc}</p>
            </div>
            
            <div className="border-l-4 border-red-600 pl-8 py-6 bg-neutral-950/30 hover:bg-neutral-950/50 transition-all fade-in-on-scroll hover-lift animation-delay-200">
              <h3 className="font-black text-3xl mb-4 text-red-600">02</h3>
              <h4 className="font-bold text-2xl mb-3">{lang.noComplicated}</h4>
              <p className="text-gray-300 text-lg leading-relaxed">{lang.noComplicatedDesc}</p>
            </div>
            
            <div className="border-l-4 border-red-600 pl-8 py-6 bg-neutral-950/30 hover:bg-neutral-950/50 transition-all fade-in-on-scroll hover-lift animation-delay-400">
              <h3 className="font-black text-3xl mb-4 text-red-600">03</h3>
              <h4 className="font-bold text-2xl mb-3">{lang.importantYouCome}</h4>
              <p className="text-gray-300 text-lg leading-relaxed">{lang.importantYouComeDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-7xl font-black mb-6 lg:mb-8 animate-fade-in-up">
            {lang.readyToStart}
          </h2>
          <p className="text-xl lg:text-3xl mb-10 lg:mb-14 opacity-95 animate-fade-in-up animation-delay-200">
            {lang.stopExcuses}
          </p>
          <button 
            onClick={scrollToPricing}
            className="bg-black text-white px-14 lg:px-20 py-6 lg:py-7 text-xl lg:text-2xl font-bold hover:bg-neutral-900 transition-all duration-200 inline-flex items-center gap-4 group animate-fade-in-up animation-delay-400 hover:scale-105 active:scale-95 shadow-2xl"
          >
            {lang.joinNowCTA}
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-16 lg:py-20 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/gg.png" 
                  alt="Guee Gym Logo" 
                  className="w-12 h-12 object-contain"
                />
                <div className="text-2xl font-black">
                  <span className="text-red-600">GUEE</span> GYM
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {language === 'en' 
                  ? 'Serious gym for serious gains. Transform your body, transform your life.'
                  : 'Serious gym untuk serious gains. Transform your body, transform your life.'}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">{lang.quickLinks}</h3>
              <div className="space-y-3">
                <button onClick={() => scrollToSection('facilities')} className="block text-gray-400 hover:text-red-600 transition-colors">
                  {lang.facilities}
                </button>
                <button onClick={scrollToPricing} className="block text-gray-400 hover:text-red-600 transition-colors">
                  {lang.pricing}
                </button>
                <button onClick={() => scrollToSection('why')} className="block text-gray-400 hover:text-red-600 transition-colors">
                  {lang.whyUs}
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">{lang.contactUs}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span>Jl. Pantai Kelating, Kelating, Kec. Kerambitan<br />Tabanan, Bali</span>
                </div>
                <a href="https://wa.me/6285737455112" className="flex items-center gap-3 text-gray-400 hover:text-red-600 transition-colors">
                  <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span>+62 857-3745-5112</span>
                </a>
                <a href="https://instagram.com/guee_gym" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-red-600 transition-colors">
                  <Instagram className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span>@gueegym</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              © 2026 Guee Gym. {lang.allRights}
            </div>
            <div className="text-gray-600 text-sm">
              {lang.designedWith}
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Animations CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          80% {
            transform: translateY(12px);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-scroll-down {
          animation: scrollDown 1.5s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .fade-in-on-scroll {
          opacity: 1;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .fade-in-on-scroll.visible {
          animation-play-state: running;
        }

        .hover-lift {
          transition: transform 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
}