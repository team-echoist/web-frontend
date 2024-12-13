import { fetchData } from "@/shared/api/fetchData";
import { ReleasesResponse } from "../types";

export const getReleases = async (page: number, limit: number) => {
  try {
    const params = {
      page: page,
      limit: limit,
    };
    const { data, status } = await fetchData<ReleasesResponse>(
      `support/releases`,
      "get",
      null,
      { params }
    );
    return { data: data?.releases, status: status };
  } catch (err) {
    return { status: 500, data: [] };
  }
};

export const getInquires = async () => {
  try {
    const { data, status } = await fetchData<any>(`support/inquiries`, "get");
    return{ data: data, status: status}
  } catch (err) {
    return { status: 500, data: [] };
  }
};
export const postInquire = async (
  title: string,
  content: string,
  type: string
) => {
  try {
    const body = {
      title: title,
      content: content,
      type: type,
    };
    const { status } = await fetchData<any>(`support/inquiries`, "post", body);
    return { status: status };
  } catch (err) {
    return { status: 500, data: [] };
  }
};

export const getInquireDetails = async(id:number) =>{
  try{
    const {data,status} =await fetchData<any>(`support/inquiries/${id}`, "get");
    return{ data: data, status: status}
  }catch(err){
    return { status: 500, data: [] };
  }
}