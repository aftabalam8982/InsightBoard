import React, { useCallback } from "react";

const InputComponent = ({
  type = "text",
  revenueRange,
  setRevenueRange,
  setIsInputTrue,
}) => {
  const [minRevenue] = revenueRange || [0, 100000];

  const handleChange = useCallback(
    (e) => {
      const newValue = Number(e.target.value) || 0;
      setRevenueRange([newValue, 100000]);
    },
    [setRevenueRange]
  );

  const handleBlur = useCallback(() => {
    if (setIsInputTrue) {
      setIsInputTrue(false);
    }
  }, [setIsInputTrue]);

  return (
    <input
      type={type}
      min='0'
      max='100000'
      placeholder={minRevenue}
      value={minRevenue}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default InputComponent;
