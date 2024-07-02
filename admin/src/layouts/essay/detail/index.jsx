/* eslint-disable react-hooks/rules-of-hooks */
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import Footer from 'examples/Footer'
import BackgroudCard from 'components/BackgroundCard'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import MDTypography from 'components/MDTypography'
import MDBox from 'components/MDBox'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchData } from '../../../api'
import EditModal from '../components/EditModal'
import { showToast } from '../../../utils/toast'
import { Button } from '@mui/material'

function Index() {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get('id')
    const [data, setData] = useState({})
    const [editModalOpen, setEditModalOpen] = useState(false)

    useEffect(() => {
        editProfile()
        getDetail()
    }, [id])

    const getDetail = async () => {
        try {
            const response = await fetchData(`/admin/essays/${id}`, 'get')
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
            const editProfile = await fetchData(`/admin/essays/${id}`, 'put', body)
            if (editProfile.status === 200) {
                showToast.success('유저정보가 업데이트되었습니다.')
                setData((prev) => ({
                    ...prev,
                    adminProfile: editProfile.data,
                }))
                setEditModalOpen(false)
            }
        } catch (err) {
            showToast.error('유저정보가 변경되지 않았습니다.')
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
                                Essay Detail
                            </MDTypography>
                        </MDBox>
                    </Card>
                </Grid>
            </MDBox>
            <BackgroudCard
                btnTitle="list"
                link={`/users`}
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

                    <Grid container spacing={2}>
                        <Grid item xs={6} md={3}>
                            <MDTypography variant="body2">Profile Image</MDTypography>
                            <MDTypography variant="body2">{data.profileImage ? data.profileImage : '---'}</MDTypography>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <MDTypography variant="body2">ID</MDTypography>
                            <MDTypography variant="body2">{data.id ? data.id : '---'}</MDTypography>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <MDTypography variant="body2">Nickname</MDTypography>
                            <MDTypography variant="body2">
                                {data.author?.nickname ? data.author.nickname : '---'}
                            </MDTypography>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <MDTypography variant="body2">Email</MDTypography>
                            <MDTypography variant="body2">
                                {data.author?.email ? data.author.email : '---'}
                            </MDTypography>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <MDTypography variant="body2">Gender</MDTypography>
                            <MDTypography variant="body2">
                                {data.author?.gender ? data.author.gender : '---'}
                            </MDTypography>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <MDTypography variant="body2">Birth Date</MDTypography>
                            <MDTypography variant="body2">
                                {data.author?.birthDate ? data.author.birthDate : '---'}
                            </MDTypography>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <MDTypography variant="body2">Status</MDTypography>
                            <MDTypography variant="body2">
                                {data.author?.status ? data.author.status : '---'}
                            </MDTypography>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <MDTypography variant="body2">Reputation</MDTypography>
                            <MDTypography variant="body2">
                                {data.author?.reputation ? data.author.reputation : '---'}
                            </MDTypography>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <MDTypography variant="body2">Role</MDTypography>
                            <MDTypography variant="body2">{data.author?.role ? data.author.role : '---'}</MDTypography>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <MDTypography variant="body2">Subscription End</MDTypography>
                            <MDTypography variant="body2">
                                {data.author?.subscriptionEnd ? data.author.subscriptionEnd : '---'}
                            </MDTypography>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <MDTypography variant="body2">Created Date</MDTypography>
                            <MDTypography variant="body2">
                                {data.author?.createdDate ? data.author.createdDate : '---'}
                            </MDTypography>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <MDTypography variant="body2">Updated Date</MDTypography>
                            <MDTypography variant="body2">
                                {data.author?.updatedDate ? data.author.updatedDate : '---'}
                            </MDTypography>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <MDTypography variant="body2">Deleted Date</MDTypography>
                            <MDTypography variant="body2">
                                {data.author?.deletedDate ? data.author.deletedDate : '---'}
                            </MDTypography>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <MDTypography variant="body2">Report Count</MDTypography>
                            <MDTypography variant="body2">{data.reports ? data.reports.length : '---'}</MDTypography>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <MDTypography variant="body2">Review Count</MDTypography>
                            <MDTypography variant="body2">{data.reviews ? data.reviews.length : '---'}</MDTypography>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <MDTypography variant="body2">Essay Count</MDTypography>
                            <MDTypography variant="body2">{data.essayCount ? data.essayCount : '---'}</MDTypography>
                        </Grid>
                    </Grid>

                    <MDBox mt={4} textAlign="center">
                        <Button variant="contained" color="primary" onClick={() => setEditModalOpen(true)}>
                            Edit Profile
                        </Button>
                    </MDBox>
                </MDBox>
            </BackgroudCard>
            <Footer />
        </DashboardLayout>
    )
}

export default Index
