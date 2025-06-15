import React, { useState, useEffect } from 'react';
import { Terminal, Code2, Database, Globe, Zap, Github, Linkedin, Mail, MapPin, ExternalLink, Play, Pause } from 'lucide-react';

const CyberpunkPortfolio = () => {
  const [terminalText, setTerminalText] = useState('');
  const [currentCommand, setCurrentCommand] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [glitchActive, setGlitchActive] = useState(false);
  const [matrixChars, setMatrixChars] = useState([]);

  const commands = [
    'initializing_raidx_system...',
    'loading_portfolio_data...',
    'connecting_to_neural_network...',
    'system_ready > welcome_to_the_matrix'
  ];

  const skills = [
    { name: 'Java', level: 90, color: 'from-cyan-400 to-blue-500', icon: '{ }' },
    { name: 'HTML/CSS', level: 95, color: 'from-green-400 to-emerald-500', icon: '< >' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-orange-500', icon: 'JS' },
    { name: 'PHP', level: 80, color: 'from-purple-400 to-pink-500', icon: '<?>' },
    { name: 'Python', level: 75, color: 'from-red-400 to-rose-500', icon: 'PY' }
  ];

  const projects = [
    {
      title: 'Neural E-Commerce',
      description: 'AI-powered shopping platform with predictive analytics and quantum encryption.',
      tech: ['PHP', 'MySQL', 'Neural-JS', 'Quantum-CSS'],
      status: 'ACTIVE',
      threat: 'LOW'
    },
    {
      title: 'Cyber Task Manager',
      description: 'Military-grade task management with biometric authentication.',
      tech: ['JavaScript', 'PHP', 'Blockchain', 'Bio-Auth'],
      status: 'ACTIVE',
      threat: 'MEDIUM'
    },
    {
      title: 'Ghost Portfolio',
      description: 'Stealth portfolio system with adaptive camouflage technology.',
      tech: ['React', 'Node.js', 'Stealth-Mode'],
      status: 'CLASSIFIED',
      threat: 'HIGH'
    },
    {
      title: 'Matrix Inventory',
      description: 'Reality-bending inventory system using quantum computing principles.',
      tech: ['Java', 'Quantum-DB', 'Reality-Engine'],
      status: 'DEVELOPING',
      threat: 'UNKNOWN'
    }
  ];

  // Terminal typing effect
  useEffect(() => {
    if (currentCommand < commands.length) {
      const command = commands[currentCommand];
      let index = 0;
      
      const typeInterval = setInterval(() => {
        if (index <= command.length) {
          setTerminalText(command.substring(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentCommand(prev => prev + 1);
            setTerminalText('');
          }, 1000);
        }
      }, 100);

      return () => clearInterval(typeInterval);
    } else {
      setIsTyping(false);
      setTerminalText('> SYSTEM_ONLINE_');
    }
  }, [currentCommand]);

  // Matrix rain effect
  useEffect(() => {
    const chars = [];
    for (let i = 0; i < 50; i++) {
      chars.push({
        char: String.fromCharCode(0x30A0 + Math.random() * 96),
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: Math.random() * 2 + 1
      });
    }
    setMatrixChars(chars);

    const interval = setInterval(() => {
      setMatrixChars(prev => prev.map(char => ({
        ...char,
        y: char.y > 100 ? -10 : char.y + char.speed,
        char: Math.random() > 0.98 ? String.fromCharCode(0x30A0 + Math.random() * 96) : char.char
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 overflow-x-hidden relative">

      <div className="fixed inset-0 pointer-events-none z-0">
        {matrixChars.map((char, i) => (
          <div
            key={i}
            className="absolute text-green-500 text-sm opacity-20 font-mono"
            style={{
              left: `${char.x}%`,
              top: `${char.y}%`,
              transform: `translateY(-${char.y}%)`,
              textShadow: '0 0 5px #00ff00'
            }}
          >
            {char.char}
          </div>
        ))}
      </div>

      <div className="fixed inset-0 pointer-events-none z-10" 
           style={{
             background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.03) 2px, rgba(0,255,0,0.03) 4px)',
             animation: 'scanlines 0.1s linear infinite'
           }}>
      </div>

    
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-cyan-500/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className={`text-2xl font-mono font-bold ${glitchActive ? 'animate-pulse' : ''}`}>
              <span className="text-cyan-400">[</span>
              <span className="text-green-400">RAIDX</span>
              <span className="text-cyan-400">]</span>
            </div>
            <div className="hidden md:flex space-x-6 font-mono">
              {['HOME', 'PROFILE', 'SKILLS', 'CONTACT'].map((item) => (
                <button
                  key={item}
                  className="text-green-400 hover:text-cyan-400 transition-colors duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                >
                  {'>'} {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>


      <section className="min-h-screen flex items-center justify-center relative z-20">
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="text-6xl md:text-8xl font-mono font-bold mb-4">
              <span className={`bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500 bg-clip-text text-transparent ${glitchActive ? 'animate-pulse' : ''}`}>
                RAJ PORWAL
              </span>
            </div>
            <div className="text-2xl md:text-4xl font-mono text-cyan-400 mb-2">
              {'<'} aka RAIDX {'>'}
            </div>
            <div className="text-lg text-green-300 font-mono mb-8">
              [ ML_ENGINEER ] [ APP_DEV ] [ WEB_DEVELOPER ]
            </div>
          </div>


          <div className="bg-black border-2 border-green-500 rounded-lg p-6 mb-8 font-mono text-left max-w-2xl mx-auto shadow-2xl shadow-green-500/20">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-4 text-green-400">RAIDX_TERMINAL_v2.0</div>
            </div>
            <div className="text-green-400">
              <div className="mb-2">Last login: Sun Jun 15 2025 on ttys001</div>
              <div className="mb-2">ABES-Engineering-College:~ raidx$</div>
              <div className="text-cyan-400">
                {terminalText}
                {isTyping && <span className="animate-pulse">|</span>}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8 font-mono text-sm">
            <div className="bg-gray-900/50 border border-cyan-500/30 p-4 rounded">
              <div className="text-cyan-400">STATUS:</div>
              <div className="text-green-400">ONLINE</div>
            </div>
            <div className="bg-gray-900/50 border border-cyan-500/30 p-4 rounded">
              <div className="text-cyan-400">LOCATION:</div>
              <div className="text-green-400">ABES_COLLEGE</div>
            </div>
            <div className="bg-gray-900/50 border border-cyan-500/30 p-4 rounded">
              <div className="text-cyan-400">THREAT_LEVEL:</div>
              <div className="text-red-400">MINIMAL</div>
            </div>
          </div>

          <button className="bg-gradient-to-r from-cyan-500 to-green-500 text-black px-8 py-3 rounded font-mono font-bold hover:scale-105 transform transition-all duration-300 shadow-lg shadow-cyan-500/50">
            {'>'} INITIALIZE_EXPLORATION
          </button>
        </div>
      </section>


      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative z-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-mono font-bold text-center mb-16">
            <span className="text-cyan-400">{'['}</span>
            <span className="text-green-400">NEURAL_PROFILE</span>
            <span className="text-cyan-400">{']'}</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full animate-spin-slow opacity-20"></div>
                <div className="absolute inset-4 bg-black rounded-full border-2 border-cyan-500 flex items-center justify-center">
                  <div className="text-6xl font-mono font-bold text-cyan-400">RX</div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="space-y-6 font-mono">
              <div className="border-l-4 border-cyan-500 pl-4">
                <div className="text-cyan-400 text-sm">IDENTITY:</div>
                <div className="text-green-400 text-lg">
                  RAJ PORWAL :: RAIDX_PROTOCOL_ACTIVATED
                </div>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <div className="text-green-400 text-sm">EDUCATION_MODULE:</div>
                <div className="text-cyan-400 text-lg">
                  B.TECH_CSE @ ABES_ENGINEERING_COLLEGE
                </div>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="text-yellow-400 text-sm">SPECIALIZATION:</div>
                <div className="text-green-400 text-lg">
                  FULL_STACK_DEVELOPMENT :: WEB2_TECHNOLOGIES :: JAVA_MASTERY
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-cyan-500/10 border border-cyan-500/30 p-3 rounded text-center">
                  <div className="text-cyan-400 text-xs">PROJECTS</div>
                  <div className="text-2xl font-bold">10+</div>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 p-3 rounded text-center">
                  <div className="text-green-400 text-xs">LANGUAGES</div>
                  <div className="text-2xl font-bold">4</div>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/30 p-3 rounded text-center">
                  <div className="text-yellow-400 text-xs">EXPERIENCE</div>
                  <div className="text-2xl font-bold">4Y+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black relative z-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-mono font-bold text-center mb-16">
            <span className="text-cyan-400">{'['}</span>
            <span className="text-green-400">SKILL_MATRIX</span>
            <span className="text-cyan-400">{']'}</span>
          </h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="relative group">
                <div className="bg-gray-900 border-2 border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-mono font-bold text-cyan-400 mb-2">
                      {skill.icon}
                    </div>
                    <div className="text-green-400 font-mono font-bold">{skill.name}</div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 relative`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="text-center mt-2 text-cyan-400 font-mono text-sm">
                      {skill.level}%
                    </div>
                  </div>
                </div>
                
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-20 bg-black relative z-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-mono font-bold text-center mb-16">
            <span className="text-cyan-400">{'['}</span>
            <span className="text-green-400">ESTABLISH_CONNECTION</span>
            <span className="text-cyan-400">{']'}</span>
          </h2>
          
          <div className="text-center mb-12">
            <div className="text-xl text-green-300 font-mono max-w-2xl mx-auto">
              INITIATING_SECURE_COMMUNICATION_PROTOCOL...
              <br />
              READY_TO_RECEIVE_TRANSMISSION
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <Mail className="w-8 h-8" />, label: 'EMAIL_NODE', value: 'raazporwal6@gmail.com' },
              { icon: <Github className="w-8 h-8" />, label: 'CODE_REPOSITORY', value: 'github.com/raidx545' },
              { icon: <Linkedin className="w-8 h-8" />, label: 'PROFESSIONAL_NETWORK', value: 'linkedin.com/in/raj-porwal-329493216/' }
            ].map((contact, index) => (
              <div key={contact.label} className="relative group">
                <div className="bg-gray-900 border-2 border-cyan-500/30 rounded-lg p-6 text-center hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {contact.icon}
                  </div>
                  <div className="text-green-400 font-mono font-bold mb-2">{contact.label}</div>
                  <div className="text-cyan-300 font-mono text-sm">{contact.value}</div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-green-500 to-cyan-500 text-black px-8 py-3 rounded font-mono font-bold hover:scale-105 transform transition-all duration-300 shadow-lg shadow-green-500/50">
              {'>'} SEND_TRANSMISSION
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-cyan-500/30 relative z-20">
        <div className="max-w-6xl mx-auto px-4 text-center font-mono">
          <div className="text-green-400">
            © 2025 RAJ_PORWAL :: RAIDX_PROTOCOL :: POWERED_BY_QUANTUM_COFFEE
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
        
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CyberpunkPortfolio;
