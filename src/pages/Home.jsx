import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

import { HiArrowLongDown, HiArrowSmallUp } from "react-icons/hi2";
const Home = () => {
  return (
    <div>
      <div className="flex items-center ">
        <div className="flex flex-col text-[#d9d9d9] h-[250px] w-[350px] shadow-lg m-[20px]">
          <div className="flex flex-col items-center justify-center mt-[10%]">
            <h1 className="text-[20px] font-semibold">Users </h1>
            <div className="flex items-center mt-[20px]">
              <HiArrowSmallUp className="text-[28px] text-green-500" />
              <HiArrowLongDown className="text-[28px] text-yellow-500" />
            </div>
            <span className="mt-[20px] text-[18px]">200</span>
          </div>
        </div>
        <div className="flex flex-col text-[#d9d9d9] h-[250px] w-[350px] shadow-lg m-[20px]">
          <div className="flex flex-col items-center justify-center mt-[10%]">
            <h1 className="text-[20px] font-semibold">Delivered Parcels </h1>
            <div className="flex items-center mt-[20px]">
              <HiArrowSmallUp className="text-[28px] text-green-500" />
              <HiArrowLongDown className="text-[28px] text-yellow-500" />
            </div>
            <span className="mt-[20px] text-[18px]">200</span>
          </div>
        </div>
        <div className="flex flex-col text-[#d9d9d9] h-[250px] w-[350px] shadow-lg m-[20px]">
          <div className="flex flex-col items-center justify-center mt-[10%]">
            <h1 className="text-[20px] font-semibold">Pending Parcels </h1>
            <div className="flex items-center mt-[20px]">
              <HiArrowSmallUp className="text-[28px] text-green-500" />
              <HiArrowLongDown className="text-[28px] text-yellow-500" />
            </div>
            <span className="mt-[20px] text-[18px]">30</span>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        {/* <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "series A" },
                { id: 1, value: 15, label: "series B" },
                { id: 2, value: 20, label: "series C" },
              ],
              innerRadius: 30,
              outerRadius: 100,
              paddingAngle: 5,
              cornerRadius: 5,
              startAngle: -45,
              endAngle: 225,
              cx: 150,
              cy: 150,
            },
          ]}
        /> */}

        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "Delivered", color: "#22c55e" }, // green
                { id: 1, value: 15, label: "In Transit", color: "#eab308" }, // yellow
                { id: 2, value: 20, label: "Pending", color: "#ef4444" }, // red
              ],
              innerRadius: 30,
              outerRadius: 100,
              paddingAngle: 5,
              cornerRadius: 5,
            },
          ]}
          width={400}
          height={400}
        />

        <div className="h-[350px] w-[350px] shadow-lg p-[20px]">
          <h2 className="flex px-[20px] text-[#ccc]">Recent Users</h2>
          <ol className="flex font-semibold flex-col justify-end px-[20px] mt-[10px] text-[#ccc]">
            <li>1.Bhutni</li>
            <li>2.Rakoshi</li>
            <li>3.kepi</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;
