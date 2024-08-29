import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ArrowRight } from "lucide-react";

const processSteps = [
  { name: "User Registration", value: 1 },
  { name: "Transaction Initiation", value: 1 },
  { name: "Payment Processing", value: 1 },
  { name: "Compliance Checks", value: 1 },
  { name: "Funds Transfer", value: 1 },
  { name: "Notification", value: 1 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82CA9D",
];

const strategicElements = [
  { name: "User-Centric Design", value: 85 },
  { name: "Security-First Approach", value: 95 },
  { name: "Regulatory Compliance", value: 90 },
  { name: "Cross-Border Functionality", value: 80 },
  { name: "Scalable Architecture", value: 75 },
];

const KeyFindingsVisualization = () => (
  <div className="p-4 bg-gray-100 rounded-lg">
    <h2 className="text-2xl font-bold mb-4">
      Key Findings: West African P2P Payment Solution
    </h2>

    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2">Key Process Steps</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={processSteps}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name }) => name}
          >
            {processSteps.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>

    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2">
        Strategic Elements Importance
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={strategicElements}>
          <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>

    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2">Key Benefits</h3>
      <ul className="list-none">
        {[
          "Convenient",
          "Secure",
          "Compliant",
          "User-friendly",
          "Leverages existing email infrastructure",
        ].map((benefit, index) => (
          <li key={index} className="flex items-center mb-2">
            <ArrowRight className="mr-2 text-green-500" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">Project Impact</h3>
      <p className="text-lg">
        This project aims to revolutionize cross-border payments in West Africa
        by incorporating advanced financial technology with existing email
        infrastructure.
      </p>
    </div>
  </div>
);

export default KeyFindingsVisualization;
