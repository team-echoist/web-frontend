// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import {timeSince} from "./util/TimeSInce"

import TodayIcon from "@mui/icons-material/Today";
import DrawIcon from "@mui/icons-material/Draw";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupIcon from "@mui/icons-material/Group";
import AddCardIcon from "@mui/icons-material/AddCard";
import ReportIcon from "@mui/icons-material/Report";
import AxiosInstance from "../../api/AxiosInstance";
import { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState({});
  const { sales, tasks } = reportsLineChartData;
  const detailUrl = (id) => {
    return `/dashboard/${id}`;
  };
  useEffect(() => {
    async function fetchAdminCount() {
      try {
        const response = await AxiosInstance.get("/api/admin");
        const data = response.data.data;
        const timeStamp = response.data.timestamp;
        console.log(timeStamp);
        setData((prev) => ({ ...prev, countData: data, timeStamp: timeSince(timeStamp) }));
        console.log("data", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchAdminCount();
  }, []);

  console.log("data", data);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon={<TodayIcon />}
                title="Today Essay"
                count={data?.countData?.todayEssays}
                percentage={{
                  color: "",
                  amount: "",
                  label: data.timeStamp,
                }}
                url={detailUrl("today-essay")}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon={<DrawIcon />}
                title="Total Essay"
                count={data?.countData?.totalEssays}
                percentage={{
                  color: "",
                  amount: "",
                  label: data.timeStamp,
                }}
                url={detailUrl("total-essay")}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon={<GroupAddIcon />}
                title="Today's Users"
                count={data?.countData?.currentSubscriber}
                percentage={{
                  color: "",
                  amount: "",
                  label: data.timeStamp,
                }}
                url={detailUrl("today-users")}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon={<GroupIcon />}
                title="All Users"
                count={data?.countData?.totalUser}
                percentage={{
                  color: "",
                  amount: "",
                  label: data.timeStamp,
                }}
                url={detailUrl("all-users")}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon={<AddCardIcon />}
                title="Subscribe Users"
                count={data?.countData?.currentSubscriber}
                percentage={{
                  color: "",
                  amount: "",
                  label: data.timeStamp,
                }}
                url={detailUrl("subscribe-users")}
              />
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon={<ReportIcon />}
                title="reported Essay"
                count={data?.countData?.unprocessedReports}
                percentage={{
                  color: "",
                  amount: "",
                  label: data.timeStamp,
                }}
                url="/reports"
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Monthly subscribers"
                  description="LMonthly Subscriber Trends"
                  date="Data as of 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Essay Progress Overview"
                  description="Recent Changes in Essay Completion"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
