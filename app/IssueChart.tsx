"use client";
import { Card } from "@radix-ui/themes";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface Props {
  newIssues: number;
  open: number;
  inProgress: number;
  closed: number;
  cancelled: number;
}

const IssueChart = ({ newIssues, open, inProgress, closed, cancelled }: Props) => {
  const data = [
    { label: "New", value: newIssues },
    { label: "Open", value: open },
    { label: "In Progress", value: inProgress },
    { label: "Closed", value: closed },
    { label: "Cancelled", value: cancelled }
  ];

  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar dataKey="value" barSize={40} style={{ fill: "var(--accent-9)" }} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;
