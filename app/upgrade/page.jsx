"use client"
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, X } from 'lucide-react';

const UpgradePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Dashboard</span>
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Upgrade Your Interview Skills</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for you and take your interview preparation to the next level.
            All plans include our AI-powered interview analysis and feedback.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Free</h2>
              <p className="text-gray-500 mb-4">Get started with basic interview practice</p>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-gray-800">$0</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <Link href="/dashboard" className="block w-full py-2 px-4 bg-gray-200 text-gray-800 rounded-lg text-center font-medium hover:bg-gray-300 transition-colors">
                Current Plan
              </Link>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">3 mock interviews per month</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">Basic feedback on responses</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">General technical questions</p>
              </div>
              <div className="flex items-start">
                <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">Company-specific questions</p>
              </div>
              <div className="flex items-start">
                <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">Detailed performance analytics</p>
              </div>
              <div className="flex items-start">
                <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">Interview recording archive</p>
              </div>
            </div>
          </div>
          
          {/* Pro Plan */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-200 relative transform scale-105">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
              POPULAR
            </div>
            <div className="p-6 border-b border-gray-200 bg-blue-50">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Professional</h2>
              <p className="text-gray-500 mb-4">For serious job seekers</p>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-gray-800">$19</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <button className="block w-full py-2 px-4 bg-blue-600 text-white rounded-lg text-center font-medium hover:bg-blue-700 transition-colors">
                Upgrade Now
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600"><span className="font-semibold">Unlimited</span> mock interviews</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">Comprehensive feedback and scoring</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">Role-specific technical questions</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">Progress tracking across interviews</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">30-day interview recording archive</p>
              </div>
              <div className="flex items-start">
                <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">Company-specific interview prep</p>
              </div>
            </div>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Enterprise</h2>
              <p className="text-gray-500 mb-4">For targeted company preparation</p>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-gray-800">$39</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <button className="block w-full py-2 px-4 bg-blue-600 text-white rounded-lg text-center font-medium hover:bg-blue-700 transition-colors">
                Upgrade Now
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600"><span className="font-semibold">Unlimited</span> mock interviews</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">Advanced AI feedback with suggestions</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600"><span className="font-semibold">Company-specific</span> interview questions</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">Detailed performance analytics</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">90-day interview recording archive</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600">Priority support</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Can I switch plans at any time?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade, downgrade, or cancel your subscription at any time. Changes will take effect at the start of your next billing cycle.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely through Stripe.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Is there a money-back guarantee?</h3>
              <p className="text-gray-600">
                Yes, we offer a 7-day money-back guarantee. If you're not satisfied with your premium plan, contact us within 7 days of your purchase for a full refund.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">How do company-specific interviews work?</h3>
              <p className="text-gray-600">
                Our Enterprise plan uses data from thousands of real interviews to create question sets that match the interview style and focus areas of specific companies. Simply select your target company before starting your mock interview.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradePage;