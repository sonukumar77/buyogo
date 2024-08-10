import { mockUsers } from "../constants/data";

export function findUser(key,value){
    return mockUsers.find((user) => user[key] === value)
 }
 