
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-green-600/20 w-full h-full absolute -left-6 -top-6 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Serviço de limpeza profissional" 
                className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-6 z-20 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-700 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Qualidade</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Confiança</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Satisfação dos clientes</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-green-100 text-green-700 font-medium px-4 py-1.5 rounded-full text-sm mb-4 animate-fade-in">
              Sobre Nós
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Excelência em serviços de limpeza para sua casa ou empresa
            </h2>
            <p className="text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A Agência de Limpeza TOP Mais se dedica a oferecer os melhores serviços de limpeza doméstica e comercial, 
              com profissionais capacitados e produtos de qualidade para garantir ambientes limpos e saudáveis.
            </p>
            <p className="text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Nosso compromisso é com a satisfação total dos nossos clientes, oferecendo soluções personalizadas
              para atender às necessidades específicas de cada espaço e orçamento.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-green-700" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Equipe Qualificada</h4>
                  <p className="text-gray-600">Profissionais treinados e com experiência em serviços de limpeza</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-green-700" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Serviços Personalizados</h4>
                  <p className="text-gray-600">Pacotes mensais adaptados às necessidades específicas do seu espaço</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-green-700" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Limpeza Completa</h4>
                  <p className="text-gray-600">Do básico à limpeza pós-obra, cuidamos de todos os detalhes</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://wa.me/5531996609921" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex animate-fade-in" 
              style={{ animationDelay: '0.7s' }}
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
