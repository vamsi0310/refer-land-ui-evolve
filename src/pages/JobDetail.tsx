
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Building2, Clock, DollarSign, Users, MessageCircle, Heart, Share2, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FloatingAIChat from '@/components/FloatingAIChat';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const JobDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const job = location.state?.job;

  if (!job) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Job not found</h1>
          <Button onClick={() => navigate('/search')} className="bg-yellow text-black">
            Back to Search
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-fade-in">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Job Details</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                        <Building2 className="w-8 h-8 text-gray-600 dark:text-gray-400" />
                      </div>
                      <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                          {job.role}
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400">{job.company}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Heart className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Share2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <DollarSign className="w-4 h-4" />
                      <span className="text-sm">Competitive</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">Team Role</span>
                    </div>
                  </div>

                  {job.isRemote && (
                    <div className="flex space-x-2 mb-6">
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                        Remote Friendly
                      </span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="bg-yellow/10 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Separator className="my-6" />

                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Job Description
                    </h2>
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {job.description}
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                        What you'll do:
                      </h3>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                        <li>• Develop and maintain high-quality software solutions</li>
                        <li>• Collaborate with cross-functional teams to deliver projects</li>
                        <li>• Participate in code reviews and technical discussions</li>
                        <li>• Contribute to architectural decisions and best practices</li>
                      </ul>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                        What we're looking for:
                      </h3>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                        <li>• 3+ years of experience in software development</li>
                        <li>• Strong proficiency in React, TypeScript, and modern web technologies</li>
                        <li>• Experience with agile development methodologies</li>
                        <li>• Excellent communication and teamwork skills</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Referrer Info */}
              <Card className="border border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Your Referrer</h3>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{job.referrerName}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{job.referrerRole}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">at {job.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    "I'm happy to help qualified candidates join our amazing team. Feel free to reach out with any questions!"
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full bg-yellow hover:bg-yellow/90 text-black font-semibold">
                      Request Referral
                    </Button>
                    <Button variant="outline" className="w-full" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat with {job.referrerName.split(' ')[0]}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Company Info */}
              <Card className="border border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">About {job.company}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Industry</span>
                      <span className="text-gray-900 dark:text-white">Technology</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Size</span>
                      <span className="text-gray-900 dark:text-white">10,000+ employees</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Founded</span>
                      <span className="text-gray-900 dark:text-white">1998</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Company Page
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      Save for Later
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      Share Job
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      Report Issue
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <FloatingAIChat />
    </div>
  );
};

export default JobDetail;
