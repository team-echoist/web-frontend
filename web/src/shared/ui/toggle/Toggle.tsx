"use client"
import styled from "styled-components"

const ToggleSwitchLabel = styled.label`
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

interface ToggleSwitchProps {
    checked: boolean
    onChange: () => void
}

const Toggle = ({ checked, onChange }: ToggleSwitchProps) => {
    return (
        <ToggleSwitchLabel>
            <input type="checkbox" checked={checked} onChange={onChange} />
            <span className="slider" />
        </ToggleSwitchLabel>
    )
}

export default Toggle
