import React from "react";

function ProjectPreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-left font-bold text-md mb-0"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        PROJECT
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />

      {resumeInfo?.project?.map((project, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            // style={{
            //   color: resumeInfo?.themeColor,
            // }}
          >
            {project.title}
          </h2>
          <div
            className="text-xs my-2"
            dangerouslySetInnerHTML={{ __html: project?.description }}
          />
        </div>
      ))}
    </div>
  );
}

export default ProjectPreview;
