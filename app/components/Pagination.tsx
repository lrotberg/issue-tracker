"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon
} from "@radix-ui/react-icons";
import { Button, Flex, Select, Text } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  const addSearchParam = (paramName: string, paramValue: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set(paramName, paramValue.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <Flex align="center" gap="2">
      <Button
        color="gray"
        variant="surface"
        disabled={currentPage === 1}
        onClick={() => addSearchParam("page", 1)}
      >
        <DoubleArrowLeftIcon />
      </Button>
      <Button
        color="gray"
        variant="surface"
        disabled={currentPage === 1}
        onClick={() => addSearchParam("page", currentPage - 1)}
      >
        <ChevronLeftIcon />
      </Button>
      <Text size="2">
        Page {currentPage} of {pageCount}
      </Text>
      <Select.Root onValueChange={pageSize => addSearchParam("pageSize", pageSize)}>
        <Select.Trigger placeholder={`Item per page: ${pageSize}`} />
        <Select.Content>
          <Select.Group>
            <Select.Label>Item per page</Select.Label>
            <Select.Item value="10">10</Select.Item>
            <Select.Item value="15">15</Select.Item>
            <Select.Item value="20">20</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Button
        color="gray"
        variant="surface"
        disabled={currentPage === pageCount}
        onClick={() => addSearchParam("page", currentPage + 1)}
      >
        <ChevronRightIcon />
      </Button>
      <Button
        color="gray"
        variant="surface"
        disabled={currentPage === pageCount}
        onClick={() => addSearchParam("page", pageCount)}
      >
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  );
};

export default Pagination;
