import { useState } from 'react'
import myLogo from './assets/images/NDKM-Logo-2.png';
import babysitterImg from './assets/images/fake-baby-sitter-image.png';
import babysitterImg2 from './assets/images/fake-baby-sitter-image-2.png';
import './App.css'
import Header from './components/Header'
import ContactForm from './components/ContactForm'
import FooterComponent from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-white scroll-smooth">
      
      {/* Header */}
      <>
        <Header />
      </>

      {/* Hero Section */}
      <section id="home" className="relative py-12 bg-gray-900 sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
        <div className="absolute inset-0 hidden lg:block">
          <img className="object-cover object-right-bottom w-full h-full opacity-15" src={babysitterImg} alt=""></img>
        </div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
            <h1 className="text-4xl font-bold text-white sm:text-5xl xl:text-6xl">A Neighborhood Babysitter You Can Trust!</h1>
            <p className="mt-6 text-base text-gray-300">Friendly, responsible, trustworthy, and available evenings & weekends.</p>
            <div className="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start">
              <a href="#services" className="px-6 py-3 font-bold bg-white text-gray-900 rounded hover:bg-gray-200">See Services</a>
              <a href="#contact" className="px-6 py-3 font-bold border border-white text-white rounded hover:bg-white hover:text-gray-900">Book Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Hero Section */}
      <section className="mt-8 lg:hidden">
      <img className="object-cover w-full h-full" src="" alt="" />
      </section>

      {/* Services Section */}
      <section id="services" className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Available Services
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Safe, friendly, and reliable babysitting tailored to your family's needs.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card for Service 1 */}
            <div className="bg-gray-100 p-6 rounded shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Evening Sitting</h3>
              <p className="text-gray-600 text-sm mb-4">Perfect for date nights or late work hours.</p>
              <p className="text-gray-800 font-bold">$15/hr</p>
            </div>
            
            {/* Card for Service 2 */}
            <div className="bg-gray-100 p-6 rounded shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Weekend Sitting</h3>
              <p className="text-gray-600 text-sm mb-4">Flexible care Friday - Sunday afternoons.</p>
              <p className="text-gray-800 font-bold">$20/hr</p>
            </div>

            {/* Card for Service 3 */}
            <div className="bg-gray-100 p-6 rounded shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Overnight Sitting</h3>
              <p className="text-gray-600 text-sm mb-4">Reliable overnight care for occasional needs.</p>
              <p className="text-gray-800 font-bold">$50/night</p>
            </div>
            
            {/* Card for Service 4 */}
            <div className="bg-gray-100 p-6 rounded shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Other Sitting</h3>
              <p className="text-gray-600 text-sm mb-4">Need something that's not listed?</p>
              <p className="text-gray-800 font-bold">Give me a call & let's talk details.</p>
            </div>

          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section id="contact" className="bg-[var(--color-background-alt)] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Book Today!
          </h2>
          <ContactForm />
        </div>
      </section>
      
      <FooterComponent />
    </main>
  );
}

export default App;