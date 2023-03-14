import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
// import data from "../datasets.json";

import React from "react";

export const TableAge = ({ data }) => {
  return (
    <TableContainer
      width={["100%", "50vw"]}
      border={"1px"}
      borderRadius={"10px"}
    >
      <Table variant="striped" colorScheme="teal">
        <TableCaption>
          Data Teman berdasarkan rentang usia dan jenis kelamin
        </TableCaption>
        <Thead backgroundColor={"blackAlpha.300"}>
          <Tr>
            <th>Number</th>
            <Th>Name</Th>
            <Th>Gender</Th>
            <Th isNumeric>Age</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.map((val, id) => (
              <Tr key={id} padding="1em">
                <td>{id + 1}</td>
                <Td>{val.name}</Td>
                <Td>{val.gender}</Td>
                <Td isNumeric>{val.age}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
