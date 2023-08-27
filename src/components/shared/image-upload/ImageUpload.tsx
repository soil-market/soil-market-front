import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CancelIcon from "@mui/icons-material/Cancel";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

type Image = {
  name: string;
  size: number;
  src: string;
};

export default function ImageUpload() {
  const [imageList, setImageList] = useState<Image[]>([]);

  const removeImage = (index: number) => {
    const list = [...imageList];
    list.splice(index, 1);
    setImageList(list);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (imageList.length === 3) {
      alert("이미지는 최대 3개까지 업로드가 가능해요...");
      return;
    }

    let fileList: Image[] = [];

    if (files) {
      if (files.length === 0) {
        alert("이미지가 선택되지 않았어요...");
      } else {
        for (const file of files) {
          const src = URL.createObjectURL(file);
          fileList.push({ name: file.name, size: file.size, src });
        }

        setImageList([...imageList, ...fileList]);
      }
    }
  };

  return (
    <div>
      <div className="flex gap-20">
        {imageList.map((image, index) => (
          <div className="relative" key={index}>
            <div
              className="absolute right-0 top-0"
              onClick={() => removeImage(index)}
            >
              <CancelIcon />
            </div>
            <Image src={image.src} width={60} height={60} alt="선택된 이미지" />
          </div>
        ))}
      </div>
      <div>
        <label htmlFor="image-upload">
          <AddPhotoAlternateIcon />
        </label>
        <input
          className="hidden"
          type="file"
          accept="image/*"
          name="image-upload"
          id="image-upload"
          multiple
          onChange={onChange}
        />
      </div>
    </div>
  );
}
