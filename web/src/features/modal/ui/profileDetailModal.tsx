import styled from "styled-components"
import Image from "next/image"
import ModalHeader from "./modalHeader"

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 376px;
    width: calc(100% - 350px);
    height: 100vh;
    background: #121212;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

const ModalContent = styled.div`
    background: #121212;
    border-radius: 10px;
    width: 818px;
    max-width: 100%;
    padding: 20px;
    color: white;
    font-family: Pretendard;
`

const ProfileSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProfileInfo = styled.div`
    margin-left: 20px;
`

const ProfileName = styled.h2`
    color: #616fed;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
`

const ProfileStats = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
`

const StatItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    span {
        color: #616fed;
        font-weight: 600;
    }
`

interface ProfileDetailModalProps {
    onClose: () => void
    profileData: {
        name: string
        profileImage: string
        fromCreatedDate: string
        stats: {
            writtenPosts: number
            receivedComments: number
            linkedOut: number
        }
    }
}

const ProfileDetailModal = ({ onClose, profileData }: ProfileDetailModalProps) => {
    return (
        <ModalOverlay>
            <ModalContent>
                <ModalHeader title="MY" onClose={onClose} />
                <ProfileSection>
                    <Image
                        src={profileData.profileImage}
                        alt="Profile Image"
                        width={100}
                        height={100}
                        style={{ borderRadius: "50%" }}
                    />
                    <ProfileInfo>
                        <ProfileName>
                            {profileData.name} <span style={{ color: "white" }}>아무개</span>
                        </ProfileName>
                        <div>{profileData.fromCreatedDate}</div>
                    </ProfileInfo>
                </ProfileSection>
                <ProfileStats>
                    <StatItem>
                        <span>{profileData.stats.writtenPosts}</span>
                        <div>쓴 글</div>
                    </StatItem>
                    <StatItem>
                        <span>{profileData.stats.receivedComments}</span>
                        <div>받은 댓글</div>
                    </StatItem>
                    <StatItem>
                        <span>{profileData.stats.linkedOut}</span>
                        <div>링크드아웃</div>
                    </StatItem>
                </ProfileStats>
            </ModalContent>
        </ModalOverlay>
    )
}

export default ProfileDetailModal
