// NotificationSettingContent.tsx
import React, { useState } from "react"
import { ModalHeader } from "../shared/ModalHeader"
import styled from "styled-components"
import TimeSelectorModal from "./TimeSelectorModal"

const NotificationSettingSection = styled.section`
    margin-left: 20px;
`

const NotificationSettingH2 = styled.h2`
    font-size: 18px;
    font-weight: 600;
    line-height: 150%;
    margin-bottom: 20px;
`

const NotificationSettingUl = styled.ul`
    list-style: none;
    margin: 20px 0;

    & li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
`

const ToggleSwitch = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;

    input {
        display: none;
    }

    .slider {
        width: 50px;
        height: 26px;
        background-color: #222222;
        border-radius: 34px;
        position: relative;
        transition: background-color 0.2s;
    }

    .slider:before {
        content: "";
        position: absolute;
        width: 22px;
        height: 22px;
        left: 2px;
        margin: 2px 0;
        background-color: #d9d9d9;
        border-radius: 50%;
        transition: transform 0.2s;
    }

    input:checked + .slider {
        background-color: #616fed;
    }

    input:checked + .slider:before {
        transform: translateX(24px);
    }
`

const TimeButton = styled.button`
    width: 90px;
    height: 34px;
    border-radius: 4px;
    background-color: #616fed;
    color: white;
    border: none;
    cursor: pointer;
    font-family: Pretendard;
    font-size: 16px;
`
const ToggleSwitchTimeButton = styled.div``

interface NotificationSettingContentProps {
    onClose: () => void
}

export const NotificationSettingContent = ({ onClose }: NotificationSettingContentProps) => {
    const [postViewAlerts, setPostViewAlerts] = useState([false, false, false])
    const [writingAlertTime, setWritingAlertTime] = useState("11:00") // 24시간 형식으로 수정
    const [otherAlerts, setOtherAlerts] = useState([false, false, false])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const togglePostViewAlert = (index: number) => {
        const newAlerts = [...postViewAlerts]
        newAlerts[index] = !newAlerts[index]
        setPostViewAlerts(newAlerts)
    }

    const toggleOtherAlert = (index: number) => {
        const newAlerts = [...otherAlerts]
        newAlerts[index] = !newAlerts[index]
        setOtherAlerts(newAlerts)
    }

    const handleTimeButtonClick = () => {
        setIsModalOpen(true)
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    return (
        <NotificationSettingSection>
            <ModalHeader title="알림 설정" onClose={onClose} />
            <div>
                <NotificationSettingH2>글 조회 알림</NotificationSettingH2>
                <NotificationSettingUl>
                    {["발행한 글", "링크드아웃한 글", "신고 완료"].map((text, index) => (
                        <li key={index}>
                            <span>{text} 조회 알림</span>
                            <ToggleSwitch>
                                <input
                                    type="checkbox"
                                    checked={postViewAlerts[index]}
                                    onChange={() => togglePostViewAlert(index)}
                                />
                                <span className="slider" />
                            </ToggleSwitch>
                        </li>
                    ))}
                </NotificationSettingUl>
            </div>
            <div>
                <NotificationSettingH2>글쓰기 알림</NotificationSettingH2>
                <NotificationSettingUl>
                    <li>
                        <span>글쓰기 시간 알림 설정</span>
                        <ToggleSwitchTimeButton>
                            <ToggleSwitch>
                                <input type="checkbox" checked={otherAlerts[0]} onChange={() => toggleOtherAlert(0)} />
                                <span className="slider" />
                            </ToggleSwitch>
                            <TimeButton onClick={handleTimeButtonClick}>{writingAlertTime}</TimeButton>
                        </ToggleSwitchTimeButton>
                    </li>
                </NotificationSettingUl>
            </div>
            <div>
                <NotificationSettingH2>그 외 알림</NotificationSettingH2>
                <NotificationSettingUl>
                    {["임시 저장 글 유효 기간 알림", "이벤트 혜택 정보 알림", "알림 허용 시간 설정"].map(
                        (text, index) => (
                            <li key={index}>
                                <span>{text}</span>
                                <ToggleSwitch>
                                    <input
                                        type="checkbox"
                                        checked={otherAlerts[index]}
                                        onChange={() => toggleOtherAlert(index)}
                                    />
                                    <span className="slider" />
                                </ToggleSwitch>
                            </li>
                        ),
                    )}
                </NotificationSettingUl>
            </div>
            <TimeSelectorModal isOpen={isModalOpen} onClose={handleModalClose} initialTime={writingAlertTime} />
        </NotificationSettingSection>
    )
}
