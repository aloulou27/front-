export enum role{
    Manager="manager",
     TeamLeader= "teamLead", 
    Consultant="Consultant",
    SoftwareEngineer="softwareEngineer"
}


export class user{
    iduser : Number ;
    nom : String ;
    email : String ;
    motDePasse : String ;
    roleuser: role;
}