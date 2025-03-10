import Waves from '../komponen/Waves/Waves';
export default function Footer() {
    return (
        
      <footer className=" py-16">


        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          
          {/* Bagian Kiri */}
          <div className="text-left flex flex-col items-center md:items-start">
            <p className="text-2xl mt-2">Let's Work With Me</p>
          </div>
          {/* Bagian Kanan - Social Media */}
          <div className="mt-2 md:mt-2 flex space-x-4 items-center">
            <a href="#" className="text-white hover:opacity-80 transition">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" className="w-8" />
            </a>
            <a href="#" className="text-white hover:opacity-80 transition">
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="w-8" />
            </a>
            <a href="#" className="text-white hover:opacity-80 transition">
              <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className="w-8" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
  