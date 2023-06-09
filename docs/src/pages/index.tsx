import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  MediaQuery,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";

export default function Home() {
  const theme = useMantineTheme();

  return (
    <Layout>
      <Box
        sx={(theme) => ({
          background: theme.fn.linearGradient(
            90,
            theme.colors.blue[3],
            theme.colors.teal[3]
          ),
        })}
        mx={-16}
        mt={-16}
        mb="xl"
        p={74}
      >
        <Center>
          <Box sx={{ textAlign: "center" }}>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Title order={1} size={46} color="white" mb={12}>
                Share Me
              </Title>
            </MediaQuery>
            <Title size="h1" color={theme.colors.gray[1]} mb={24}>
              Share images and videos on your own private server.
            </Title>
            <Flex justify="center" gap="md">
              <Button
                component={Link}
                href="/installation"
                variant="gradient"
                radius="xl"
              >
                Installation
              </Button>
              <Button
                variant="gradient"
                component="a"
                href="http://130.61.14.58:3000/"
                radius="xl"
              >
                Demo
              </Button>
            </Flex>
          </Box>
        </Center>
      </Box>
      <Container size="md" mb="xl">
        <Flex wrap="wrap" p="md" mb="xl">
          <Box h={600} miw={250} pos="relative" sx={{ flex: 1 }}>
            <Image
              src="/share-me/list.png"
              fill
              alt="List View of Posts"
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Stack miw={250} sx={{ flex: 1 }}>
            <Box mih={200} w="100%" pos="relative" sx={{ flex: 1 }}>
              <Image
                src="/share-me/home.png"
                fill
                alt="List View of Posts"
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Box mih={200} w="100%" pos="relative" sx={{ flex: 1 }}>
              <Image
                src="/share-me/post.png"
                fill
                alt="List View of Posts"
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Stack>
        </Flex>
        <Flex gap="md" wrap="wrap">
          <Stack sx={{ flex: 1 }} miw={200}>
            <Title order={2}>No Limitations</Title>
            <Text>
              Share Images and Videos of any Size. It's your server. No
              encoding, no compression, no BS.
            </Text>
          </Stack>
          <Stack sx={{ flex: 1 }} miw={200}>
            <Title order={2}>Authentication</Title>
            <Text>
              Only allow users on your Share Me instance if they're in your
              directory by using OIDC.
            </Text>
          </Stack>
          <Stack sx={{ flex: 1 }} miw={200}>
            <Title order={2}>Portable</Title>
            <Text>
              Share Me is built on top of Next.js and PocketBase, both portable
              technologies that can run on (almost) any server or on hosted
              platforms such as Vercel or Netlify.
            </Text>
          </Stack>
        </Flex>
      </Container>
    </Layout>
  );
}
