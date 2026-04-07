/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  MessageCircle, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  Users, 
  Zap, 
  MapPin, 
  Star,
  Scale,
  Plus,
  Minus,
  Phone
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/message/4IEZLYKSM4HJK1";

const Logo = ({ className = "", small = false }: { className?: string, small?: boolean }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className={`relative flex items-center justify-center rounded-sm border border-brand-gold/30 p-1.5 bg-brand-black/40 ${small ? 'scale-75' : ''}`}>
      <Scale className={`${small ? 'w-5 h-5' : 'w-7 h-7'} text-brand-gold`} />
      <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse"></div>
    </div>
    <div className="flex flex-col leading-none">
      <span className={`${small ? 'text-lg' : 'text-2xl'} font-serif font-bold tracking-tighter text-white`}>
        L.A. <span className="text-brand-gold">ADVOGADOS</span>
      </span>
      <span className={`${small ? 'text-[8px]' : 'text-[10px]'} font-sans font-bold tracking-[0.4em] uppercase text-gray-500 mt-0.5`}>
        Associados
      </span>
    </div>
  </div>
);

const PracticeArea = ({ name, description }: { name: string, description: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="text-lg font-medium text-white group-hover:text-brand-gold transition-colors">{name}</span>
        {isOpen ? <Minus className="w-5 h-5 text-brand-gold" /> : <Plus className="w-5 h-5 text-gray-500 group-hover:text-brand-gold" />}
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-400 font-light leading-relaxed text-sm">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

const TestimonialCard = ({ name, text, date }: { name: string, text: string, date: string }) => (
  <div className="bg-brand-black/40 p-8 border border-white/5 rounded-sm flex flex-col gap-5 hover:border-brand-gold/30 transition-all duration-500 group">
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-white text-sm tracking-tight">{name}</h4>
        <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Google Review</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-[#FBBC04] text-[#FBBC04]" />
          ))}
        </div>
        <span className="text-[10px] text-gray-500 font-medium">{date}</span>
      </div>
    </div>
    <p className="text-gray-300 text-sm leading-relaxed font-light italic">
      "{text}"
    </p>
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="text-lg font-medium text-white group-hover:text-brand-gold transition-colors">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-brand-gold" /> : <Plus className="w-5 h-5 text-gray-500 group-hover:text-brand-gold" />}
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-400 font-light leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-dark text-brand-white">
      {/* Floating WhatsApp Button */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: [0, -20, 0]
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: { duration: 0.5 },
          scale: { duration: 0.5 }
        }}
        className="fixed bottom-8 right-8 z-[100] flex items-center justify-center bg-green-600 text-white w-16 h-16 rounded-full font-bold shadow-2xl hover:bg-green-700 transition-colors group"
      >
        <Phone className="w-8 h-8 fill-current" />
      </motion.a>

      {/* Header / Logo */}
      <header className="py-8 px-6 md:px-12 flex justify-center border-b border-white/5 bg-brand-black/80 backdrop-blur-md sticky top-0 z-50">
        <Logo />
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-20 px-6 md:px-12 overflow-hidden">
        {/* Background Overlay for Beauty */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" 
            alt="Escritório de Advocacia" 
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/80 to-brand-dark"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-6 mb-8"
          >
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-full font-bold text-sm animate-pulse-whatsapp shadow-lg shadow-green-900/20"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              On-line agora
            </a>
            
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-[10px]">
              Atendimento Humanizado • Atuação em todo território nacional
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-8"
          >
            Seu problema jurídico <span className="text-brand-gold italic">não pode esperar.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Equipe de especialistas pronta para te atender agora. Soluções estratégicas e imediatas para o seu caso.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-brand-gold text-brand-gold px-10 py-5 rounded-sm font-bold text-lg hover:bg-brand-gold hover:text-brand-black transition-all duration-300 group"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Clique aqui e faça uma análise do seu caso
            </a>
          </motion.div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-20 px-6 md:px-12 bg-brand-black border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-3xl font-light leading-relaxed text-gray-300">
            Equipe especializada, atuação estratégica e atendimento imediato para quem precisa de <span className="text-brand-gold font-medium border-b border-brand-gold/30">solução rápida.</span>
          </p>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 px-6 md:px-12 bg-brand-dark">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between gap-6 mb-16">
            <div className="flex items-center gap-6 flex-1">
              <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-gold whitespace-nowrap">Áreas de Atuação</h3>
              <div className="h-[1px] w-full bg-white/10"></div>
            </div>
            <Logo small className="hidden md:flex opacity-20 hover:opacity-100 transition-opacity duration-700" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-0">
            <PracticeArea 
              name="Direito Penal" 
              description="Atuação em inquéritos policiais, defesas criminais, recursos, audiências de custódia e acompanhamento em delegacias 24h."
            />
            <PracticeArea 
              name="Direito Civil" 
              description="Ações de indenização, cobranças, contratos, responsabilidade civil, posse e propriedade, e questões de vizinhança."
            />
            <PracticeArea 
              name="Direito Trabalhista" 
              description="Defesa dos direitos do trabalhador e da empresa, rescisões, horas extras, assédio, acidentes de trabalho e consultoria preventiva."
            />
            <PracticeArea 
              name="Direito Previdenciário" 
              description="Aposentadorias, auxílio-doença, BPC/LOAS, pensão por morte, revisões de benefícios e planejamento previdenciário."
            />
            <PracticeArea 
              name="Direito Tributário" 
              description="Defesa em execuções fiscais, recuperação de impostos, planejamento tributário e consultoria para empresas e pessoas físicas."
            />
            <PracticeArea 
              name="Direito de Família" 
              description="Divórcios, pensão alimentícia, guarda de menores, inventários, partilha de bens, união estável e adoção."
            />
            <PracticeArea 
              name="Direito do Consumidor" 
              description="Ações contra bancos, operadoras de telefonia, companhias aéreas, problemas com produtos e serviços, e danos morais."
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 md:px-12 bg-brand-black/50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-serif font-bold mb-20 text-center">Como Funciona</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Clique no botão", desc: "Inicie o contato via WhatsApp" },
              { step: "02", title: "Fale com a equipe", desc: "Relate seu caso brevemente" },
              { step: "03", title: "Análise rápida", desc: "Especialistas avaliam a situação" },
              { step: "04", title: "Início imediato", desc: "Ação jurídica sem demora" },
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <span className="text-7xl font-serif font-bold text-white/5 absolute -top-10 -left-4 group-hover:text-brand-gold/10 transition-colors">
                  {item.step}
                </span>
                <div className="relative z-10">
                  <h4 className="font-bold text-xl mb-3 text-brand-gold">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials & Action Strategy */}
      <section className="py-32 px-6 md:px-12 bg-brand-dark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Differentials */}
          <div>
            <h3 className="text-3xl font-serif font-bold mb-12 border-l-4 border-brand-gold pl-6">Nossos Diferenciais</h3>
            <div className="space-y-10">
              {[
                { icon: Clock, title: "Atendimento rápido", desc: "Resposta imediata para casos urgentes." },
                { icon: Users, title: "Equipe especialista", desc: "Advogados focados em áreas específicas." },
                { icon: Zap, title: "Estratégia personalizada", desc: "Cada caso é tratado de forma única." },
                { icon: ShieldCheck, title: "Atuação eficiente", desc: "Foco total no resultado e na resolução." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="bg-brand-gold/10 p-4 rounded-sm h-fit group-hover:bg-brand-gold/20 transition-colors">
                    <item.icon className="w-7 h-7 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Strategy */}
          <div className="bg-brand-black border border-white/5 p-12 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <h3 className="text-3xl font-serif font-bold mb-12 text-brand-gold">Como Atuamos</h3>
            <div className="space-y-10">
              {[
                "Análise individual de cada caso",
                "Definição da melhor estratégia jurídica",
                "Orientação clara ao cliente",
                "Acompanhamento até a resolução"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <div className="w-3 h-[1px] bg-brand-gold"></div>
                  <p className="text-xl font-light text-gray-200">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 bg-brand-black/30">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-serif font-bold mb-20 text-center">O que nossos clientes dizem</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Ana Paula Oliveira" 
              date="há 2 semanas"
              text="Fui atendida com uma humanidade que nunca vi em outro escritório. Além de extremamente profissionais, eles realmente se importam com a pessoa por trás do processo. Me senti segura e acolhida desde o primeiro minuto." 
            />
            <TestimonialCard 
              name="Marcos Vinícius Silva" 
              date="há 1 mês"
              text="Profissionalismo impecável e uma transparência que gera total confiança. Resolveram minha situação com uma rapidez impressionante. É um escritório confiável como nenhum outro que já contratei." 
            />
            <TestimonialCard 
              name="Juliana Ferreira" 
              date="há 3 dias"
              text="O atendimento é muito humano e direto. Eles não usam termos difíceis, explicam tudo com clareza. Senti que meu problema era prioridade máxima para eles. Recomendo a todos que precisam de urgência e ética." 
            />
            <TestimonialCard 
              name="Roberto Almeida" 
              date="há 2 meses"
              text="Um escritório que combina competência técnica com um olhar sensível para o cliente. Foram fundamentais em um momento de grande incerteza. A confiança que passam é o grande diferencial deles." 
            />
            <TestimonialCard 
              name="Beatriz Santos" 
              date="há 1 semana"
              text="Fiquei impressionada com a rapidez e o profissionalismo. Eles são muito organizados e me mantiveram informada de cada passo. É raro encontrar advogados tão acessíveis e humanos hoje em dia." 
            />
            <TestimonialCard 
              name="Cláudio Mendes" 
              date="há 3 semanas"
              text="A melhor decisão que tomei foi contratar a L.A Advogados. Atendimento estratégico e muito eficiente. Resolveram uma questão complexa com maestria e total transparência." 
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 md:px-12 bg-brand-dark border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-serif font-bold mb-16 text-center">Perguntas Frequentes</h3>
          <div className="flex flex-col">
            <FAQItem 
              question="Como funciona o atendimento?" 
              answer="Nosso atendimento é imediato e estratégico. Ao entrar em contato via WhatsApp, você será atendido por nossa equipe que realizará uma triagem rápida para direcionar seu caso ao advogado especialista da área correspondente." 
            />
            <FAQItem 
              question="Quais áreas o escritório atende?" 
              answer="Atuamos de forma especializada em Direito Penal, Civil, Trabalhista, Previdenciário, Tributário, Família e Consumidor. Cada área conta com profissionais dedicados e experientes para garantir a melhor estratégia." 
            />
            <FAQItem 
              question="O atendimento pode ser feito totalmente on-line?" 
              answer="Sim. Atendemos clientes de todo o país de forma 100% digital com a mesma segurança e eficiência do presencial. Utilizamos ferramentas modernas para reuniões por vídeo e assinatura digital de documentos, agilizando a resolução do seu problema." 
            />
            <FAQItem 
              question="Como funciona a cobrança de honorários?" 
              answer="Trabalhamos com total transparência e ética. Nossos valores são estabelecidos de acordo com a Tabela de Honorários da OAB (Ordem dos Advogados do Brasil), garantindo que o investimento seja justo e esteja em conformidade com as normas da classe." 
            />
            <FAQItem 
              question="Quanto tempo demora para resolver o meu caso?" 
              answer="Cada caso é único, mas nossa prioridade é a agilidade. Iniciamos as medidas cabíveis imediatamente após a contratação e mantemos você informado sobre cada etapa do processo." 
            />
            <FAQItem 
              question="Preciso ir ao escritório fisicamente?" 
              answer="Não é necessário, pois atendemos via WhatsApp e videoconferência em todo o país para sua total comodidade. Caso prefira o atendimento presencial, este é realizado exclusivamente mediante agendamento prévio de dia e horário." 
            />
            <FAQItem 
              question="Como recebo atualizações sobre o meu processo?" 
              answer="Mantemos um canal direto de comunicação via WhatsApp, onde você recebe atualizações periódicas e pode tirar dúvidas diretamente com o advogado responsável pelo seu caso." 
            />
            <FAQItem 
              question="O escritório atende casos urgentes de madrugada?" 
              answer="Sim, possuímos equipe de plantão para situações de extrema urgência que exijam intervenção jurídica imediata, especialmente em casos criminais e prisões em flagrante." 
            />
            <FAQItem 
              question="Quais documentos preciso para iniciar?" 
              answer="Geralmente RG, CPF, comprovante de residência e os documentos específicos do seu caso. Nossa equipe orientará detalhadamente na primeira conversa sobre tudo o que é necessário." 
            />
          </div>
          
          <div className="mt-20 text-center">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 border-2 border-brand-gold text-brand-gold px-10 py-5 rounded-sm font-bold text-xl hover:bg-brand-gold hover:text-brand-black transition-all duration-300 group shadow-lg shadow-brand-gold/5"
            >
              <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
              Clique aqui e faça uma análise do seu caso
            </a>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-32 px-6 md:px-12 bg-brand-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-4xl font-serif font-bold mb-8">Nossa Localização</h3>
              <p className="text-gray-400 text-lg mb-10 flex items-start gap-3">
                <MapPin className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
                Avenida Amélia Fukuda, n. 358, Centro, Naviraí/MS
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Avenida+Amélia+Fukuda,+358,+Naviraí,+MS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border-2 border-brand-gold text-brand-gold px-8 py-4 font-bold hover:bg-brand-gold hover:text-brand-black transition-all rounded-sm"
              >
                Ver localização no mapa
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
            <div className="h-[450px] bg-brand-dark rounded-sm overflow-hidden shadow-2xl border border-white/5 grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.244331454523!2d-54.1925!3d-23.065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAzJzU0LjAiUyA1NMKwMTEnMzMuMCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black text-white py-20 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div>
              <Logo className="mb-6" />
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Atuação jurídica estratégica, com compromisso, ética e resultados. Escritório focado em soluções imediatas.
              </p>
            </div>
            <div>
              <h5 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold mb-6">Contato Direto</h5>
              <p className="text-gray-300 text-sm mb-3 font-medium">WhatsApp: (67) 99823-7567</p>
              <p className="text-gray-300 text-sm">Email: contato@laadvogados.com.br</p>
            </div>
            <div>
              <h5 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold mb-6">Institucional</h5>
              <p className="text-gray-300 text-sm mb-3">CNPJ: 62.825.950/0001-02</p>
              <p className="text-gray-300 text-sm">Naviraí - Mato Grosso do Sul</p>
            </div>
          </div>
          <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-[10px] uppercase tracking-[0.4em] font-medium">
              © 2026 L.A Advogados Associados. Excelência Jurídica.
            </p>
            <div className="flex gap-8 opacity-30">
              <Scale className="w-5 h-5" />
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
