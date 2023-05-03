import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["women", "Men"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

export function Doughnut({ data }) {
  return (
    <>
      <Box width={"350px"} heigh="auto">
        <Pie data={data} />
      </Box>
    </>
  );
}
