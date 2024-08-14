import { AlarmModal } from "@/shared/ui/modal";
import NoneAlarm from "./contents/noneAlarm";

interface AlarmModalProps {
  isModalOpen: boolean;
  handleAlarmButtonClick: () => void;
}

function index({ isModalOpen, handleAlarmButtonClick }: AlarmModalProps) {
  return (
    <AlarmModal
      isOpen={isModalOpen}
      handleAlarmButtonClick={handleAlarmButtonClick}
    >
      <NoneAlarm />
    </AlarmModal>
  );
}

export default index;
