import { Container, Text, VStack, Heading, Box, Image, Link, useColorMode, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Index = () => {
  const { colorMode } = useColorMode();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from local storage or server
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Text fontSize="lg">A space where I share my thoughts, experiences, and stories.</Text>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <Link href="/about" color="teal.500" fontSize="lg">Learn more about me</Link>
        <Link href="/add-post" color="teal.500" fontSize="lg">Add a new post</Link>
        {posts.map((post, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md" width="100%">
            <Heading as="h2" size="lg">{post.title}</Heading>
            <Text mt={2}>{post.content}</Text>
            <Button colorScheme="red" mt={4} onClick={() => handleDelete(index)}>Delete Post</Button>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;