/* eslint-disable react-hooks/rules-of-hooks */
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import Footer from 'examples/Footer'
import BackgroudCard from 'components/BackgroundCard'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import MDTypography from 'components/MDTypography'
import MDBox from 'components/MDBox'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchData } from '../../../api'
import EditModal from '../components/EditModal'
import { showToast } from '../../../utils/toast'
import { Button } from '@mui/material'

export default function Index() {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get('id')
    const [data, setData] = useState({})
    const [editModalOpen, setEditModalOpen] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        getDetail()
    }, [id])

    const getDetail = async () => {
        try {
            const response = await fetchData(`/admin/reports/${id}`, 'get')
            setData(response.data)
        } catch (error) {
            console.error('user detail error', error)
        }
    }

    const editProfile = async () => {
        const body = Object.keys(data.editedProfile).reduce((acc, key) => {
            acc[key] = data.editedProfile[key]
            return acc
        }, {})
        try {
            const editProfile = await fetchData(`/admin/reports/${id}`, 'put', body)
            if (editProfile.status === 200) {
                showToast.success('리포트 정보가 업데이트되었습니다.')
                setData((prev) => ({
                    ...prev,
                    adminProfile: editProfile.data,
                }))
                setEditModalOpen(false)
            }
        } catch (err) {
            showToast.error('리포트 정보가 변경되지 않았습니다.')
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setData((prev) => ({
            ...prev,
            editedProfile: {
                ...prev.editedProfile,
                [name]: value,
            },
        }))
    }

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <EditModal
                open={editModalOpen}
                setOpen={setEditModalOpen}
                data={data.adminProfile}
                setData={setData}
                onChange={handleChange}
                editProfile={editProfile}
            />
            <MDBox pt={6} pb={3}>
                <Grid item xs={12}>
                    <Card>
                        <MDBox
                            mx={2}
                            mt={-3}
                            py={3}
                            px={2}
                            variant="gradient"
                            bgColor="info"
                            borderRadius="lg"
                            coloredShadow="info"
                        >
                            <MDTypography variant="h6" color="white">
                                Report Detail
                            </MDTypography>
                        </MDBox>
                    </Card>
                </Grid>
            </MDBox>
            <BackgroudCard
                btnTitle="list"
                link={`/reports`}
                optionalBtnTitle="edit"
                optionalBtnLink="#"
                setEditModalOpen={setEditModalOpen}
            >
                <MDBox p={3}>
                    <MDTypography variant="h3">Essay Details</MDTypography>
                    <hr
                        style={{
                            marginTop: '10px',
                            borderTop: '1px solid lightgray',
                            marginBottom: '20px',
                            width: '100%',
                        }}
                    />
                    {/* Essay Info */}
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={6}>
                                <MDTypography variant="h4">Essay Info</MDTypography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <MDTypography variant="body1">Title</MDTypography>
                                    </Grid>
                                    <Grid item xs={6} style={{ textAlign: 'right' }}>
                                        <MDTypography variant="body2">{data.title ? data.title : '---'}</MDTypography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <MDTypography variant="body1">Content</MDTypography>
                                    </Grid>
                                    <Grid item xs={6} style={{ textAlign: 'right' }}>
                                        <MDBox
                                            sx={{
                                                height: '150px',
                                                overflowY: 'auto',
                                                whiteSpace: 'pre-line', // For preserving line breaks
                                                border: '1px solid #ccc',
                                                borderRadius: '4px',
                                                padding: '8px',
                                            }}
                                        >
                                            <MDTypography variant="body2">
                                                {data.content ? data.content : '---'}
                                            </MDTypography>
                                        </MDBox>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <MDTypography variant="body1">LinkedOut Gauge</MDTypography>
                                    </Grid>
                                    <Grid item xs={6} style={{ textAlign: 'right' }}>
                                        <MDTypography variant="body2">
                                            {data.linkedOutGauge ? data.linkedOutGauge : '---'}
                                        </MDTypography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <MDTypography variant="body1">Created Date</MDTypography>
                                    </Grid>
                                    <Grid item xs={6} style={{ textAlign: 'right' }}>
                                        <MDTypography variant="body2">
                                            {data.createdDate ? data.createdDate : '---'}
                                        </MDTypography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <MDTypography variant="body1">Updated Date</MDTypography>
                                    </Grid>
                                    <Grid item xs={6} style={{ textAlign: 'right' }}>
                                        <MDTypography variant="body2">
                                            {data.updatedDate ? data.updatedDate : '---'}
                                        </MDTypography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <MDTypography variant="body1">Views</MDTypography>
                                    </Grid>
                                    <Grid item xs={6} style={{ textAlign: 'right' }}>
                                        <MDTypography variant="body2">{data.views ? data.views : 0}</MDTypography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <MDTypography variant="body1">Device</MDTypography>
                                    </Grid>
                                    <Grid item xs={6} style={{ textAlign: 'right' }}>
                                        <MDTypography variant="body2">{data.device ? data.device : '---'}</MDTypography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <MDTypography variant="body1">User Info</MDTypography>
                                    </Grid>
                                    <Grid item xs={6} style={{ textAlign: 'right' }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => navigate(`/user-detail?id=${data.author?.id}`)}
                                        >
                                            User Info
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <hr
                        style={{
                            margin: '0px auto',
                            marginTop: '30px',
                            borderTop: '1px dotted lightgray',
                            marginBottom: '30px',
                            width: '95%',
                        }}
                    />
                    {/* Additional Info */}
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={6}>
                                <MDTypography variant="body1">Thumbnail</MDTypography>
                            </Grid>
                            <Grid item xs={6} style={{ textAlign: 'right' }}>
                                <MDTypography variant="body2">{data.thumbnail ? data.thumbnail : '---'}</MDTypography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={6}>
                                <MDTypography variant="body1">Status</MDTypography>
                            </Grid>
                            <Grid item xs={6} style={{ textAlign: 'right' }}>
                                <MDTypography variant="body2">{data.status ? data.status : '---'}</MDTypography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <hr
                        style={{
                            marginTop: '10px',
                            borderTop: '1px solid lightgray',
                            marginBottom: '20px',
                            width: '100%',
                        }}
                    />
                </MDBox>
            </BackgroudCard>
            <Footer />
        </DashboardLayout>
    )
}
