import React from "react";
import axios from "axios";
import { authentication, loginUser, registerUser } from "../config/server-config";

export const authenticationCheck = async () => {
  try {
    const response = await axios.get(authentication, {
      headers: {
        authorization: `Bearear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2VtYWlsIjoiamVlZ2FyQGdtYWlsLmNvbSIsImlhdCI6MTcwNDEwODkxOCwiZXhwIjoxNzA0MTEyNTE4fQ.gD-V3AV_sbTwVGofPJC7KnV-VTd9ywFgO-fFSgsqKUs`,
      },
    });
    if (response) {
      console.log("response", response);
      return response;
    } else return false;
  } catch (err) {
    console.log("authentication", err);
    return false;
  }
};

export const loginUserReq = async (req) => {
    try {
      const response = await axios.post(loginUser, {req}, {
        // headers: {
        //   authorization: `Bearear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2VtYWlsIjoiamVlZ2FyQGdtYWlsLmNvbSIsImlhdCI6MTcwNDEwODkxOCwiZXhwIjoxNzA0MTEyNTE4fQ.gD-V3AV_sbTwVGofPJC7KnV-VTd9ywFgO-fFSgsqKUs`,
        // },
      });
      if (response) {
        console.log("response", response);
        return response;
      } else return false;
    } catch (err) {
      console.log("authentication", err);
      return false;
    }
  };

  export const registerUserReq = async (req) => {
    try {
      const response = await axios.post(registerUser, {req}, {
        // headers: {
        //   authorization: `Bearear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2VtYWlsIjoiamVlZ2FyQGdtYWlsLmNvbSIsImlhdCI6MTcwNDEwODkxOCwiZXhwIjoxNzA0MTEyNTE4fQ.gD-V3AV_sbTwVGofPJC7KnV-VTd9ywFgO-fFSgsqKUs`,
        // },
      });
      if (response) {
        console.log("response", response);
        return response;
      } else return false;
    } catch (err) {
      console.log("authentication", err);
      return false;
    }
  };
