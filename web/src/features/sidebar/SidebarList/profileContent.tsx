"use client"
import styled from "styled-components"
import ProfileImage from "@/shared/assets/img/profile_icon_01.png"
import Image from "next/image"
import ToProfileDetailButton from "@/shared/assets/img/to_detail_button.png"

const ProfileSection = styled.div`
    display: flex;
    align-items: center;
    margin: 70px 30px 18px 30px;
`

const ProfileFlexRow = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 15px;
`

const ProfileDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

const ProfileNameRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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

const ProfileDetailButtonContainer = styled.div`
    display: flex;
    align-items: center;
`

const ProfileDetailButton = styled(Image)`
    width: 24px;
    height: 24px;
    cursor: pointer;
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
                    <ProfileNameRow>
                        <ProfileName>{profileData.name}</ProfileName>
                        <ProfileDetailButtonContainer>
                            <ProfileDetailButton src={ToProfileDetailButton} alt="프로필 상세보기 버튼" />
                        </ProfileDetailButtonContainer>
                    </ProfileNameRow>
                    <ProfileFromCreatedDate>{profileData.fromCreatedDate}</ProfileFromCreatedDate>
                </ProfileDiv>
            </ProfileFlexRow>
        </ProfileSection>
    )
}
