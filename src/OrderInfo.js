import React from "react";
import {orderDetailsIcons} from './MockData'
export default function OrderInfo() {
  const orderDetails = [
    { label: "Supplier", value: "East coast Fruits & vegetables" },
    { label: "Shipping date", value: "Thu, Feb 14" },
    { label: "Total", value: "$ 15,445.3" },
    {
      label: "Category",
      value: orderDetailsIcons
    },
    { label: "Department", value: "3244-45-4354" },
    { label: "Status", value: "Awaiting Approval" },
  ];
  return (
    <div className="max-w-7xl mx-auto mt-4 p-4">
      <ul className="flex items-center justify-center p-4 border-gray-300 border-2 rounded-lg">
        {orderDetails.map((item) => {
          return (
            <li
              key={item.id}
              className="p-4 order-details-list-item w-1/5 h-[110px]"
            >
              <div className="flex flex-col items-start justify-between h-full">
                <span className="text-sm font-medium text-gray-500">
                  {item.label}
                </span>
                {typeof item.value == "string" && (
                  <span className="text-sm text-gray-900 font-semibold">
                    {item.value}
                  </span>
                )}
                <div className="flex flex-wrap">
                  {typeof item.value == "object" &&
                    item.value.map((img) => {
                      return (
                        <div
                          dangerouslySetInnerHTML={{ __html: img }}
                          className="mr-3"
                        ></div>
                      );
                    })}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
