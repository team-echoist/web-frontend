"use client"
import React, { useEffect, useState } from "react"

export const ShopContent = () => {
    const [profileData, setProfileData] = useState(null)

    useEffect(() => {
        // API 호출 예시
        fetch("/api/profile")
            .then((response) => response.json())
            .then((data) => setProfileData(data))
    }, [])

    if (!profileData) {
        return <div>ShopContent...</div>
    }

    return (
        <div>
            <h2>프로필 설정</h2>
            {/* <p>이름: {profileData.name}</p>
            <p>이메일: {profileData.email}</p> */}
            {/* 추가 프로필 데이터 표시 */}
        </div>
    )
}
