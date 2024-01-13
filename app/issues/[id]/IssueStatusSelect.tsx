"use client";
import { IssueStatusBadge } from "@/app/components";
import { Issue, Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const IssueStatusSelect = ({ issue }: { issue: Issue }) => {
  const statuses = [Status.NEW, Status.OPEN, Status.IN_PROGRESS, Status.CLOSED, Status.CANCELLED];

  const changeStatus = (status: Status) => {
    axios
      .patch(`/api/issues/${issue.id}`, { status: status || null })
      .then(() => {
        toast.success(`Issue status was changed to '${status}'`);
      })
      .catch(() => {
        toast.error("Changes could not be saved.");
      });
  };

  return (
    <>
      <Select.Root defaultValue={issue.status || ""} onValueChange={changeStatus}>
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            <Select.Label>Statuses</Select.Label>
            {statuses?.map(statusName => (
              <Select.Item key={statusName} value={statusName}>
                <IssueStatusBadge status={Status[statusName]} />
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

export default IssueStatusSelect;
