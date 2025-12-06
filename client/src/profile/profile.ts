import {define, element, expose, turbo, TurboElement} from "turbodombuilder";
import {ProfileView} from "./profile.view";
import {ProfileModel} from "./profile.model";
import "./profile.css";

@define("profile-element")
export class Profile extends TurboElement<ProfileView, ProfileModel> {
}

export function profile(properties = {}): Profile {
    turbo(properties).applyDefaults({
        tag: "profile-element",
        view: ProfileView,
        model: ProfileModel
    });
    return element({...properties}) as Profile;
}