import { useState } from "react";
import { Container, Heading, VStack, Input, Textarea, Button, useToast } from "@chakra-ui/react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();

  const handleSubmit = () => {
    if (title && content) {
      const newPost = { title, content };
      const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
      storedPosts.push(newPost);
      localStorage.setItem("posts", JSON.stringify(storedPosts));
      toast({
        title: "Post added.",
        description: "Your new blog post has been added.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setTitle("");
      setContent("");
    } else {
      toast({
        title: "Error.",
        description: "Title and content are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Add New Post</Heading>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          height="200px"
        />
        <Button colorScheme="teal" onClick={handleSubmit}>Add Post</Button>
      </VStack>
    </Container>
  );
};

export default AddPost;