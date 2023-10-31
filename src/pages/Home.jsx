import React from "react";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import AddForm from "../components/AddForm";

const Home = () => {
  return (
    <div className=" max-w-5xl m-auto relative">
      {/* top cards */}
      <div className="m-5 flex gap-x-4">
        {/* spend card */}
        <div className="w-[230px] p-4 h-[143px] bg-[#FFEBEB] border-[#FFB8B8] border-[1px] flex flex-col justify-around items-center ">
          {/* icon */}
          <div className="flex w-full">
            <ArrowUpIcon className="h-6 w-6 text-white rounded-full bg-[#FE1E1E]" />
          </div>
          {/* title */}
          <span className="flex w-full">Spend</span>

          {/* amount */}
          <div className="flex w-full justify-between">
            <span>$ 6,000.00</span>
            <span>20.5%</span>
          </div>
        </div>

        {/* income card */}
        <div className="w-[230px] p-4 h-[143px] bg-[#EEFEEC] border-[#A7F99A] border-[1px] flex flex-col justify-around items-center ">
          {/* icon */}
          <div className="flex w-full">
            <ArrowDownIcon className="h-6 w-6 text-white rounded-full bg-[#24BA0C]" />
          </div>
          {/* title */}
          <span className="flex w-full">Income</span>

          {/* amount */}
          <div className="flex w-full justify-between">
            <span>$ 10,000.00</span>
            {/* <span>12.5%</span> */}
          </div>
        </div>

        {/* add card */}
        <div className="w-[230px] p-4 h-[143px] bg-[#bbc9ec] border-[#1E5DFE] border-[1px] flex flex-col justify-around items-center cursor-pointer ">
          {/* icon */}
          <div className="flex w-full">
            <PlusIcon className="h-6 w-6 text-white rounded-full bg-[#1E5DFE]" />
          </div>

          {/* amount */}
          <div className="flex w-full justify-between">
            <span>Add Expenses</span>
          </div>
        </div>
      </div>

      {/* table */}
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Title
              </th>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Amount
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Gas money
              </th>
              <td class="px-6 py-4">12/10/2021</td>
              <td class="px-6 py-4">$236.00</td>
              <td class="px-6 py-4">$travelling</td>
              <td class="px-6 py-4 flex gap-x-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>

                <a href="#" class="font-medium text-[#FE1E1E] hover:underline">
                  Delete
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Grocery cost
              </th>
              <td class="px-6 py-4">12/10/2021</td>
              <td class="px-6 py-4">$236.00</td>
              <td class="px-6 py-4">travelling</td>
              <td class="px-6 py-4 flex gap-x-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>

                <a href="#" class="font-medium text-[#FE1E1E] hover:underline">
                  Delete
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                House rental
              </th>
              <td class="px-6 py-4">12/10/2021</td>
              <td class="px-6 py-4">$236.00</td>
              <td class="px-6 py-4">travelling</td>
              <td class="px-6 py-4 flex gap-x-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>

                <a href="#" class="font-medium text-[#FE1E1E] hover:underline">
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <AddForm /> */}
    </div>
  );
};

export default Home;
