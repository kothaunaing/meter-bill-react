import React from "react";
import { layers } from "../constants";
import useAppStore from "../store/useAppStore";
import adjustPlural from "../utils/adjustPlural";

const Calculation = () => {
  const { totalUnit, totalCost } = useAppStore();

  return (
    <div>
      <table className="table border border-base-300 rounded-lg">
        <thead>
          <tr>
            <th>Unit Layer</th>
            <th>Cost / Unit</th>
            <th>Cost / Layer</th>
          </tr>
        </thead>
        <tbody>
          {layers.map((layer, index) => {
            const isLast = index === layers.length - 1;

            if (layer.from <= totalUnit)
              return (
                <tr key={layer.from + layer?.to}>
                  {!isLast ? (
                    <td>
                      {layer.from} to {layer?.to} ({layer.to + 1 - layer.from})
                    </td>
                  ) : (
                    <td>
                      {layer.from} and above ({totalUnit + 1 - layer.from})
                    </td>
                  )}
                  <td>{layer.cost}</td>
                  {totalUnit >= layer?.to ? (
                    <td>{(layer.to + 1 - layer.from) * layer.cost}</td>
                  ) : (
                    <td>{(totalUnit + 1 - layer.from) * layer.cost}</td>
                  )}
                </tr>
              );
          })}
          <tr className="font-bold">
            <td className="row-span-1">Total Unit</td>
            <td className="font-bold">
              {totalUnit} {adjustPlural(totalUnit, "Unit", "Units")}
            </td>
          </tr>
          <tr className="font-bold">
            <td className="row-span-1">Total Cost</td>
            <td className="font-bold">
              {totalCost} {adjustPlural(totalCost, "Kyat", "Kyats")}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculation;
