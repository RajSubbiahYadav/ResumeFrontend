import { ResumeInfoContex } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import SummaryPreview from './preview/SummaryPreview'
import WorkExperiencePreview from './preview/WorkExperiencePreview'
import EducationPreview from './preview/EducationPreview'
import SkillPreview from './preview/SkillPreview'

function PreviewSection() {
    
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContex)

  return (
   <div className='shadow-lg h-full p-14 border-t-[10px]'
       style={{borderColor:resumeInfo?.themeColor}}>
    <PersonalDetailPreview resumeInfo={resumeInfo}/>
     {/* Summery */}
     <SummaryPreview resumeInfo={resumeInfo}/>
        {/* Professional Experience  */}
     <WorkExperiencePreview resumeInfo={resumeInfo} />
         {/* Education  */}
     <EducationPreview resumeInfo={resumeInfo}/>
         {/* Skills  */}
     <SkillPreview resumeInfo={resumeInfo} />
   </div>

  )
}

export default PreviewSection

// import { ResumeInfoContext } from '@/context/ResumeInfoContex'
// import React, { useContext } from 'react'
// import PersonalDetailPreview from './preview/PersonalDetailPreview'
// import SummaryPreview from './preview/SummaryPreview'
// import WorkExperiencePreview from './preview/WorkExperiencePreview'
// import EducationPreview from './preview/EducationPreview'
// import SkillPreview from './preview/SkillPreview'

// function ResumePreview() {

//     const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)

//   return (
//     <div className='shadow-lg h-full p-14 border-t-[10px]'
//     style={{borderColor:resumeInfo?.themeColor}}>
//         {/* Personal Detail */}
//     <PersonalDetailPreview resumeInfo={resumeInfo}/>
//         {/* Summery */}
//     <SummaryPreview resumeInfo={resumeInfo}/>
//         {/* Professional Experience  */}
//     <WorkExperiencePreview resumeInfo={resumeInfo} />
//         {/* Education  */}
//     <EducationPreview resumeInfo={resumeInfo}/>
//         {/* Skills  */}
//     <SkillPreview resumeInfo={resumeInfo} />
//     </div>
//   )
// }

// export default ResumePreview
