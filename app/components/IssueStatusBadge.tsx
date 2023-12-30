import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

const statusMap: Record<
  Status,
  { label: string; color: "blue" | "violet" | "green" | "gray" | "red" }
> = {
  NEW: { label: "New", color: "gray" },
  OPEN: { label: "Open", color: "blue" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
  CLOSED: { label: "Closed", color: "green" },
  CANCELLED: { label: "Cancelled", color: "red" }
};

const IssueStatusBadge = ({ status }: { status: Status }) => {
  return <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>;
};

export default IssueStatusBadge;
