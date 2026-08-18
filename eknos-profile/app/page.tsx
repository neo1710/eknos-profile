"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const asset = "/companyprofile/";
const services = [
  ["01", "Corporate MICE & Events", "Conferences, conventions, offsites, launches and occasions people remember.", "mice IMAGE.jpg"],
  ["02", "Air Ticketing & Travel", "Smart fares, group bookings and seamless domestic or international itineraries.", "Plane.jpg"],
  ["03", "Visa & Travel Assistance", "Documentation guidance, appointments, insurance and attentive traveller support.", "Visa.jpg"],
  ["04", "Hotels & Venue Sourcing", "Exceptional hotels, resorts, convention centres and spaces that set the scene.", "Hotel chain.webp"],
  ["05", "Destination Management", "Connected local expertise, memorable experiences and reliable on-ground coordination.", "DMC.png"],
  ["06", "Transport & Logistics", "Executive cars, coaches, transfers, meet-and-assist and coordinated group movement.", "merc-s-class-rental.webp"],
];
const approach = ["Brief", "Plan", "Source", "Negotiate", "Book", "Coordinate", "Execute", "Deliver"];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isIntroMuted, setIsIntroMuted] = useState(true);

  useEffect(() => {
    setDarkMode(localStorage.getItem("eknos-theme") === "dark");
  }, []);

  const toggleTheme = () => {
    setDarkMode((current) => {
      const next = !current;
      localStorage.setItem("eknos-theme", next ? "dark" : "light");
      return next;
    });
  };

  const logo = `${asset}${darkMode ? "logo-white.png" : "logo-black.png"}`;

  return <main className={darkMode ? "dark-mode" : ""}><section className="intro-video"><video autoPlay muted={isIntroMuted} loop playsInline preload="metadata"><source src={`${asset}eknos-video.mp4`} type="video/mp4" />Your browser does not support video playback.</video><div className="intro-video-overlay"><p>Welcome to Eknos India</p><button type="button" onClick={() => setIsIntroMuted((muted) => !muted)} aria-label={isIntroMuted ? "Unmute introduction video" : "Mute introduction video"}><span>{isIntroMuted ? "🔇" : "🔊"}</span>{isIntroMuted ? "Sound off" : "Sound on"}</button></div></section>
    <nav className="nav shell"><a href="#top" className="brand"><Image src={logo} alt="Eknos India" width={176} height={52} priority /></a><div className="nav-links"><a href="#services">Services</a><a href="#experience">Experience</a><a href="#contact">Why Eknos</a></div><div className="nav-actions"><button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}><span>{darkMode ? "☀" : "◐"}</span>{darkMode ? "Light" : "Dark"}</button><a href="https://eknos.com/" className="nav-cta">Start a conversation <span>↗</span></a></div></nav>
    <section id="top" className="hero"><Image className="hero-image" src={`${asset}the-sky-clouds-engine-flight-flight-hd-wallpaper-preview.jpg`} alt="Airplane above the clouds" fill priority sizes="100vw" /><div className="hero-shade" /><div className="shell hero-content"><p className="eyebrow light">Corporate events · MICE · Global travel</p><h1>Experiences that<br /><em>move business.</em></h1><p className="hero-copy">From boardrooms to breathtaking destinations, Eknos India creates thoughtfully orchestrated corporate experiences—anywhere in the world.</p><a href="#services" className="button light-button">Discover our capabilities <span>↓</span></a></div><div className="hero-bottom shell"><span>Scroll to explore</span><span>India · Worldwide</span></div></section>
    <section className="intro shell"><p className="eyebrow">The Eknos advantage</p><div className="intro-grid"><h2>One partner.<br />Every <em>possibility.</em></h2><div><p className="lead">Eknos India is a professional MICE, corporate travel and destination management company delivering end-to-end solutions with clarity, care and commercial intelligence.</p><p>Our trusted network of hotels, DMCs, airlines, transport partners and event specialists gives you a single window for planning, sourcing, negotiation, execution and post-event support.</p></div></div><div className="stat-row"><div><strong>8,000+</strong><span>Guests managed</span></div><div><strong>Global</strong><span>Destination reach</span></div><div><strong>One</strong><span>Point of contact</span></div><div><strong>End-to-end</strong><span>Expert execution</span></div></div></section>
    <section id="services" className="services"><div className="shell"><p className="eyebrow">What we do</p><div className="section-heading"><h2>Expertise for every<br /><em>moving part.</em></h2><p>Complex logistics, creative ambition and an exacting eye for detail—brought together under one experienced team.</p></div></div><div className="service-grid shell">{services.map(([number, title, text, image]) => <article className="service-card" key={title}><div className="service-image"><Image src={`${asset}${image}`} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" /></div><div className="service-body"><span>{number}</span><h3>{title}</h3><p>{text}</p><a className="explore-link" href="https://eknos.com/individual">Explore <i>↗</i></a></div></article>)}</div></section>
    <section className="network"><div className="shell network-grid"><div><p className="eyebrow light">Our network advantage</p><h2>Better sourcing.<br /><em>Smarter outcomes.</em></h2><p>Our established global network opens up more possibilities—competitive commercial terms, dependable partners and the confidence to deliver brilliantly across every destination.</p></div><div className="network-list"><span>Hotels & venues</span><span>Airlines & ticketing</span><span>Destination partners</span><span>Event production</span><span>Transport operators</span><span>Experiences & activities</span></div></div></section>
    <section className="showreel"><div className="shell showreel-grid"><div className="showreel-copy"><p className="eyebrow">The Eknos experience</p><h2>Moments that<br /><em>stay with you.</em></h2><p>Every journey is designed to bring people together, create momentum and leave a lasting impression—well beyond the final itinerary.</p></div><div className="video-frame"><video autoPlay muted loop playsInline preload="metadata"><source src={`${asset}linkedin-video.mp4`} type="video/mp4" />Your browser does not support video playback.</video><span className="video-label">Eknos India · In motion</span></div></div></section>
    <section id="experience" className="experience shell"><p className="eyebrow">Proven at every scale</p><div className="section-heading"><h2>Big ideas, <em>beautifully delivered.</em></h2><p>From executive retreats to nationwide programs, our track record carries the confidence of experience.</p></div><div className="projects"><article className="project large"><Image src={`${asset}Asian_incentive_groups_in_Singapore-2406.avif`} alt="Corporate incentive group in Singapore" fill sizes="(max-width: 800px) 100vw, 60vw" /><div><p>International incentive</p><h3>1,200 guests · Singapore</h3><span>JK Group</span></div></article><article className="project"><Image src={`${asset}Event-Production.png`} alt="Corporate event production" fill sizes="(max-width: 800px) 100vw, 40vw" /><div><p>Pan-India program</p><h3>8,000 guests</h3><span>Zydus Healthcare</span></div></article></div><div className="track-record"><span>India</span><p>Annual meetings · Medical events · Product launches · Conferences</p><span>Worldwide</span><p>Singapore · Dubai · Bali · Turkey · Japan · Thailand · Iceland · Austria</p></div><a href="https://eknos.com/individual/portfolio" className="portfolio-link">Explore the full portfolio <span>↗</span></a></section>
    <section className="process"><div className="shell"><p className="eyebrow">Our end-to-end approach</p><h2>Every detail,<br /><em>in perfect sequence.</em></h2><div className="steps">{approach.map((step, i) => <div key={step}><small>0{i + 1}</small><span>{step}</span></div>)}</div><p className="process-copy">A single point of coordination. Complete accountability. From the first conversation to the final farewell.</p></div></section>
    <section id="contact" className="promise"><Image src={`${asset}Cruise.jpeg`} alt="A serene travel destination" fill sizes="100vw" /><div className="promise-overlay" /><div className="shell promise-content"><p className="eyebrow light">Our promise</p><h2>One partner.<br /><em>Complete MICE management.</em></h2><p>We don&apos;t simply arrange travel or events. We create seamless corporate experiences that deliver value, efficiency and lasting impact.</p><a href="https://eknos.com/" className="button light-button">Plan your next experience <span>↗</span></a></div></section>
    <footer><div className="shell footer-inner"><Image src={logo} alt="Eknos India" width={155} height={46} /><p>Corporate Events · MICE · Global Travel & Hospitality Solutions</p><span>© {new Date().getFullYear()} Eknos India</span></div></footer>
  </main>;
}
