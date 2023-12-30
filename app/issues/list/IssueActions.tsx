"use client";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import IssueStatusFilter from "./IssueStatusFilter";

const IssueActions = () => {
  const router = useRouter();

  const clearFilter = () => {
    router.push("/issues/list");
    router.refresh();
  };

  return (
    <Flex>
      <Flex gap="2" mr="6">
        <IssueStatusFilter />
        <Button variant="surface" onClick={() => clearFilter()}>
          Clear
        </Button>
      </Flex>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueActions;
