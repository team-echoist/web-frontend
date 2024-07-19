"use client"
import { RenderView } from "@/pages-flat/index"
type PageParams = {
    pagename: string
}

function index({ params }: { params: PageParams }) {
    return (
        <>
            <RenderView pageName={params.pagename} />
        </>
    )
}

export default index

export { SideBar } from "./sidebar"
