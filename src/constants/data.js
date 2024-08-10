export const REDIRECT_TIME = 3000;
export const mockUsers = [
  {
    id: 1,
    email: "sonu@gmail.com",
    password: "12345",
    fullName: "sonu Kumar",
    mobile: "8092059340",
    organisationId: "Dehaat12345",
    organisation: "Dehaat",
    designation: "SDE",
    dob: "01-01-2000",
    city: "Gurugram",
    pinCode: "122001",
  },
  {
    id: 2,
    email: "amit@gmail.com",
    password: "54321",
    fullName: "Amit Kumar Surana",
    mobile: "8092059341",
    organisationId: "Abc54321",
    organisation: "Abc",
    designation: "SDE-1",
    dob: "01-01-1999",
    city: "Delhi",
    pinCode: "122003",
  },
];

export const organisationList = [
  {
    id: "org1",
    name: "IIT Delhi",
    isAllowed: true,
  },
  {
    id: "org2",
    name: "IIT Bombay",
    isAllowed: true,
  },
  {
    id: "org3",
    name: "IIT Madras",
    isAllowed: false,
  },
  {
    id: "org4",
    name: "NIT Jamshedpur",
    isAllowed: true,
  },
  {
    id: "org5",
    name: "NIT Warangal",
    isAllowed: true,
  },
  {
    id: "org6",
    name: "NIT Trichy",
    isAllowed: true,
  },
  {
    id: "org7",
    name: "Punjab Technical University(PTU)",
    isAllowed: true,
  },
  {
    id: "org8",
    name: "NSIT Delhi",
    isAllowed: false,
  },
];

export const INITIAL_USER = {
  id: "",
  email: "",
  password: "",
  fullName: "",
  mobile: "",
  organisationId: "",
  organisation: "",
  designation: "",
  dob: "",
  city: "",
  pinCode: "",
};
