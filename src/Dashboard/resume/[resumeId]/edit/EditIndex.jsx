import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from '../../components/FormSection';
import PreviewSection from '../../components/PreviewSection';
import { ResumeInfoContex } from '@/context/ResumeInfoContext';
import dummy from '@/data/dummy';

function EditResume() {
    const params =useParams();
    const [resumeInfo,setResumeInfo]=useState();

    useEffect(()=>{
        setResumeInfo(dummy);
    },[])
  return (
    <ResumeInfoContex.Provider value={{resumeInfo,setResumeInfo}} >
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
     
    {/* Form Section */}
        <FormSection/>

    {/* Preview Section */}
        <PreviewSection/>
    </div>
    </ResumeInfoContex.Provider>
    
  )
}

export default EditResume