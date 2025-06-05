
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>(31) 99660-9921</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>leilanorato1977@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <span>Rua São Lourenço, 63</span><br />
                  <span>Bairro Nossa Senhora das Graças</span><br />
                  <span>Sete Lagoas - Minas Gerais</span>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-green-300 transition-colors duration-300 inline-block">Início</a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-300 transition-colors duration-300 inline-block">Sobre Nós</a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-300 transition-colors duration-300 inline-block">Serviços</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-300 transition-colors duration-300 inline-block">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Logo and Description */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img src="/lovable-uploads/504003e2-a5eb-4a03-969b-5d8208fb004d.png" alt="Agência de Limpeza TOP Mais" className="h-16 mb-4" />
            <p className="text-green-100 mb-4">
              Empresa especializada em limpeza doméstica e comercial, oferecendo serviços de diaristas, faxineiras e limpeza pós-obras com pacotes mensais personalizados.
            </p>
            <a 
              href="https://wa.me/5531996609921" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-md inline-flex items-center"
            >
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-5 h-5 mr-2" />
              Fale conosco
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} Agência de Limpeza TOP Mais. Todos os direitos reservados.</p>
          <p className="mt-1">Responsável: Leila Maria Norato</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
