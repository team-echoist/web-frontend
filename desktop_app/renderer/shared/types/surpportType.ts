export interface Inquiry {
  id: number;
  title: string;
  createdDate: string;
  processed: boolean;
  answer?: string | null;
}

export type InquiryList = Inquiry[];
