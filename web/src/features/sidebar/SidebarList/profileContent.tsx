"use client"
import styled from "styled-components"
import ProfileImage from "@/shared/assets/img/profile_icon_01.png"
import Image from "next/image"
import ToProfileDetailButton from "@/shared/assets/img/to_profile_detail_button.png"

const ProfileSection = styled.div`
    display: flex;
    align-items: center;
    margin: 70px 30px 18px 30px;
`

const ProfileDiv = styled.div`
    margin-left: 15px;
    display: flex;
    flex-direction: column;
`

const ProfileFlexRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const ProfileName = styled.h2`
    color: #616fed;
    font-size: 18px;
    font-weight: 600;
    line-height: 150%;
    margin-bottom: 3px;
`

const ProfileFromCreatedDate = styled.h3`
    color: #686868;
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    margin-top: 3px;
`

const ProfileDetailButton = styled(Image)`
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-left: 10px;
`

const profileData = {
    name: "일공사팔이팔",
    profileImage: ProfileImage,
    fromCreatedDate: "43일째 링크드아웃",
}

export const ProfileContent = () => {
    return (
        <ProfileSection>
            <Image
                src={profileData.profileImage}
                alt="프로필 이미지"
                width={100}
                height={100}
                style={{ borderRadius: "50%", marginRight: "15px" }}
            />
            <ProfileFlexRow>
                <ProfileDiv>
                    <ProfileName>{profileData.name}</ProfileName>
                    <ProfileFromCreatedDate>{profileData.fromCreatedDate}</ProfileFromCreatedDate>
                </ProfileDiv>
                <ProfileDetailButton src={ToProfileDetailButton} alt="프로필 상세보기 버튼" />
            </ProfileFlexRow>
        </ProfileSection>
    )
}
