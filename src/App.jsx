import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const featuredPosts = [
    {
      title: "The Future of Foldable Displays",
      excerpt: "Exploring the latest innovations in foldable display technology and what it means for the future of mobile devices.",
      category: "Tech Innovation",
      image: "https://picsum.photos/seed/foldable/800/600"
    },
    {
      title: "AI Tools Revolutionizing Web Development",
      excerpt: "Discover how artificial intelligence tools are changing the way developers build websites and applications.",
      category: "Web Development",
      image: "https://picsum.photos/seed/ai/800/600"
    },
    {
      title: "Essential Cybersecurity Practices",
      excerpt: "Protect yourself online with these updated cybersecurity practices that everyone should implement.",
      category: "Security",
      image: "https://picsum.photos/seed/cyber/800/600"
    }
  ];

  const recentPosts = [
    {
      title: "Smartphone Battery Life Tips",
      excerpt: "Simple yet effective tips to extend your smartphone's battery life without sacrificing performance.",
      image: "https://picsum.photos/seed/battery/400/300"
    },
    {
      title: "Home Network Security Guide",
      excerpt: "Follow these five simple steps to significantly improve your home network security against common threats.",
      image: "https://picsum.photos/seed/network/400/300"
    },
    {
      title: "Advanced Search Operators",
      excerpt: "Learn how to use advanced search operators to find exactly what you're looking for on the web.",
      image: "https://picsum.photos/seed/search/400/300"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setSubscribed(true);
    setEmail('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span className="text-xl font-bold text-gray-900">TechInsights</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#articles" className="text-gray-600 hover:text-blue-600 transition-colors">Articles</a>
            <a href="#newsletter" className="text-gray-600 hover:text-blue-600 transition-colors">Newsletter</a>
          </nav>

          <button className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Tech Insights & Tips
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Your Go-To Resource for Technology News, Tips, and Educational Content
              </h1>
              <p className="text-lg text-gray-600">
                Stay ahead in the tech world with our curated insights and practical guides.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform">
                  Explore Articles
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  Watch Video
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-lg opacity-30 animate-pulse"></div>
              <img 
                src="https://picsum.photos/seed/tech/800/600" 
                alt="Technology insights" 
                className="relative rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Topics</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our most popular technology insights and in-depth guides
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a 
                    href="#" 
                    className="text-blue-600 font-medium inline-flex items-center hover:text-blue-800 transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section id="articles" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Articles</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Practical tips and tricks to enhance your digital experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a 
                    href="#" 
                    className="text-blue-600 font-medium inline-flex items-center hover:text-blue-800 transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Stay Updated with Tech News</h2>
            <p className="text-blue-100 text-lg mb-8">
              Subscribe to our newsletter to receive the latest tech news, tips, and tutorials directly in your inbox.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label="Email address"
                />
                {error && <p className="mt-2 text-left text-red-200 text-sm">{error}</p>}
                {subscribed && <p className="mt-2 text-left text-green-200 text-sm">Thank you for subscribing!</p>}
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-4 text-blue-200 text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span className="text-white font-bold">TechInsights</span>
              </div>
              <p className="text-sm">
                Your go-to resource for technology updates, tips, and educational content.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
                <li><a href="#articles" className="hover:text-blue-400 transition-colors">Articles</a></li>
                <li><a href="#newsletter" className="hover:text-blue-400 transition-colors">Newsletter</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Tech Innovation</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Productivity</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.14 4.771 1.691 4.912 4.913.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.14 3.222-1.66 4.771-4.912 4.913-1.266.058-1.646.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.224-.14-4.771-1.699-4.913-4.913-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.141-3.213 1.691-4.77 4.913-4.913 1.265-.057 1.645-.069 4.849-.069zM12 0C8.74 0 8.333.014 7.053.06 2.695.203.229 2.668.087 7.026.031 8.303.017 8.662 0 12c0 3.332.014 3.69.067 4.974.144 4.343 2.607 6.808 6.966 6.95.542.043.843.054 2.25.054 1.473 0 1.774-.011 2.316-.054 4.359-.141 6.825-2.607 6.966-6.95.044-1.284.058-1.642.058-4.974 0-3.339-.015-3.697-.06-4.974-.141-4.358-2.607-6.823-6.966-6.966-.542-.043-.843-.054-2.25-.054-1.404 0-1.715.011-2.25.054zm0 5.54c-2.528 0-4.583 2.055-4.583 4.583S9.472 16.665 12 16.665s4.583-2.055 4.583-4.583S14.528 7.5 12 7.5zm0 7.414c-1.622 0-2.94-1.318-2.94-2.94s1.318-2.94 2.94-2.94 2.94 1.318 2.94 2.94-1.318 2.94-2.94 2.94zm5.338-7.94c-.784 0-1.42.636-1.42 1.42s.636 1.42 1.42 1.42 1.42-.636 1.42-1.42-.636-1.42-1.42-1.42z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} TechInsights. All rights reserved.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a> • 
              <a href="#" className="hover:text-blue-400 transition-colors ml-2">Terms of Service</a> • 
              <a href="#" className="hover:text-blue-400 transition-colors ml-2">Contact Us</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
