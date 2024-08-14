import { AlarmModal } from "@/shared/ui/modal";
import NoneAlarm from "./contents/noneAlarm";
import AlarmList from "./contents/alarmList";

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
      {/* <NoneAlarm /> */}
      <AlarmList />
    </AlarmModal>
  );
}

export default index;
