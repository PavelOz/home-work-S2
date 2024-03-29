import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
  users: UserType[]; 
  addUserCallback: (name: string) => void; 
};

export const pureAddUser = (
  name: string,
  setError: (error: string) => void,
  setName: (name: string) => void,
  addUserCallback: (name: string) => void
) => {
  name === "" ? setError("Error") : addUserCallback(name);
  setName("");
  console.log(name); 
};

export const pureOnBlur = (name: string, setError: (error: string) => void) => {
  if (name === "") {
    setError("Error");
  } 
};

export const pureOnEnter = (
  e: KeyboardEvent<HTMLInputElement>,
  addUser: () => void
) => {
  if (e.key === "Enter") {
    addUser();
  }

  
};


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>(""); 
  const [error, setError] = useState<string>(""); 

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    if (error) {
        setError("");
      }
    setName(e.target.value); 

  
  };
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
  };

  const onBlur = () => {
    pureOnBlur(name, setError);
  };

  const onEnter = (e: any) => {
    pureOnEnter(e, addUser);
  };

  const totalUsers = users.length; 
  const lastUserName = users[users.length-1]?.name || '';
  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  );
};

export default GreetingContainer;
