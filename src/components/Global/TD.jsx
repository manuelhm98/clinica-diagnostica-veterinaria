import React from "react";

export default function TD({ name, children,onclick }) {
  return (
    <td onClick={onclick} className="px-5 py-3 border-b cursor-pointer border-gray-200 bg-white text-sm w-2/5">
      <div className="flex items-center text-center">
        <div className="ml-3">
          {name ? (
            <p className="text-gray-600 text-xs whitespace-nowrap text-center">
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
