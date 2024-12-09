import React, { useContext, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { LayoutGrid } from "lucide-react";
import { ResumeInfoContex } from "@/context/ResumeInfoContext";
import { UpdateResumeDetail } from "@/service/GlobalApi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

function ThemeColor() {
  const colors = [
    "#000000",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FF00FF",
    "#800000",
    "#808000",
    "#008000",
    "#800080",
    "#008080",
    "#808080",
    "#FFA500",
    "#A52A2A",
    "#8A2BE2",
    "#5F9EA0",
    "#D2691E",
    "#FF4500",
    "#2E8B57",
    "#6A5ACD",
    "#DC143C",
  ];

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContex);
  const [selectedColor, setSelectedColor] = useState();
  const { resumeId } = useParams();
  const onColorSelect = (color) => {
    setSelectedColor(color);
    setResumeInfo({
      ...resumeInfo,
      themeColor: color,
    });
    const data = {
      data: {
        themeColor: color,
      },
    };
    UpdateResumeDetail(resumeId, data).then((resp) => {
      console.log(resp);
      toast("Theme Color Updated");
    });
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="flex gap-2">
          {" "}
          <LayoutGrid /> Theme
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <h2 className="mb-4 text-sm font-bold">Select Theme Color</h2>
        <div className="grid grid-cols-5 gap-3">
          {colors.map((item, index) => (
            <div
              onClick={() => onColorSelect(item)}
              className={`h-5 w-5 rounded-full cursor-pointer
                hover:border-black border
                ${selectedColor == item && "border border-black"}
                `}
              style={{ background: item }}
            ></div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ThemeColor;
