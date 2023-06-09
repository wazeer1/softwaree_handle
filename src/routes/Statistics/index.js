import React from "react";
import styled from "styled-components";
import {
    CircularProgressGraph,
    ProgressCircleGraph,
    ProgressLine,
} from "../../components";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { faker } from '@faker-js/faker';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
);

export const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
        {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
        },
    ],
};

const Statistics = () => {
     const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
       const data2 = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
    return (
        <Cover>
            <TopCards>
                <RevenueCard>
                    <CardTop>
                        <h4>Total Revenue</h4>
                        <i class="ri-menu-5-fill"></i>
                    </CardTop>
                    <ChartBottom>
                        <ChartLeft>
                            <CircularProgressGraph progress={58} radius={40} />
                        </ChartLeft>
                        <ChartRight>
                            <h4>256</h4>
                            <h6>Revenu today</h6>
                        </ChartRight>
                    </ChartBottom>
                </RevenueCard>
                <SalesCard>
                    <CardTop>
                        <h4>Sales Analytics</h4>
                        <i class="ri-menu-5-fill"></i>
                    </CardTop>
                    <ChartBottom>
                        <ChartLeft>
                            <GraphSpan color="#5ac56a">
                                32% <i class="ri-line-chart-line"></i>
                            </GraphSpan>
                        </ChartLeft>
                        <ChartRight>
                            <h4>8457</h4>
                            <h6>Revenu today</h6>
                        </ChartRight>
                    </ChartBottom>
                    <ChartLine>
                        <ProgressLine progress={60} color="#5ac56a" />
                    </ChartLine>
                </SalesCard>
                <StatisticsCard>
                    <CardTop>
                        <h4>Statistics</h4>
                        <i class="ri-menu-5-fill"></i>
                    </CardTop>
                    <ChartBottom>
                        <ChartLeft>
                            <CircularProgressGraph progress={58} radius={40} />
                        </ChartLeft>
                        <ChartRight>
                            <h4>4569</h4>
                            <h6>Revenu today</h6>
                        </ChartRight>
                    </ChartBottom>
                </StatisticsCard>
                <DailySales>
                    <CardTop>
                        <h4>Sales Analytics</h4>
                        <i class="ri-menu-5-fill"></i>
                    </CardTop>
                    <ChartBottom>
                        <ChartLeft>
                            <GraphSpan color="#f088cc">
                                32% <i class="ri-line-chart-line"></i>
                            </GraphSpan>
                        </ChartLeft>
                        <ChartRight>
                            <h4>158</h4>
                            <h6>Revenu today</h6>
                        </ChartRight>
                    </ChartBottom>
                    <ChartLine>
                        <ProgressLine progress={60} color="#f088cc" />
                    </ChartLine>
                </DailySales>
            </TopCards>
            <GraphSection>
                <GraphWidget>
                    <CardTop>
                        <h4>Daily Sales</h4>
                        <i class="ri-menu-5-fill"></i>
                    </CardTop>
                    <GraphBottom>
                        <Doughnut data={data} />
                    </GraphBottom>
                </GraphWidget>
                <GraphWidget>
                    <CardTop>
                        <h4>Statistics</h4>
                        <i class="ri-menu-5-fill"></i>
                    </CardTop>
                    <GraphBottom>
                        <Bar options={options} data={data2} height={200}/>
                    </GraphBottom>
                </GraphWidget>
                <GraphWidget>
                    <CardTop>
                        <h4>Total Revenue</h4>
                        <i class="ri-menu-5-fill"></i>
                    </CardTop>
                </GraphWidget>
            </GraphSection>
        </Cover>
    );
};

export default Statistics;

const Cover = styled.div`
    height: 300px;
    backgroound: green;
    padding: 20px;
`;
const TopCards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
`;
const RevenueCard = styled.div`
    height: 170px;
    background: var(--primary-color);
    border-radius: 5px;
    padding: 15px;
`;
const StatisticsCard = styled.div`
    height: 170px;
    background: var(--primary-color);
    border-radius: 5px;
    padding: 15px;
`;
const SalesCard = styled.div`
    height: 170px;
    background: var(--primary-color);
    border-radius: 5px;
    padding: 15px;
`;
const DailySales = styled.div`
    height: 170px;
    background: var(--primary-color);
    border-radius: 5px;
    padding: 15px;
`;
const CardTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4 {
        color: var(--primary-text-color);
        font-size: 18px;
    }
    i {
        color: var(--primary-text-color);
        font-size: 18px;
    }
`;
const ChartBottom = styled.div`
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const ChartLeft = styled.div`
    width: 40%;
`;
const ChartRight = styled.div`
    text-align: right;
    h4 {
        font-size: 28px;
        color: var(--primary-text-color);
    }
    h6 {
        font-size: 16px;
        color: var(--primary-text-color);
    }
`;
const GraphSpan = styled.span`
    background: ${({ color }) => color};
    color: #fff;
    padding: 3px 8px;
    border-radius: 15px;
    i {
        color: #fff;
    }
`;
const ChartLine = styled.div`
    padding: 15px 0px;
`;
const GraphSection = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    padding: 15px 0px;
`;
const GraphWidget = styled.div`
    height: 400px;
    background: var(--primary-color);
    border-radius: 5px;
    padding: 15px;
`;
const GraphBottom = styled.div`
    height:100%;
`;
