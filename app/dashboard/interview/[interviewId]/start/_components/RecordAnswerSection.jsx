"use client";
import { Mic, Webcam } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import useSpeechToText from "react-hook-speech-to-text";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { chatSession } from "@/utils/GeminiAIModal";
import { UserAnswer } from "@/utils/schema";
import { db } from "@/utils/db";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import ReactWebcam from "react-webcam";

function RecordAnswerSection({ mockInterviewquestion, activeQuestionIndex, interviewData }) {
  const [userAnswer, setUserAnswer] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const webcamRef = React.useRef(null);

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.forEach((result) => {
      setUserAnswer((prev) => prev + result?.transcript);
    });
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      UpdateUserAnswer();
    }
  }, [userAnswer]);

  const StartStopRecording = async () => {
    if (isRecording) {
      setLoading(true);
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  };

  const UpdateUserAnswer = async () => {
    console.log(userAnswer);
    setLoading(true);
    const feedbackPrompt =
      "Question: " +
      mockInterviewquestion?.[activeQuestionIndex].Question +
      ", User Answer:" +
      userAnswer +
      " ,Depends on question and user answer for given interview question " +
      "please give us rating for answer(the rating should be strict if any irrelevant things are said reduce the rating) and feedback as area of improvement if any " +
      "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field just give this json format only dont need to say anything just the json format with the asked fields please";

    console.log(feedbackPrompt);
    const result = await chatSession.sendMessage(feedbackPrompt);

    const responseText = await result.response.text();
    const mockJsonResp = responseText.replace(/```json|```/g, "");
    console.log(mockJsonResp);
    const JsonFeedbackResp = JSON.parse(mockJsonResp);

    console.log(mockInterviewquestion?.[activeQuestionIndex].Question);

    const resp = await db.insert(UserAnswer).values({
      mockId: interviewData.mockId,
      question: mockInterviewquestion?.[activeQuestionIndex].Question,
      correctAns: mockInterviewquestion?.[activeQuestionIndex]?.Answer,
      userAns: userAnswer,
      rating: JsonFeedbackResp?.rating,
      feedback: JsonFeedbackResp?.feedback,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD-MM-YYYY"),
    });

    if (resp) {
      toast("Answer saved successfully");
      setUserAnswer("");
      setResults([]);
    } else {
      toast("Error while saving answer");
    }

    setResults([]);
    setUserAnswer("");
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col mt-20 justify-center items-center bg-white rounded-lg p-5 border-2 relative w-[350px] h-[300px]">
        {/* Placeholder Image */}
        <Image src={"/cam2.png"} alt="webcam-placeholder" width={300} height={300} className="absolute z-0" />

        {/* Webcam */}
        <ReactWebcam
          ref={webcamRef}
          mirrored={true}
          className="absolute w-full h-full object-cover z-10"
        />
      </div>

      <Button disabled={loading} variant="outline" className="my-10" onClick={StartStopRecording}>
        {isRecording ? (
          <h2 className="text-red-500 animate-pulse flex gap-2 items-center">
            <Mic /> Stop Recording
          </h2>
        ) : (
          "Record Answer"
        )}
      </Button>
    </div>
  );
}

export default RecordAnswerSection;
