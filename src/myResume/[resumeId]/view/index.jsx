import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import { ResumeInfoContex } from '@/context/ResumeInfoContext'
import PreviewSection from '@/Dashboard/resume/components/PreviewSection';
import { GetResumeById } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { RWebShare } from 'react-web-share';

function ViewResume() {

    const [resumeInfo,setResumeInfo]=useState();
    const {resumeId}=useParams();

    useEffect(()=>{
        GetResumeInfo();
    },[])

    const GetResumeInfo=()=>{
        GetResumeById(resumeId).then(resp=>{
            console.log(resp.data.data);
            setResumeInfo(resp.data.data)
        })
    }

    const HandleDownload =()=>{
        window.print();
    }
  return (
    <ResumeInfoContex.Provider value={{resumeInfo,setResumeInfo}}>
        <div id='no-print'>
        <Header/>
    
            <div className='my-10 mx-10 md:mx-2 lg:mx-36'>
                <h2 className='text-center text-2xl font-medium'>Congrats! Your Resume is ready ! </h2>
                <p className='text-center text-gray-400'>now you are ready to download your resume</p>
            <div className='flex justify-between mx-44 my-10'>
                <Button onClick={HandleDownload} >Download</Button>

                <RWebShare
        data={{
          text: "Hello EveryOne, This is my Resume please open url",
          url: import.meta.env.VITE_BASE_URL="/my-resume/"+resumeId+"/view",
          title: resumeInfo?.firstName+" "+resumeInfo?.lastName+" resume",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <Button>Share </Button>
        {/* <button>Share 🔗</button> */}
      </RWebShare>
                
            </div>
        </div>
        </div>
        <div id='print-area' className='my-10 mx-10 md:mx-2 lg:mx-36'>
        <PreviewSection/>
        </div>
    </ResumeInfoContex.Provider>
  )
}

export default ViewResume