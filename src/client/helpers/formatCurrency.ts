import numeral from "numeral";

const formatCurrency = (value: number) =>
  `${numeral(value).format("0,00.00")} zł`;

export { formatCurrency };
