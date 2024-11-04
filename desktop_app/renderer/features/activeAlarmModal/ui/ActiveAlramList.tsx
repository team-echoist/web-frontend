import { AlarmModal } from "@/shared/ui/modal";
import NoneAlarm from "./contents/noneAlarm";
import AlarmList from "./contents/alarmList";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { getAlramList } from "../api";
import { Alert } from "@/shared/types";
import InfiniteScroll from "react-infinite-scroll-component";
import { Virtuoso } from "react-virtuoso";

interface AlarmModalProps {
  isModalOpen: boolean;
  handleAlarmButtonClick: () => void;
}

interface RenderAlarmProps {
  list: Alert[];
  length: number;
  setAlarmList: Dispatch<SetStateAction<any[]>>;
}

const RenderAlarm = ({ list, length, setAlarmList }: RenderAlarmProps) => {
  return length === 0 ? (
    <NoneAlarm />
  ) : (
    <AlarmList list={list} setAlarmList={setAlarmList} />
  );
};

function ActiveAlramList({
  isModalOpen,
  handleAlarmButtonClick,
}: AlarmModalProps) {
  const [alarmList, setAlarmList] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalAlertPage, setTotalAlertPage] = useState<number | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = async () => {
    if (isFetching || (totalAlertPage && page > totalAlertPage)) return;
    setIsFetching(true);
    try {
      const { alerts, totalPage } = await getAlramList({
        page: page,
        limit: 20,
      });
      setAlarmList((prev) => [...prev, ...alerts]);
      setTotalAlertPage(totalPage);
    } catch (error) {
      console.error("Failed to fetch data", error);
    } 
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  const loadMoreItems = () => {
    if (totalAlertPage === null || page <= totalAlertPage) {
      setPage((prev) => prev + 1);
      setIsFetching
    }
  };

  return (
    <AlarmModal
      isOpen={isModalOpen}
      handleAlarmButtonClick={handleAlarmButtonClick}
    >
      {alarmList.length > 0 ? (
        <Virtuoso
        style={{ height: "705px", width: "100%" }}
        data={alarmList}
        endReached={loadMoreItems}
        itemContent={(index, item) => (
          <AlarmList
            key={index}
            list={alarmList} setAlarmList={setAlarmList}
          />
        )}
      />
        // <AlarmList list={alarmList} setAlarmList={setAlarmList} />
      ) : (
        <NoneAlarm />
      )}
      {/* <Virtuoso
        data={alarmList}
        itemContent={(index, alert) => <RenderAlarm list={[alert]} />}
        endReached={loadMoreItems}
        style={{ height: "400px" }}
      /> */}
      {/* <InfiniteScroll
        dataLength={alarmList.length}
        next={() => {
          if (totalAlertPage === null || page <= totalAlertPage) {
            setPage((prev) => prev + 1);
          }
        }}
        scrollableTarget="scrollableDiv"
        hasMore={totalAlertPage === null || page <= totalAlertPage}
        loader={null}
      >
        <RenderAlarm
          list={alarmList}
          length={alarmList.length}
          setAlarmList={setAlarmList}
        />
      </InfiniteScroll> */}
    </AlarmModal>
  );
}

export default ActiveAlramList;
