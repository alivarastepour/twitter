export const YEAR = [
  1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914,
  1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927,
  1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940,
  1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953,
  1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966,
  1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979,
  1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992,
  1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
  2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
  2019, 2020, 2021, 2022,
].reverse();

// export const MONTH = [
//   { month: "January", dayCount: 31 },
//   { month: "February", dayCount: 28 },
//   { month: "March", dayCount: 31 },
//   { month: "April", dayCount: 30 },
//   { month: "May", dayCount: 31 },
//   { month: "June", dayCount: 30 },
//   { month: "July", dayCount: 31 },
//   { month: "August", dayCount: 31 },
//   { month: "September", dayCount: 30 },
//   { month: "October", dayCount: 31 },
//   { month: "November", dayCount: 30 },
//   { month: "December", dayCount: 31 },
// ];
export const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const DAYS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
export const isLeapYear = (year: number) => {
  return (0 == year % 4 && 0 != year % 100) || 0 == year % 400;
};

export const calculateDaysCount = (year: number | string, month: string) => {
  if (typeof year === "string" || month === "") {
    return DAYS;
  } else {
    if (month === "February") {
      if (isLeapYear(year)) {
        return DAYS.slice(0, 29);
      } else {
        return DAYS.slice(0, 28);
      }
    } else {
      if (
        month === "January" ||
        month === "March" ||
        month === "May" ||
        month === "July" ||
        month === "August" ||
        month === "October" ||
        month === "December"
      ) {
        return DAYS;
      } else {
        return DAYS.slice(0, 30);
      }
    }
  }
};

export const dayMonth = new Map(Object.entries(MONTH));
