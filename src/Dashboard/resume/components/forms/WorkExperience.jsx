import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useContext, useEffect, useState } from 'react'
import RichTextEditor from '../RichTextEditor';
import { ResumeInfoContex } from '@/context/ResumeInfoContext';
import { UpdateResumeDetail } from '@/service/GlobalApi';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { LoaderCircle } from 'lucide-react';

const formField={
    title:'',
    companyName:'',
    city:'',
    state:'',
    startDate:'',
    endDate:'',
    workSummery:''
}

function Experience() {
    const [experienceList,setExperienceList]=useState([
        formField
    ]);

    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContex);

    const params=useParams();
    const [loading,setLoading]=useState(false);

    // useEffect(()=>{
    //     // resumeInfo?.experience.length>0&&setExperienceList(resumeInfo?.experience)
    //     resumeInfo?.experience.length>0&&setExperienceList(resumeInfo?.experience)
    // },[])

    const handleChange=(index,event)=>{
        const newEntries=experienceList.slice();
        const {name,value}=event.target;
        newEntries[index][name]=value;
        setExperienceList(newEntries);

    }

    const AddNewExperience=()=>{
        setExperienceList([...experienceList,{
            title:'',
            companyName:'',
            city:'',
            state:'',
            startDate:'',
            endDate:'',
            workSummery:'',
        }])
    }

    const RemoveExperience=()=>{
        setExperienceList(experienceList=>experienceList.slice(0,-1))
    }

    const handleRichTextEditor=(e,name,index)=>{
        const newEntries=experienceList.slice();
        newEntries[index][name]=e.target.value;
        setExperienceList(newEntries);
    }

    useEffect(()=>{
        setResumeInfo({
            ...resumeInfo,
            experience:experienceList
        })
        // console.log(experienceList);

    },[experienceList])

    const onSave=()=>{
        setLoading(true)
        const data={
            data:{
                experience:experienceList
                // .map(({ id, ...rest }) => rest)
            }
        }
        console.log(experienceList)

        UpdateResumeDetail(params?.resumeId,data).
        then(resp=>{
            console.log(resp);
            setLoading(false);
            toast('Details updated !')
        },(error)=>{
            setLoading(false);
            toast('Server Error, Please try again')
        })

    }
  return (
    <div>
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Professional Experience</h2>
        <p>Add Your previous Job Experience</p>
        <div>
            {experienceList.map((item,index)=>(
            <div>
                <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                    <div>
                        <label className='text-xs '>Position Title</label>
                        <Input name="title" onChange={(event)=>handleChange(index,event)} />
                    </div>
                    <div>
                        <label className='text-xs '>Company Name</label>
                        <Input name="companyName" onChange={(event)=>handleChange(index,event)} />
                    </div>
                    <div>
                        <label className='text-xs '>City</label>
                        <Input name="city" onChange={(event)=>handleChange(index,event)} />
                    </div>
                    <div>
                        <label className='text-xs '>State</label>
                        <Input name="state" onChange={(event)=>handleChange(index,event)} />
                    </div>
                    <div>
                        <label className='text-xs '>Start Date</label>
                        <Input type="date" className="text-black" name="startDate" onChange={(event)=>handleChange(index,event)} />
                    </div>
                    <div>
                        <label className='text-xs '>End Date</label>
                        <Input type="date" name="endDate" onChange={(event)=>handleChange(index,event)} />
                    </div>
                    <div className='col-span-2'>
                        {/* Work Summary */}
                        <RichTextEditor 
                        onRichTextEditorChange={(event)=>handleRichTextEditor(event,'workSummery',index)}/>
                    </div>
                </div>
            </div>
            ))}
        </div>
        <div className='flex justify-between'>
            <div className='flex gap-2'>
            <Button variant="outline" className="text-primary"
            onClick={AddNewExperience} > + Add More Experience</Button>
             <Button variant="outline" className="text-primary"
            onClick={RemoveExperience} > - Remove</Button>
           
            </div>
            <Button disabled={loading} onClick={()=>onSave()}>
            {loading?<LoaderCircle className='animate-spin' />:'Save'}    
            </Button>
        </div>
    </div>
    </div>
  )
}

export default Experience