import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";
import RichTextEditor from "../RichTextEditor";
import { ResumeInfoContex } from "@/context/ResumeInfoContext";
import { UpdateResumeDetail } from "@/service/GlobalApi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";

const formField = {
  title: "",
  description: "",
};

function Project() {
  const [projectList, setProjectList] = useState([formField]);

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContex);

  const params = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    resumeInfo?.project.length > 0 && setProjectList(resumeInfo?.project);
  }, []);

  const handleChange = (index, event) => {
    const newEntries = projectList.slice();
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setProjectList(newEntries);
  };

  const AddNewProject = () => {
    setProjectList([
      ...projectList,
      {
        title: "",
        description: "",
      },
    ]);
  };

  const RemoveProject = () => {
    setProjectList((projectList) => projectList.slice(0, -1));
  };

  const handleRichTextEditor = (e, name, index) => {
    const newEntries = projectList.slice();
    newEntries[index][name] = e.target.value;
    setProjectList(newEntries);
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      project: projectList,
    });
  }, [projectList]);

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        project: projectList.map(({ id, ...rest }) => rest),
      },
    };
    console.log(projectList);

    UpdateResumeDetail(params?.resumeId, data).then(
      (resp) => {
        console.log(resp);
        setLoading(false);
        toast("Details updated !");
      },
      (error) => {
        setLoading(false);
        toast("Server Error, Please try again");
      }
    );
  };
  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Professional Experience</h2>
        <p>Add Your previous Job Experience</p>
        <div>
          {projectList.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                <div>
                  <label>Project Title</label>
                  <Input
                    name="title"
                    onChange={(event) => handleChange(index, event)}
                    defaultValue={item?.title}
                  />
                </div>
                <div className="col-span-2">
                  {/* Work Summary */}
                  <label>Description</label>
                  <RichTextEditor
                    index={index}
                    defaultValue={item?.description}
                    onRichTextEditorChange={(event) =>
                      handleRichTextEditor(event, "description", index)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="text-primary"
              onClick={AddNewProject}
            >
              {" "}
              + Add More Project
            </Button>
            <Button
              variant="outline"
              className="text-primary"
              onClick={RemoveProject}
            >
              {" "}
              - Remove
            </Button>
          </div>
          <Button disabled={loading} onClick={() => onSave()}>
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Project;
