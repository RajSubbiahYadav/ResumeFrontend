import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ResumeInfoContex } from '@/context/ResumeInfoContext'
import { UpdateResumeDetail } from '@/service/GlobalApi'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { LoaderCircle } from 'lucide-react'

function Education() {

  const [loading,setLoading]=useState(false)
  const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContex);
  const params=useParams();
  const [educationList,setEducationList]=useState([
    {
      universityName:'',
      degree:'',
      major:'',
      startDate:'',
      endDate:'',
      description:''
    }
  ])

  const handleChange=(event,index)=>{
    const newEntries=educationList.slice();
    const {name,value}=event.target;
    newEntries[index][name]=value;
    setEducationList(newEntries);
  }

  const AddNewEducation=()=>{
    setEducationList([...educationList,
      {
        universityName:'',
        degree:'',
        major:'',
        startDate:'',
        endDate:'',
        description:''
      }
    ])
  }
  const RemoveEducation=()=>{
    setEducationList(educationList=>educationList.slice(0,-1))

  }
  const onSave=()=>{
    setLoading(true)
    const data ={
      data:{
        education:educationList
        // .map(({ id, ...rest }) => rest)
      }
    }
    UpdateResumeDetail(params.resumeId,data)
    .then(resp=>{
      console.log(resp);
      setLoading(false);
      toast('Details updated!')
    },(error)=>{
      setLoading(false)
      toast('Server Error, Please try again')
    })
  }

  useEffect(()=>{
    setResumeInfo({
      ...resumeInfo,
      education:educationList
    })

  },[educationList])
  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
    <h2 className='font-bold text-lg'>Education</h2>
    <p>Add Your Education Details</p>
    <div>
      {educationList.map((item,index)=>(
        <div>
          <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
            <div className='col-span-2'>
              <label>University Name</label>
              <Input name="universityName" 
              onChange={(e)=>handleChange(e,index)}
              defaultValue={item?.universityName}
              />
            </div>
            <div>
              <label>Degree</label>
              <Input name="degree" 
              onChange={(e)=>handleChange(e,index)}
              defaultValue={item?.degree} />
            </div>
            <div>
              <label>Specialization</label>
              <Input name="major" 
              onChange={(e)=>handleChange(e,index)}
              defaultValue={item?.major} />
            </div>
            <div>
              <label>Start Date</label>
              <Input type="date" name="startDate" 
              onChange={(e)=>handleChange(e,index)}
              defaultValue={item?.startDate} />
            </div>
            <div>
              <label>End Date</label>
              <Input type="date" name="endDate" 
              onChange={(e)=>handleChange(e,index)}
              defaultValue={item?.endDate} />
            </div>
            <div className='col-span-2'>
              <label>Description</label>
              <Textarea name="description" 
              onChange={(e)=>handleChange(e,index)}
              defaultValue={item?.description} />
            </div>

          </div>
       
        </div>
      ))}
    </div>
        <div className='flex justify-between'>
            <div className='flex gap-2'>
            <Button variant="outline" onClick={AddNewEducation} className="text-primary"> + Add More Education</Button>
            <Button variant="outline" onClick={RemoveEducation} className="text-primary"> - Remove</Button>

            </div>
            <Button disabled={loading} onClick={()=>onSave()}>
            {loading?<LoaderCircle className='animate-spin' />:'Save'}    
            </Button>
        </div>
    </div>
  )
}

export default Education