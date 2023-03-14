import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";

export const FormAddFriend = ({ handleSubmitForm }) => {
  const [data, setData] = React.useState({
    name: "",
    age: "",
    gender: "",
  });

  const handleClick = () => {
    handleSubmitForm(data);
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <FormControl
        backgroundColor={"blackAlpha.200"}
        borderRadius={"1em"}
        padding={"1em"}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Heading padding={"1em"}>
          <Text fontWeight={"bolder"}> Add New Friend</Text>
        </Heading>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          placeholder="Masukkan Nama teman mu"
          value={data.name}
          onChange={(e) => handleInputChange(e)}
        />
        <FormLabel>Gender</FormLabel>
        <Select
          placeholder="Pilih Jenis Kelamin"
          name="gender"
          onChange={(e) => handleInputChange(e)}
        >
          <option>male</option>
          <option> female </option>
        </Select>
        <FormLabel>Age</FormLabel>
        <Input
          name="age"
          type="text"
          placeholder="Masukkan Umur"
          onChange={(e) => handleInputChange(e)}
        />

        <Button mt={4} colorScheme="teal" onClick={handleClick}>
          Submit
        </Button>
      </FormControl>
    </>
  );
};
