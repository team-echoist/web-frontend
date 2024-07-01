// Material Dashboard 2 React components
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'
import MDBadge from 'components/MDBadge'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

export default function index(data) {
    const Title = ({ title }) => (
        <MDBox display="flex" alignItems="center" lineHeight={1}>
            <MDBox ml={2} lineHeight={1}>
                <MDTypography display="block" variant="button" fontWeight="medium">
                    {title}
                </MDTypography>
            </MDBox>
        </MDBox>
    )

    const Content = ({ content }) => (
        <MDBox
            display="flex"
            alignItems="center"
            lineHeight={1}
            sx={{
                maxWidth: 400,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            }}
        >
            <MDBox ml={2} lineHeight={1}>
                <MDTypography display="block" variant="button" fontWeight="medium">
                    {content}
                </MDTypography>
            </MDBox>
        </MDBox>
    )

    const RenderStatus = ({ status }) => {
        let badgeContent
        let color

        switch (status) {
            case 'published':
                badgeContent = 'Published'
                color = 'success'
                break
            case 'linkedout':
                badgeContent = 'Linked Out'
                color = 'info'
                break
            case 'private':
                badgeContent = 'Private'
                color = 'warning'
                break
            default:
                badgeContent = 'Unknown'
                color = 'secondary'
        }

        return (
            <MDBox ml={-1}>
                <MDBadge badgeContent={badgeContent} color={color} variant="gradient" size="sm" />
            </MDBox>
        )
    }

    const DetailButton = ({ id }) => (
        <Link to={`/user-detail?id=${encodeURI(id)}`}>
            <Button variant="contained" color="primary" sx={{ color: 'white !important' }}>
                detail
            </Button>
        </Link>
    )

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
    }

    return {
        columns: [
            { Header: 'Title', accessor: 'title', align: 'left' },
            { Header: 'Content', accessor: 'content', align: 'left' },
            { Header: 'Status', accessor: 'status', align: 'center' },
            {
                Header: 'Created Date',
                accessor: 'createdDate',

                align: 'center',
            },
            { Header: 'Detail', accessor: 'action', align: 'center' },
        ],

        rows:
            data?.essays?.map((item) => ({
                title: <Title title={item.title} />,
                content: <Content content={item.content} />,
                status: <RenderStatus status={item.status} />,
                createdDate: formatDate(item.createdDate),
                action: <DetailButton id={item.id} />,
            })) || [],
    }
}
