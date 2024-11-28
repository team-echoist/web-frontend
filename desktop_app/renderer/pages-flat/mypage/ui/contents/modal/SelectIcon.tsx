import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DefaultProfile from "@/shared/assets/img/profile/profile_icon_01.webp";
import Image from "next/image";
import SelectImageIcon from "@/shared/assets/img/profile/profile_icon_02.webp";
import { useStore } from "@/shared/store";
import { postImages, putUserInfo } from "@/shared/api/user";
import ExampleProfile1 from "@/shared/assets/img/profile/profile_icon_03.webp";
import ExampleProfile2 from "@/shared/assets/img/profile/profile_icon_04.webp";
import ExampleProfile3 from "@/shared/assets/img/profile/profile_icon_05.webp";
import ExampleProfile4 from "@/shared/assets/img/profile/profile_icon_06.webp";
import ExampleProfile5 from "@/shared/assets/img/profile/profile_icon_07.webp";
import ExampleProfile6 from "@/shared/assets/img/profile/profile_icon_08.webp";
import ExampleProfile7 from "@/shared/assets/img/profile/profile_icon_09.webp";
import ExampleProfile8 from "@/shared/assets/img/profile/profile_icon_10.webp";
import ExampleProfile9 from "@/shared/assets/img/profile/profile_icon_11.webp";
import ExampleProfile10 from "@/shared/assets/img/profile/12.webp";

const Layout = styled.div`
  width: 100%;
`;
const ProfileImageDiv = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  gap: 39px;
`;
const ProfileImageItemDiv = styled.div``;

const SelectImageButton = styled.button`
  all: unset;
  cursor: pointer;
`;
const HiddenInput = styled.input`
  display: none;
`;

const ExampleProfileDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 56px;
  justify-items: center;
  margin: 0 auto;
  padding: 86px;
  img {
    cursor: pointer;
  }
`;
const exampleProfiles = [
  ExampleProfile1,
  ExampleProfile2,
  ExampleProfile3,
  ExampleProfile4,
  ExampleProfile5,
  ExampleProfile6,
  ExampleProfile7,
  ExampleProfile8,
  ExampleProfile9,
  ExampleProfile10,
];
function SelectIcon() {
  const user = useStore((state) => state.user);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState(
    user?.profileImage || DefaultProfile.src
  );
  const setUser = useStore((state) => state.setUser);

  const handleSelectImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append("image", file);
      try {
        const { status, data } = await postImages(formData);
        if (status === 200) {
          const body = {
            profileImage: data.profileImage,
          };
          const response = await putUserInfo(body);
          setUser(response.data);
        }
      } catch (error) {
        console.error("Image upload failed:", error);
      }
    }
  };
  const handleExampleImageClick = async (imageSrc: string, index: number) => {
    try {
      // 이미지 fetch 후 Blob으로 변환
      const response = await fetch(imageSrc);
      const blob = await response.blob();

      // Blob을 File로 변환
      const file = new File([blob], `profile${index + 1}.webp`, {
        type: blob.type,
      });

      // FormData 생성 및 이미지 추가
      const formData = new FormData();
      formData.append("image", file);

      const { status, data } = await postImages(formData);
      if (status === 200 || status === 201) {
        const body = {
          profileImage: data.imageUrl,
        };
        const response = await putUserInfo(body);
        setUser(response.data);
        setProfileImage(response.data.profileImage)
      }
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };
  return (
    <Layout>
      <ProfileImageDiv>
        <ProfileImageItemDiv>
          <Image
            src={profileImage}
            width={120}
            height={120}
            alt="profile_image"
          />
        </ProfileImageItemDiv>
        <SelectImageButton onClick={handleSelectImageClick}>
          <Image
            src={SelectImageIcon.src}
            width={120}
            height={120}
            alt="select_image_icon"
          />
        </SelectImageButton>
        <HiddenInput
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </ProfileImageDiv>
      <ExampleProfileDiv>
        {exampleProfiles.map((profile, index) => (
          <Image
            key={index}
            src={profile}
            alt={`Example profile ${index + 1}`}
            width={120}
            height={120}
            onClick={() => handleExampleImageClick(profile.src, index)}
          />
        ))}
      </ExampleProfileDiv>
    </Layout>
  );
}

export default SelectIcon;
