import { useState } from 'react'
import logoImage from './imports/images/logo.jpeg'
import lydiaImage from './imports/images/lydia.jpeg'
import kezaImage from './imports/images/faith.jpeg'
import stepOneImage from './imports/images/1.jpeg'
import stepTwoImage from './imports/images/2.jpeg'
import stepThreeImage from './imports/images/3.jpeg'
import stepFourImage from './imports/images/4.jpeg'
import stepFiveImage from './imports/images/5.jpeg'
import stepSixImage from './imports/images/6.jpeg'
import stepSevenImage from './imports/images/7.jpeg'

const CONTACT_EMAIL = 'atango@ajokon.org'
const WHATSAPP_NUMBER = '254140033310'
const WHATSAPP_MESSAGE = 'hello i have seen your page on ajokon.org  i would like to know more about aceo'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
const EMAIL_SUBJECT = 'Inquiry about ACEO'

const NAV_LINKS = [
  { label: 'Our Model', href: '#model' },
  { label: 'Projects', href: '#projects' },
  { label: 'Impact', href: '#impact' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1553775927-a071d5a6a39a?w=1600&h=900&fit=crop&auto=format',
  community: 'https://images.unsplash.com/photo-1551357176-3158cabfc336?w=800&h=600&fit=crop&auto=format',
  training: 'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=800&h=600&fit=crop&auto=format',
  livestock: 'https://images.unsplash.com/photo-1767984300679-5ea38c664497?w=800&h=600&fit=crop&auto=format',
  identification: 'https://images.unsplash.com/photo-1515658323406-25d61c141a6e?w=700&h=500&fit=crop&auto=format',
  committee: 'https://images.unsplash.com/photo-1655720357872-ce227e4164ba?w=700&h=500&fit=crop&auto=format',
  procurement: 'https://images.unsplash.com/photo-1761860629973-15a8a487ec35?w=700&h=500&fit=crop&auto=format',
  beneficiaryTraining: 'https://images.unsplash.com/photo-1509099381441-ea3c0cf98b94?w=700&h=500&fit=crop&auto=format',
  distribution: 'https://images.unsplash.com/photo-1543181077-099f32f30a1c?w=700&h=500&fit=crop&auto=format',
  leadership: 'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=700&h=500&fit=crop&auto=format',
  launch: 'https://images.unsplash.com/photo-1675345653570-e239fa15bef8?w=700&h=500&fit=crop&auto=format',
  lydia: 'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=500&h=600&fit=crop&auto=format',
  keza: 'https://images.unsplash.com/photo-1573165706511-3ffde6ef1fe3?w=500&h=600&fit=crop&auto=format',
}

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1b4332]/95 backdrop-blur-sm border-b border-[#2d6a4f]/40">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex flex-col leading-tight">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="ACEO logo" className="h-9 w-9 rounded-full object-cover ring-1 ring-[#74c69d]/30" />
            <div className="flex flex-col leading-tight">
              <span style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-[#74c69d] text-lg font-semibold tracking-wide">ACEO</span>
              <span className="text-[#d8f3dc]/60 text-[10px] tracking-widest uppercase">Ajokon Community Empowerment</span>
            </div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} className="text-[#d8f3dc]/80 hover:text-[#74c69d] text-sm font-medium transition-colors tracking-wide">
              {l.label}
            </a>
          ))}
          <a href="#donate" className="bg-[#b5830a] hover:bg-[#e9a41a] text-white text-sm font-semibold px-5 py-2 transition-colors" style={{ borderRadius: 0 }}>
            Donate
          </a>
        </div>
        <button className="md:hidden text-[#d8f3dc]" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#1b4332] px-6 pb-6 flex flex-col gap-4">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-[#d8f3dc]/80 text-sm font-medium py-1 border-b border-[#2d6a4f]/30">
              {l.label}
            </a>
          ))}
          <a href="#donate" className="bg-[#b5830a] text-white text-sm font-semibold px-5 py-2 text-center">Donate</a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[#0f2d1c]">
        <img
          src={IMAGES.hero}
          alt="Community women in Uganda walking together"
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2d1c] via-[#0f2d1c]/60 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#b5830a]" />
            <span className="text-[#e9a41a] text-xs tracking-[0.25em] uppercase font-medium">Amuria, Uganda</span>
          </div>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-5xl md:text-7xl text-[#d8f3dc] font-light leading-[1.05] mb-8">
            Strengthening<br />
            <em className="text-[#74c69d] not-italic font-semibold">Communities</em><br />
            from Within
          </h1>
          <p className="text-[#d8f3dc]/70 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10">
            Culturally grounded, asset-based, and community-led empowerment for households in Amuria, Uganda.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#model" className="bg-[#2d6a4f] hover:bg-[#40916c] text-[#d8f3dc] font-semibold px-8 py-4 text-sm tracking-wide transition-colors">
              Explore Our Model
            </a>
            <a href="#team" className="border border-[#74c69d]/50 hover:border-[#74c69d] text-[#74c69d] font-semibold px-8 py-4 text-sm tracking-wide transition-colors">
              Meet the Team
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 hidden lg:grid grid-cols-3 gap-px bg-[#2d6a4f]/30">
        {[['200+', 'Families'], ['100+', 'Goats'], ['85%', 'Improved']].map(([n, l]) => (
          <div key={l} className="bg-[#1b4332]/80 backdrop-blur-sm px-6 py-4 text-center">
            <div style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-2xl text-[#74c69d] font-semibold">{n}</div>
            <div className="text-[#d8f3dc]/60 text-xs tracking-wide mt-0.5">{l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Pillars() {
  return (
    <section className="bg-[#fdf8f0] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#b5830a]" />
            <span className="text-[#b5830a] text-xs tracking-[0.2em] uppercase">Our Approach</span>
          </div>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-4xl md:text-5xl text-[#1b4332] font-light leading-tight mb-6">
            Empowering Communities Through Sustainable Development
          </h2>
          <p className="text-[#6b4226]/80 leading-relaxed">
            Rooted in indigenous knowledge and community values, ACEO combines traditional practices with practical development approaches to help households build productive assets, improve financial security, and strengthen resilience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-[#2d6a4f]/15">
          {[
            {
              num: '01',
              title: 'Economic Security',
              body: 'We help households build financial resilience through productive asset ownership, community savings, skills development, and sustainable livelihood opportunities.',
              link: 'Learn More',
              href: '#projects',
              img: IMAGES.community,
              alt: 'Community members gathered on a field',
            },
            {
              num: '02',
              title: 'Community Impact',
              body: 'More than 200 families have participated in ACEO initiatives designed to strengthen household livelihoods, create support networks, and promote long-term resilience.',
              link: 'See Our Impact',
              href: '#impact',
              img: IMAGES.training,
              alt: 'Woman in community training session',
            },
            {
              num: '03',
              title: 'Sustainable Practices',
              body: 'We promote responsible livestock management and environmentally conscious practices that support household livelihoods while contributing to the UN SDGs.',
              link: 'Our Story',
              href: '#model',
              img: IMAGES.livestock,
              alt: 'Livestock animal in rural setting',
            },
          ].map(p => (
            <div key={p.num} className="bg-[#fdf8f0] group">
              <div className="aspect-[4/3] overflow-hidden bg-[#2d6a4f]/10">
                <img src={p.img} alt={p.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="text-[#b5830a] text-xs font-mono tracking-widest mb-3">{p.num}</div>
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-2xl text-[#1b4332] font-medium mb-4">{p.title}</h3>
                <p className="text-[#6b4226]/80 leading-relaxed text-sm mb-6">{p.body}</p>
                <a href={p.href} className="text-[#2d6a4f] hover:text-[#b5830a] text-sm font-semibold tracking-wide transition-colors inline-flex items-center gap-2">
                  {p.link}
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AGEP() {
  return (
    <section id="projects" className="bg-[#1b4332] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#b5830a]" />
          <span className="text-[#74c69d] text-xs tracking-[0.2em] uppercase">Featured Initiative</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-4xl md:text-5xl text-[#d8f3dc] font-light leading-tight mb-4">
              Ajokon Goat Empowerment Project
            </h2>
            <p style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-[#74c69d] text-xl italic font-light mb-8">
              Building Financial Security Through Productive Assets
            </p>
            <p className="text-[#d8f3dc]/70 leading-relaxed mb-6">
              The Ajokon Goat Empowerment Project (AGEP) builds on the traditional Ajokon livestock-sharing practice and strengthens it with structured agreements, training, monitoring, accountability, and community-based support mechanisms.
            </p>
            <p className="text-[#d8f3dc]/70 leading-relaxed mb-10">
              Selected households receive goats as productive assets. As the animals reproduce, beneficiaries retain offspring while the parent goats are transferred to another participating household — creating a cycle of asset sharing that reaches more families over time.
            </p>
            <a href="#model" className="inline-block bg-[#b5830a] hover:bg-[#e9a41a] text-white font-semibold px-8 py-4 text-sm tracking-wide transition-colors">
              Learn More About AGEP
            </a>
          </div>
          <div>
            <div className="bg-[#0f2d1c] p-8 mb-6">
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[['200+', 'Families Empowered'], ['100+', 'Goats Distributed'], ['85%', 'Reported Improvement in Financial Security']].map(([n, l]) => (
                  <div key={l} className="text-center">
                    <div style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-3xl md:text-4xl text-[#74c69d] font-semibold mb-2">{n}</div>
                    <div className="text-[#d8f3dc]/50 text-xs leading-tight">{l}</div>
                  </div>
                ))}
              </div>
              <div className="h-px bg-[#2d6a4f]/50 mb-8" />
              <div className="aspect-video overflow-hidden bg-[#2d6a4f]/20">
                <img
                  src={IMAGES.distribution}
                  alt="Community members gathering in Uganda"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
            <div className="bg-[#b5830a]/10 border-l-4 border-[#b5830a] p-6">
              <p style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-[#e9a41a] italic text-lg leading-relaxed">
                "A productive asset should not benefit only one household. It should create an opportunity for other households to become economically secure as well."
              </p>
              <p className="text-[#d8f3dc]/60 text-sm mt-4 tracking-wide">— The Ajokon Plus Model</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CapacityBuilding() {
  const items = [
    'Livestock management and animal welfare',
    'Disease prevention and basic veterinary practices',
    'Financial literacy and household financial planning',
    'Community savings and emergency preparedness',
    'Asset management and accountability',
    'Community leadership and governance',
    'Sustainable land and livestock management',
  ]
  return (
    <section className="bg-[#f5ede0] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-[#2d6a4f]/10">
              <img
                src={IMAGES.training}
                alt="Community capacity building training"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#1b4332] p-6 hidden lg:block">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[['100+', 'Trained'], ['5', 'Communities'], ['Ongoing', 'Development']].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-xl text-[#74c69d] font-semibold">{n}</div>
                    <div className="text-[#d8f3dc]/50 text-[10px] tracking-wide mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#b5830a]" />
              <span className="text-[#b5830a] text-xs tracking-[0.2em] uppercase">Capacity Building</span>
            </div>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-4xl md:text-5xl text-[#1b4332] font-light leading-tight mb-6">
              Empowering Through Knowledge
            </h2>
            <p className="text-[#6b4226]/80 leading-relaxed mb-8">
              Sustainable development requires more than providing assets. ACEO equips community members with the knowledge and skills needed to manage resources effectively and sustain their livelihoods.
            </p>
            <div className="space-y-3 mb-10">
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-3 border-b border-[#2d6a4f]/15">
                  <span className="text-[#b5830a] font-mono text-xs mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[#1c1917]/80 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <a href="#model" className="text-[#2d6a4f] hover:text-[#b5830a] text-sm font-semibold tracking-wide transition-colors inline-flex items-center gap-2">
              See Our Implementation Approach →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function AjokonPlusModel() {
  const steps = [
    { n: 1, title: 'Households Receive Productive Assets', body: 'Selected households receive a pair of goats under a formal community agreement and participate in training on livestock care, asset management, and program responsibilities.' },
    { n: 2, title: 'Families Care for and Manage the Goats', body: 'Beneficiary households take responsibility for proper feeding, housing, health monitoring, breeding, and general livestock management.' },
    { n: 3, title: 'Community Monitoring', body: 'Community monitors conduct routine and, where necessary, random follow-up visits to assess animal welfare, household participation, and compliance with the program agreement.' },
    { n: 4, title: 'Offspring Strengthen the Household', body: 'When the goats reproduce, the household retains the agreed offspring, creating a growing productive asset base and a potential source of future income.' },
    { n: 5, title: 'Parent Goats Are Rotated', body: 'The parent goats are transferred to another eligible beneficiary household, allowing the empowerment cycle to continue.' },
    { n: 6, title: 'The Community Goat Bank Grows', body: 'Additional offspring may contribute to the Community Goat Bank, creating a communal reserve that can support future beneficiaries and help replace animals when necessary.' },
    { n: 7, title: 'Families Build an Emergency Safety Net', body: 'Beneficiaries participate in the Ajokon Community Savings Circle, helping households prepare for emergencies without being forced to sell productive assets during times of financial stress.' },
  ]
  return (
    <section id="model" className="bg-[#fdf8f0] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#b5830a]" />
            <span className="text-[#b5830a] text-xs tracking-[0.2em] uppercase">The Framework</span>
            <div className="h-px w-8 bg-[#b5830a]" />
          </div>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-4xl md:text-5xl text-[#1b4332] font-light leading-tight mb-6">
            The Ajokon Plus Model
          </h2>
          <p className="text-[#6b4226]/80 leading-relaxed">
            Traditional wisdom strengthened for sustainable development. An enhanced version of the traditional Ajokon practice — combining indigenous community-based livestock sharing with clear structures for accountability, monitoring, savings, and long-term sustainability.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-8 bottom-8 w-px bg-[#2d6a4f]/20 hidden lg:block" />
          <div className="space-y-0">
            {steps.map((s, i) => (
              <div key={s.n} className={`grid lg:grid-cols-[80px_1fr] gap-0 group ${i % 2 === 0 ? 'bg-white' : 'bg-[#f5ede0]/60'}`}>
                <div className="hidden lg:flex items-start justify-center pt-8 pb-8">
                  <div className="w-12 h-12 bg-[#2d6a4f] flex items-center justify-center flex-shrink-0">
                    <span style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-[#d8f3dc] font-semibold text-sm">{s.n}</span>
                  </div>
                </div>
                <div className="p-8 lg:pl-12 border-b border-[#2d6a4f]/10">
                  <div className="lg:hidden text-[#b5830a] font-mono text-xs tracking-widest mb-2">Step {s.n}</div>
                  <h3 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-xl text-[#1b4332] font-medium mb-3">{s.title}</h3>
                  <p className="text-[#6b4226]/75 text-sm leading-relaxed max-w-2xl">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SavingsCircle() {
  const benefits = [
    'Respond to emergencies without selling livestock',
    'Protect productive household assets',
    'Develop a culture of saving',
    'Strengthen financial discipline',
    'Build trust and collective responsibility',
    'Increase household resilience',
  ]
  const cycle = [
    { n: '1', label: 'Receive', desc: 'Beneficiary families receive two goats together with training in livestock care and asset management.' },
    { n: '2', label: 'Grow', desc: 'Families care for the goats and retain agreed offspring after reproduction.' },
    { n: '3', label: 'Share', desc: 'Parent goats are transferred to another beneficiary family, allowing the empowerment cycle to continue.' },
    { n: '4', label: 'Protect', desc: 'The Community Goat Bank and savings mechanism provide additional support for asset protection and continuity.' },
  ]
  return (
    <section className="bg-[#2d6a4f] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#b5830a]" />
              <span className="text-[#74c69d] text-xs tracking-[0.2em] uppercase">ACSC</span>
            </div>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-4xl md:text-5xl text-[#d8f3dc] font-light leading-tight mb-6">
              Ajokon Community Savings Circle
            </h2>
            <p className="text-[#d8f3dc]/70 text-lg italic mb-6" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              A Community-Based Emergency Safety Net
            </p>
            <p className="text-[#d8f3dc]/70 leading-relaxed mb-8">
              Unexpected expenses can quickly undermine household livelihoods. The ACSC is designed to help households respond to emergencies without being forced to sell productive assets at the worst possible time.
            </p>
            <p className="text-[#d8f3dc]/70 leading-relaxed mb-8">
              Each participating household contributes an agreed amount to a community-managed savings fund. When an urgent need arises, eligible members can access short-term, recoverable financial support.
            </p>
            <div className="space-y-3">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#b5830a] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-[#d8f3dc]/80 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[#74c69d] text-xs tracking-[0.2em] uppercase mb-6">The Asset-Sharing Cycle</div>
            <div className="space-y-px">
              {cycle.map((c, i) => (
                <div key={i} className="bg-[#1b4332] p-6 flex gap-6">
                  <div className="shrink-0">
                    <div className="w-10 h-10 border-2 border-[#b5830a] flex items-center justify-center">
                      <span style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-[#b5830a] font-semibold">{c.n}</span>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-[#74c69d] font-semibold text-lg mb-2">{c.label}</div>
                    <p className="text-[#d8f3dc]/65 text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Implementation() {
  const steps = [
    { n: 1, title: 'Identification of Beneficiaries', body: 'Potential beneficiaries are identified and assessed according to established eligibility criteria. The process seeks to prioritize households that can responsibly manage the livestock and actively participate in the program.', img: stepOneImage, alt: 'Community members gathered for beneficiary identification' },
    { n: 2, title: 'Formation of the Beneficiary Leadership Committee', body: 'Participating beneficiaries establish a leadership committee responsible for supporting coordination, communication, accountability, and cooperation among members.', img: stepTwoImage, alt: 'Community leaders working together' },
    { n: 3, title: 'Procurement, Treatment, and Identification of Goats', body: 'Goats are procured and undergo appropriate health checks and treatment before distribution. Animals are identified and tagged to support monitoring and accountability.', img: stepThreeImage, alt: 'Goats prepared for distribution' },
    { n: 4, title: 'Beneficiary Training', body: 'Beneficiaries are brought together for practical training covering livestock management, animal health, disease prevention, feeding, housing, breeding, record keeping, and basic veterinary practices.', img: stepFourImage, alt: 'Beneficiaries in a training session' },
    { n: 5, title: 'Distribution of Goats', body: 'Goats are distributed to approved beneficiary households according to the program\'s distribution plan and formal participation agreements.', img: stepFiveImage, alt: 'Goats being distributed to households' },
    { n: 6, title: 'Community Leadership and Cooperation', body: 'The chairperson and beneficiary leadership committee encourage cooperation among participating households and help ensure that members understand and fulfill their responsibilities.', img: stepSixImage, alt: 'Community leadership meeting' },
    { n: 7, title: 'Official Project Commencement', body: 'Following distribution and completion of the required preparations, the project officially commences. Monitoring, community support, asset rotation, savings activities, and capacity-building continue throughout implementation.', img: stepSevenImage, alt: 'Official project launch gathering' },
  ]
  return (
    <section className="bg-[#f5ede0] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#b5830a]" />
            <span className="text-[#b5830a] text-xs tracking-[0.2em] uppercase">Implementation</span>
          </div>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-4xl md:text-5xl text-[#1b4332] font-light leading-tight mb-6">
            How We Implement AGEP
          </h2>
          <p className="text-[#6b4226]/80 leading-relaxed">
            AGEP follows a structured implementation process designed to promote transparency, community ownership, animal welfare, and long-term sustainability.
          </p>
        </div>
        <div className="space-y-1">
          {steps.map((s, i) => (
            <div key={s.n} className={`grid md:grid-cols-[1fr_280px] gap-0 overflow-hidden ${i % 2 === 1 ? 'md:grid-cols-[280px_1fr]' : ''}`}>
              {i % 2 === 1 && (
                <div className="hidden md:block aspect-auto bg-[#2d6a4f]/10 overflow-hidden">
                  <img src={s.img} alt={s.alt} className="w-full h-full object-cover" />
                </div>
              )}
              <div className={`bg-white p-8 flex gap-6 items-start ${i % 2 === 1 ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="shrink-0 w-10 h-10 bg-[#2d6a4f] flex items-center justify-center">
                  <span style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-[#d8f3dc] font-semibold text-sm">{s.n}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-xl text-[#1b4332] font-medium mb-3">{s.title}</h3>
                  <p className="text-[#6b4226]/75 text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
              {i % 2 === 0 && (
                <div className="hidden md:block bg-[#2d6a4f]/10 overflow-hidden" style={{ minHeight: 180 }}>
                  <img src={s.img} alt={s.alt} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="md:hidden bg-[#2d6a4f]/10 overflow-hidden" style={{ height: 160 }}>
                <img src={s.img} alt={s.alt} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Impact() {
  const stats = [
    { n: '200+', label: 'Families Empowered', desc: 'Households participating in ACEO livelihood and empowerment initiatives.' },
    { n: '100+', label: 'Goats Distributed', desc: 'Productive livestock assets placed into participating households.' },
    { n: '85%', label: 'Reported Improvement', desc: 'Households reporting improved resilience through participation in the program.' },
    { n: '300+', label: 'Community Members Trained', desc: 'Receiving training in livestock management and related skills.' },
    { n: '5', label: 'Communities Reached', desc: 'Communities participating in ACEO programs and activities.' },
  ]
  return (
    <section id="impact" className="bg-[#0f2d1c] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#b5830a]" />
            <span className="text-[#74c69d] text-xs tracking-[0.2em] uppercase">Our Impact</span>
            <div className="h-px w-8 bg-[#b5830a]" />
          </div>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-4xl md:text-5xl text-[#d8f3dc] font-light leading-tight mb-4">
            Real Numbers. Real Change.
          </h2>
          <p className="text-[#d8f3dc]/60 leading-relaxed">
            ACEO measures its progress not only by assets distributed, but by the ability of households and communities to build stronger, more resilient futures.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-[#2d6a4f]/20">
          {stats.map((s, i) => (
            <div key={i} className={`bg-[#1b4332] p-8 text-center flex flex-col items-center ${i === 4 ? 'col-span-2 lg:col-span-1' : ''}`}>
              <div style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-4xl md:text-5xl text-[#74c69d] font-semibold mb-3">{s.n}</div>
              <div className="text-[#e9a41a] text-xs tracking-wide font-semibold uppercase mb-3">{s.label}</div>
              <p className="text-[#d8f3dc]/50 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Team() {
  return (
    <section id="team" className="bg-[#fdf8f0] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#b5830a]" />
            <span className="text-[#b5830a] text-xs tracking-[0.2em] uppercase">Leadership</span>
            <div className="h-px w-8 bg-[#b5830a]" />
          </div>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-4xl md:text-5xl text-[#1b4332] font-light leading-tight mb-4">
            Meet Our Team
          </h2>
          <p className="text-[#6b4226]/80 leading-relaxed">
            Dedicated individuals driving ACEO's mission of community empowerment, sustainable development, cultural preservation, and household economic resilience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-[#2d6a4f]/15 max-w-4xl mx-auto">
          {[
            { name: 'Lydia Arime Atango', role: 'CEO & Founder', bio: 'Lydia provides strategic leadership for ACEO and champions an approach to development that respects indigenous knowledge while creating practical pathways toward sustainable livelihoods and community resilience.', img: lydiaImage },
            { name: 'Keza Faith Liana', role: 'Project Partner & Investor', bio: 'Keza supports ACEO\'s projects through partnership, investment, and collaboration aimed at strengthening the organization\'s ability to deliver sustainable community development initiatives.', img: kezaImage },
          ].map(m => (
            <div key={m.name} className="bg-white group">
              <img src={m.img} alt={m.name} className="w-full h-auto block transition-all duration-500" />
              <div className="p-8">
                <div className="h-px bg-[#2d6a4f]/20 mb-6" />
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-2xl text-[#1b4332] font-medium mb-1">{m.name}</h3>
                <div className="text-[#b5830a] text-xs tracking-widest uppercase font-semibold mb-4">{m.role}</div>
                <p className="text-[#6b4226]/75 text-sm leading-relaxed">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const quotes = [
    { q: 'As CEO of ACEO, I\'m proud to lead an organization that honors traditional wisdom while creating sustainable pathways to prosperity. The Ajokon model demonstrates how cultural heritage and modern development can work hand in hand.', name: 'Lydia Arime Atango', role: 'CEO & Founder, ACEO' },
    { q: 'Investing in ACEO means investing in real, sustainable change. Its culturally grounded approach ensures that development initiatives are not only effective, but also respectful and designed for long-term impact.', name: 'Keza Faith Liana', role: 'Project Partner & Investor' },
    { q: 'The goat empowerment program has transformed our household. We now have a reliable source of income, better nutrition for our children, and a safety net that gives us hope for the future.', name: 'Community Member', role: 'AGEP Beneficiary' },
  ]
  return (
    <section className="bg-[#1b4332] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#b5830a]" />
            <span className="text-[#74c69d] text-xs tracking-[0.2em] uppercase">Voices</span>
            <div className="h-px w-8 bg-[#b5830a]" />
          </div>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-4xl text-[#d8f3dc] font-light">What People Say About ACEO</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-[#2d6a4f]/20">
          {quotes.map((q, i) => (
            <div key={i} className="bg-[#0f2d1c] p-8 flex flex-col">
              <div style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-[#b5830a] text-5xl leading-none mb-4">"</div>
              <p style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-[#d8f3dc]/80 italic text-lg leading-relaxed flex-1 mb-8">
                {q.q}
              </p>
              <div className="border-t border-[#2d6a4f]/40 pt-6">
                <div className="text-[#74c69d] font-semibold text-sm">{q.name}</div>
                <div className="text-[#d8f3dc]/40 text-xs tracking-wide mt-1">{q.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Partners() {
  const partners = [
    { name: 'Local Communities', desc: 'Amuria District communities are at the heart of ACEO\'s work. Community members participate in program design, implementation, monitoring, and shared decision-making.' },
    { name: 'Community Leaders', desc: 'Traditional and local leaders provide guidance, strengthen community participation, and help ensure that ACEO\'s work remains culturally relevant.' },
    { name: 'UN Sustainable Development Goals', desc: 'ACEO\'s programs contribute to broader development priorities — particularly poverty reduction, food security, decent livelihoods, and resilient communities.' },
    { name: 'Environmental Partners', desc: 'We seek collaboration with partners committed to responsible livestock production, sustainable land management, and environmental stewardship.' },
  ]
  return (
    <section className="bg-[#f5ede0] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#b5830a]" />
            <span className="text-[#b5830a] text-xs tracking-[0.2em] uppercase">Partnerships</span>
          </div>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-4xl md:text-5xl text-[#1b4332] font-light leading-tight mb-4">
            Working Together for Sustainable Community Development
          </h2>
          <p className="text-[#6b4226]/80 leading-relaxed">
            Meaningful community development depends on collaboration. ACEO works with community members, local leadership, development partners, and other stakeholders to strengthen locally owned solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2d6a4f]/15">
          {partners.map((p, i) => (
            <div key={i} className="bg-[#fdf8f0] p-8">
              <div className="w-8 h-px bg-[#2d6a4f] mb-6" />
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-lg text-[#1b4332] font-medium mb-4">{p.name}</h3>
              <p className="text-[#6b4226]/70 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Updates() {
  const news = [
    { date: 'December 2025', title: 'New Goat Distribution Phase Completed', body: 'A new AGEP distribution phase successfully provided goats to participating families, expanding the circulation of productive assets within the community.' },
    { date: 'November 2025', title: 'Community Training Program Expanded', body: 'ACEO expanded its livestock management training to additional community members, with emphasis on sustainable animal husbandry, disease prevention, and household asset management.' },
    { date: 'October 2025', title: 'Official Project Launch Ceremony', body: 'Community leaders and participating households came together to mark the official commencement of the expanded AGEP program, beginning a new phase of community-led livelihood development.' },
  ]
  return (
    <section className="bg-[#fdf8f0] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#b5830a]" />
              <span className="text-[#b5830a] text-xs tracking-[0.2em] uppercase">Latest Updates</span>
            </div>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-4xl md:text-5xl text-[#1b4332] font-light leading-tight">
              Stay Informed About<br />Our Work and Impact
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-[#2d6a4f]/15">
          {news.map((n, i) => (
            <div key={i} className="bg-white p-8 group cursor-pointer hover:bg-[#2d6a4f] transition-colors duration-300">
              <div className="text-[#b5830a] group-hover:text-[#e9a41a] font-mono text-xs tracking-widest uppercase mb-6 transition-colors">{n.date}</div>
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-xl text-[#1b4332] group-hover:text-[#d8f3dc] font-medium mb-4 transition-colors">{n.title}</h3>
              <p className="text-[#6b4226]/70 group-hover:text-[#d8f3dc]/70 text-sm leading-relaxed transition-colors">{n.body}</p>
              <div className="mt-6 text-[#2d6a4f] group-hover:text-[#74c69d] text-sm font-semibold transition-colors">Read more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="bg-[#2d6a4f] py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #d8f3dc 0, #d8f3dc 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#b5830a]" />
          <span className="text-[#e9a41a] text-xs tracking-[0.2em] uppercase">Get Involved</span>
          <div className="h-px w-8 bg-[#b5830a]" />
        </div>
        <h2 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-4xl md:text-6xl text-[#d8f3dc] font-light leading-tight mb-6 max-w-3xl mx-auto">
          Ready to Make a Difference?
        </h2>
        <p className="text-[#d8f3dc]/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          ACEO believes that lasting development begins with communities themselves. By supporting our work, you can help families access productive assets, develop practical skills, and build stronger community support systems.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#contact" className="bg-[#d8f3dc] hover:bg-white text-[#1b4332] font-semibold px-10 py-4 text-sm tracking-wide transition-colors">
            Get Involved
          </a>
          <a href="#donate" className="bg-[#b5830a] hover:bg-[#e9a41a] text-white font-semibold px-10 py-4 text-sm tracking-wide transition-colors">
            Make a Donation
          </a>
        </div>
      </div>
    </section>
  )
}

function Donate() {
  return (
    <section id="donate" className="bg-[#0f2d1c] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#b5830a]" />
            <span className="text-[#74c69d] text-xs tracking-[0.2em] uppercase">Support ACEO</span>
            <div className="h-px w-8 bg-[#b5830a]" />
          </div>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-4xl md:text-5xl text-[#d8f3dc] font-light leading-tight mb-6">
            Your Support Can Help Transform Lives
          </h2>
          <p className="text-[#d8f3dc]/65 leading-relaxed">
            Your contribution helps ACEO expand community-led livelihood programs, provide productive livestock assets, strengthen training initiatives, and support the systems that allow participating households to build lasting financial resilience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-[#2d6a4f]/20 max-w-4xl mx-auto">
          {[
            { method: 'M-Pesa', detail: '+254 140 033 310', icon: '📱' },
            { method: 'MTN Mobile Money', detail: '+256 777 853 354', icon: '📲' },
            { method: 'Equity Bank — Uganda', detail: 'Account: 1041103542720', icon: '🏦' },
          ].map(d => (
            <div key={d.method} className="bg-[#1b4332] p-8 text-center">
              <div className="text-3xl mb-4">{d.icon}</div>
              <div style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-[#74c69d] text-xl font-medium mb-3">{d.method}</div>
              <div className="text-[#d8f3dc] font-mono text-sm tracking-wide bg-[#0f2d1c] py-3 px-4">{d.detail}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-[#74c69d]/60 text-sm mt-8">Every contribution helps strengthen the cycle of community empowerment.</p>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-[#f5ede0] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#b5830a]" />
              <span className="text-[#b5830a] text-xs tracking-[0.2em] uppercase">Contact Us</span>
            </div>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-4xl md:text-5xl text-[#1b4332] font-light leading-tight mb-6">
              Get Involved With ACEO
            </h2>
            <p className="text-[#6b4226]/80 leading-relaxed mb-10">
              Would you like to learn more about our programs, partner with us, support a community initiative, or explore opportunities to work with ACEO? We would love to hear from you.
            </p>
            <div className="space-y-6">
              <div>
                <div className="text-[#b5830a] text-xs tracking-widest uppercase font-semibold mb-3">Email</div>
                <div className="space-y-2">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="block text-[#2d6a4f] hover:text-[#1b4332] font-medium transition-colors">{CONTACT_EMAIL}</a>
                  <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`} className="block text-[#2d6a4f] hover:text-[#1b4332] font-medium transition-colors">Send an email</a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-[#b5830a] text-xs tracking-widest uppercase font-semibold mb-3">Phone — Kenya</div>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-[#1b4332] font-medium hover:text-[#2d6a4f] transition-colors">+254 140 033 310</a>
                </div>
                <div>
                  <div className="text-[#b5830a] text-xs tracking-widest uppercase font-semibold mb-3">Phone — Uganda</div>
                  <div className="text-[#1b4332] font-medium">+256 777 853 354</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8">
            <h3 style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-2xl text-[#1b4332] font-medium mb-6">Stay Connected</h3>
            <p className="text-[#6b4226]/75 text-sm mb-6">
              Subscribe to the ACEO newsletter for updates about our projects, community success stories, upcoming initiatives, and opportunities to get involved.
            </p>
            <form
              className="space-y-4"
              onSubmit={e => {
                e.preventDefault()
                const form = e.currentTarget
                const formData = new FormData(form)
                const name = String(formData.get('name') ?? '').trim()
                const email = String(formData.get('email') ?? '').trim()
                const message = String(formData.get('message') ?? '').trim()
                const body = [
                  name ? `Name: ${name}` : '',
                  email ? `Email: ${email}` : '',
                  message ? `Message: ${message}` : '',
                ].filter(Boolean).join('\n\n')
                const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(body || WHATSAPP_MESSAGE)}`
                window.location.href = mailtoLink
              }}
            >
              <div>
                <label className="text-[#1b4332] text-xs tracking-wide uppercase font-semibold block mb-2">Name</label>
                <input name="name" type="text" className="w-full border border-[#2d6a4f]/20 focus:border-[#2d6a4f] outline-none px-4 py-3 text-sm bg-[#fdf8f0] text-[#1c1917] transition-colors" placeholder="Your full name" />
              </div>
              <div>
                <label className="text-[#1b4332] text-xs tracking-wide uppercase font-semibold block mb-2">Email</label>
                <input name="email" type="email" className="w-full border border-[#2d6a4f]/20 focus:border-[#2d6a4f] outline-none px-4 py-3 text-sm bg-[#fdf8f0] text-[#1c1917] transition-colors" placeholder="your@email.com" />
              </div>
              <div>
                <label className="text-[#1b4332] text-xs tracking-wide uppercase font-semibold block mb-2">Message (optional)</label>
                <textarea name="message" rows={4} className="w-full border border-[#2d6a4f]/20 focus:border-[#2d6a4f] outline-none px-4 py-3 text-sm bg-[#fdf8f0] text-[#1c1917] transition-colors resize-none" placeholder="How would you like to get involved?" />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <button type="submit" className="w-full bg-[#2d6a4f] hover:bg-[#1b4332] text-[#d8f3dc] font-semibold py-4 text-sm tracking-wide transition-colors">
                  Send Email
                </button>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center bg-[#25d366] hover:bg-[#1fb457] text-white font-semibold py-4 text-sm tracking-wide transition-colors">
                  WhatsApp Us
                </a>
              </div>
            </form>
            <p className="text-[#6b4226]/50 text-xs mt-4">We respect your privacy and will never share your information without your consent.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FloatingWhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with ACEO on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-black/30 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/80"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.79 11.79 0 0 0 12.05 0C5.4 0 .01 5.37.01 11.99c0 2.12.55 4.19 1.58 6l-1.68 6.14 6.3-1.65a12 12 0 0 0 5.84 1.49h.01c6.65 0 12.04-5.37 12.04-11.99 0-3.2-1.25-6.2-3.58-8.5Zm-8.47 18.4a9.91 9.91 0 0 1-5.06-1.39l-.36-.21-3.74.98 1-3.64-.23-.38a9.84 9.84 0 0 1-1.52-5.24c0-5.45 4.43-9.88 9.89-9.88a9.82 9.82 0 0 1 6.98 2.89 9.83 9.83 0 0 1 2.89 6.98c0 5.45-4.43 9.88-9.85 9.88Zm5.68-7.76c-.31-.15-1.82-.9-2.11-1.01-.28-.11-.49-.15-.7.15-.21.31-.8 1.01-.98 1.22-.18.21-.36.24-.67.08-.31-.15-1.31-.48-2.5-1.54-.93-.83-1.56-1.84-1.74-2.15-.18-.31-.02-.47.13-.62.13-.13.31-.36.46-.54.15-.18.2-.31.31-.52.1-.21.05-.39-.02-.54-.08-.15-.7-1.69-.96-2.31-.25-.6-.5-.52-.7-.53l-.6-.01c-.21 0-.54.08-.82.39-.28.31-1.06 1.03-1.06 2.51s1.09 2.91 1.25 3.12c.15.21 2.1 3.21 5.09 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.88.12.57-.09 1.82-.74 2.08-1.46.26-.72.26-1.34.18-1.46-.08-.13-.28-.21-.59-.36Z" />
      </svg>
    </a>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0f2d1c] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div style={{ fontFamily: 'Fraunces, Georgia, serif' }} className="text-[#74c69d] text-2xl font-semibold mb-2">ACEO</div>
            <div className="text-[#d8f3dc]/40 text-xs tracking-widest uppercase mb-4">Ajokon Community Empowerment Organization</div>
            <p className="text-[#d8f3dc]/55 text-sm leading-relaxed max-w-sm">
              Building communities where households have the assets, knowledge, relationships, and financial mechanisms they need to create better opportunities for future generations.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Community-led.', 'Culturally grounded.', 'Asset-based.', 'Sustainable.'].map(t => (
                <span key={t} className="border border-[#2d6a4f] text-[#74c69d] text-xs px-3 py-1 tracking-wide">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[#74c69d] text-xs tracking-widest uppercase font-semibold mb-4">Navigation</div>
            <div className="space-y-2">
              {[...NAV_LINKS, { label: 'Donate', href: '#donate' }].map(l => (
                <a key={l.label} href={l.href} className="block text-[#d8f3dc]/55 hover:text-[#74c69d] text-sm transition-colors">{l.label}</a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[#74c69d] text-xs tracking-widest uppercase font-semibold mb-4">Contact</div>
            <div className="space-y-2 text-sm text-[#d8f3dc]/55">
              <div>Amuria, Uganda</div>
              <a href="mailto:atango@ajokon.org" className="block hover:text-[#74c69d] transition-colors">atango@ajokon.org</a>
              <div>+256 777 853 354</div>
              <div>+254 140 033 310</div>
            </div>
          </div>
        </div>
        <div className="h-px bg-[#2d6a4f]/30 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-[#d8f3dc]/35 text-xs">
          <div>© 2026 Ajokon Community Empowerment Organization (ACEO), Uganda. All Rights Reserved.</div>
          <div className="text-[#2d6a4f] text-xs">Empowering communities since 2025</div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Pillars />
      <AGEP />
      <CapacityBuilding />
      <AjokonPlusModel />
      <SavingsCircle />
      <Implementation />
      <Impact />
      <Team />
      <Testimonials />
      <Partners />
      <Updates />
      <CTA />
      <Donate />
      <Contact />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}
