import React, { useContext, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { UpdateResumeDetail } from '@/service/GlobalApi';
import { Brain, LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';
import { ResumeInfoContex } from '@/context/ResumeInfoContext';
//import { AIChatSession } from '@/service/AiModel';


// const prompt = "Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format";
//const prompt = "Job Title: {jobTitle} ,Depends on job title give me a summary for my resume within 4-5 lines"

function Summery({ enableNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContex);
  const [summery, setSummery] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();
//   const [aiGeneratedSummeryList, setAiGeneratedSummeryList]=useState();

  useEffect(() => {
    
     summery&&setResumeInfo({
        ...resumeInfo,
        summery:summery
      });
  }, [summery])

  // const GenerateSummaryFromAI=async()=>{
  //   setLoading(true);
  //   const PROMPT = prompt.replace('{jobTitle}',resumeInfo?.jobTitle);
  //   console.log(PROMPT);
  //   const result = await AIChatSession.sendMessage(PROMPT);
  //   console.log(result.response.text());
  //   setLoading(false);
  // }

  // const GeneretiveSummeryFromAI = async () => {
  //   setLoading(true);
  //   const PROMPT = prompt.replace('{jobTitle}', resumeInfo?.jobTitle);
  //   console.log(PROMPT);
  //   console.log("This is LOGin");
  //   console.log(apiKey,"This is api KEY"); 

  //   try {
  //     const AiChatSession = await initializeAiChatSession();
  //     const result = await AiChatSession.sendMessage(PROMPT);
  //     console.log(JSON.parse(result.response.text()));
  //     setAiGeneratedSummeryList(JSON.parse(result.response.text()))

  //   } 

  const onSave = (e) => {
    e.preventDefault();

    setLoading(true);

    const data = {
      data: {
        summery: summery
      }
    };

    UpdateResumeDetail(params?.resumeId,data).then(resp => {
      console.log(resp);
      enableNext(true);
      setLoading(false);
      toast("Details updated");

    }, (error) => {
      setLoading(false);
    });
  };

  return (
    <div>
      <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Summary </h2>
        <p>Add Summary for your job title</p>

        <form className='mt-7' onSubmit={onSave}>
          <div className='flex justify-between items-end'>
            <label>Add Summary</label>
            <Button
              variant='outline'
              onClick={()=>GenerateSummaryFromAI()}
            //   onClick={()=>GeneretiveSummeryFromAI()}
              type='button'
              size='sm'
              className='border-primary text-primary flex gap-2'
            >
            <Brain /> Generate from AI</Button>
          </div>

          <Textarea
            className='mt-5'
            required
            // value={summery}
            // defaultValue={summery?summery:resumeInfo?.summery}
            onChange={(e) => setSummery(e.target.value)}
          />

          <div className='mt-4 flex justify-end'>
            <Button type="submit" disabled={loading}>
              {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
            </Button>
          </div>
        </form>
      </div>


      {/* {aiGeneratedSummeryList&&<div className='my-5'>
        <h2 className='font-bold text-lg'>Suggestion</h2>
        {aiGeneratedSummeryList?.map((item,index)=>(
          <div key={index}
          onClick={()=>setSummery(item?.summery)}
          className='p-5 shadow-lg my-4 rounded-lg cursor-pointer'>
            <h2 className='font-bold my-1'>Level: {item?.experience_level}</h2>
            <p>{item?.summery}</p>
          </div>
        ))}
      </div>} */}
    </div>
  );
}

export default Summery;
