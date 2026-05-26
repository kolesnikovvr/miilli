export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      seo: {
        title: 'Miilli.org | Marketing that drives growth',
        description: 'Miilli.org is a digital marketing agency focused on performance marketing, strategy, and content campaigns that scale brands.',
        ogTitle: 'Miilli.org | Marketing that drives growth',
        ogDescription: 'Scale your brand with performance campaigns, strategic content, and measurable growth systems.',
        twitterTitle: 'Miilli.org | Digital Marketing Agency',
        twitterDescription: 'Performance marketing, content strategy and campaigns designed to drive growth.'
      },
      index: {
        skipToContact: 'Skip to contact form'
      },
      header: {
        homeAria: 'Miilli.org home',
        mainNavAria: 'Main navigation',
        switchLanguageAria: 'Switch language',
        nav: {
          services: 'Services',
          why: 'Why Miilli',
          results: 'Results',
          contact: 'Contact'
        },
        cta: 'Book a Call'
      },
      language: {
        en: 'EN',
        et: 'ET'
      },
      hero: {
        homeAria: 'Miilli.org home',
        logoAlt: 'Miilli.org logo',
        badge: 'Miilli.org Digital Marketing Agency',
        title: 'Marketing that drives growth',
        description: 'We help brands scale with performance marketing, content strategy and digital campaigns.',
        bookCall: 'Book a Call',
        proposal: 'Get Proposal'
      },
      services: {
        eyebrow: 'Services',
        title: 'Integrated growth services for modern brands',
        description: 'A focused mix of paid acquisition, brand strategy, and content execution designed to move key metrics fast.',
        items: {
          performance: {
            title: 'Performance Marketing',
            points: ['Meta Ads', 'Google Ads', 'Lead generation', 'Conversion optimization']
          },
          social: {
            title: 'Social Media Management',
            points: ['Content planning', 'Posting strategy', 'Community management']
          },
          brand: {
            title: 'Branding & Strategy',
            points: ['Brand positioning', 'Marketing strategy', 'Competitor analysis']
          },
          content: {
            title: 'Content Creation',
            points: ['Ad creatives', 'Copywriting', 'Video content', 'Design assets']
          },
          seo: {
            title: 'SEO & Analytics',
            points: ['SEO optimization', 'Reporting', 'Data analytics', 'Tracking setup']
          }
        }
      },
      why: {
        eyebrow: 'Why Miilli',
        title: 'Built for teams that need outcomes, not noise',
        description: 'We combine strategic clarity with practical execution, helping brands move from experiments to scalable growth channels.',
        items: {
          data: {
            title: 'Data-driven approach',
            description: 'Decisions are built on campaign insights, not assumptions.'
          },
          reporting: {
            title: 'Transparent reporting',
            description: 'Clear weekly updates and real-time visibility on performance.'
          },
          speed: {
            title: 'Fast execution',
            description: 'Quick iteration cycles to test, learn, and scale efficiently.'
          },
          startup: {
            title: 'Startup-friendly',
            description: 'Lean processes and practical strategy built for growing teams.'
          },
          global: {
            title: 'International experience',
            description: 'Campaign execution across diverse markets and audiences.'
          }
        }
      },
      results: {
        eyebrow: 'Results',
        title: 'Performance that compounds over time',
        description: 'From paid growth to content execution, each campaign is measured against outcomes that matter.',
        stats: {
          impressions: 'impressions generated',
          campaigns: 'campaigns launched',
          clients: 'international clients'
        }
      },
      cta: {
        eyebrow: 'Ready to scale',
        title: 'Let\'s grow your brand',
        description: 'Tell us your targets and current acquisition setup. We will design a channel strategy focused on measurable growth.',
        button: 'Contact Us'
      },
      testimonials: {
        eyebrow: 'Testimonials',
        title: 'What clients say about working with Miilli',
        description: 'Real feedback from teams that needed measurable growth, faster iteration, and consistent execution.',
        photoAlt: '{name} photo',
        items: {
          abhilasha: {
            role: 'Director of Product',
            quote: 'Miilli helped us align product messaging with performance campaigns. The team moved quickly, and we saw stronger lead quality within the first month.'
          },
          pierre: {
            role: 'Co-Founder',
            quote: 'What stood out was the clarity and speed of execution. Miilli turned complex channel data into clear priorities, and our acquisition became far more efficient.'
          },
          micaela: {
            role: 'Head of Marketing',
            quote: 'From creative testing to reporting, every step was structured and practical. We now plan campaigns with confidence and scale what actually works.'
          }
        }
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Start your next growth sprint with Miilli',
        description: 'Share your goals and current challenges. We will reply with a tailored growth plan and channel recommendations.',
        form: {
          name: 'Name',
          email: 'Email',
          company: 'Company',
          message: 'Message',
          namePlaceholder: 'Your full name',
          emailPlaceholder: 'you{\'@\'}company.com',
          companyPlaceholder: 'Company name',
          messagePlaceholder: 'Tell us about your business goals and current channels',
          send: 'Send Message'
        },
        success: 'Your message has been sent. We\'ll get back to you soon.',
        notifications: {
          successTitle: 'Message sent',
          errorTitle: 'Message not sent'
        },
        validation: {
          name: 'Please enter your name.',
          email: 'Please enter a valid email.',
          company: 'Please enter your company.',
          message: 'Message should be at least 10 characters.'
        },
        errors: {
          unavailable: 'Unable to submit your request right now.',
          tooManyRequests: 'Too many requests. Please try again in a few minutes.',
          invalidRequest: 'Invalid request.',
          nameTooShort: 'Name must contain at least 2 characters.',
          invalidEmail: 'Please provide a valid email address.',
          companyTooShort: 'Company must contain at least 2 characters.',
          messageTooShort: 'Message must contain at least 10 characters.',
          messageTooLong: 'Message is too long.',
          invalidBody: 'Invalid request body.',
          serviceNotConfigured: 'Contact service is not configured.',
          sendFailed: 'Unable to send your message at the moment.'
        }
      },
      footer: {
        registeredOffice: 'Registered office address: 11216 Liivalao 11/204, Tallinn, Estonia',
        rights: 'All rights reserved.'
      }
    },
    et: {
      seo: {
        title: 'Miilli.org | Turundus, mis kasvatab',
        description: 'Miilli.org on digiturundusagentuur, mis keskendub tulemusturundusele, strateegiale ja sisukampaaniatele, mis aitavad brändidel kasvada.',
        ogTitle: 'Miilli.org | Turundus, mis kasvatab',
        ogDescription: 'Kasvata oma brändi tulemustele suunatud kampaaniate, strateegilise sisu ja mõõdetavate kasvusüsteemidega.',
        twitterTitle: 'Miilli.org | Digiturundusagentuur',
        twitterDescription: 'Tulemusturundus, sisustrateegia ja kampaaniad, mis on loodud kasvu kiirendamiseks.'
      },
      index: {
        skipToContact: 'Liigu kontaktivormile'
      },
      header: {
        homeAria: 'Miilli.org avaleht',
        mainNavAria: 'Peamenüü',
        switchLanguageAria: 'Vaheta keelt',
        nav: {
          services: 'Teenused',
          why: 'Miks Miilli',
          results: 'Tulemused',
          contact: 'Kontakt'
        },
        cta: 'Broneeri kõne'
      },
      language: {
        en: 'EN',
        et: 'ET'
      },
      hero: {
        homeAria: 'Miilli.org avaleht',
        logoAlt: 'Miilli.org logo',
        badge: 'Miilli.org digiturundusagentuur',
        title: 'Turundus, mis toob kasvu',
        description: 'Aitame brändidel kasvada tulemusturunduse, sisustrateegia ja digikampaaniatega.',
        bookCall: 'Broneeri kõne',
        proposal: 'Küsi pakkumist'
      },
      services: {
        eyebrow: 'Teenused',
        title: 'Integreeritud kasvuteenused kaasaegsetele brändidele',
        description: 'Fookustatud kombinatsioon tasulisest kliendihankest, brändistrateegiast ja sisuloomest, mis aitab võtmenäitajaid kiiremini kasvatada.',
        items: {
          performance: {
            title: 'Tulemusturundus',
            points: ['Meta reklaamid', 'Google reklaamid', 'Liidide genereerimine', 'Konversioonide optimeerimine']
          },
          social: {
            title: 'Sotsiaalmeedia haldus',
            points: ['Sisuplaan', 'Postituste strateegia', 'Kogukonna haldus']
          },
          brand: {
            title: 'Bränding ja strateegia',
            points: ['Brändi positsioneerimine', 'Turundusstrateegia', 'Konkurentide analüüs']
          },
          content: {
            title: 'Sisuloome',
            points: ['Reklaamiloovad', 'Copywriting', 'Videokontent', 'Disainiassetid']
          },
          seo: {
            title: 'SEO ja analüütika',
            points: ['SEO optimeerimine', 'Raporteerimine', 'Andmeanalüüs', 'Jälgimise seadistus']
          }
        }
      },
      why: {
        eyebrow: 'Miks Miilli',
        title: 'Loodud tiimidele, kes vajavad tulemust, mitte müra',
        description: 'Ühendame strateegilise selguse praktilise teostusega, et aidata brändidel liikuda katsetustest skaleeritavate kasvukanaliteni.',
        items: {
          data: {
            title: 'Andmepõhine lähenemine',
            description: 'Otsused põhinevad kampaaniaandmetel, mitte oletustel.'
          },
          reporting: {
            title: 'Läbipaistev raporteerimine',
            description: 'Selged iganädalased uuendused ja reaalajas ülevaade tulemustest.'
          },
          speed: {
            title: 'Kiire teostus',
            description: 'Kiired iteratsioonitsüklid, et testida, õppida ja tõhusalt skaleerida.'
          },
          startup: {
            title: 'Sobib iduettevõtetele',
            description: 'Paindlikud protsessid ja praktiline strateegia kasvavatele tiimidele.'
          },
          global: {
            title: 'Rahvusvaheline kogemus',
            description: 'Kampaaniate elluviimine erinevatel turgudel ja sihtrühmades.'
          }
        }
      },
      results: {
        eyebrow: 'Tulemused',
        title: 'Tulemused, mis ajas võimenduvad',
        description: 'Alates tasulisest kasvust kuni sisuloomeni hinnatakse iga kampaaniat näitajate järgi, mis päriselt loevad.',
        stats: {
          impressions: 'genereeritud näitamist',
          campaigns: 'käivitatud kampaaniat',
          clients: 'rahvusvahelist klienti'
        }
      },
      cta: {
        eyebrow: 'Valmis kasvama',
        title: 'Kasvatame sinu brändi',
        description: 'Räägi meile oma eesmärkidest ja praegusest kliendihankest. Loome kanalistrateegia, mis keskendub mõõdetavale kasvule.',
        button: 'Võta ühendust'
      },
      testimonials: {
        eyebrow: 'Tagasiside',
        title: 'Mida kliendid Miilliga töötamisest arvavad',
        description: 'Päris tagasiside tiimidelt, kes vajasid mõõdetavat kasvu, kiiremat iteratsiooni ja järjepidevat teostust.',
        photoAlt: '{name} foto',
        items: {
          abhilasha: {
            role: 'Tootearenduse direktor',
            quote: 'Miilli aitas meil viia toote sõnumi kooskõlla tulemusturundusega. Tiim liikus kiiresti ja nägime juba esimesel kuul kvaliteetsemaid liide.'
          },
          pierre: {
            role: 'Kaasasutaja',
            quote: 'Silma paistsid selgus ja teostuskiirus. Miilli muutis keeruka kanalite andmestiku selgeteks prioriteetideks ning kliendihange muutus palju tõhusamaks.'
          },
          micaela: {
            role: 'Turundusjuht',
            quote: 'Alates loovtestidest kuni raporteerimiseni oli iga samm struktureeritud ja praktiline. Planeerime nüüd kampaaniaid kindlalt ning skaleerime seda, mis päriselt töötab.'
          }
        }
      },
      contact: {
        eyebrow: 'Kontakt',
        title: 'Alusta Miilliga oma järgmist kasvuspurti',
        description: 'Jaga oma eesmärke ja peamisi väljakutseid. Vastame personaalse kasvukava ja kanalisoovitustega.',
        form: {
          name: 'Nimi',
          email: 'E-post',
          company: 'Ettevõte',
          message: 'Sõnum',
          namePlaceholder: 'Sinu täisnimi',
          emailPlaceholder: 'sina{\'@\'}ettevote.ee',
          companyPlaceholder: 'Ettevõtte nimi',
          messagePlaceholder: 'Kirjelda oma ärieesmärke ja praeguseid kanaleid',
          send: 'Saada sõnum'
        },
        success: 'Sinu sõnum on saadetud. Võtame peagi ühendust.',
        notifications: {
          successTitle: 'Sõnum saadetud',
          errorTitle: 'Sõnumit ei saadetud'
        },
        validation: {
          name: 'Palun sisesta oma nimi.',
          email: 'Palun sisesta korrektne e-post.',
          company: 'Palun sisesta oma ettevõtte nimi.',
          message: 'Sõnum peab olema vähemalt 10 tähemärki.'
        },
        errors: {
          unavailable: 'Praegu ei ole võimalik päringut saata.',
          tooManyRequests: 'Liiga palju päringuid. Palun proovi mõne minuti pärast uuesti.',
          invalidRequest: 'Vigane päring.',
          nameTooShort: 'Nimi peab sisaldama vähemalt 2 tähemärki.',
          invalidEmail: 'Palun sisesta korrektne e-posti aadress.',
          companyTooShort: 'Ettevõtte nimi peab sisaldama vähemalt 2 tähemärki.',
          messageTooShort: 'Sõnum peab sisaldama vähemalt 10 tähemärki.',
          messageTooLong: 'Sõnum on liiga pikk.',
          invalidBody: 'Vigane päringu sisu.',
          serviceNotConfigured: 'Kontaktivorm ei ole serveris seadistatud.',
          sendFailed: 'Sõnumi saatmine ei õnnestunud. Palun proovi hiljem uuesti.'
        }
      },
      footer: {
        registeredOffice: 'Registreeritud aadress: 11216 Liivalao 11/204, Tallinn, Estonia',
        rights: 'Kõik õigused kaitstud.'
      }
    }
  }
}))
