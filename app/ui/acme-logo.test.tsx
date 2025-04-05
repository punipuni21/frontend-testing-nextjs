import { render, screen } from "@testing-library/react";
import { fetchFilteredCustomers } from "@/app/lib/data";
import Page from "../dashboard/customers/page";
import { FormattedCustomersTable } from "@/app/lib/definitions";

// Mock the fetchFilteredCustomers function
jest.mock("@/app/lib/data", () => ({
  fetchFilteredCustomers: jest.fn(),
}));

// Mock the CustomersTable component
jest.mock("@/app/ui/customers/table", () => {
  return jest.fn(() => <div data-testid="customers-table" />);
});

describe("Page Component", () => {
  it("tmp", async () => {
    // Mock the fetchFilteredCustomers response
    const mockCustomers: FormattedCustomersTable[] = [
      {
        id: "1",
        name: "John Doe",
        email: "hoge",
        image_url: "hoge",
        total_invoices: 1,
        total_pending: "0",
        total_paid: "1",
      },
    ];
    (fetchFilteredCustomers as jest.Mock).mockResolvedValue(mockCustomers);

    const searchParams = Promise.resolve({ query: "test" });
    const result = await Page({ searchParams: searchParams });
    render(result);
    expect(screen.getByTestId("customers-table")).toBeInTheDocument();
    expect(fetchFilteredCustomers).toHaveBeenCalledWith("test");
  });
});
