export interface UserName {
  first: string;
  last: string;
}

export interface UserLocation {
  city: string;
  state: string;
  country: string;
}

export interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface UserDob {
  date: string;
  age: number;
}

export interface UserLogin {
  uuid: string;
}

export interface User {
  name: UserName;
  location: UserLocation;
  email: string;
  phone: string;
  dob: UserDob;
  picture: UserPicture;
  login: UserLogin;
}

export interface RandomUserApiResponse {
  results: User[];
  info: any;
}
