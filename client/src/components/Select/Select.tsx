import React from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const Select = ({ value, onChange, options }: Props) => {
  const handleCahngeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select value={value} onChange={handleCahngeSelect}>
      {options.map((session) => {
        return (
          <option key={session} value={session}>
            {session}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
