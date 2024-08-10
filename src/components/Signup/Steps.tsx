import React from "react";
import Input from "../base/Input.tsx";
import SelectInput from "../base/SelectInput.tsx";
import { organisationList } from "../../constants/data.js";

export const RegisterStep1 = ({ userInfo, handleInput }) => {
  return (
    <>
      <Input
        type="email"
        value={userInfo.email}
        label="Enter Email ID"
        onInputChange={(e) => handleInput(e)}
        placeholder="Loremipsum@gmail.com"
        inputStyle="mt-1"
        name="email"
      />
      <Input
        type="text"
        value={userInfo.fullName}
        label="Enter Full Name"
        onInputChange={(e) => handleInput(e)}
        placeholder="Full Name"
        inputStyle="mt-1"
        name="fullName"
      />
      <Input
        type="password"
        value={userInfo.password}
        label="Create Password"
        onInputChange={(e) => handleInput(e)}
        placeholder="Password"
        inputStyle="mt-1"
        name="password"
      />
    </>
  );
};
export const RegisterStep2 = ({ userInfo, handleInput }) => {
  return (
    <>
      <SelectInput
        name="organisation"
        value={userInfo.organisation}
        label="Organisation-name"
        onSelectChange={(e) => handleInput(e)}
      >
        {organisationList
          .filter((org) => org.isAllowed)
          .map((org) => (
            <option key={org.id} value={org.name}>
              {org.name}
            </option>
          ))}
      </SelectInput>

      <SelectInput
        name="organisationId"
        value={userInfo.organisationId}
        label="Organisation-id"
        onSelectChange={(e) => null}
      >
        <option value={userInfo.organisationId}>
          {userInfo.organisationId}
        </option>
      </SelectInput>

      <Input
        type="text"
        value={userInfo.designation}
        label="Designation"
        onInputChange={(e) => handleInput(e)}
        placeholder="Designation"
        inputStyle="mt-1"
        name="designation"
      />
      <Input
        type="date"
        value={userInfo.dob}
        label="Birth-date"
        onInputChange={(e) => handleInput(e)}
        inputStyle="mt-1 w-full"
        name="dob"
      />
      <div className="flex justify-between items-center gap-4">
        <Input
          type="text"
          value={userInfo.city}
          label="City"
          onInputChange={(e) => handleInput(e)}
          inputStyle="mt-1 w-full"
          name="city"
        />
        <Input
          type="number"
          value={userInfo.PinCode}
          label="PinCode"
          onInputChange={(e) => handleInput(e)}
          inputStyle="mt-1 w-full"
          name="pinCode"
        />
      </div>
    </>
  );
};
// export const RegisterStep3 = () => {
//   return (
//     <div className="w-full h-full flex justify-center items-center flex-col gap-2">
//         <div className="w-24 h-24 bg-green-500 rounded-full text-white flex justify-center items-center">☑️</div>
//         <h1 className="text-2xl">Welcome to solvei8!</h1>
//         <p className="text-center text-gray-500">Redirecting you to login screen this might take a few second...</p>
//     </div>
//   )
// }
