import React from "react";

function EducationPreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-left font-bold text-md mb-0"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        EDUCATION
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />

      {resumeInfo?.education?.map((education, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            // style={{
            //   color: resumeInfo?.themeColor,
            // }}
          >
            {education.universityName}
          </h2>
          <h2 className="text-xs flex justify-between">
            {education?.degree}, {education?.major}
            <span>
              {education?.startDate} - {education?.endDate}
            </span>
          </h2>
          <p className="text-xs text-justify my-2">{education?.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EducationPreview;
