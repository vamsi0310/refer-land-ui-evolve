
import { useState } from 'react';
import { Camera, Upload, Github, ExternalLink, MapPin, Mail, Phone, Edit } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FloatingAIChat from '@/components/FloatingAIChat';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userRole, setUserRole] = useState<'referer' | 'lander'>('lander');
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Full-stack developer passionate about building scalable web applications. I love connecting with fellow developers and helping others land their dream jobs.',
    github: 'https://github.com/alexjohnson',
    linkedin: 'https://linkedin.com/in/alexjohnson',
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'AWS'],
    interests: ['Google', 'Microsoft', 'Netflix', 'Spotify'],
    experience: '5+ years'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log('Profile saved:', profile);
  };

  const addSkill = (skill: string) => {
    if (skill && !profile.skills.includes(skill)) {
      setProfile(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }));
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile</h1>
            <Button
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              className={isEditing ? 'bg-yellow hover:bg-yellow/90 text-black' : 'bg-black hover:bg-gray-800 text-white'}
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Profile */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Info */}
              <Card className="border border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>Personal Information</span>
                    {isEditing && <Edit className="w-4 h-4" />}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      {isEditing && (
                        <button className="absolute bottom-0 right-0 w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-black">
                          <Camera className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <div className="flex-1">
                      {isEditing ? (
                        <Input
                          value={profile.name}
                          onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                          className="text-2xl font-bold mb-2"
                        />
                      ) : (
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {profile.name}
                        </h2>
                      )}
                      <p className="text-gray-600 dark:text-gray-400">{profile.experience} Experience</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center space-x-1">
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </label>
                      {isEditing ? (
                        <Input
                          value={profile.email}
                          onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                        />
                      ) : (
                        <p className="text-gray-900 dark:text-white">{profile.email}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center space-x-1">
                        <Phone className="w-4 h-4" />
                        <span>Phone</span>
                      </label>
                      {isEditing ? (
                        <Input
                          value={profile.phone}
                          onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                        />
                      ) : (
                        <p className="text-gray-900 dark:text-white">{profile.phone}</p>
                      )}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>Location</span>
                      </label>
                      {isEditing ? (
                        <Input
                          value={profile.location}
                          onChange={(e) => setProfile(prev => ({ ...prev, location: e.target.value }))}
                        />
                      ) : (
                        <p className="text-gray-900 dark:text-white">{profile.location}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Bio</label>
                    {isEditing ? (
                      <Textarea
                        value={profile.bio}
                        onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                        rows={4}
                      />
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{profile.bio}</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Skills & Interests */}
              <Card className="border border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle>Skills & Interests</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                      Technical Skills
                    </label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {profile.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-yellow/10 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1"
                        >
                          <span>{skill}</span>
                          {isEditing && (
                            <button
                              onClick={() => removeSkill(skill)}
                              className="text-yellow-600 hover:text-yellow-800"
                            >
                              ×
                            </button>
                          )}
                        </span>
                      ))}
                    </div>
                    {isEditing && (
                      <Input
                        placeholder="Add a skill and press Enter"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            addSkill(e.currentTarget.value);
                            e.currentTarget.value = '';
                          }
                        }}
                      />
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                      Companies of Interest
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map((company) => (
                        <span
                          key={company}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* External Links */}
              <Card className="border border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle>Professional Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center space-x-1">
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </label>
                    <div className="flex items-center space-x-2">
                      {isEditing ? (
                        <Input
                          value={profile.github}
                          onChange={(e) => setProfile(prev => ({ ...prev, github: e.target.value }))}
                        />
                      ) : (
                        <a
                          href={profile.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                        >
                          <span>{profile.github}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">LinkedIn</label>
                    <div className="flex items-center space-x-2">
                      {isEditing ? (
                        <Input
                          value={profile.linkedin}
                          onChange={(e) => setProfile(prev => ({ ...prev, linkedin: e.target.value }))}
                        />
                      ) : (
                        <a
                          href={profile.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                        >
                          <span>{profile.linkedin}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Role Toggle */}
              <Card className="border border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle>User Role</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">I'm a Lander</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Looking for referrals</p>
                      </div>
                      <Switch
                        checked={userRole === 'referer'}
                        onCheckedChange={(checked) => setUserRole(checked ? 'referer' : 'lander')}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">I'm a Referer</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Providing referrals</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Resume Upload */}
              <Card className="border border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle>Resume</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Upload your resume
                    </p>
                    <Button variant="outline" size="sm">
                      Choose File
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <Card className="border border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle>Profile Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Profile Views</span>
                      <span className="font-semibold text-gray-900 dark:text-white">142</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Referrals Requested</span>
                      <span className="font-semibold text-gray-900 dark:text-white">8</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Success Rate</span>
                      <span className="font-semibold text-green-600">75%</span>
                    </div>
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

export default Profile;
