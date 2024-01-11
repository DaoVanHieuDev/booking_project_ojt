import React, { useState } from "react";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;
const DateTime = () => {
  const [selectedDateRange, setSelectedDateRange] = useState([]);

  const handleRangePickerChange = (dates) => {
    setSelectedDateRange(dates);
  };
  //   console.log(selectedDateRange[0]?.format("YYYY-MM-DD"), "batdau");
  //   console.log(selectedDateRange[1]?.format("YYYY-MM-DD"), "ketthuc");

  return (
    <Space direction="vertical" size={15}>
      <RangePicker
        onChange={handleRangePickerChange}
        selected={selectedDateRange}
      />
    </Space>
  );
};

export default DateTime;
