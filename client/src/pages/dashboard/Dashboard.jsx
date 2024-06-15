import { Tabs, Box, Badge, Flex } from "@radix-ui/themes";
import ChangePassword from "./user/ChangePassword";
import AccountDetails from "./user/AccountDetails";
import WishList from "./user/WishList";
import Orders from "./user/Orders";
import Support from "./user/Support";
import Address from "./user/Address";
import { useGetSingleUserQuery } from "../../redux/api/profileApiSlice";

const Dashboard = () => {
  const { data } = useGetSingleUserQuery();
  console.log(data, "single u");

  return (
    <section className="flex flex-col w-[80%] mx-auto gap-y-5 py-6 ">
      <div className="flex flex-row items-center justify-center gap-x-5">
        <p>{data?.user?.email}</p>
        <Badge
          size={"2"}
          color={`${data?.user.role === "Admin" ? "green" : "blue"}`}
        >
          {data?.user?.role === "Admin" ? "Admin" : "Member"}
        </Badge>
      </div>
      <div className="border-[1px] ">
        <Tabs.Root defaultValue="account-details">
          <Tabs.List>
            <Flex
              width="100%"
              display="flex"
              direction="row"
              align="center"
              justify="between"
            >
              <Tabs.Trigger value="account-details">
                Account Details
              </Tabs.Trigger>
              <Tabs.Trigger value="account-security">
                Account Security
              </Tabs.Trigger>
              <Tabs.Trigger value="address">Address</Tabs.Trigger>
              <Tabs.Trigger value="orders">Orders</Tabs.Trigger>
              <Tabs.Trigger value="wishlist">WishList</Tabs.Trigger>
              <Tabs.Trigger value="support">Support</Tabs.Trigger>
            </Flex>
          </Tabs.List>

          <Box px="4" pt="3" pb="2">
            <Tabs.Content value="account-details">
              <AccountDetails />
            </Tabs.Content>

            <Tabs.Content value="account-security">
              <ChangePassword />
            </Tabs.Content>

            <Tabs.Content value="address">
              <Address />
            </Tabs.Content>

            <Tabs.Content value="orders">
              <Orders />
            </Tabs.Content>

            <Tabs.Content value="wishlist">
              <WishList />
            </Tabs.Content>

            <Tabs.Content value="support">
              <Support />
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </div>
    </section>
  );
};

export default Dashboard;
