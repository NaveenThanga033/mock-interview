"use client"
import React, { useState } from 'react'
import { chatSession } from '@/utils/GeminiAIModal';
import { v4 as uuidv4 } from 'uuid';
import { MockInterview } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { LoaderCircle } from 'lucide-react';
import moment from 'moment';
import { useRouter } from 'next/navigation';

function AddNewInterview() {
    const [openDialog, setOpenDialog] = useState(false);
    const [jobPosition, setJobPosition] = useState('');
    const [jobDesc, setJobDesc] = useState('');
    const [level,setLevel]= useState('');
    const [jobExperience, setJobExperience] = useState('');
    const [loading, setLoading] = useState(false);
    const [jsonResponse, setJsonResponse] = useState([]);
    const { user } = useUser();
    const router = useRouter();

    const cleanJsonResponse = (rawText) => {
        let cleaned = rawText.replace(/```json|```/g, '');
        
        // Try to parse the JSON directly
        try {
            return JSON.parse(cleaned);
        } catch (e) {
            // If parsing fails, try to clean control characters
            try {
                // Replace control characters with proper JSON escape sequences
                cleaned = cleaned.replace(/[\u0000-\u001F\u007F-\u009F]/g, match => {
                    return '\\u' + ('0000' + match.charCodeAt(0).toString(16)).slice(-4);
                });
                return JSON.parse(cleaned);
            } catch (e2) {
                console.error("Failed to parse JSON after cleaning:", e2);
                throw e2;
            }
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault(); // Prevent form reload
        setLoading(true);
    
        try {
            console.log(jobPosition, jobDesc, jobExperience);
    
            const InputPrompt = `Job Position: ${jobPosition}, Job Description: ${jobDesc}, Years of Experience: ${jobExperience}. 
            Based on this information, please provide me 2-3 question per technology from ${jobDesc} interview questions with answers  with difficulty of ${level} in JSON format. 
            The JSON should contain "Question" and "Answer" fields.`;
    
            const result = await chatSession.sendMessage(InputPrompt);
            const rawText = await result.response.text();
            
            try {
                const parsedJson = cleanJsonResponse(rawText);
                console.log(parsedJson);
                
                const stringifiedJson = JSON.stringify(parsedJson);
                setJsonResponse(stringifiedJson);
                
                const resp = await db.insert(MockInterview).values({
                    mockId: uuidv4(),
                    jsonMockResp: stringifiedJson, // Store the stringified clean JSON
                    jobPosition: jobPosition,
                    jobDesc: jobDesc,
                    jobExperience: jobExperience,
                    createdBy: user?.primaryEmailAddress?.emailAddress,
                    createdAt: moment().format('DD-MM-YYYY')
                }).returning({ mockId: MockInterview.mockId });
    
                console.log("Inserted ID", resp);
                if (resp && resp[0]?.mockId) {
                    setOpenDialog(false);
                    router.push('/dashboard/interview/' + resp[0].mockId);
                } else {
                    console.error("No mockId returned after insert");
                }
            } catch (parseError) {
                console.error("Failed to parse AI response:", parseError);
                alert("Failed to process the AI response. Please try again.");
            }
        } catch (error) {
            console.error("Error fetching interview questions:", error);
            alert("Error generating interview questions. Please try again later.");
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div>
            <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all' onClick={() => setOpenDialog(true)}>
                <h2 className='font-bold text-lg text-center'>+ Add New</h2>
            </div>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent className="max-w-xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">
                            Tell us more about the job interview
                        </DialogTitle>
                        <DialogDescription>
                            Add details about the job position, description, and required experience.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={onSubmit}>
                        <div className="mt-5">
                            <div className="my-3">
                                <label>Job Role/Job Position</label>
                                <Input
                                    placeholder="Ex: Data Analyst"
                                    required
                                    onChange={(e) => setJobPosition(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <label>Job Description/Tech Stack</label>
                                <Textarea
                                    placeholder="Ex: Python, React, Next.js"
                                    required
                                    onChange={(e) => setJobDesc(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <label>Years of Experience</label>
                                <Input
                                    placeholder="Ex: 2 years"
                                    type="number"
                                    max="30"
                                    required
                                    onChange={(e) => setJobExperience(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <label>Level of Difficulty</label>
                                <Textarea
                                    placeholder="low, medium ,high"
                                    required
                                    onChange={(e) => setLevel(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex gap-5 justify-end">
                            <Button variant="ghost" type="button" onClick={() => setOpenDialog(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={loading}>
                                {loading ? (
                                    <>
                                        <LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> Generating results...
                                    </>
                                ) : 
                                    'Start Interview'
                                }
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewInterview;