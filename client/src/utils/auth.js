import decode from "jwt-decode";
import jwt_decode from "jwt-decode";

class AuthService {
  getUser() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token ? true : false;
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("id_token");
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem("id_token");
  }

  login(token) {
    console.log("Starting Login Method----------");
    localStorage.setItem("id_token", token);
    var decoded = jwt_decode(token);
    console.log("Decoded value:----", decoded.data._id);
    localStorage.setItem("user_id", decoded.data._id);
    window.location.assign("/mat?uid=" + token);
  }

  logout() {
    localStorage.removeItem("id_token");
    window.location.reload();
  }
}

export default new AuthService();
