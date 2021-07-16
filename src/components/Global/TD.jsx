import React from "react";

export default function TD({ name, children }) {
  return (
    <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm w-2/5">
      <div className="flex items-center text-center">
        <div className="ml-3">
          {name ? (
            <p className="text-gray-900 text-xs whitespace-nowrap text-center">
              {name}
            </p>
          ) : (
            <div>{children}</div>
          )}
        </div>
      </div>
    </td>
  );
}
