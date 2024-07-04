// 신고받은 내역들 테이블
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'
// import { Button } from '@mui/material'
// import { Link } from 'react-router-dom'

export default function data(data) {
    const ID = ({ id }) => (
        <MDBox display="flex" alignItems="center" lineHeight={1}>
            <MDBox ml={2} lineHeight={1}>
                <MDTypography display="block" variant="caption" fontWeight="medium">
                    {id}
                </MDTypography>
            </MDBox>
        </MDBox>
    )

    const ReporterId = ({ reporterId }) => (
        <MDBox display="flex" alignItems="center" lineHeight={1}>
            <MDBox ml={2} lineHeight={1}>
                <MDTypography display="block" variant="caption" fontWeight="medium">
                    {reporterId}
                </MDTypography>
            </MDBox>
        </MDBox>
    )

    const Reason = ({ reason }) => (
        <MDBox lineHeight={1} textAlign="left">
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
                {reason}
            </MDTypography>
        </MDBox>
    )

    const Processed = ({ processed }) => (
        <MDBox lineHeight={1} textAlign="left">
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
                {processed}
            </MDTypography>
        </MDBox>
    )

    // const DetailButton = ({ essayId }) => (
    //     <Link to={`/report-detail?id=${essayId}`}>
    //         <Button variant="contained" color="primary" sx={{ color: 'white !important' }}>
    //             detail
    //         </Button>
    //     </Link>
    // )

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
    }

    return {
        columns: [
            { Header: 'ID', accessor: 'id', align: 'left' },
            { Header: 'Reason', accessor: 'reason', align: 'left' },
            { Header: 'Processed', accessor: 'processed', align: 'center' },
            { Header: 'Created Date', accessor: 'createdDate', align: 'center' },
            { Header: 'Reporter ID', accessor: 'reporterId', align: 'left' },
            // { Header: 'Action', accessor: 'action', align: 'center' },
        ],

        rows:
            data?.reports?.map((item) => ({
                reportId: <ReportId reportId={item.id} />,
                reason: <Reason reason={item.reason} />,
                processed: <Processed processed={item.processed} />,
                createdDate: formatDate(item.createdDate),
                reporterId: <ReporterId reporterId={item.reporterId} />,
                // action: <DetailButton essayId={item.essayId} />,
            })) || [],
    }
}
