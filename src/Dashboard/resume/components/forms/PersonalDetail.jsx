import { Input } from "@/components/ui/input";
import React, { useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { UpdateResumeDetail } from "@/service/GlobalApi";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { ResumeInfoContex } from "@/context/ResumeInfoContext";
import { toast } from "sonner";

function PersonalDetail({ enableNext }) {
  const params = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContex);

  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(params);
  }, []);

  const handelInputChange = (e) => {
    enableNext(false);
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  };
  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      data: formData,
    };
    UpdateResumeDetail(params?.resumeId, data).then(
      (resp) => {
        console.log(resp);
        enableNext(true);
        setLoading(false);
        toast("Details updated");
      },
      (error) => {
        setLoading(false);
      }
    );
  };
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Personal Details </h2>
      <p>Get Started with the basis information</p>

      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-2">
          <div>
            <label className="text-sm">
              First Name <span className="text-red-600">*</span>{" "}
            </label>
            <Input
              name="firstName"
              defaultValue={resumeInfo?.firstName}
              required
              onChange={handelInputChange}
            />
          </div>
          <div>
            <label className="text-sm" htmlFor="">
              Last Name <span className="text-red-600">*</span>
            </label>
            <Input
              name="lastName"
              defaultValue={resumeInfo?.lastName}
              required
              onChange={handelInputChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm" htmlFor="">
              Job Title <span className="text-red-600">*</span>
            </label>
            <Input
              name="jobTitle"
              defaultValue={resumeInfo?.jobTitle}
              required
              onChange={handelInputChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm" htmlFor="">
              Address <span className="text-red-600">*</span>
            </label>
            <Input
              name="address"
              defaultValue={resumeInfo?.address}
              required
              onChange={handelInputChange}
            />
          </div>
          <div>
            <label className="text-sm" htmlFor="">
              Contact <span className="text-red-600">*</span>{" "}
            </label>
            <Input
              name="contact"
              defaultValue={resumeInfo?.contact}
              required
              onChange={handelInputChange}
            />
          </div>
          <div>
            <label className="text-sm" htmlFor="">
              Email <span className="text-red-600">*</span>
            </label>
            <Input
              name="email"
              defaultValue={resumeInfo?.email}
              required
              onChange={handelInputChange}
            />
          </div>

          <div>
            <label className="text-sm" htmlFor="">
              LinkedIn
            </label>
            <Input
              name="linkedin"
              defaultValue={resumeInfo?.linkedin}
              onChange={handelInputChange}
            />
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button type="submit" disabled={loading}>
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetail;
