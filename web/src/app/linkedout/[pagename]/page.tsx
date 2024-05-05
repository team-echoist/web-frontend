import { RenderView } from "@/pages-flat";
type PageParams = {
  pagename: string;
};

function index({ params }: { params: PageParams }) {
  return (
    <>
      <RenderView pageName={params.pagename} />
    </>
  );
}

export default index;
