
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search, MapPin, Building2, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FloatingAIChat from '@/components/FloatingAIChat';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface JobResult {
  id: string;
  company: string;
  role: string;
  location: string;
  type: string;
  tags: string[];
  referrerName: string;
  referrerRole: string;
  description: string;
  isRemote: boolean;
}

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [savedJobs, setSavedJobs] = useState<string[]>([]);

  const mockResults: JobResult[] = [
    {
      id: '1',
      company: 'Google',
      role: 'Software Engineer',
      location: 'Mountain View, CA',
      type: 'Full-time',
      tags: ['React', 'TypeScript', 'Python'],
      referrerName: 'Sarah Chen',
      referrerRole: 'Senior Engineer',
      description: 'Join our innovative team building the next generation of web technologies...',
      isRemote: false
    },
    {
      id: '2',
      company: 'Microsoft',
      role: 'Product Manager',
      location: 'Seattle, WA',
      type: 'Full-time',
      tags: ['Product Strategy', 'Analytics', 'Leadership'],
      referrerName: 'David Kim',
      referrerRole: 'Principal PM',
      description: 'Lead product development for enterprise solutions...',
      isRemote: true
    },
    {
      id: '3',
      company: 'Netflix',
      role: 'UX Designer',
      location: 'Los Gatos, CA',
      type: 'Full-time',
      tags: ['Figma', 'User Research', 'Prototyping'],
      referrerName: 'Emily Rodriguez',
      referrerRole: 'Design Lead',
      description: 'Design intuitive experiences for millions of users worldwide...',
      isRemote: true
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleSaveJob = (jobId: string) => {
    setSavedJobs(prev =>
      prev.includes(jobId)
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  const openJobDetail = (job: JobResult) => {
    navigate(`/job/${job.id}`, { state: { job } });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Compact Search Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-8 h-8 bg-yellow rounded-lg flex items-center justify-center">
              <span className="font-bold text-black text-sm">RL</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Refer and Land
            </h1>
          </div>
          
          <form onSubmit={handleSearch} className="mb-4">
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for job roles, companies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-yellow focus:ring-yellow"
              />
            </div>
          </form>

          <div className="flex items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400">
              Found <span className="font-semibold text-gray-900 dark:text-white">{mockResults.length}</span> results for "{searchQuery}"
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="rounded-full">
                Filters
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Sort by
              </Button>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-slide-up">
          {mockResults.map((job) => (
            <Card
              key={job.id}
              className="border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={() => openJobDetail(job)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                        {job.role}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSaveJob(job.id);
                    }}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        savedJobs.includes(job.id)
                          ? 'text-red-500 fill-current'
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  {job.isRemote && (
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded-full text-xs">
                      Remote
                    </span>
                  )}
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                    {job.type}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-yellow/10 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm text-gray-900 dark:text-white">
                        {job.referrerName}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {job.referrerRole}
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => e.stopPropagation()}
                      className="rounded-full"
                    >
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Chat
                    </Button>
                    <Button
                      size="sm"
                      className="bg-yellow hover:bg-yellow/90 text-black rounded-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Request Referral
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <FloatingAIChat />
    </div>
  );
};

export default SearchResults;
