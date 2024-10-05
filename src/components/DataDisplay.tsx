import React from 'react';
import { Download } from 'lucide-react';

const DataDisplay: React.FC = () => {
  // Mock data for demonstration
  const data = [
    { id: 1, name: 'Product 1', price: '$19.99' },
    { id: 2, name: 'Product 2', price: '$29.99' },
    { id: 3, name: 'Product 3', price: '$39.99' },
  ];

  return (
    <div className="p-4 animate-slideIn">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Data Display</h2>
        <button className="btn btn-primary flex items-center">
          <Download className="w-4 h-4 mr-2" />
          Download CSV
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-700 p-2 text-left">ID</th>
              <th className="border border-gray-700 p-2 text-left">Name</th>
              <th className="border border-gray-700 p-2 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-800 transition-colors duration-300">
                <td className="border border-gray-700 p-2">{item.id}</td>
                <td className="border border-gray-700 p-2">{item.name}</td>
                <td className="border border-gray-700 p-2">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataDisplay;