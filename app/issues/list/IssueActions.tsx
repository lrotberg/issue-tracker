import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusFilter from "./IssueStatusFilter";

const IssueActions = () => {
  return (
    <Flex>
      <Flex gap="2" mr="6">
        <IssueStatusFilter />
        <Button variant="surface">
          <Link href="/issues/list">Clear</Link>
        </Button>
      </Flex>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueActions;
