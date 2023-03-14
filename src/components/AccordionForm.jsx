import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import { FormAddFriend } from "./FormAddFriend";

export const AccordionForm = ({ handleSubmitForm }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left" width={"50vw"}>
              <Text fontWeight={"bold"}> Add a new Friend</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} width={"50vw"}>
          <FormAddFriend handleSubmitForm={handleSubmitForm} />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
