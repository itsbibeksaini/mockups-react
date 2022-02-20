interface INewProfilePanelState {
    value: number,
    newProfile: INewProfileForm
}

interface INewProfileForm{
    username: string,
    first_name: string,
    last_name: string,
    password:string
    confirm_password:string
    language: string,
    email:string
    
}

export default INewProfilePanelState;