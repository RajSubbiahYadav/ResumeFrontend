import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { ResumeInfoContex } from "@/context/ResumeInfoContext";
import { useParams } from "react-router-dom";
import { UpdateResumeDetail } from "@/service/GlobalApi";
import { toast } from "sonner";

function Skills() {
  const [skillList, setSkillList] = useState([
    {
      name: "",
      rating: 0,
    },
  ]);

  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContex);

  const { resumeId } = useParams();

  useEffect(() => {
    resumeInfo && setSkillList(resumeInfo?.skills);
  }, []);

  const handleChange = (index, name, value) => {
    const newEntries = skillList.slice();
    newEntries[index][name] = value;
    setSkillList(newEntries);
  };

  const AddNewSkills = () => {
    setSkillList([
      ...skillList,
      {
        name: "",
        rating: 0,
      },
    ]);
  };
  const RemoveSkills = () => {
    setSkillList((skillList) => skillList.slice(0, -1));
  };

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        skills: skillList.map(({ id, ...rest }) => rest),
      },
    };

    UpdateResumeDetail(resumeId, data).then(
      (resp) => {
        console.log(resp);
        setLoading(false);
        toast("Details Updated !");
      },
      (error) => {
        setLoading(false);
        toast("OHH OHHH Server Error,Try Again!!");
      }
    );
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      skills: skillList,
    });
  }, [skillList]);

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Skills</h2>
      <p>Add Your top professional key Skills</p>

      <div>
        {skillList.map((item, index) => (
          <div className="flex justify-between mb-5 border rounded-lg p-3 ">
            <div>
              <label className="text-xs">Name</label>
              <Input
                className="w-full"
                defaultValue={item.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
              />
            </div>
            <Rating
              style={{ maxWidth: 120 }}
              value={item.rating}
              onChange={(v) => handleChange(index, "rating", v)}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={AddNewSkills}
            className="text-primary"
          >
            {" "}
            + Add More Skills
          </Button>
          <Button
            variant="outline"
            onClick={RemoveSkills}
            className="text-primary"
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
  );
}

export default Skills;
