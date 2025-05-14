"use client"
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const QuestionsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Dashboard</span>
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">What is InterviewAI?</h2>
            <p className="text-gray-600">
              InterviewAI is an advanced mock interview platform that uses artificial intelligence to simulate 
              real interview experiences. It generates personalized technical and behavioral questions based on 
              your job role, technology stack, and years of experience to help you prepare effectively for your 
              next interview.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">How accurate are the AI-generated questions?</h2>
            <p className="text-gray-600">
              Our AI is trained on thousands of real interview questions across various industries and roles.
              The questions are continually refined through feedback from hiring managers and industry experts to
              ensure they accurately reflect current interview trends for your specific job role and experience level.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">How does the answer analysis work?</h2>
            <p className="text-gray-600">
              Our platform analyzes both the content of your answers and your delivery. For technical questions,
              we evaluate the accuracy and completeness of your response. For all answers, we assess factors like
              clarity, confidence, speech patterns, and non-verbal cues from your video to provide comprehensive
              feedback on both what you said and how you said it.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Is my interview data secure?</h2>
            <p className="text-gray-600">
              Yes, we take data privacy seriously. Your video and audio recordings are encrypted and stored securely.
              We only use your data to provide feedback on your interview performance and to improve our AI models.
              You can delete your data at any time from your account settings.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Can I practice for specific companies?</h2>
            <p className="text-gray-600">
              With our premium plans, you can select specific companies to tailor your mock interviews. Our AI will 
              generate questions based on known interview patterns from these companies, helping you prepare for their
              specific interview style and technical requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">How many mock interviews can I do?</h2>
            <p className="text-gray-600">
              Free accounts can conduct 3 mock interviews per month. Premium accounts have unlimited access to mock
              interviews, plus additional features like company-specific interviews, detailed feedback reports, and
              improvement tracking over time. Check our Upgrade page for more details on premium plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;