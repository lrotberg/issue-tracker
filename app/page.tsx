import prisma from "@/prisma/client";
import { Flex } from "@radix-ui/themes";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({ where: { status: "IN_PROGRESS" } });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });

  return (
    <Flex direction="column" gap="2">
      <LatestIssues />
      <IssueSummary open={open} inProgress={inProgress} closed={closed} />
    </Flex>
  );
}
