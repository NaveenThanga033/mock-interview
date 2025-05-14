"use client"
import { ChevronDown, User } from 'lucide-react'
import React, { useEffect ,useState} from 'react'
import { eq } from 'drizzle-orm'
import { UserAnswer } from '@/utils/schema'
import {db} from '@/utils/db';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react'
import {useRouter} from 'next/navigation'
import { Button } from '@/components/ui/button';

function Feedback({params}) {

  const [feedbackList,setFeedbackList]=useState([]);
  useEffect(()=>{
    GetFeedback();
  },[]);

  const router=useRouter();

  const GetFeedback=async()=>{
    const result=await db.select().from(UserAnswer)
                 .where(eq(UserAnswer.mockId,params.interviewId))
                 .orderBy(UserAnswer.id);

                 console.log(result);
    setFeedbackList(result);
  }
  return (
    <div className='p-10'>
    
      {feedbackList?.length==0?
      <h2 className='fond-bold text-xl text-gray-500'>No Interview Feedback Record found</h2> :
      <>
        <h2 className='text-3xl font -bold text-green-500'>Congratulations!</h2>
        <h2 className='font-bold text-2xl'>Here is your interview feedback</h2>
      <h2 className='text-primary text-lg my-3 '>Your overall interview rating: <strong>7/10</strong></h2>

      <h2 className='text-s, text-gray-400'>Find below interview question with correct answer, Your answer and feedback for improvement </h2>
      {feedbackList&&feedbackList.map((item,index)=>(
        <Collapsible key={index} className='mt-7'>
        <CollapsibleTrigger className='p-2 bg-secondary rounded-lg  flex justify-between my-2 gap-7 w-full '>{item.question} 
        <ChevronsUpDown className='h-5 w-4'/></CollapsibleTrigger>
        <CollapsibleContent>
           <div className='flex flex-col gap-2'>
            <h2 className='text-red-600 p-2 border rounded-lg'><strong>Rating: </strong>{item.rating}</h2>
            <h2 className='p-2 border rounded-lg bg-red-50 text-sm text-red-900'><strong>Your Answer: </strong>{item.userAns}</h2>
            <h2 className='p-2 border rounded-lg bg-green-50 text-sm text-green-900'><strong>Correct Answer: </strong>{item.correctAns}</h2>
            <h2 className='p-2 border rounded-lg bg-blue-50 text-sm text-blue-900'><strong>Correct Answer: </strong>{item.feedback}</h2>
           </div>
        </CollapsibleContent>
       </Collapsible>
      
      ))}

</>
}
      <Button onClick={()=>router.replace('/dashboard')}>Go Home</Button>
    </div>
  )
}

export default Feedback
