export interface Processor {
    id: number;
    email: string;
    name: string;
    profileImage: string;
    activated: boolean;
    info: string;
    createDate: string; 
  }
  
  export interface Release {
    id: number;
    content: string;
    createdDate: string; 
    updatedDate: string; 
    processor: Processor;
  }
  
  export interface ReleasesResponse {
    releases: Release[];
    total: number;
    page: number;
    totalPage: number;
  }

  