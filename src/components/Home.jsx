import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import useAppStore from "../store/useAppStore";
import Calculation from "./Calculation";
import { CalculatorIcon, HashIcon } from "lucide-react";
import NoCalculation from "./NoCalculation";

const Home = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const unitQuery = searchParams.get("unit");
  const { totalUnit, setTotalUnit, totalCost, calculateBill } = useAppStore();

  const [unit, setUnit] = useState("");

  useEffect(() => {}, []);

  useEffect(() => {
    const numberUnitQ = Number(unitQuery);
    if (numberUnitQ) {
      setUnit(unitQuery);
      setTotalUnit(unitQuery);
      calculateBill(unitQuery);
    } else {
      setUnit(totalUnit);
      handleCalculate(totalUnit);
    }
  }, [unitQuery]);

  const handleCalculate = (unit) => {
    navigate(`/?unit=${unit}`);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="m-2 p-1">
        <div className="mx-auto max-w-md flex gap-1 justify-center">
          <label className="input input-bordered w-full flex items-center gap-1">
            <HashIcon />
            <input
              value={unit}
              onChange={(e) => {
                const unit = Number(e.target.value);
                if (unit && e.target.value.length < 10) setUnit(unit);
                if (e.target.value === "") setUnit("");
              }}
              className="w-full h-full"
              placeholder="Total Units"
            />
          </label>

          <button
            onClick={() => handleCalculate(unit)}
            className="btn btn-primary "
          >
            <span>Calculate</span>
          </button>
        </div>
        <div className="mt-4 ">
          {!totalCost ? <NoCalculation /> : <Calculation />}
        </div>
      </div>
    </div>
  );
};

export default Home;
