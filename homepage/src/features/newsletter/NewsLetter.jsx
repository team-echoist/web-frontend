import Header from "../../shared/Header";

const Newsletter = () => {
  return (
    <main className="min-h-screen bg-black">
        <Header />
        <div className="flex items-center justify-center text-white">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-lg">
            <h1 className="text-3xl font-bold text-center">NewsLetter</h1>
            <form className="space-y-4">
            <input
                type="email"
                placeholder="이메일을 입력해 주세요."
                className="w-full p-3 text-black rounded-md focus:outline-none"
            />
            <button
                type="submit"
                className="w-full py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
                구독하기
            </button>
            <div className="flex flex-col mt-4 space-y-2 text-sm">
                <label className="flex items-center space-x-2">
                <input type="checkbox" className="text-black" />
                <span>개인정보 수집 이용에 동의합니다(필수)</span>
                </label>
                <label className="flex items-center space-x-2">
                <input type="checkbox" className="text-black" />
                <span>광고성 정보 수신 동의(선택)</span>
                </label>
            </div>
            </form>
        </div>
        </div>
    </main>
  );
};

export default Newsletter;
