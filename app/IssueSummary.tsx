import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  newIssues: number;
  open: number;
  inProgress: number;
  closed: number;
  cancelled: number;
}

const IssueSummary = ({ newIssues, open, inProgress, closed, cancelled }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
  }[] = [
    { label: "New Issues", value: newIssues, status: "NEW" },
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In Progress Issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
    { label: "Cancelled Issues", value: cancelled, status: "CANCELLED" }
  ];

  return (
    <Flex gap="4" justify="between">
      {containers.map(container => (
        <Card key={container.label}>
          <Flex direction="column" gap="1">
            <Link className="text-sm font-medium" href={`/issues/list?status=${container.status}`}>
              {container.label}
            </Link>
            <Text size="5" className="font-bold">
              {container.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
