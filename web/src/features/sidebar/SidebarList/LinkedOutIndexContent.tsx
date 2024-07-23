"use client"
import styled from "styled-components"
import { Line } from "react-chartjs-2"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

const Container = styled.div`
    margin: 24px 30px;
`

const LinkedOutGaugeSection = styled.section`
    display: flex;
`
const LinkedOutGaugeH2 = styled.h2`
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
`

const LinkedOutGaugeP = styled.p`
    color: #686868;
    text-align: right;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    margin-left: auto;
    line-height: 150%;
`

const profileData = {
    labels: ["1월", "2월", "3월", "4월", "5월"], // 임시 데이터
    data: [65, 59, 80, 81, 56], // 임시 데이터
}

export const LinkedOutIndexContent = () => {
    if (!profileData) {
        return <div>LinkedOutIndex...</div>
    }

    const chartData = {
        labels: profileData.labels,
        datasets: [
            {
                label: "주간 링크드아웃 지수",
                data: profileData.data,
                fill: false,
                backgroundColor: "#fff",
                borderColor: "#616FED",
            },
        ],
    }

    return (
        <Container>
            <LinkedOutGaugeSection>
                <LinkedOutGaugeH2>주간 링크드아웃 지수</LinkedOutGaugeH2>
                <LinkedOutGaugeP>2024년 7월 23일 기준</LinkedOutGaugeP>
            </LinkedOutGaugeSection>
            <Line data={chartData} />
        </Container>
    )
}
