import conf from "../conf/conf.js";
import {Client, Account, ID} from 'appwrite';   //this is needed for authentication

//THIS FILE IS FOR AUTORIZATIO RELATED SERVICES LIKE CREATE ACCOUNT, DELETE, ETC.
export class AuthService{
    client = new Client()
    account;

    constructor() { //the constructor function 'll gets executed or called by default.
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId) //now these values have arrived to this.client(means client)

        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)

            if(userAccount){
                // call another method
                return this.login({email, password})
            } else{
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error) 
        }
        return null
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error) 
        }
    }
}

const authService = new AuthService()

export default authService



// NOTES:
// we imported conf bcoz we wanted necessary db&other ids
// whenever someone 'll use this class then he has to create a new object from the class, then only he can use the methods. So better approach 'll be that we create a new object only & then export it.
// authService is an object
// when the authService object gets called then the account gets created automatically bcoz of the new Account, which is defined in the constructor function.
// now we have to create a client & account, bcoz all methods 'll run on account only.
// we can create the properties like .setEndpoint & .setProject but we want that whenever someone creates an object then only the client should made & then the user should have the access of account. So we have created a constructor
// so when the object 'll made then which method gets called by itself, & we have to put the functionality inside that function
// we have done the exact samework as in the documentation but just done all the work in the class, whenever an object get made.
// the above class AuthService is a more better(quality code) approach then the documentation
// Now creating a account-> account.create('[USER_ID]', 'email@example.com', ''); the last argument is password, we can also give other fields.
// we are using async, await bcoz we don't want to go further if the account creation has not done.
// if the user account gets created then it gets login automatically, since we have called the login method if the user account gets created.
// now we have to create more functions 1)logout, 2)if the user directly lands on the home page then we have to tell him that whether he is login or out(getCurrentUser).
// we have to not pass any arguments to getCurrentUser, we can directly ask from the account
// we 'll create account.get & create in the trycatch, bcoz we might get issues.
// we are returning null when the account exists & even if the account does not exist, in both cases we are returning null. If the account does not exist then instead of showing the error we are returning null, but if the acc. exist then also we are returning null. We can also use ifelse syntax
// delete session means logout, accout.deleteSessions(), we can pass the current session(account), or lists of sessions. There is also accout.deleteSession which only takes id of current session, but we are using accout.deleteSessions so that all sessions get deleted(account from all browsers)
// we can access all the values(methods) by using authService
// This is a future proof code means we can access all these methods & values with any backend service whether it is firebase, appwrite or any other, we just have to remember that we take the correct parameters & call the correct methods.
// Now if we have to use the authentication in the future with appwrite then we can just copy paste this code. Save this code.
// Now we 'll create & use DB service from appwrite.
// SUMMARY:- 1) we have to create the client 2) we have to create the account bcoz we have to done all the work on account only, we have to create the Account first, then login, delete, getUser etc. All these are the services of Account, but we can create more services depend on what we make(twitter, blog app, video based service).
// We are making blog app, so we are taking images also & some values are also going in the collection of DB. We can also make the storage(bucket) service separately but we'll mix it here 