import { AlarmModal } from "@/shared/ui/modal";
import NoneAlarm from "./contents/noneAlarm";
import AlarmList from "./contents/alarmList";
import { useEffect, useState } from "react";
import { getAlramList } from "../api";
import { Alert } from "@/shared/types";
import { useStore } from "@/shared/store";

interface AlarmModalProps {
  isModalOpen: boolean;
  handleAlarmButtonClick: () => void;
}

interface RenderAlarmProps {
  list: Alert[];
  length: number;
}

const RenderAlarm = ({ list, length }: RenderAlarmProps) => {
  return length === 0 ? <NoneAlarm /> : <AlarmList list={list}/>;
};

function Index({ isModalOpen, handleAlarmButtonClick }: AlarmModalProps) {
  const [alarmList, setAlarmList] = useState<Alert[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAlramList({ page: 1, limit: 10 });
      setAlarmList(data);
    };

    fetchData();
  }, []);

  return (
    <AlarmModal
      isOpen={isModalOpen}
      handleAlarmButtonClick={handleAlarmButtonClick}
    >
      <RenderAlarm list={alarmList} length={alarmList.length}/>
    </AlarmModal>
  );
}

export default Index;