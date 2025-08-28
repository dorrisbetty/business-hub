import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Wifi, Car, Users, Coffee, Calendar, ChevronRight, Star, CheckCircle, Download, Play, ArrowRight, Clock, Shield, Award, Zap, Globe, Headphones, Utensils, Dumbbell, Briefcase, Building, Plane, Train, MapPin as LocationIcon, Eye, Image as ImageIcon, Send, AlertCircle, CheckCircle2, ArrowUp } from 'lucide-react';

// Design System Components
const Button = ({ variant = 'primary', size = 'md', children, className = '', onClick }: {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-blue-50 hover:bg-blue-100 text-blue-700 focus:ring-blue-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
    ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
    {children}
  </div>
);

const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-16 lg:py-24 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState('');
  const [showMeetingRoomModal, setShowMeetingRoomModal] = useState(false);
  const [selectedMeetingRoom, setSelectedMeetingRoom] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Business', href: '#business' },
    { name: 'Dining', href: '#dining' },
    { name: 'Services', href: '#services' },
    { name: 'Location', href: '#location' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const stats = [
    { number: '150+', label: 'Executive Rooms', icon: Users },
    { number: '12', label: 'Meeting Rooms', icon: Calendar },
    { number: '500', label: 'Max Capacity', icon: Users },
    { number: '24/7', label: 'Business Center', icon: Coffee }
  ];

  const facilities = [
    {
      title: 'High-Speed Wi-Fi',
      description: 'Complimentary 100 Mbps Wi-Fi throughout the hotel',
      icon: Wifi
    },
    {
      title: 'Airport Transfer',
      description: 'Dedicated shuttle service to major airports',
      icon: Car
    },
    {
      title: 'Meeting Facilities',
      description: '12 fully equipped meeting rooms with AV technology',
      icon: Users
    },
    {
      title: '24/7 Business Center',
      description: 'Printing, scanning, and secretarial services',
      icon: Coffee
    }
  ];

  const roomTypes = [
    {
      title: 'Executive Room',
      price: '₹4,500',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['King Size Bed', 'Work Desk', 'Mini Bar', 'City View'],
      description: 'Perfect for business travelers with modern amenities and workspace'
    },
    {
      title: 'Business Suite',
      price: '₹7,200',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Separate Living Area', 'Meeting Space', 'Premium Wi-Fi', 'Butler Service'],
      description: 'Spacious suite ideal for extended stays and client meetings'
    },
    {
      title: 'Premium Suite',
      price: '₹9,800',
      image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Corner Location', 'Panoramic Views', 'Private Boardroom', 'Concierge'],
      description: 'Our finest accommodation for C-level executives and VIP guests'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Event Manager, TechCorp India',
      content: 'The Business Hub provided exceptional service for our annual conference. The meeting rooms were perfectly equipped and the staff was incredibly professional.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      position: 'HR Director, Global Solutions Ltd',
      content: 'Outstanding facilities and seamless coordination made our corporate retreat a huge success. The tech infrastructure is world-class.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      position: 'CEO, StartupHub',
      content: 'Perfect location, excellent amenities, and professional staff. Our international clients were thoroughly impressed with the accommodation.',
      rating: 5
    }
  ];

  const clientLogos = [
    'TechCorp India', 'Global Solutions Ltd', 'StartupHub', 'Enterprise Systems', 
    'Digital Innovations', 'Business Dynamics', 'Corporate Excellence', 'Future Technologies'
  ];

  // Enhanced Meeting Rooms Data
  const meetingRooms = [
    {
      id: 1,
      name: 'Executive Boardroom',
      image: 'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=800',
      capacity: {
        theater: 50,
        classroom: 30,
        boardroom: 20,
        ushape: 25
      },
      size: '450 sq ft',
      rate: '₹2,500/hour',
      features: [
        '75" 4K Display',
        'Video Conferencing',
        'Wireless Presentation',
        'Premium Audio System',
        'Climate Control',
        'Natural Light'
      ],
      description: 'Our flagship boardroom designed for high-level executive meetings and presentations.',
      floorPlan: '/floor-plans/executive-boardroom.pdf'
    },
    {
      id: 2,
      name: 'Innovation Hub',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      capacity: {
        theater: 80,
        classroom: 50,
        boardroom: 30,
        ushape: 35
      },
      size: '650 sq ft',
      rate: '₹3,200/hour',
      features: [
        'Interactive Whiteboard',
        'Dual 65" Displays',
        'Breakout Areas',
        'Flexible Furniture',
        'High-Speed Wi-Fi',
        'Recording Capability'
      ],
      description: 'Modern collaborative space perfect for workshops, training sessions, and creative meetings.',
      floorPlan: '/floor-plans/innovation-hub.pdf'
    },
    {
      id: 3,
      name: 'Conference Hall Alpha',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
      capacity: {
        theater: 200,
        classroom: 120,
        boardroom: 60,
        ushape: 80
      },
      size: '1200 sq ft',
      rate: '₹5,500/hour',
      features: [
        'Professional Stage',
        'Advanced A/V System',
        'Live Streaming Setup',
        'Simultaneous Translation',
        'VIP Green Room',
        'Dedicated Entrance'
      ],
      description: 'Our largest venue for conferences, product launches, and major corporate events.',
      floorPlan: '/floor-plans/conference-hall-alpha.pdf'
    }
  ];

  // Enhanced Gallery Data
  const galleryImages = {
    rooms: [
      { url: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Executive Room' },
      { url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Business Suite' },
      { url: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Premium Suite' },
      { url: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Luxury Bathroom' }
    ],
    meetings: [
      { url: 'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Executive Boardroom' },
      { url: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Innovation Hub' },
      { url: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Conference Hall' },
      { url: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Training Room' }
    ],
    dining: [
      { url: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Executive Lounge' },
      { url: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Coffee Shop' },
      { url: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Catering Setup' },
      { url: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Private Dining' }
    ]
  };

  // Form Validation
  const validateBookingForm = (formData) => {
    const errors = {};
    if (!formData.get('checkin')) errors.checkin = 'Check-in date is required';
    if (!formData.get('checkout')) errors.checkout = 'Check-out date is required';
    if (!formData.get('name')) errors.name = 'Full name is required';
    if (!formData.get('phone')) errors.phone = 'Phone number is required';
    if (!formData.get('email')) errors.email = 'Email address is required';
    return errors;
  };

  const validateQuoteForm = (formData) => {
    const errors = {};
    if (!formData.get('company')) errors.company = 'Company name is required';
    if (!formData.get('contact')) errors.contact = 'Contact person is required';
    if (!formData.get('email')) errors.email = 'Email address is required';
    if (!formData.get('phone')) errors.phone = 'Phone number is required';
    if (!formData.get('eventDate')) errors.eventDate = 'Event date is required';
    if (!formData.get('guests')) errors.guests = 'Number of guests is required';
    return errors;
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const errors = validateBookingForm(formData);
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    setFormErrors({});
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowBookingModal(false);
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    }, 2000);
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const errors = validateQuoteForm(formData);
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    setFormErrors({});
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowQuoteModal(false);
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    }, 2000);
  };

  const openGallery = (imageUrl, title) => {
    setSelectedGalleryImage({ url: imageUrl, title });
    setShowGalleryModal(true);
  };

  const openMeetingRoomDetails = (room) => {
    setSelectedMeetingRoom(room);
    setShowMeetingRoomModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                <Coffee className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">The Business Hub</h1>
                <p className="text-sm text-slate-600">Corporate Hotel</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={() => setShowQuoteModal(true)}>
                Get Quote
              </Button>
              <Button size="sm" onClick={() => setShowBookingModal(true)}>
                Book Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-slate-600 hover:text-blue-600 hover:bg-slate-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-slate-200">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-4 pt-4 space-y-2">
                  <Button variant="outline" size="sm" className="w-full" onClick={() => {
                    setShowQuoteModal(true);
                    setIsMenuOpen(false);
                  }}>
                    Get Quote
                  </Button>
                  <Button size="sm" className="w-full" onClick={() => {
                    setShowBookingModal(true);
                    setIsMenuOpen(false);
                  }}>
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600")'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Premier
              <span className="text-blue-400 block">Business Destination</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
              Where corporate excellence meets exceptional hospitality. Experience world-class facilities, cutting-edge technology, and seamless service in the heart of India's business district.
            </p>
            
            {/* Quick Booking Widget */}
            <Card className="p-6 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Check-in</label>
                  <input type="date" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Check-out</label>
                  <input type="date" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Guests</label>
                  <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <Button className="w-full" onClick={() => setShowBookingModal(true)}>
                    Check Availability
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <Section className="bg-slate-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* About Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              India's Leading Corporate Hotel Experience
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              The Business Hub stands as a beacon of corporate hospitality, designed specifically for the modern business traveler. Our strategic location, cutting-edge facilities, and personalized service create the perfect environment for productive stays and successful events.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              From intimate board meetings to large-scale conferences, we provide the infrastructure and support that today's businesses demand. Experience seamless connectivity, professional service, and attention to detail that sets us apart.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => setShowQuoteModal(true)}>
                Request Corporate Quote
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                <Play className="mr-2 h-5 w-5" />
                Virtual Tour
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Business Hub Lobby"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-blue-100">Successful Corporate Events</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Facilities Section */}
      <Section className="bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            World-Class Business Facilities
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need for a productive stay, from high-speed connectivity to professional meeting spaces
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{facility.title}</h3>
                <p className="text-slate-600">{facility.description}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Rooms Section */}
      <Section id="rooms">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Executive Accommodations
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Thoughtfully designed rooms and suites that blend comfort with functionality for the discerning business traveler
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {roomTypes.map((room, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-lg font-bold text-blue-600">{room.price}</span>
                  <span className="text-sm text-slate-600">/night</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{room.title}</h3>
                <p className="text-slate-600 mb-4">{room.description}</p>
                
                <div className="space-y-2 mb-6">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button className="w-full" onClick={() => setShowBookingModal(true)}>
                  Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Business & Conference Facilities */}
      <Section id="business" className="bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Business & Conference Facilities
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            State-of-the-art meeting spaces equipped with cutting-edge technology for successful corporate events
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {meetingRooms.map((room, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-lg font-bold text-blue-600">{room.rate}</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Button 
                    variant="secondary" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => openMeetingRoomDetails(room)}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{room.name}</h3>
                <p className="text-slate-600 mb-4">Max Capacity: {room.capacity.theater} people (Theater)</p>
                <p className="text-sm text-slate-500 mb-4">{room.size} • {room.description}</p>
                
                <div className="space-y-2 mb-6">
                  {room.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    className="flex-1" 
                    onClick={() => openMeetingRoomDetails(room)}
                  >
                    View Details
                  </Button>
                  <Button 
                    variant="outline" 
                    size="md"
                    onClick={() => setShowQuoteModal(true)}
                  >
                    <Calendar className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced Capacity Chart */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Meeting Room Capacity & Pricing</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Room Name</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-900">Theater</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-900">Classroom</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-900">Boardroom</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-900">U-Shape</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-900">Rate/Hour</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-900">Floor Plan</th>
                </tr>
              </thead>
              <tbody>
                {meetingRooms.map((room, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200">
                    <td className="py-4 px-4 font-medium text-slate-900">{room.name}</td>
                    <td className="py-4 px-4 text-center text-slate-700">{room.capacity.theater}</td>
                    <td className="py-4 px-4 text-center text-slate-700">{room.capacity.classroom}</td>
                    <td className="py-4 px-4 text-center text-slate-700">{room.capacity.boardroom}</td>
                    <td className="py-4 px-4 text-center text-slate-700">{room.capacity.ushape}</td>
                    <td className="py-4 px-4 text-center font-semibold text-blue-600">{room.rate}</td>
                    <td className="py-4 px-4 text-center">
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Technology Specifications</h4>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center">
                  <Wifi className="h-4 w-4 mr-2 text-blue-500" />
                  High-speed Wi-Fi (100+ Mbps)
                </div>
                <div className="flex items-center">
                  <Zap className="h-4 w-4 mr-2 text-blue-500" />
                  Advanced A/V Systems
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-blue-500" />
                  Video Conferencing Ready
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-blue-500" />
                  Secure Network Access
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Included Services</h4>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center">
                  <Headphones className="h-4 w-4 mr-2 text-green-500" />
                  Dedicated Event Coordinator
                </div>
                <div className="flex items-center">
                  <Coffee className="h-4 w-4 mr-2 text-green-500" />
                  Complimentary Coffee Service
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-green-500" />
                  Setup & Breakdown Service
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-green-500" />
                  24/7 Technical Support
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button size="lg" onClick={() => setShowQuoteModal(true)}>
              Request Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Card>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-blue-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Leading Corporations
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our corporate clients say about their experience
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
              
              <div>
                <div className="font-semibold text-slate-900">{testimonial.name}</div>
                <div className="text-sm text-slate-600">{testimonial.position}</div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Corporate Clients Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Corporate Partners
          </h2>
          <p className="text-xl text-slate-600">
            Trusted by India's leading businesses for their accommodation and event needs
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clientLogos.map((client, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
              <div className="text-slate-600 font-semibold text-center">{client}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Gallery Section */}
      <Section id="gallery">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Gallery & Virtual Tours
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our world-class facilities through our comprehensive photo gallery and immersive virtual tours
          </p>
        </div>
        
        <div className="space-y-12">
          {Object.entries(galleryImages).map(([categoryKey, images], categoryIndex) => {
            const categoryTitles = {
              rooms: 'Rooms & Suites',
              meetings: 'Meeting Rooms',
              dining: 'Dining & Events'
            };
            
            return (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{categoryTitles[categoryKey]}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {images.map((image, imageIndex) => (
                  <div 
                    key={imageIndex} 
                    className="relative group cursor-pointer overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300"
                    onClick={() => openGallery(image.url, image.title)}
                  >
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        <ImageIcon className="text-white h-12 w-12 mx-auto mb-2" />
                        <p className="text-white font-medium">{image.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Take a Virtual Tour</h3>
            <p className="text-slate-600 mb-6">
              Experience our facilities from anywhere with our immersive 360° virtual tours
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Play className="mr-2 h-5 w-5" />
                360° Hotel Tour
              </Button>
              <Button variant="outline" size="lg">
                <Play className="mr-2 h-5 w-5" />
                Meeting Rooms Tour
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Corporate Excellence?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of satisfied corporate clients who have made The Business Hub their preferred accommodation partner
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => setShowBookingModal(true)}
            >
              Book Your Stay
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-600"
              onClick={() => setShowQuoteModal(true)}
            >
              Request Corporate Quote
            </Button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                  <Coffee className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">The Business Hub</h3>
                  <p className="text-slate-400 text-sm">Corporate Hotel</p>
                </div>
              </div>
              <p className="text-slate-400 mb-6">
                Your premier destination for corporate hospitality and business excellence in India.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-blue-400" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-blue-400" />
                  <span className="text-sm">info@businesshub.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-blue-400" />
                  <span className="text-sm">Business District, Mumbai</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3">
                {navigation.slice(0, 4).map((item) => (
                  <a key={item.name} href={item.href} className="block text-slate-400 hover:text-white transition-colors duration-200">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <div className="space-y-3 text-slate-400">
                <div>Meeting Rooms</div>
                <div>Conference Halls</div>
                <div>Corporate Catering</div>
                <div>Airport Transfer</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Corporate Services</h4>
              <div className="space-y-3">
                <Button variant="secondary" size="sm" className="w-full" onClick={() => setShowQuoteModal(true)}>
                  Request Quote
                </Button>
                <Button variant="outline" size="sm" className="w-full border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-slate-900">
                  <Download className="mr-2 h-4 w-4" />
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 The Business Hub. All rights reserved. Built for corporate excellence.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 animate-fadeIn"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Book Your Stay</h3>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <form className="space-y-6" onSubmit={handleBookingSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Check-in Date</label>
                    <input 
                      type="date" 
                      name="checkin"
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formErrors.checkin ? 'border-red-500' : 'border-slate-300'}`}
                    />
                    {formErrors.checkin && <p className="text-red-500 text-sm mt-1">{formErrors.checkin}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Check-out Date</label>
                    <input 
                      type="date" 
                      name="checkout"
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formErrors.checkout ? 'border-red-500' : 'border-slate-300'}`}
                    />
                    {formErrors.checkout && <p className="text-red-500 text-sm mt-1">{formErrors.checkout}</p>}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Room Type</label>
                    <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Executive Room</option>
                      <option>Business Suite</option>
                      <option>Premium Suite</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Number of Guests</label>
                    <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formErrors.name ? 'border-red-500' : 'border-slate-300'}`}
                      placeholder="Enter your full name" 
                    />
                    {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formErrors.phone ? 'border-red-500' : 'border-slate-300'}`}
                      placeholder="+91 98765 43210" 
                    />
                    {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formErrors.email ? 'border-red-500' : 'border-slate-300'}`}
                    placeholder="your.email@company.com" 
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Special Requests (Optional)</label>
                  <textarea 
                    name="requests"
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    rows={3} 
                    placeholder="Any special requirements or preferences..."
                  ></textarea>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <Button variant="outline" onClick={() => setShowBookingModal(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      'Confirm Booking'
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      )}

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Request Corporate Quote</h3>
                <button
                  onClick={() => setShowQuoteModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <form className="space-y-6" onSubmit={handleQuoteSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                    <input 
                      type="text" 
                      name="company"
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formErrors.company ? 'border-red-500' : 'border-slate-300'}`}
                      placeholder="Your Company Name" 
                    />
                    {formErrors.company && <p className="text-red-500 text-sm mt-1">{formErrors.company}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Contact Person</label>
                    <input 
                      type="text" 
                      name="contact"
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formErrors.contact ? 'border-red-500' : 'border-slate-300'}`}
                      placeholder="Full Name" 
                    />
                    {formErrors.contact && <p className="text-red-500 text-sm mt-1">{formErrors.contact}</p>}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formErrors.email ? 'border-red-500' : 'border-slate-300'}`}
                      placeholder="business@company.com" 
                    />
                    {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formErrors.phone ? 'border-red-500' : 'border-slate-300'}`}
                      placeholder="+91 98765 43210" 
                    />
                    {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Event Type</label>
                  <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Corporate Meeting</option>
                    <option>Conference</option>
                    <option>Training Program</option>
                    <option>Product Launch</option>
                    <option>Team Building</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Event Date</label>
                    <input 
                      type="date" 
                      name="eventDate"
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formErrors.eventDate ? 'border-red-500' : 'border-slate-300'}`}
                    />
                    {formErrors.eventDate && <p className="text-red-500 text-sm mt-1">{formErrors.eventDate}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Duration (Days)</label>
                    <input type="number" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="1" min="1" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Expected Guests</label>
                    <input 
                      type="number" 
                      name="guests"
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formErrors.guests ? 'border-red-500' : 'border-slate-300'}`}
                      placeholder="50" 
                      min="1" 
                    />
                    {formErrors.guests && <p className="text-red-500 text-sm mt-1">{formErrors.guests}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Requirements & Details</label>
                  <textarea 
                    name="requirements"
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    rows={4} 
                    placeholder="Please describe your event requirements, catering needs, AV equipment, room setup, etc..."
                  ></textarea>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <Button variant="outline" onClick={() => setShowQuoteModal(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      'Request Quote'
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      )}

      {/* Gallery Modal */}
      {showGalleryModal && selectedGalleryImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setShowGalleryModal(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            <img 
              src={selectedGalleryImage.url} 
              alt={selectedGalleryImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg">
              <h3 className="font-semibold">{selectedGalleryImage.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Meeting Room Details Modal */}
      {showMeetingRoomModal && selectedMeetingRoom && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">{selectedMeetingRoom.name}</h3>
                <button
                  onClick={() => setShowMeetingRoomModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={selectedMeetingRoom.image} 
                    alt={selectedMeetingRoom.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{selectedMeetingRoom.size}</div>
                      <div className="text-sm text-slate-600">Room Size</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{selectedMeetingRoom.rate}</div>
                      <div className="text-sm text-slate-600">Hourly Rate</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-slate-600 mb-6">{selectedMeetingRoom.description}</p>
                  
                  <h4 className="font-semibold text-slate-900 mb-4">Seating Capacities</h4>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-slate-200">
                      <span className="text-slate-600">Theater Style</span>
                      <span className="font-semibold">{selectedMeetingRoom.capacity.theater}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-200">
                      <span className="text-slate-600">Classroom</span>
                      <span className="font-semibold">{selectedMeetingRoom.capacity.classroom}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-200">
                      <span className="text-slate-600">Boardroom</span>
                      <span className="font-semibold">{selectedMeetingRoom.capacity.boardroom}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-200">
                      <span className="text-slate-600">U-Shape</span>
                      <span className="font-semibold">{selectedMeetingRoom.capacity.ushape}</span>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-slate-900 mb-4">Features & Equipment</h4>
                  <div className="space-y-2 mb-6">
                    {selectedMeetingRoom.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button className="flex-1" onClick={() => setShowQuoteModal(true)}>
                      <Calendar className="mr-2 h-4 w-4" />
                      Book This Room
                    </Button>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Floor Plan
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-4 right-4 z-50">
          <Card className="p-4 bg-green-50 border-green-200">
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium">Request submitted successfully!</span>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

export default App;

export default App