// hooks
import { useState } from "react";
// react icons
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
// object data
import pricingFeatures from "./pricing_features.object";
// styles
import '../../styles/lod_styles.css';

const PricingPlan = () => {
  const [activePlan, setActivePlan] = useState("monthly"); // Initial active plan

  const pricingData = {
    monthly: {
      price: {
        regular: 15,
        pro: 25
      },
      features: {...pricingFeatures},
    },
    annually: {
      price: {
        regular: 180,
        pro: 300
      },
      features: {...pricingFeatures},
    },
  };

  const handlePlanChange = (plan) => {
    setActivePlan(plan);
  };

  return (
    <div>
      {/* pricing tab */}
      <ul className="flex justify-center items-center">
        <li
          className={`px-[5rem] py-[1rem] text-[2rem] cursor-pointer font-medium border border-[#f37d7d] ${
            activePlan === "monthly" ? "text-white bg-[#f37d7d]" : "text-textBold"
          }`}
          onClick={() => handlePlanChange("monthly")}
        >
          Monthly
        </li>
        <li
          className={`px-[5rem] py-[1rem] text-[2rem] cursor-pointer font-medium border border-[#f37d7d] ${
            activePlan === "annually" ? "text-white bg-[#f37d7d]" : "text-textBold"
          }`}
          onClick={() => handlePlanChange("annually")}
        >
          Annually
        </li>
      </ul>
      {/* pricing content */}
      <table className="mt-[4.5rem] w-full table-fixed border-collapse border border-[#fde0e0]">
          {/* header */}
          <thead className="bg-[#fdd2d2]">
            <tr>
              <th rowSpan={2} className="border-x border-[#fde0e0] text-[3rem] text-textBold font-normal text-left px-[3rem] py-[4.4rem]">Pick Your Plan</th>
              <th className="border-x border-[#fde0e0] bg-[#fdd2d2] p-[1.5rem] font-normal text-[1.8rem] text-textBold">Regular</th>
              <th className="border-x border-[#fde0e0] bg-[#fdd2d2] p-[1.5rem] font-normal text-[1.8rem] text-textBold">PRO</th>
            </tr>
            <tr>
              <th className="border-x border-[#fde0e0] text-[3rem] text-textBold py-[1.4rem]">${pricingData[activePlan].price.regular} <br/> <span className="text-[1.2rem] font-normal text-textNormal">Billed {activePlan.charAt(0).toUpperCase() + activePlan.slice(1)}</span></th>
              <th className="border-x border-[#fde0e0] text-[3rem] text-textBold py-[1.4rem]">${pricingData[activePlan].price.pro} <br/> <span className="text-[1.2rem] font-normal text-textNormal">Billed {activePlan.charAt(0).toUpperCase() + activePlan.slice(1)}</span></th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {/* max active employees */}
            <tr>
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Max Active Employees</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem] text-textNormal">{pricingData[activePlan].features.maxActiveEmployees.regular}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem] text-textNormal">{pricingData[activePlan].features.maxActiveEmployees.pro}</td>
            </tr>
            {/* file storage */}
            <tr className="bg-[#fdd2d2]">
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">File Storage</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem] text-textNormal">{pricingData[activePlan].features.fileStorage.regular}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem] text-textNormal">{pricingData[activePlan].features.fileStorage.pro}</td>
            </tr>
            {/* Clients */}
            <tr>
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Clients</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.clients.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.clients.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Employees */}
            <tr className="bg-[#fdd2d2]">
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Employees</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.employees.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.employees.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Projects */}
            <tr>
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Projects</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.projects.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.projects.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Attendance */}
            <tr className="bg-[#fdd2d2]">
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Attendance</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.attendance.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.attendance.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Tasks */}
            <tr>
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Tasks</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.tasks.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.tasks.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Estimates */}
            <tr className="bg-[#fdd2d2]">
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Estimates</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.estimates.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.estimates.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Invoices */}
            <tr>
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Invoices</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.invoices.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.invoices.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Payments */}
            <tr className="bg-[#fdd2d2]">
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Payments</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.payments.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.payments.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Time Logs */}
            <tr>
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Time Logs</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.timeLogs.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.timeLogs.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Tickets */}
            <tr className="bg-[#fdd2d2]">
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Tickets</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.tickets.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.tickets.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Events */}
            <tr>
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Events</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.events.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.events.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Notices */}
            <tr className="bg-[#fdd2d2]">
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Notices</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.notices.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.notices.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Leaves */}
            <tr>
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Leaves</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.leaves.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.leaves.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Leads */}
            <tr className="bg-[#fdd2d2]">
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Leads</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.leads.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.leads.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Holidays */}
            <tr>
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Holidays</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.holidays.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.holidays.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Products */}
            <tr className="bg-[#fdd2d2]">
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Products</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.products.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.products.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Expenses */}
            <tr>
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Expenses</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.expenses.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.expenses.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Contracts */}
            <tr className="bg-[#fdd2d2]">
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Contracts</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.contracts.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.contracts.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Reports */}
            <tr>
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Reports</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.reports.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.reports.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Orders */}
            <tr className="bg-[#fdd2d2]">
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Orders</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.orders.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.orders.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Knowledge Base */}
            <tr>
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Knowledge Base</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.knowledgeBase.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.knowledgeBase.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Bank Account */}
            <tr className="bg-[#fdd2d2]">
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Bank Account</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.bankAccount.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.bankAccount.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Messages */}
            <tr>
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Messages</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.messages.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.messages.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Assets */}
            <tr className="bg-[#fdd2d2]">
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Assets</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.assets.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.assets.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
            {/* Payroll */}
            <tr>
              <td className="border-x border-[#fde0e0] py-[1rem] px-[2rem] text-textNormal">Payroll</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.payroll.regular? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
              <td className="border-x border-[#fde0e0] text-center py-[1rem] px-[2rem]">{pricingData[activePlan].features.payroll.pro? <FaCheckCircle className="text-[1.4rem] mx-auto text-pink-700" /> : <MdCancel className="text-[1.4rem] mx-auto text-red-700" />}</td>
            </tr>
          </tbody>
      </table>
    </div>
  );
};

export default PricingPlan;
