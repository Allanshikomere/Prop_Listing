import React,{useState, useRef} from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
  } from '@chakra-ui/react'

function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    message: "",
 });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
 };

 const handleSubmit = (e) => {
  e.preventDefault();

  fetch("http://127.0.0.1:5555/submit_form", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(formData),
  })
  .then(response => {
    if (response.ok) {
      setFormData({
        fullName: "",
        phone: "",
        message: "",
      });
      onClose();
      alert("Form submitted successfully!");
    } else {
      throw new Error("Failed to submit form.");
    }
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
 };
 


  return (
    <>
      <Button onClick={onOpen} variant='solid' colorScheme='blue'>Request to apply</Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Take the First Step to Your New Home</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit} autoComplete="off">
            <FormControl>
              <FormLabel>Full name</FormLabel>
              <Input
                 ref={initialRef}
                 placeholder="Full name"
                 name="fullName"
                 value={formData.fullName}
                 onChange={handleInputChange}
                />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Phone</FormLabel>
              <Input
                 placeholder="Phone"
                 name="phone"
                 value={formData.phone}
                 onChange={handleInputChange}
                />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Message</FormLabel>
              <Textarea
                 placeholder="Message"
                 name="message"
                 value={formData.message}
                 onChange={handleInputChange}
                />
            </FormControl>
            <Button type="submit" colorScheme='blue' mr={3} marginTop={"3rem"} marginLeft={'8rem'}>
              Send Request
            </Button>
            <Button onClick={onClose}  marginTop={"3rem"} marginLeft={'1rem'}>Cancel</Button>
          </form>
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  )
}

export default InitialFocus