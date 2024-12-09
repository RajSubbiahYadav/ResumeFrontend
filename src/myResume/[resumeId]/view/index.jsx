import Header from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import { ResumeInfoContex } from "@/context/ResumeInfoContext";
import PreviewSection from "@/Dashboard/resume/components/PreviewSection";
import { GetResumeById } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RWebShare } from "react-web-share";

function ViewResume() {
  const [resumeInfo, setResumeInfo] = useState();
  const { resumeId } = useParams();

  useEffect(() => {
    GetResumeInfo();
  }, []);

  const GetResumeInfo = () => {
    GetResumeById(resumeId).then((resp) => {
      console.log(resp.data.data);
      setResumeInfo(resp.data.data);
    });
  };

  const HandleDownload = () => {
    window.print();
  };
  return (
    <ResumeInfoContex.Provider value={{ resumeInfo, setResumeInfo }}>
      <div id="no-print">
        <Header />

        <div className="my-10 mx-10 md:mx-2 lg:mx-36">
          <h2 className="text-center text-2xl font-medium">
            Congratulations🎉 Your resume is now ready
          </h2>
          <p className="text-center text-gray-400">
            Best of luck in your professional journey
          </p>
          <div className="flex flex-col md:flex-row justify-between mx-10 my-10">
            <Button onClick={HandleDownload} className="mb-4 md:mb-0">
              Download
            </Button>

            <RWebShare
              data={{
                text: "Hello Everyone, This is my Resume please open the URL",
                url: (import.meta.env.VITE_BASE_URL =
                  "/my-resume/" + resumeId + "/view"),
                title:
                  resumeInfo?.firstName +
                  " " +
                  resumeInfo?.lastName +
                  " resume",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Button>Share</Button>
            </RWebShare>
          </div>
        </div>
      </div>
      <div id="print-area" className="my-10 mx-10 md:mx-2 lg:mx-36">
        <PreviewSection />
      </div>
    </ResumeInfoContex.Provider>
  );
}

export default ViewResume;
