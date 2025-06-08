
import { useState } from 'react';
import { Search, MapPin, Building2, Briefcase, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FloatingAIChat from '@/components/FloatingAIChat';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [remoteOnly, setRemoteOnly] = useState(false);
  const navigate = useNavigate();

  const filters = ['Companies', 'Roles', 'Location'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-24 h-24 bg-yellow rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span className="font-bold text-black text-4xl">RL</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Refer and Land
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Connect with industry professionals, get referred to your dream job, and land opportunities that matter.
          </p>
        </div>

        <div className="animate-slide-up">
          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for job roles, companies, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 w-full text-lg rounded-2xl border-2 border-gray-200 dark:border-gray-600 focus:border-yellow focus:ring-yellow shadow-lg"
              />
            </div>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => toggleFilter(filter)}
                variant={selectedFilters.includes(filter) ? "default" : "outline"}
                className={`rounded-full px-6 py-3 font-medium transition-all ${
                  selectedFilters.includes(filter)
                    ? 'bg-yellow text-black hover:bg-yellow/90'
                    : 'border-gray-300 dark:border-gray-600 hover:border-yellow hover:text-yellow'
                }`}
              >
                {filter === 'Companies' && <Building2 className="w-4 h-4 mr-2" />}
                {filter === 'Roles' && <Briefcase className="w-4 h-4 mr-2" />}
                {filter === 'Location' && <MapPin className="w-4 h-4 mr-2" />}
                {filter}
              </Button>
            ))}
            
            <Button
              onClick={() => setRemoteOnly(!remoteOnly)}
              variant={remoteOnly ? "default" : "outline"}
              className={`rounded-full px-6 py-3 font-medium transition-all ${
                remoteOnly
                  ? 'bg-yellow text-black hover:bg-yellow/90'
                  : 'border-gray-300 dark:border-gray-600 hover:border-yellow hover:text-yellow'
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              Remote Only
            </Button>
          </div>

          <div className="text-center">
            <Button
              onClick={handleSearch}
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Start Your Search
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <div className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Top Companies
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Connect with referrers from leading tech companies and startups.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Dream Roles
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Find opportunities that match your skills and career aspirations.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Global Network
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Access opportunities worldwide or find remote-friendly positions.
            </p>
          </div>
        </div>
      </main>

      <FloatingAIChat />
    </div>
  );
};

export default Home;
