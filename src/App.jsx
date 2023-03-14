import { TableAge } from "./components/TableAge";
import {
  Box,
  Button,
  HStack,
  Heading,
  Text,
  resolveStyleConfig,
} from "@chakra-ui/react";
import Pdf from "react-to-pdf";
import React from "react";
import { AccordionForm } from "./components/AccordionForm";
import { VerticalChart } from "./components/VerticalChart";
import NavBar from "./components/NavBar";
import { Doughnut } from "./components/Doughnut";

function App() {
  const ref = React.createRef();

  const [usersData, setusersData] = React.useState([
    {
      name: "",
      age: "",
      gender: "",
    },
  ]);

  const handleSubmitForm = (newData) => {
    setusersData([...usersData, newData]);
    console.log(usersData);
  };

  const response = async () => {
    const data = await fetch("https://dummyjson.com/users").then((res) =>
      res.json()
    );

    if (data) {
      setusersData(
        data?.users?.map((user) => {
          return {
            name: user.firstName + " " + user.lastName,
            age: user.age,
            gender: user.gender,
          };
        })
      );
    }
  };

  const handleGenerate = () => {
    const data = response();
  };

  const handleCLear = () => setusersData([]);

  const options = {
    orientation: "landscape",
    unit: "in",
    format: [14, 18],
  };

  let maleCount = 0;
  let femaleCount = 0;
  let under19Count = 0;
  let under19Sum = 0;
  let above19Count = 0;
  let above19Sum = 0;

  usersData?.forEach((person) => {
    if (person.gender === "male") {
      maleCount++;
    } else if (person.gender === "female") {
      femaleCount++;
    }
  });

  const malePercentage = ((maleCount / usersData.length) * 100).toFixed(2);
  const femalePercentage = ((femaleCount / usersData.length) * 100).toFixed(2);

  usersData.forEach((person) => {
    if (person.age < 19) {
      under19Count++;
      under19Sum += person.age;
    } else {
      above19Count++;
      above19Sum += person.age;
    }
  });

  let totalGender = {
    labels: ["Man Count", "Woman Count"],
    datasets: [
      {
        label: "Total of male and Female",
        data: [malePercentage, femalePercentage],
        backgroundColor: ["rgb(204, 213, 174)", "rgb(254, 250, 224)"],
        borderColor: ["rgb(254, 250, 224)"],
        borderWidth: 1,
      },
    ],
  };
  const total = usersData.length;

  const below19 = usersData.reduce((count, person) => {
    if (person.age < 19) {
      count++;
    }
    return count;
  }, 0);

  const above19 = total - below19;

  const below19Percentage = (below19 / total) * 100;
  const above19Percentage = (above19 / total) * 100;

  console.log(below19Percentage, above19Percentage);

  let totalAverage19 = {
    labels: ["Under 19", "Above 19"],
    datasets: [
      {
        label: "Total of Friends under and above 19 years old",
        data: [below19Percentage, above19Percentage],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <NavBar />
      <Box
        padding={"3em"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"flex-start"}
      >
        <HStack
          alignItems={"center"}
          justifyContent={"flex-start"}
          mb={"5em"}
          flexWrap="wrap"
          gap={"1em"}
        >
          <AccordionForm handleSubmitForm={handleSubmitForm} />
          <Pdf targetRef={ref} filename="code-example.pdf" options={options}>
            {({ toPdf }) => (
              <Button onClick={toPdf} variant={"solid"} colorScheme={"teal"}>
                Download Pdf
              </Button>
            )}
          </Pdf>
          <Button
            variant={"outline"}
            colorScheme={"teal"}
            onClick={handleGenerate}
          >
            Get random Data from the internet
          </Button>
          <Button variant={"outline"} colorScheme={"red"} onClick={handleCLear}>
            Clear data from internet and users input
          </Button>
        </HStack>
        <Box
          ref={ref}
          width={"100%"}
          minHeight={"100%"}
          maxHeight={"auto"}
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"start"}
          padding={"1.5em"}
          gap={"2em"}
          backgroundColor={"blackAlpha.100"}
          borderRadius="10px"
        >
          <Heading width={"100vw"} mb={"2em"}>
            <Text
              textDecoration={"Highlight"}
              textAlign="center"
              fontSize="6xl"
            >
              Data Visualization in Percentage
            </Text>
          </Heading>
          <VerticalChart data={totalAverage19} />
          <Doughnut data={totalGender} />
          <TableAge data={usersData} />
        </Box>
      </Box>
    </>
  );
}

export default App;
