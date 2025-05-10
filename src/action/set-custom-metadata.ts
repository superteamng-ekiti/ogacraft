"use server";

import axios from "axios";
// import { getAccessToken } from "@privy-io/react-auth";

export async function setCustomMetaData({
  user_type,
  user_id,
  accessToken
}: {
  user_type: string;
  user_id: string;
  accessToken: string;
}) {
//   const accessToken = await getAccessToken();
  const config = {
    method: "post",
    url: `${process.env.PRIVY_BASE_URL}users/${user_id}/custom_metadata`,
    headers: {
      "privy-app-id": process.env.NEXT_PUBLIC_PRIVY_APP_ID,
      Authorization: `Bearer ${accessToken}`,
    },
    data: {
      custom_metadata: {
        user_type,
      },
    },
  };

  axios(config)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}
