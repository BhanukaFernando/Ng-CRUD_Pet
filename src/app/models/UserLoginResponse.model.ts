import { Authentication } from "./Authentication.model";
import { User } from "./User.model";

export interface  UserLoginResponse {
    User : User | null;
    Authentication : Authentication | null;

}