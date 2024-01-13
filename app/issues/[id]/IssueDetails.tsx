import authOptions from "@/app/auth/authOptions";
import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import ReactMarkdown from "react-markdown";
import IssueStatusSelect from "./IssueStatusSelect";

const IssueDetails = async ({ issue }: { issue: Issue }) => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Heading>{issue.title}</Heading>
      <Flex gap="3" my="2">
        {session ? <IssueStatusSelect issue={issue} /> : <IssueStatusBadge status={issue.status} />}
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose max-w-full" mt="4">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;
