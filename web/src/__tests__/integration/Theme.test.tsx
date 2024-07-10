import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe } from "node:test";
import RootLayout from "@/app/layout";
import { lightTheme, darkTheme } from "@/shared/styles/index";

describe("다크모드 테마적용 테스트", () => {
  it("다크모드 버튼 클릭", () => {
    const { container } = render(
      <RootLayout>
        <button>다크모드 버튼</button>
      </RootLayout>
    );
    const button = screen.getByText("다크모드 버튼");

    // 초기 테마가 다크 테마인지 확인
    expect(container.firstChild).toMatchSnapshot("Dark Mode Initial");
    expect(document.body).toHaveStyle({
      backgroundColor: darkTheme.background,
      color: darkTheme.color,
    });

    // 버튼 클릭하여 라이트 모드로 전환
    fireEvent.click(button);
    expect(container.firstChild).toMatchSnapshot("Light Mode After Click");
    expect(document.body).toHaveStyle({
      backgroundColor: lightTheme.background,
      color: lightTheme.color,
    });

    // 버튼을 다시 클릭하여 다크 모드로 전환
    fireEvent.click(button);
    expect(container.firstChild).toMatchSnapshot(
      "Dark Mode After Second Click"
    );
    expect(document.body).toHaveStyle({
      backgroundColor: darkTheme.background,
      color: darkTheme.color,
    });
  });
});
