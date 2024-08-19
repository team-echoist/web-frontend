import { AlarmModal } from "@/shared/ui/modal";
import NoneAlarm from "./contents/noneAlarm";
import AlarmList from "./contents/alarmList";
import { useEffect, useState } from "react";
import { getAlramList } from "../api";
import { Alert } from "@/shared/types";

interface AlarmModalProps {
  isModalOpen: boolean;
  handleAlarmButtonClick: () => void;
}

interface RenderAlarmProps {
  list: Alert[];
  length: number;
  fetchData: () => void;
}

const RenderAlarm = ({ list, length, fetchData }: RenderAlarmProps) => {
  return length === 0 ? <NoneAlarm /> : <AlarmList list={list} fetchData={fetchData}/>;
};

function Index({ isModalOpen, handleAlarmButtonClick }: AlarmModalProps) {
  const [alarmList, setAlarmList] = useState<Alert[]>([]);
  const fetchData = async () => {
    const data = await getAlramList({ page: 1, limit: 10 });
    setAlarmList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AlarmModal
      isOpen={isModalOpen}
      handleAlarmButtonClick={handleAlarmButtonClick}
    >
      <RenderAlarm
        list={alarmList}
        length={alarmList.length}
        fetchData={fetchData}
      />
    </AlarmModal>
  );
}

export default Index;
