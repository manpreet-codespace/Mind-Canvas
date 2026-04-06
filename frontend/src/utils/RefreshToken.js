import axios from "axios";

export const RefreshToken = async() => {
    const response=  await axios.post("http://localhost:8000/api/auth/refresh",
      {},
      {withCredentials:true}
    );

    const newAccessToken= localStorage.setItem("token",response.data.accessToken);
    return newAccessToken;

}
