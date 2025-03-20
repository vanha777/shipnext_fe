import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
          Ship<span className="text-blue-500">Next</span>
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl mb-10 text-gray-300">
          Transform any website into a native mobile app with just one command
        </p>
        
        {/* YouTube Video Explanation */}
        <div className="w-full max-w-4xl mb-12">
          <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-2xl">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/pG0gmaZjuSo" 
              title="ShipNext Explanation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#installation"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <a
            href="https://github.com/vanha777/shipnext-binary-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            GitHub
          </a>
        </div>
        
        <div className="relative w-full max-w-4xl h-80 md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 z-10 rounded-xl"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <code className="text-green-400 font-mono text-sm">
                $ ./shipnext bootstrap
                <br /><br />
                <span className="text-gray-400">Bundle Into Tauri Apps Structure...</span>
                <br />
                <span className="text-gray-400">Converting to mobile app...</span>
                <br />
                <span className="text-blue-400">✓ Your mobile app .ipa is ready!</span>
              </code>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Instant Conversion",
                description: "Convert any website to a mobile app with a single command, no coding required",
                icon: "⚡"
              },
              {
                title: "Native Performance",
                description: "Get native-like performance with optimized UI components and transitions",
                icon: "🚀"
              },
              {
                title: "Cross-Platform",
                description: "Deploy to iOS and Android from a single codebase, saving time and resources",
                icon: "📱"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-700/30 rounded-xl p-8 hover:bg-gray-700/60 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Community Section - Moved here for more visibility */}
            <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Contribute to the open source project, ask questions, or collaborate with fellow developers.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-2xl mx-auto">
            <a
              href="https://github.com/vanha777/shipnext-binary-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-3 flex-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              <div>
                <div className="font-bold">Contribute on GitHub</div>
                <div className="text-sm text-gray-300">Help build the future of mobile app development</div>
              </div>
            </a>
            <a
              href="https://discord.gg/n5U9bMWCxk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5865F2] hover:bg-[#4752c4] text-white px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-3 flex-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
              </svg>
              <div>
                <div className="font-bold">Join our Discord</div>
                <div className="text-sm text-gray-300">Ask questions and connect with other developers</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Installation</h2>
          
          <div className="bg-gray-900 rounded-xl p-6 max-w-3xl mx-auto mb-10">
            <h3 className="text-xl font-semibold mb-4">Pre-built Binary</h3>
            <div className="bg-black rounded p-4 font-mono text-sm overflow-x-auto">
              <code>
                # Download the binary<br />
                curl -L https://github.com/vanha777/shipnext-binary-cli/releases/download/alpha/shipnext -o shipnext<br /><br />
                
                # Make it executable<br />
                chmod +x shipnext<br /><br />
                
                # Move to a directory in your PATH (optional)<br />
                sudo mv shipnext /usr/local/bin/<br /><br />
                
                # Or move it into your website repo<br />
                mv shipnext /path/to/your/website/
              </code>
            </div>
          </div>
          
          {/* New Prerequisites Section */}
          <div className="bg-gray-900 rounded-xl p-6 max-w-3xl mx-auto mb-10">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="text-yellow-400 mr-2">⚠️</span> Important Prerequisites
            </h3>
            <p className="text-gray-300 mb-4">
              For iOS development with ShipNext, ensure you have:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
              <li>macOS 12 (Monterey) or later</li>
              <li>Xcode installed (latest version recommended)</li>
              <li>iOS Simulator (included with Xcode)</li>
              <li>Apple Developer Account (for physical device testing)</li>
              <li>Rust with iOS targets configured</li>
              <li>Node.js and npm/yarn</li>
              <li>Tauri CLI and CocoaPods</li>
            </ul>
            <div className="bg-black rounded p-4 font-mono text-sm overflow-x-auto mb-4">
              <code>
                # Install Rust<br />
                curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh<br /><br />
                
                # Add iOS targets<br />
                rustup target add aarch64-apple-ios x86_64-apple-ios aarch64-apple-ios-sim<br /><br />
                
                # Install Tauri CLI<br />
                cargo install tauri-cli<br /><br />
                
                # Install CocoaPods<br />
                sudo gem install cocoapods<br /><br />
                
                # Additional dependencies<br />
                brew install libiconv
              </code>
            </div>
            <a 
              href="https://github.com/vanha777/shipnext-binary-cli/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              View complete prerequisites and setup guide
            </a>
          </div>
          
          <div className="text-center">
            <a 
              href="https://github.com/vanha777/shipnext-binary-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              View complete documentation →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-10">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2023 ShipNext. All rights reserved.</p>
          
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://github.com/vanha777/shipnext-binary-cli" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://discord.gg/n5U9bMWCxk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
