import React, { useState } from "react";
import { Container, VStack, Heading, Text, Input, Button, useToast } from "@chakra-ui/react";
import { FaFileUpload, FaFileWord } from "react-icons/fa";

const Index = () => {
  const [file, setFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file.type !== "application/pdf") {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setFile(file);
  };

  const handleConvert = () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please upload a PDF file to convert.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulate the conversion process
    toast({
      title: "Conversion Successful",
      description: "Your Word document is ready to download.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" padding={4}>
      <VStack spacing={5}>
        <Heading>PDF to Word Converter</Heading>
        <Text>Convert your PDF documents to Word format using accurate OCR.</Text>
        <Input type="file" accept=".pdf" onChange={handleFileChange} size="lg" icon={<FaFileUpload />} />
        <Button leftIcon={<FaFileWord />} colorScheme="blue" onClick={handleConvert} disabled={!file}>
          Convert to Word
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
