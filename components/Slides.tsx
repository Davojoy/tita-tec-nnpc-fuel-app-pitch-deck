import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Smartphone, 
  Layers, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  CreditCard, 
  Gift, 
  Users, 
  TrendingUp,
  Fuel,
  Code2,
  PieChart,
  Target,
  RefreshCw,
  Compass,
  Mail,
  Globe,
  MapPin
} from 'lucide-react';
import { SlideProps } from '../types';
import nnpcAppImage from '/images/nr-nnpc-fuel-app-image.jpeg';
import tisanImage from '/images/Tisan Toye.jpeg';
import johnImage from '/images/John Amondi.jpeg';
import emmanuelImage from '/images/Emmanuel Doji.jpeg';



// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 50 } 
  }
};

// --- Slide 1: Cover ---
export const Slide1: React.FC<SlideProps> = () => (
  <motion.div 
    className="h-full flex flex-col lg:flex-row items-center justify-between relative min-h-[500px] gap-12"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="absolute right-[-10%] top-[-10%] w-[60%] h-[80%] bg-nnpc-light rounded-full opacity-20 blur-3xl" />
    
    <motion.div variants={itemVariants} className="z-10 max-w-2xl lg:w-1/2">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-nnpc-green p-3 rounded-lg">
          <Fuel className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
        <span className="text-nnpc-green font-bold tracking-widest text-sm md:text-lg">PROPOSAL</span>
      </div>
      
      <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-7xl text-nnpc-dark leading-tight mb-6">
        TITA TEC LTD <br />
        <span className="text-accent-gray">NNPC Fuel App</span>
      </h1>
      
      <div className="h-1 w-24 bg-accent-red mb-8 rounded-full"></div>
      
      <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-light leading-relaxed">
        Delivering a user-centric, scalable, and efficient fuel app ecosystem.
      </h2>
    </motion.div>

    <motion.div 
      variants={itemVariants}
      className="z-10 lg:w-1/2 flex justify-center lg:justify-end"
    >
      <div className="relative group w-full max-w-[450px]">
        <div className="absolute -inset-1 bg-gradient-to-r from-nnpc-green to-nnpc-light rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <img 
          src={nnpcAppImage} 
          alt="NNPC Fuel App" 
          className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border border-white/20"
        />
      </div>
    </motion.div>
  </motion.div>
);

// --- Slide 2: About ---
export const Slide2: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col justify-center relative z-10 min-h-min">
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible" 
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:h-[80%] items-center"
    >
      {/* Identity Card */}
      <motion.div 
        variants={itemVariants}
        className="col-span-1 lg:col-span-5 h-full bg-nnpc-dark text-white rounded-3xl p-6 md:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden"
      >
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-nnpc-green/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

        <div className="relative z-10">
           <div className="flex items-center gap-3 mb-8 opacity-80">
             <div className="h-[1px] w-8 bg-white/50" />
             <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Who We Are</span>
           </div>
           
           <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
             Building the <span className="text-nnpc-light">digital future</span> of enterprise.
           </h2>

           <div className="space-y-6 text-base md:text-lg font-light text-gray-200">
             <p>
               TITA TEC is a premier <strong className="text-white font-semibold">Nigerian software product & technology company</strong>.
             </p>
             <p>
               We specialize in managing and optimizing <strong className="text-white font-semibold">scalable digital ecosystems</strong> for high-impact growth.
             </p>
           </div>
        </div>

        <div className="relative z-10 mt-10 md:mt-auto md:pt-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4 font-bold border-b border-white/10 pb-2 inline-block">Flagship Projects</p>
          <div className="flex flex-wrap gap-3">
             {['TITA CENTER', 'STIM', 'EVERIFI'].map((p, i) => (
               <span key={i} className="px-4 py-2 bg-white/10 rounded-lg text-xs font-semibold backdrop-blur-md border border-white/10">
                 {p}
               </span>
             ))}
          </div>
        </div>
      </motion.div>

      {/* Expertise Grid */}
      <motion.div 
         className="col-span-1 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5 h-full"
         variants={containerVariants}
      >
         {[
           { 
             icon: Layers, 
             title: "Product Strategy", 
             desc: "Aligning complex business goals with intuitive digital product roadmaps.",
             bg: "bg-purple-50", text: "text-purple-700" 
           },
           { 
             icon: Target, 
             title: "UX Design", 
             desc: "Crafting seamless, human-centric interfaces that drive user adoption.",
             bg: "bg-pink-50", text: "text-pink-700" 
           },
           { 
             icon: Code2, 
             title: "Engineering", 
             desc: "Robust, scalable architecture ensuring 99.9% uptime and security.",
             bg: "bg-blue-50", text: "text-blue-700" 
           },
           { 
             icon: TrendingUp, 
             title: "Growth & Data", 
             desc: "Leveraging analytics to optimize performance and revenue.",
             bg: "bg-orange-50", text: "text-orange-700" 
           },
         ].map((card, i) => (
           <motion.div 
             key={i} 
             variants={itemVariants}
             whileHover={{ scale: 1.02 }}
             className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 flex flex-col justify-center hover:shadow-xl transition-all"
           >
              <div className={`w-12 h-12 md:w-14 md:h-14 ${card.bg} ${card.text} rounded-2xl flex items-center justify-center mb-4 md:mb-6`}>
                <card.icon size={24} strokeWidth={2} className="md:w-7 md:h-7" />
              </div>
              <h3 className="font-heading font-bold text-lg md:text-xl text-gray-800 mb-2 md:mb-3">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {card.desc}
              </p>
           </motion.div>
         ))}
      </motion.div>
    </motion.div>
  </div>
);

// --- Slide 3: Observations ---
export const Slide3: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col justify-center min-h-min">
    <motion.div 
      variants={itemVariants} 
      initial="hidden" 
      animate="visible" 
      className="flex flex-col md:flex-row md:items-end justify-between mb-8"
    >
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-nnpc-dark">
        Current App Observations
        </h2>
        <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider mt-2 md:mt-0">
            <AlertCircle size={16} className="text-accent-red" />
            Critical Analysis
        </div>
    </motion.div>
    
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 md:h-[75%]">
      {/* Left: Insight Cards */}
      <motion.div 
        className="col-span-1 lg:col-span-7 grid grid-cols-1 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
         {[
             { 
                 title: "Functional but Static", 
                 desc: "The core utility works for fueling, but lacks the engaging features that drive daily active usage.",
                 stat: "Low Engagement",
                 icon: Smartphone,
                 color: "text-blue-600",
                 bg: "bg-blue-50",
                 border: "border-blue-100"
             },
             { 
                 title: "Adoption Barriers", 
                 desc: "Limited incentives for new users to download. No strong 'hook' for initial retention.",
                 stat: "High Churn",
                 icon: Users,
                 color: "text-orange-600",
                 bg: "bg-orange-50",
                 border: "border-orange-100"
             },
             { 
                 title: "Transaction Friction", 
                 desc: "Multiple steps and manual inputs create unnecessary delays at the pump.",
                 stat: "Avg. 10 mins",
                 icon: AlertCircle,
                 color: "text-red-600",
                 bg: "bg-red-50",
                 border: "border-red-100"
             },
             { 
                 title: "Siloed Ecosystem", 
                 desc: "Loyalty rewards and analytics are disconnected from the main transaction flow.",
                 stat: "0% - 15% Integration",
                 icon: Layers,
                 color: "text-gray-600",
                 bg: "bg-gray-50",
                 border: "border-gray-200"
             }
         ].map((item, i) => (
             <motion.div 
                key={i} 
                variants={itemVariants}
                className={`bg-white p-4 md:p-5 rounded-2xl border ${item.border} shadow-sm hover:shadow-md transition-shadow flex gap-4 md:gap-5 items-start`}
             >
                <div className={`${item.bg} p-3 md:p-4 rounded-xl shrink-0`}>
                    <item.icon className={`w-5 h-5 md:w-6 md:h-6 ${item.color}`} />
                </div>
                <div className="flex-grow">
                    <div className="flex justify-between items-center mb-1">
                        <h3 className="font-heading font-bold text-base md:text-lg text-gray-800">{item.title}</h3>
                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${item.bg} ${item.color} uppercase tracking-wide whitespace-nowrap`}>
                            {item.stat}
                        </span>
                    </div>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                </div>
             </motion.div>
         ))}
      </motion.div>

      {/* Right: Visual Flow Analysis */}
      <motion.div 
        className="col-span-1 lg:col-span-5 relative min-h-[500px] lg:h-full"
        initial={{ opacity: 0, x: 20 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ delay: 0.4 }}
      >
        <div className="lg:absolute lg:inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 shadow-inner flex flex-col p-6 md:p-8">
            <h3 className="font-heading font-bold text-gray-400 text-xs uppercase tracking-widest mb-6 lg:mb-8 text-center">User Journey Friction Map</h3>
            
            <div className="relative flex-grow flex flex-col justify-between py-2 gap-4">
                {/* Connecting Line */}
                <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-gray-200 rounded-full"></div>

                {/* Steps */}
                {[
                    { label: "App Launch", status: "Neutral", color: "bg-gray-400", icon: Smartphone },
                    { label: "Sign Up / Login", status: "Friction", color: "bg-orange-400", icon: Users },
                    { label: "Fuel Payment", status: "Critical Drop-off", color: "bg-red-500", icon: AlertCircle },
                    { label: "Post-Transaction", status: "No Retention", color: "bg-gray-300", icon: CheckCircle2 },
                ].map((step, i) => (
                    <motion.div 
                        key={i}
                        className="relative z-10 flex items-center gap-4 md:gap-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + (i * 0.15) }}
                    >
                        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl ${i === 2 ? 'bg-red-50 border-2 border-red-100 shadow-lg shadow-red-100/50' : 'bg-white border border-gray-100'} shadow-sm flex items-center justify-center shrink-0 relative z-10`}>
                            <step.icon className={`w-5 h-5 md:w-6 md:h-6 ${i === 2 ? 'text-red-500' : 'text-gray-400'}`} />
                            {i === 2 && (
                                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                            )}
                        </div>
                        <div className={`flex-grow p-3 md:p-4 rounded-xl border ${i===2 ? 'bg-red-50/50 border-red-100' : 'bg-white border-gray-100'} shadow-sm`}>
                            <h4 className="font-bold text-gray-700 text-xs md:text-sm">{step.label}</h4>
                            <p className={`text-[10px] md:text-xs font-bold mt-1 ${i === 2 ? 'text-red-600' : i === 1 ? 'text-orange-500' : 'text-gray-400'}`}>
                                {step.status}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            {/* Bottom Insight */}
            <div className="mt-8 lg:mt-6 p-4 bg-white rounded-xl border border-red-100 shadow-sm flex items-center gap-4">
                <div className="bg-red-100 p-2 rounded-lg">
                    <TrendingUp className="text-red-600 w-5 h-5" />
                </div>
                <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Key Statistic</p>
                    <p className="text-xs md:text-sm font-bold text-red-700">65% of potential transactions are abandoned here.</p>
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  </div>
);

// --- Slide 4: Challenges & Opportunities ---
export const Slide4: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col justify-center min-h-min">
    <motion.div variants={itemVariants} initial="hidden" animate="visible" className="mb-8 md:mb-10 flex items-center justify-between">
       <div>
         <h2 className="font-heading font-bold text-3xl md:text-4xl text-nnpc-dark mb-2">
            Challenges & Opportunities
         </h2>
         <div className="h-1 w-20 bg-accent-red rounded-full"></div>
       </div>
    </motion.div>

    <div className="flex flex-col lg:flex-row gap-8 h-full">
      
      {/* LEFT: Challenges (Dark/Red Theme) */}
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible" 
        className="flex-1 bg-gray-900 text-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden flex flex-col"
      >
        {/* Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>
        
        <div className="flex items-center gap-3 mb-8 z-10">
           <div className="p-3 bg-red-500/20 rounded-xl border border-red-500/30">
             <AlertCircle className="text-red-500 w-5 h-5 md:w-6 md:h-6" />
           </div>
           <h3 className="text-xl md:text-2xl font-bold">Challenges</h3>
        </div>

        <div className="space-y-4 md:space-y-6 z-10 flex-grow flex flex-col justify-center">
           {[
             { text: "Improve usability and trust without disrupting live operations", icon: ShieldCheck },
             { text: "Ensure system reliability and scalability", icon: Layers },
             { text: "Encourage repeat engagement for fuel transactions", icon: TrendingUp } 
           ].map((item, i) => (
             <motion.div key={i} variants={itemVariants} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="shrink-0 mt-1">
                   <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold text-xs md:text-sm">
                     {i+1}
                   </div>
                </div>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">{item.text}</p>
             </motion.div>
           ))}
        </div>
      </motion.div>

      {/* CENTER: Arrow Indicator (Desktop only) */}
      <div className="hidden lg:flex flex-col justify-center items-center -mx-4 z-20">
         <div className="bg-white p-3 rounded-full shadow-xl border border-gray-100 text-gray-400">
            <ArrowRight size={24} />
         </div>
      </div>

      {/* RIGHT: Opportunities (Light/Green Theme) */}
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible" 
        className="flex-1 bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden flex flex-col border border-gray-100 shadow-xl"
      >
         {/* Decor */}
         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-nnpc-light/50 to-transparent pointer-events-none"></div>

         <div className="flex items-center gap-3 mb-8 z-10">
           <div className="p-3 bg-nnpc-light rounded-xl">
             <Zap className="text-nnpc-green w-5 h-5 md:w-6 md:h-6" />
           </div>
           <h3 className="text-xl md:text-2xl font-bold text-nnpc-dark">Opportunities</h3>
        </div>

        <div className="grid grid-cols-1 gap-4 z-10 flex-grow">
           {[
             { text: "UX improvements for faster onboarding", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
             { text: "Introduce cashbacks & loyalty Features", icon: Gift, color: "text-purple-600", bg: "bg-purple-50" },
             { text: "Transparent transaction tracking", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50" },
             { text: "Data-driven insights to optimize operations", icon: BarChart3, color: "text-orange-600", bg: "bg-orange-50" }
           ].map((item, i) => (
             <motion.div 
               key={i} 
               variants={itemVariants} 
               className="flex items-center gap-4 p-4 md:p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-nnpc-green/30 transition-all group"
             >
                <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 ${item.bg} rounded-xl flex items-center justify-center`}>
                   <item.icon className={`w-5 h-5 md:w-6 md:h-6 ${item.color}`} />
                </div>
                <p className="text-gray-700 font-semibold text-base md:text-lg">{item.text}</p>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-nnpc-green hidden md:block">
                   <ArrowRight size={16} />
                </div>
             </motion.div>
           ))}
        </div>
      </motion.div>

    </div>
  </div>
);

// --- Slide 5: Solution ---
export const Slide5: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col justify-center min-h-min">
    <motion.div variants={itemVariants} initial="hidden" animate="visible" className="mb-8">
       <h2 className="font-heading font-bold text-3xl md:text-4xl text-nnpc-dark mb-2">
         Our Solution
       </h2>
       <p className="text-gray-500 max-w-2xl text-sm md:text-base">A holistic approach to rebuilding the NNPC fuel ecosystem.</p>
    </motion.div>

    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible" 
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:h-[70%]"
    >
       {/* 1. Strategy - Top Left (Wide) */}
       <motion.div 
         variants={itemVariants}
         className="col-span-1 lg:col-span-7 bg-nnpc-dark text-white rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group min-h-[250px]"
       >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Target size={120} />
          </div>
          <div className="z-10">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
               <Target className="text-nnpc-light w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">Product Strategy & Roadmap</h3>
            <p className="text-gray-300 font-light text-base md:text-lg">Aligning every feature with core business objectives to drive tangible value.</p>
          </div>
          <div className="h-1 w-full bg-white/10 mt-6 rounded-full overflow-hidden">
             <div className="h-full w-1/3 bg-nnpc-green"></div>
          </div>
       </motion.div>

       {/* 2. Engineering - Top Right */}
       <motion.div 
         variants={itemVariants}
         className="col-span-1 lg:col-span-5 bg-gray-100 rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between border border-gray-200 group min-h-[200px]"
       >
           <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
           <div className="z-10">
             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <Code2 className="text-gray-700 w-5 h-5 md:w-6 md:h-6" />
             </div>
             <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Engineering Excellence</h3>
             <p className="text-sm md:text-base text-gray-500">Scalable, secure backend infrastructure designed for 99.99% uptime.</p>
           </div>
           <div className="flex gap-2 mt-4">
              <span className="px-2 py-1 bg-white rounded border border-gray-200 text-xs font-mono text-gray-500">Secure</span>
              <span className="px-2 py-1 bg-white rounded border border-gray-200 text-xs font-mono text-gray-500">Scalable</span>
           </div>
       </motion.div>

       {/* 3. UX/UI - Bottom Left */}
       <motion.div 
         variants={itemVariants}
         className="col-span-1 lg:col-span-4 bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
       >
          <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
             <Smartphone className="text-purple-600 w-5 h-5 md:w-6 md:h-6" />
          </div>
          <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2">UX & UI Optimization</h3>
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Simplifying navigation to reduce friction and boost conversion rates.</p>
       </motion.div>

       {/* 4. Payments - Bottom Center */}
       <motion.div 
         variants={itemVariants}
         className="col-span-1 lg:col-span-4 bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
       >
          <div className="w-10 h-10 md:w-12 md:h-12 bg-nnpc-light rounded-xl flex items-center justify-center mb-4">
             <CreditCard className="text-nnpc-green w-5 h-5 md:w-6 md:h-6" />
          </div>
          <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2">Payment & Incentives</h3>
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Integrated cashbacks and rewards to drive recurring transactions.</p>
       </motion.div>

       {/* 5. Improvement - Bottom Right */}
       <motion.div 
         variants={itemVariants}
         className="col-span-1 lg:col-span-4 bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
       >
          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
             <RefreshCw className="text-blue-600 w-5 h-5 md:w-6 md:h-6" />
          </div>
          <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2">Continuous Improvement</h3>
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Analytics-driven prioritization for constant ecosystem evolution.</p>
       </motion.div>

    </motion.div>
  </div>
);

// --- Slide 6: UX Enhancements ---
export const Slide6: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col justify-center min-h-min">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full">
       <div className="col-span-1 lg:col-span-7">
          <motion.h2 variants={itemVariants} initial="hidden" animate="visible" className="font-heading font-bold text-3xl md:text-4xl text-nnpc-dark mb-8 md:mb-10">
            UX Enhancements
          </motion.h2>
          
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4 md:space-y-6">
            {[
              { icon: Users, title: "Simplified Onboarding", desc: "Seamless entry for first-time users." },
              { icon: Zap, title: "Quick Fuel Transactions", desc: "QR codes & one-click payments." },
              { icon: Layers, title: "Integrated History", desc: "Clear transaction logs & receipts." },
              { icon: AlertCircle, title: "Smart Notifications", desc: "Timely reminders & updates." },
              { icon: Gift, title: "Loyalty Dashboard", desc: "Points, rewards, and referral tracking." },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="bg-nnpc-light p-3 rounded-lg">
                  <item.icon className="text-nnpc-green w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-gray-800">{item.title}</h4>
                  <p className="text-xs md:text-sm text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
       </div>

       <div className="col-span-1 lg:col-span-5 flex justify-center h-full md:py-12 order-first lg:order-last mb-8 lg:mb-0">
          <motion.div 
             initial={{ y: 50, opacity: 0 }} 
             animate={{ y: 0, opacity: 1 }} 
             transition={{ duration: 0.8 }}
             className="relative w-56 md:w-64 h-auto md:h-full max-h-[500px] md:max-h-[600px] bg-gray-900 rounded-[2.5rem] md:rounded-[3rem] p-3 md:p-4 shadow-2xl border-4 border-gray-800 aspect-[9/19]"
          >
             {/* Notch */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-5 md:h-6 bg-gray-900 rounded-b-xl z-20"></div>
             
             {/* Screen Content */}
             <div className="w-full h-full bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden flex flex-col relative">
                {/* Mockup Header */}
                <div className="bg-nnpc-green h-24 md:h-32 p-4 md:p-6 flex flex-col justify-end">
                   <div className="flex justify-between items-end text-white">
                      <span className="font-bold text-base md:text-lg">Hello, User</span>
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full"></div>
                   </div>
                </div>
                {/* Mockup Body */}
                <div className="p-3 md:p-4 space-y-3 md:space-y-4 bg-gray-50 flex-grow">
                   <div className="bg-white p-3 md:p-4 rounded-xl shadow-sm">
                      <div className="text-[10px] md:text-xs text-gray-400 uppercase font-bold">Wallet Balance</div>
                      <div className="text-xl md:text-2xl font-bold text-nnpc-dark">₦ 25,000.00</div>
                   </div>
                   <div className="flex gap-2">
                      <div className="flex-1 bg-nnpc-green text-white p-3 md:p-4 rounded-xl text-center text-xs md:text-sm font-bold flex flex-col items-center gap-2">
                        <Fuel size={16} /> Pay Fuel
                      </div>
                      <div className="flex-1 bg-white text-gray-700 p-3 md:p-4 rounded-xl text-center text-xs md:text-sm font-bold shadow-sm border border-gray-100 flex flex-col items-center gap-2">
                        <Gift size={16} /> Rewards
                      </div>
                   </div>
                   <div className="space-y-2">
                      <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                      <div className="h-2 w-2/3 bg-gray-200 rounded-full"></div>
                   </div>
                </div>
                {/* Mockup Bottom Nav */}
                <div className="h-12 md:h-16 bg-white border-t flex justify-around items-center text-gray-400">
                   <div className="w-5 h-5 md:w-6 md:h-6 bg-nnpc-green rounded-full"></div>
                   <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-200 rounded-sm"></div>
                   <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-200 rounded-sm"></div>
                </div>
             </div>
          </motion.div>
       </div>
    </div>
  </div>
);

// --- Slide 7: Payment & Incentives ---
export const Slide7: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col justify-center min-h-min">
    <motion.h2 variants={itemVariants} initial="hidden" animate="visible" className="font-heading font-bold text-3xl md:text-4xl text-nnpc-dark mb-10 md:mb-12">
      Payment & Incentives
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4 md:space-y-6">
        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border-l-4 border-nnpc-green">
           <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Payment Channels</h3>
           <p className="text-sm md:text-base text-gray-600">Bank cards, USSD, wallet apps, corporate accounts.</p>
        </div>
        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border-l-4 border-yellow-500">
           <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Cashbacks & Rewards</h3>
           <p className="text-sm md:text-base text-gray-600">Percentage back per transaction; tiered loyalty levels.</p>
        </div>
        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border-l-4 border-blue-500">
           <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Referral Incentives</h3>
           <p className="text-sm md:text-base text-gray-600">Encourage app downloads and active user growth.</p>
        </div>
        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border-l-4 border-purple-500">
           <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Gamification</h3>
           <p className="text-sm md:text-base text-gray-600">Top referrer milestones, seasonal promotions & campaigns.</p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-center relative py-12 md:py-0"
      >
         {/* Circular Cycle Diagram */}
         <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full border-[15px] md:border-[20px] border-nnpc-light border-t-nnpc-green animate-spin-slow" style={{ animationDuration: '10s' }}></div>
            <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
              <div className="bg-white p-5 md:p-6 rounded-full shadow-lg z-10">
                <CreditCard className="w-8 h-8 md:w-12 md:h-12 text-nnpc-dark" />
              </div>
              <p className="mt-3 md:mt-4 font-bold text-nnpc-dark text-sm md:text-base">Ecosystem<br/>Growth</p>
            </div>
            {/* Orbiting Icons */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-5 md:-translate-y-6 bg-white p-2 md:p-3 rounded-full shadow-md">
              <span className="text-[10px] md:text-xs font-bold text-green-700">Payment</span>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-5 md:translate-y-6 bg-white p-2 md:p-3 rounded-full shadow-md">
              <span className="text-[10px] md:text-xs font-bold text-blue-700">Reward</span>
            </div>
            <div className="absolute left-0 top-1/2 -translate-x-5 md:-translate-x-6 -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-md">
              <span className="text-[10px] md:text-xs font-bold text-orange-700">Repeat</span>
            </div>
            <div className="absolute right-0 top-1/2 translate-x-5 md:translate-x-6 -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-md">
              <span className="text-[10px] md:text-xs font-bold text-purple-700">Cashback</span>
            </div>
         </div>
      </motion.div>
    </div>
  </div>
);

// --- Slide 8: Technical Delivery & Governance ---
export const Slide8: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col justify-center min-h-min">
    <motion.h2 variants={itemVariants} initial="hidden" animate="visible" className="font-heading font-bold text-3xl md:text-4xl text-nnpc-dark mb-10 md:mb-12">
      Delivery & Governance
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {[
        { name: "Tisan Toye", role: "CEO & Head of Operations", sub: "Strategy, Operations, Delivery", color: "border-t-4 border-nnpc-green", image: tisanImage },
        { name: "John Amondi", role: "CTO & Product Lead", sub: "Technical Delivery, Roadmap", color: "border-t-4 border-blue-600", image: johnImage },
        { name: "Emmanuel Doji", role: "Technical Lead", sub: "Architecture, Engineering, Scalability", color: "border-t-4 border-gray-600", image: emmanuelImage },
      ].map((person, i) => (
        <motion.div 
          key={i} 
          variants={itemVariants}
          initial="hidden" 
          animate="visible" 
          transition={{ delay: i * 0.2 }}
          className={`bg-white p-6 md:p-8 rounded-xl shadow-lg ${person.color} flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-300`}
        >
           <div className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-4 overflow-hidden border-4 border-white shadow-xl bg-white">
             <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
           </div>
           <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{person.name}</h3>
           <p className="text-xs md:text-sm font-bold text-nnpc-green mb-3">{person.role}</p>
           <p className="text-xs md:text-sm text-gray-500">{person.sub}</p>
        </motion.div>
      ))}
    </div>

    <motion.div variants={itemVariants} initial="hidden" animate="visible" className="bg-nnpc-light/50 p-5 md:p-6 rounded-xl border border-nnpc-light">
      <h3 className="font-bold text-nnpc-dark mb-4 flex items-center gap-2"><ShieldCheck size={20} /> Implementation Approach</h3>
      <div className="flex flex-col md:flex-row gap-4 justify-between text-xs md:text-sm">
        <div className="flex-1 bg-white p-4 rounded shadow-sm">
          <span className="block font-bold mb-1 text-gray-800">Non-disruptive</span>
          Integration without downtime.
        </div>
        <div className="flex-1 bg-white p-4 rounded shadow-sm">
          <span className="block font-bold mb-1 text-gray-800">Incremental</span>
          Phased improvements & updates.
        </div>
        <div className="flex-1 bg-white p-4 rounded shadow-sm">
          <span className="block font-bold mb-1 text-gray-800">Transparent</span>
          Regular reporting & analytics.
        </div>
      </div>
    </motion.div>
  </div>
);

// --- Slide 9: Expected Outcomes ---
export const Slide9: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col justify-center min-h-min">
    <motion.h2 variants={itemVariants} initial="hidden" animate="visible" className="font-heading font-bold text-3xl md:text-4xl text-nnpc-dark mb-10 md:mb-12">
      Expected Outcomes
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {[
        { title: "Increased Adoption", desc: "Engagement via cashbacks & rewards", trend: "+45%", icon: TrendingUp },
        { title: "Reduced Friction", desc: "Faster payments & processing", trend: "-30%", icon: Zap },
        { title: "Enhanced Data", desc: "Deep insights for distribution", trend: "100%", icon: PieChart },
        { title: "Improved Trust", desc: "Transparency & receipt generation", trend: "High", icon: ShieldCheck },
        { title: "Monetization", desc: "Win-win model for NNPC", trend: "$$$", icon: CreditCard },
      ].map((kpi, i) => (
        <motion.div 
          key={i} 
          variants={itemVariants}
          initial="hidden" 
          animate="visible"
          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group"
        >
          <div className="absolute right-0 top-0 p-6 opacity-60 group-hover:opacity-100 transition-opacity">
            <kpi.icon size={64} className="text-nnpc-green" />
          </div>
          <div className="text-3xl md:text-4xl font-bold text-nnpc-green mb-2">{kpi.trend}</div>
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{kpi.title}</h3>
          <p className="text-sm md:text-base text-gray-600">{kpi.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

// --- Slide 10: Next Steps ---
export const Slide10: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col justify-center min-h-min">
    <motion.h2 variants={itemVariants} initial="hidden" animate="visible" className="font-heading font-bold text-3xl md:text-4xl text-nnpc-dark mb-10 md:mb-16">
      Next Steps
    </motion.h2>

    <div className="relative">
      {/* Connecting Line */}
      <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 relative z-10"
      >
        {[
          { step: "01", title: "Pilot", desc: " UX & Incentive Improvements, Easier Payment Pathways and Better Customer/Agent support." },
          { step: "02", title: "Collaborate", desc: "Work with NNPC teams for feedback & iteration." },
          { step: "03", title: "Scale", desc: "Deploy improvements across app and backend." },
          { step: "04", title: "Partner", desc: "Establish long-term digital product management." },
        ].map((item, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col gap-3 md:gap-4 relative"
          >
             <div className="w-10 h-10 md:w-12 md:h-12 bg-nnpc-green text-white rounded-xl flex items-center justify-center font-bold text-lg md:text-xl shadow-md mb-2">
               {item.step}
             </div>
             <h3 className="text-lg md:text-xl font-bold text-gray-800">{item.title}</h3>
             <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>

    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ delay: 1 }}
      className="mt-12 md:mt-16 flex justify-center"
    >
      <button className="bg-nnpc-dark text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold shadow-xl hover:bg-nnpc-green transition-colors flex items-center gap-3 text-sm md:text-base">
         Let's Begin <ArrowRight size={20} />
      </button>
    </motion.div>
  </div>
);

// --- Slide 11: Thank You ---
export const Slide11: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col justify-center items-center min-h-min text-center">
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl w-full"
    >
        <motion.div variants={itemVariants} className="mb-8 md:mb-12">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-nnpc-green text-white rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-xl shadow-nnpc-green/20">
                <Fuel size={32} className="md:w-10 md:h-10" />
            </div>
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl text-nnpc-dark mb-4 md:mb-6">
                Thank You
            </h1>
            <p className="text-lg md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed px-4">
                Ready to transform the NNPC fuel ecosystem?
            </p>
        </motion.div>

        <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-16"
        >
            {[
                { icon: Mail, label: "Email Us", value: "info@titatec.com" },
                { icon: Globe, label: "Visit Us", value: "www.titatec.com" },
                { icon: MapPin, label: "Locate Us", value: "Abuja, Nigeria" }
            ].map((contact, i) => (
                <motion.div
                    key={i}
                    variants={itemVariants}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all flex flex-col items-center gap-3 md:gap-4 group"
                >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-nnpc-light text-nnpc-green rounded-full flex items-center justify-center group-hover:bg-nnpc-green group-hover:text-white transition-colors">
                        <contact.icon size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{contact.label}</h3>
                        <p className="text-base md:text-lg font-bold text-nnpc-dark break-all">{contact.value}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  </div>
);
