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
        getDetail()
        editProfile()
    }, [id])

    const getDetail = async () => {
        try {
            const response = await fetchData(`/admin/users/${id}`, 'get')
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
            const editProfile = await fetchData(`/admin/users/${id}`, 'put', body)
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
                                Users Detail
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
                    <MDTypography variant="h3">User Details</MDTypography>
                    <hr
                        style={{
                            marginTop: '10px',
                            borderTop: '1px solid lightgray',
                            marginBottom: '20px',
                            width: '100%',
                        }}
                    />

                    <Grid item xs={6} style={{ textAlign: 'center' }}>
                        <MDTypography variant="body2">Profile Image</MDTypography>
                        <MDTypography variant="body2">{data.profileImage ? data.profileImage : '---'}</MDTypography>
                    </Grid>

                    <Grid container>
                        <Grid item xs={6}>
                            <MDTypography variant="body2">ID</MDTypography>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                            <MDTypography variant="body2">{data.id ? data.id : '---'}</MDTypography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                            <MDTypography variant="body2">Nickname</MDTypography>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                            <MDTypography variant="body2">{data.nickname ? data.nickname : '---'}</MDTypography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                            <MDTypography variant="body2">Email</MDTypography>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                            <MDTypography variant="body2">{data.email ? data.email : '---'}</MDTypography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                            <MDTypography variant="body2">Gender</MDTypography>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                            <MDTypography variant="body2">{data.gender ? data.gender : '---'}</MDTypography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                            <MDTypography variant="body2">Birth Date</MDTypography>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                            <MDTypography variant="body2">{data.birthDate ? data.birthDate : '---'}</MDTypography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                            <MDTypography variant="body2">Status</MDTypography>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                            <MDTypography variant="body2">{data.status ? data.status : '---'}</MDTypography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                            <MDTypography variant="body2">Reputation</MDTypography>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                            <MDTypography variant="body2">{data.reputation ? data.reputation : '---'}</MDTypography>
                        </Grid>
                    </Grid>
                    <br />

                    <Grid container>
                        <Grid item xs={6}>
                            <MDTypography variant="body2">Role</MDTypography>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                            <MDTypography variant="body2">{data.role ? data.role : '---'}</MDTypography>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={6}>
                            <MDTypography variant="body2">Subscription End</MDTypography>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                            <MDTypography variant="body2">
                                {data.subscriptionEnd ? data.subscriptionEnd : '---'}
                            </MDTypography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                            <MDTypography variant="body2">Created Date</MDTypography>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                            <MDTypography variant="body2">{data.createdDate ? data.createdDate : '---'}</MDTypography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                            <MDTypography variant="body2">Updated Date</MDTypography>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                            <MDTypography variant="body2">{data.updatedDate ? data.updatedDate : '---'}</MDTypography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                            <MDTypography variant="body2">Deleted Date</MDTypography>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                            <MDTypography variant="body2">{data.deletedDate ? data.deletedDate : '---'}</MDTypography>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={6}>
                            <MDTypography variant="body2">Report Count</MDTypography>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                            <MDTypography variant="body2">{data.reportCount ? data.reportCount : '---'}</MDTypography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                            <MDTypography variant="body2">Review Count</MDTypography>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                            <MDTypography variant="body2">{data.reviewCount ? data.reviewCount : '---'}</MDTypography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                            <MDTypography variant="body2">Essay Count</MDTypography>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                            <MDTypography variant="body2">{data.essayCount ? data.essayCount : '---'}</MDTypography>
                        </Grid>
                    </Grid>
                    {/* <MDBox mt={4} textAlign="center">
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ color: 'white !important' }}
                            onClick={() => setEditModalOpen(true)}
                        >
                            Edit Profile
                        </Button>
                    </MDBox> */}
                </MDBox>
            </BackgroudCard>
            <Footer />
        </DashboardLayout>
    )
}

export default Index
