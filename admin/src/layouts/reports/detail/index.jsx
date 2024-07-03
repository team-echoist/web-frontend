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
import { showToast } from '../../../utils/toast'

export default function Index() {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get('id')
    const [data, setData] = useState({})
    const [editModalOpen, setEditModalOpen] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        editProfile()
        getDetail()
    }, [id])

    const getDetail = async () => {
        try {
            const response = await fetchData(`/admin/reports/${id}`, 'get')
            setData(response.data)
            console.log(response.data)
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
                                Reports Detail
                            </MDTypography>
                        </MDBox>
                    </Card>
                </Grid>
            </MDBox>

            <Footer />
        </DashboardLayout>
    )
}
