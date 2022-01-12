import React, { Component } from "react";
import {
  Container,
  Input,
  Heading,
  FormControl,
  FormLabel,
  Textarea,
  FormHelperText,
  Radio,
  RadioGroup,
  Avatar,
  Box,
  HStack,
  Divider,
  Flex,
  Button,
  Stack,
} from "@chakra-ui/react";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Container py="30" maxW="container.lg">
          <Heading py="10">Register</Heading>

          {/* <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "stretch" }}>
            <div className="rowValues">
              <div>
                <Input placeholder="First Name" variant="outline" size="md" />
              </div>
              <div>
                <Input placeholder="Middle Name" variant="outline" size="md" />
              </div>
              <div>
                <Input placeholder="Last Name" variant="outline" size="md" />
              </div>
            </div>
            <div className="rowValues">
              <div>
                <Input placeholder="Email" variant="outline" size="md" />
              </div>
              <div>
                <Input placeholder="Phone Number" variant="outline" size="md" />
              </div>
            </div>
          </div> */}
          <Divider />
          <Box w={{ base: "100%", md: "80%" }}>
            <Flex direction={{ base: "column", md: "row" }}>
              <FormControl id="firstName" isRequired py="5" px="5">
                <FormLabel>First Name</FormLabel>
                <Input type="text" />
                <FormHelperText>what should we call you?</FormHelperText>
              </FormControl>

              <FormControl id="scondName" py="5" px="5">
                <FormLabel>Second Name</FormLabel>
                <Input type="text" />
                <FormHelperText>not everyone has a second name.</FormHelperText>
              </FormControl>
              <FormControl id="lastName" isRequired py="5" px="5">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" />
                <FormHelperText>Your family name.</FormHelperText>
              </FormControl>
            </Flex>
          </Box>

          <Box w={{ base: "100%", md: "80%" }}>
            <Flex direction={{ base: "column", md: "row" }}>
              <FormControl id="email" isRequired py="5" px="5">
                <FormLabel>Email</FormLabel>
                <Input type="email" />
                <FormHelperText>
                  you will use this as login credential.
                </FormHelperText>
              </FormControl>

              <FormControl id="phoneNumber" isRequired py="5" px="5">
                <FormLabel>Phone Number</FormLabel>
                <Input type="number" />
                <FormHelperText>we won't share your number.</FormHelperText>
              </FormControl>
            </Flex>
          </Box>

          <Box w={{ base: "100%", md: "80%" }}>
            <Flex direction={{ base: "column", md: "row" }}>
              <FormControl id="password" isRequired py="5" px="5">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
                <FormHelperText>
                  you will use this as login credential.
                </FormHelperText>
              </FormControl>

              <FormControl id="confirmPassword" isRequired py="5" px="5">
                <FormLabel>Confirm Password</FormLabel>
                <Input type="password" />
                <FormHelperText>
                  Re-enter the password to confirm.
                </FormHelperText>
              </FormControl>
            </Flex>
          </Box>


          <Box w={{ base: "100%", md: "80%" }}>
            <Flex direction={{ base: "column", md: "row" }}>
              <FormControl as="fieldset" isRequired py="5" px="5">
                <FormLabel as="legend">Gender</FormLabel>
                <RadioGroup defaultValue="Itachi">
                  <HStack spacing="24px">
                    <Radio value="Sasuke">Male</Radio>
                    <Radio value="Nagato">Female</Radio>
                    <Radio value="Itachi">Others</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
              <FormControl as="fieldset" py="4" px="5">
                <FormLabel as="legend">Profile Picture</FormLabel>
                <Stack isInline spacing={5}>
                  <Avatar
                    size="lg"
                    name="Avinash Sharma"
                    src="/home/avinash/Downloads/PXL_20201125_172337987.jpg"
                  />
                  <Button variantColor="teal">Change Photo</Button>
                  <Button variantColor="red.300" variant="ghost">
                    Delete
                  </Button>
                </Stack>
              </FormControl>
            </Flex>
          </Box>

          <Box w={{ base: "100%", md: "80%" }}>
            <Flex direction={{ base: "column", md: "row" }}>
              <FormControl id="dateOfBirth" isRequired py="5" px="5">
                <FormLabel>DOB</FormLabel>
                <Input type="date" />
                <FormHelperText>Your birth date & year.</FormHelperText>
              </FormControl>

              <FormControl id="bloodGroup" isRequired py="5" px="5">
                <FormLabel>Blood Group</FormLabel>
                <Input type="text" />
                <FormHelperText>
                  as mentioned in your medical book/record.
                </FormHelperText>
              </FormControl>
            </Flex>
          </Box>
          
          <Box w={{ base: "100%", md: "80%" }}>
            <Flex direction={{ base: "column", md: "row" }}>
              <FormControl id="presentAddress" isRequired py="5" px="5">
                <FormLabel>Present Address</FormLabel>
                <Textarea placeholder="address here." size="sm" resize="none" />
                <FormHelperText>your current address.</FormHelperText>
              </FormControl>

              <FormControl id="bloodGroup" py="5" isRequired px="5">
                <FormLabel>Parmanent Address</FormLabel>
                <Textarea placeholder="address here." size="sm" resize="none" />
                <FormHelperText>as mentioned in your id-proof.</FormHelperText>
              </FormControl>
            </Flex>
          </Box>
          <Divider />
          <Box w={{ base: "100%", md: "80%" }}>
            <Flex direction={{ base: "column", md: "row" }}>
              <FormControl id="fatherName" py="5" px="5">
                <FormLabel>Father Name</FormLabel>
                <Input type="text" />
                <FormHelperText>Your father's name.</FormHelperText>
              </FormControl>

              <FormControl id="fatherPhoneNumber" py="5" px="5">
                <FormLabel>Father's Phone Number</FormLabel>
                <Input type="number" />
                <FormHelperText>in emergency contact number.</FormHelperText>
              </FormControl>
            </Flex>
          </Box>
          <Box w={{ base: "100%", md: "80%" }}>
            <Flex direction={{ base: "column", md: "row" }}>
              <FormControl id="motherName" py="5" px="5">
                <FormLabel>Mother Name</FormLabel>
                <Input type="text" />
                <FormHelperText>Your mother's name.</FormHelperText>
              </FormControl>

              <FormControl id="motherPhoneNumber" py="5" px="5">
                <FormLabel>Mother's Phone Number</FormLabel>
                <Input type="number" />
                <FormHelperText>in emergency contact number.</FormHelperText>
              </FormControl>
            </Flex>
          </Box>
        </Container>
      </div>
    );
  }
}
