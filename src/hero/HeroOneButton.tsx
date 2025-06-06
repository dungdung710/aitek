import { Section } from '../layout/Section';

const Hero = () => (
  <Section>
    <h1 className="text-5xl font-extrabold mb-4 text-center">
      Make Your Drive, Make Your Style
    </h1>
    <h2 className="text-2xl font-semibold mb-6 text-center">
      AutoMate – The 100% Offline Voice Assistant for Cars
    </h2>
    <p className="max-w-xl mx-auto mb-8 text-lg text-center">
      Upgrade your driving experience with hands-free, distraction-free, and reliable control. <br />
      Experience the future of in-car safety and convenience, powered by innovative Vietnamese technology.
    </p>
    <div className="flex justify-center gap-6">
      <a href="#features" className="px-6 py-3 bg-blue-800 text-white font-bold rounded-full shadow-lg hover:bg-blue-900 transition">See Features</a>
      <a href="#contact" className="px-6 py-3 bg-transparent border border-blue-800 text-blue-800 font-bold rounded-full hover:bg-blue-100 transition">Contact Us</a>
    </div>
  </Section>
);

export { Hero };
