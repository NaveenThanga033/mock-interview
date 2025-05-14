"use client"
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Dashboard</span>
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-6">How InterviewAI Works</h1>
        <p className="text-gray-600 mb-12">
          Our AI-powered platform simulates realistic interview experiences and provides actionable feedback to help you succeed in your next job interview.
        </p>
        
        <div className="space-y-16">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">1</div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Create Your Profile</h2>
              <p className="text-gray-600 mb-4">
                Start by entering your target job role, technology stack, and years of experience. This helps our AI 
                generate questions that are specifically relevant to your career goals and background.
              </p>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <p className="text-sm text-blue-700">
                  <strong>Pro Tip:</strong> Be specific about your tech stack and experience level. For example, instead of just "Software Developer," 
                  specify "Frontend Developer with React, Next.js, and 3 years of experience" for more targeted questions.
                </p>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">2</div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Start Your Mock Interview</h2>
              <p className="text-gray-600 mb-4">
                Our AI will generate a customized set of technical and behavioral questions based on your profile. 
                The interview will be conducted through your webcam and microphone, simulating a real video interview environment.
              </p>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <p className="text-sm text-blue-700">
                  <strong>Pro Tip:</strong> Find a quiet environment with good lighting. Dress professionally as you would for a real interview 
                  to help get into the right mindset.
                </p>
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">3</div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Answer Questions</h2>
              <p className="text-gray-600 mb-4">
                Respond to each question naturally, as you would in a real interview. Our system records your audio and video 
                responses, capturing both what you say and your non-verbal communication cues.
              </p>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <p className="text-sm text-blue-700">
                  <strong>Pro Tip:</strong> Use the STAR method (Situation, Task, Action, Result) when answering behavioral questions 
                  for a structured and comprehensive response.
                </p>
              </div>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">4</div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Receive Detailed Feedback</h2>
              <p className="text-gray-600 mb-4">
                After your interview, our AI analyzes your responses for technical accuracy, clarity, confidence, and delivery. 
                You'll receive personalized feedback highlighting your strengths and areas for improvement.
              </p>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <p className="text-sm text-blue-700">
                  <strong>Pro Tip:</strong> Review your feedback carefully and practice the suggested improvements. 
                  Premium users can track progress across multiple interviews to see improvement over time.
                </p>
              </div>
            </div>
          </div>
          
          {/* Step 5 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">5</div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Practice and Improve</h2>
              <p className="text-gray-600 mb-4">
                Based on your feedback, practice areas that need improvement. Schedule additional mock interviews to refine your skills 
                and track your progress over time.
              </p>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <p className="text-sm text-blue-700">
                  <strong>Pro Tip:</strong> Upgrade to a premium plan for unlimited interviews and access to industry-specific question sets 
                  that target the exact companies you're applying to.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/upgrade" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Upgrade for Premium Features
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;