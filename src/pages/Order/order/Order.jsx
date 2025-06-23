import { Helmet } from "react-helmet-async";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../../layout/Shared/cover/Cover";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderCards from "./OrderCards";
import { useParams } from "react-router";

const Order = () => {
  const categories = ["salads", "pizzas", "soups", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const drinks = menu.filter((item) => item.category === "drinks");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div className="bg-white text-black">
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <div>
        <Cover
          img={orderCover}
          title={"order food"}
          desc={"WOULD YOU LIKE TO TRY A DISH?"}
        ></Cover>
      </div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className={"uppercase text-center text-xl my-15"}>
          <Tab>salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderCards items={salads}></OrderCards>
        </TabPanel>
        <TabPanel>
          <OrderCards items={pizzas}></OrderCards>
        </TabPanel>
        <TabPanel>
          <OrderCards items={soups}></OrderCards>
        </TabPanel>
        <TabPanel>
          <OrderCards items={desserts}></OrderCards>
        </TabPanel>
        <TabPanel>
          <OrderCards items={drinks}></OrderCards>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
