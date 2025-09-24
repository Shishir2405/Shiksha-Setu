"use client"

import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  MapPin, 
  Calendar, 
  Brain, 
  TrendingUp, 
  ChevronRight,
  Play,
  Star,
  GraduationCap,
  ChevronLeft,
  Home,
  Clock,
  Check,
  ArrowRight,
  Menu,
  X,
  Target,
  Award,
  Users,
  Search,
  Filter,
  Bell
} from 'lucide-react';

const CareerGuidancePlatform = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [quizData, setQuizData] = useState({
    currentQuestion: 0,
    answers: [],
    completed: false,
    result: null
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const quizQuestions = [
    {
      question: "What type of activities do you enjoy most?",
      options: [
        { text: "Solving mathematical problems", stream: "Science", weight: 3 },
        { text: "Reading books and writing", stream: "Arts", weight: 3 },
        { text: "Working with numbers and finance", stream: "Commerce", weight: 3 },
        { text: "Creating art or music", stream: "Arts", weight: 2 }
      ]
    },
    {
      question: "Which subject interests you the most?",
      options: [
        { text: "Physics and Chemistry", stream: "Science", weight: 3 },
        { text: "History and Literature", stream: "Arts", weight: 3 },
        { text: "Economics and Accounting", stream: "Commerce", weight: 3 },
        { text: "Languages and Social Studies", stream: "Arts", weight: 2 }
      ]
    },
    {
      question: "What kind of career appeals to you?",
      options: [
        { text: "Doctor, Engineer, Researcher", stream: "Science", weight: 3 },
        { text: "Teacher, Journalist, Social Worker", stream: "Arts", weight: 3 },
        { text: "Banker, CA, Business Manager", stream: "Commerce", weight: 3 },
        { text: "Artist, Designer, Musician", stream: "Arts", weight: 2 }
      ]
    },
    {
      question: "How do you prefer to learn?",
      options: [
        { text: "Through experiments and practical work", stream: "Science", weight: 2 },
        { text: "Through discussion and research", stream: "Arts", weight: 2 },
        { text: "Through case studies and examples", stream: "Commerce", weight: 2 },
        { text: "Through creative projects", stream: "Arts", weight: 3 }
      ]
    },
    {
      question: "What motivates you most?",
      options: [
        { text: "Discovering how things work", stream: "Science", weight: 3 },
        { text: "Understanding people and society", stream: "Arts", weight: 3 },
        { text: "Building wealth and business success", stream: "Commerce", weight: 3 },
        { text: "Expressing creativity", stream: "Arts", weight: 2 }
      ]
    }
  ];

  const careerPaths = {
    Science: {
      degrees: ["B.Sc Physics", "B.Sc Chemistry", "B.Tech", "MBBS", "B.Sc Mathematics"],
      careers: ["Doctor", "Engineer", "Researcher", "Data Scientist", "Lab Technician"],
      exams: ["NEET", "JEE Main", "JEE Advanced", "GATE", "CSIR NET"]
    },
    Commerce: {
      degrees: ["B.Com", "BBA", "B.Com (Hons)", "CA", "CS"],
      careers: ["Chartered Accountant", "Investment Banker", "Financial Analyst", "Business Manager", "Tax Consultant"],
      exams: ["CA Foundation", "CS Foundation", "CFA", "FRM", "ACCA"]
    },
    Arts: {
      degrees: ["B.A English", "B.A History", "B.A Psychology", "B.A Political Science", "BFA"],
      careers: ["Teacher", "Journalist", "Psychologist", "Civil Servant", "Content Writer"],
      exams: ["UPSC", "UGC NET", "State PSC", "CTET", "Mass Communication Entrance"]
    }
  };

  const governmentColleges = [
    {
      name: "Government Science College",
      location: "Delhi",
      courses: ["B.Sc Physics", "B.Sc Chemistry", "B.Sc Mathematics"],
      cutoff: "85%",
      facilities: ["Library", "Lab", "Hostel", "Internet"],
      distance: "2.5 km"
    },
    {
      name: "Rajkiya Commerce College",
      location: "Mumbai", 
      courses: ["B.Com", "BBA", "B.Com (Hons)"],
      cutoff: "80%",
      facilities: ["Library", "Computer Lab", "Cafeteria"],
      distance: "4.2 km"
    },
    {
      name: "State Arts College",
      location: "Bangalore",
      courses: ["B.A English", "B.A History", "B.A Psychology"],
      cutoff: "75%",
      facilities: ["Library", "Auditorium", "Sports Complex"],
      distance: "3.1 km"
    }
  ];

  const timelineEvents = [
    {
      title: "College Applications Open",
      date: "2025-03-15",
      type: "application",
      description: "Start applying to government colleges"
    },
    {
      title: "Entrance Exam Registration", 
      date: "2025-04-01",
      type: "exam",
      description: "Register for competitive exams"
    },
    {
      title: "Scholarship Deadline",
      date: "2025-04-20",
      type: "scholarship", 
      description: "Apply for merit-based scholarships"
    },
    {
      title: "Counseling Process",
      date: "2025-06-10",
      type: "counseling",
      description: "Attend college counseling sessions"
    }
  ];

  const menuItems = [
    { id: 'quiz', label: 'Aptitude Test', icon: Brain, description: 'Discover your strengths' },
    { id: 'careers', label: 'Career Paths', icon: TrendingUp, description: 'Explore opportunities' },
    { id: 'colleges', label: 'College Directory', icon: MapPin, description: 'Find nearby colleges' },
    { id: 'timeline', label: 'Timeline Tracker', icon: Calendar, description: 'Important dates' },
    { id: 'scholarships', label: 'Scholarships', icon: Award, description: 'Financial assistance' },
    { id: 'resources', label: 'Study Resources', icon: BookOpen, description: 'Learning materials' }
  ];

  const handleQuizAnswer = (selectedOption) => {
    const newAnswers = [...quizData.answers, selectedOption];
    
    if (quizData.currentQuestion < quizQuestions.length - 1) {
      setQuizData({
        ...quizData,
        currentQuestion: quizData.currentQuestion + 1,
        answers: newAnswers
      });
    } else {
      const streamScores = { Science: 0, Commerce: 0, Arts: 0 };
      newAnswers.forEach(answer => {
        streamScores[answer.stream] += answer.weight;
      });
      
      const recommendedStream = Object.keys(streamScores).reduce((a, b) => 
        streamScores[a] > streamScores[b] ? a : b
      );

      setQuizData({
        ...quizData,
        answers: newAnswers,
        completed: true,
        result: {
          recommendedStream,
          scores: streamScores,
          careerPath: careerPaths[recommendedStream]
        }
      });
    }
  };

  const resetQuiz = () => {
    setQuizData({
      currentQuestion: 0,
      answers: [],
      completed: false,
      result: null
    });
  };

  const goBack = () => {
    if (currentPage === 'quiz' && !quizData.completed) {
      resetQuiz();
    }
    setCurrentPage('home');
    setMenuOpen(false);
  };

  const navigateToPage = (pageId) => {
    setCurrentPage(pageId);
    setMenuOpen(false);
  };

  const PrismBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
      
      <div className="absolute top-20 left-10 w-32 h-32 opacity-30 animate-spin">
        <div className="w-full h-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 transform rotate-45 animate-pulse"></div>
      </div>
      
      <div className="absolute top-40 right-20 w-24 h-24 opacity-20 animate-bounce">
        <div className="w-full h-full bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-500 transform rotate-12 animate-pulse"></div>
      </div>
      
      <div className="absolute bottom-20 left-1/3 w-40 h-40 opacity-25 animate-spin">
        <div className="w-full h-full bg-gradient-to-bl from-green-400 via-blue-500 to-indigo-600 transform rotate-30 animate-pulse"></div>
      </div>
      
      <div 
        className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 100%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>
    </div>
  );

  const NavigationMenu = () => (
    <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-black/20 backdrop-blur-xl border-r border-white/10 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center justify-between p-6 border-b border-white/10">
        <h2 className="text-xl font-bold text-white">Navigation</h2>
        <button 
          onClick={() => setMenuOpen(false)}
          className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          <X size={20} />
        </button>
      </div>
      
      <div className="p-4 space-y-2">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => navigateToPage(item.id)}
              className={`w-full text-left p-4 rounded-xl transition-all duration-200 hover:bg-white/10 group ${
                currentPage === item.id ? 'bg-white/15 border border-white/20' : 'hover:scale-105'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform">
                  <IconComponent className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white">{item.label}</div>
                  <div className="text-sm text-white/60">{item.description}</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
          <Star className="text-yellow-400 mr-2" size={20} />
          <span className="text-white/90">Your Personalized Career Advisor</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
          Find Your Perfect
          <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            शिक्षा Setu
          </span>
        </h1>
        
        <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Discover the right degree course and government college for your future. 
          Get personalized recommendations based on your interests and aptitude.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button 
            onClick={() => navigateToPage('quiz')}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-10 py-5 rounded-xl hover:scale-105 transition-transform shadow-2xl flex items-center text-lg"
          >
            <Play className="mr-3" size={24} />
            Take Aptitude Test
          </button>
          <button 
            onClick={() => navigateToPage('colleges')}
            className="bg-white/10 backdrop-blur-sm text-white font-semibold px-10 py-5 rounded-xl hover:bg-white/20 transition-colors flex items-center text-lg"
          >
            Explore Colleges
            <ChevronRight className="ml-3" size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl font-bold text-yellow-400 mb-2">50,000+</div>
            <div className="text-white/70">Students Guided</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl font-bold text-purple-400 mb-2">1,200+</div>
            <div className="text-white/70">Government Colleges</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl font-bold text-pink-400 mb-2">95%</div>
            <div className="text-white/70">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );

  const QuizPage = () => {
    if (quizData.completed) {
      return (
        <div className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <Check className="text-white" size={40} />
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-6">Quiz Complete!</h2>
              
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-8 rounded-xl inline-block mb-8 text-xl">
                Recommended Stream: {quizData.result.recommendedStream}
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-white font-bold mb-4 text-lg">Degree Options</h4>
                  <ul className="text-white/80 space-y-3">
                    {quizData.result.careerPath.degrees.slice(0, 3).map((degree, i) => (
                      <li key={i} className="flex items-center">
                        <ArrowRight size={16} className="mr-2 text-yellow-400" />
                        {degree}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-white font-bold mb-4 text-lg">Career Options</h4>
                  <ul className="text-white/80 space-y-3">
                    {quizData.result.careerPath.careers.slice(0, 3).map((career, i) => (
                      <li key={i} className="flex items-center">
                        <ArrowRight size={16} className="mr-2 text-green-400" />
                        {career}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-white font-bold mb-4 text-lg">Entrance Exams</h4>
                  <ul className="text-white/80 space-y-3">
                    {quizData.result.careerPath.exams.slice(0, 3).map((exam, i) => (
                      <li key={i} className="flex items-center">
                        <ArrowRight size={16} className="mr-2 text-blue-400" />
                        {exam}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={() => navigateToPage('colleges')}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform"
                >
                  Find Colleges
                </button>
                <button 
                  onClick={resetQuiz}
                  className="bg-white/10 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    const currentQ = quizQuestions[quizData.currentQuestion];
    const progress = ((quizData.currentQuestion) / quizQuestions.length) * 100;

    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white/70">Question {quizData.currentQuestion + 1} of {quizQuestions.length}</span>
                <span className="text-white/70">{Math.round(progress)}% Complete</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-8">{currentQ.question}</h2>
            
            <div className="space-y-4">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleQuizAnswer(option)}
                  className="w-full bg-white/5 hover:bg-white/15 border border-white/20 rounded-xl p-6 text-left text-white transition-all duration-200 hover:scale-105"
                >
                  <div className="text-lg">{option.text}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CollegesPage = () => (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Government Colleges Near You</h2>
        
        <div className="grid gap-6">
          {governmentColleges.map((college, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{college.name}</h3>
                  <p className="text-white/70 flex items-center mb-2">
                    <MapPin size={16} className="mr-2" />
                    {college.location} • {college.distance} away
                  </p>
                  <p className="text-green-400 font-semibold">Cutoff: {college.cutoff}</p>
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold">
                  Apply Now
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-bold mb-3">Available Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {college.courses.map((course, i) => (
                      <span key={i} className="bg-white/10 text-white px-3 py-2 rounded-lg text-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-bold mb-3">Facilities</h4>
                  <div className="flex flex-wrap gap-2">
                    {college.facilities.map((facility, i) => (
                      <span key={i} className="bg-green-500/20 text-green-400 px-3 py-2 rounded-lg text-sm">
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const CareersPage = () => (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Career Path Explorer</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(careerPaths).map(([stream, data]) => (
            <div key={stream} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{stream} Stream</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold mb-3">Popular Degrees</h4>
                  <ul className="text-white/80 space-y-2">
                    {data.degrees.slice(0, 4).map((degree, i) => (
                      <li key={i} className="flex items-center">
                        <ArrowRight size={16} className="mr-2 text-yellow-400" />
                        {degree}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-bold mb-3">Career Options</h4>
                  <ul className="text-white/80 space-y-2">
                    {data.careers.slice(0, 4).map((career, i) => (
                      <li key={i} className="flex items-center">
                        <ArrowRight size={16} className="mr-2 text-green-400" />
                        {career}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-bold mb-3">Entrance Exams</h4>
                  <div className="flex flex-wrap gap-2">
                    {data.exams.slice(0, 3).map((exam, i) => (
                      <span key={i} className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg text-sm">
                        {exam}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const TimelinePage = () => (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Important Timeline</h2>
        
        <div className="space-y-6">
          {timelineEvents.map((event, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-white" size={24} />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-white/70">{event.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold">
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="text-white/70 text-sm mt-2 capitalize">
                        {event.type}
                      </div>
                    </div>
                  </div>
                  
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center">
                    <Clock size={16} className="mr-2" />
                    Set Reminder
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'quiz':
        return <QuizPage />;
      case 'colleges':
        return <CollegesPage />;
      case 'careers':
        return <CareersPage />;
      case 'timeline':
        return <TimelinePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <PrismBackground />
      
      <NavigationMenu />
      
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <nav className="relative z-20 p-6 flex justify-between items-center bg-black/20 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setMenuOpen(true)}
            className="mr-4 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Menu className="text-white" size={20} />
          </button>
          
          {currentPage !== 'home' && (
            <button 
              onClick={goBack}
              className="mr-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="text-white" size={20} />
            </button>
          )}
          
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
            <GraduationCap className="text-white" size={24} />
          </div>
          <h1 className="text-2xl font-bold text-white">शिक्षा Setu</h1>
        </div>
        
        <div className="flex space-x-4">
          <button 
            onClick={() => setCurrentPage('home')}
            className={`p-3 rounded-xl transition-colors ${currentPage === 'home' ? 'bg-white/20' : 'hover:bg-white/10'}`}
          >
            <Home className="text-white" size={20} />
          </button>
          <button className="p-3 rounded-xl hover:bg-white/10 transition-colors">
            <Bell className="text-white" size={20} />
          </button>
        </div>
      </nav>

      <div className="relative z-10">
        {renderCurrentPage()}
      </div>
    </div>
  );
};

export default CareerGuidancePlatform;