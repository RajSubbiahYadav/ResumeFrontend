import React from "react";

function WorkExperiencePreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-left font-bold text-md mb-0"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        EXPERIENCE
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />

      {resumeInfo?.experience?.map((experience, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            // style={{
            //   color: resumeInfo?.themeColor,
            // }}
          >
            {experience?.title}
          </h2>

          <h2 className="text-xs flex justify-between">
            {experience?.companyName},{experience?.city},{experience?.state}
            <span>
              {experience?.startDate} -{" "}
              {experience?.currentlyWorking ? "Present" : experience.endDate}{" "}
            </span>
          </h2>
          <div
            className="text-xs text-justify my-2"
            dangerouslySetInnerHTML={{ __html: experience?.workSummery }}
          />
        </div>
      ))}
    </div>
  );
}

export default WorkExperiencePreview;
