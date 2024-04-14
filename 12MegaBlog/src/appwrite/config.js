import conf from "../conf/conf";
import {Client, ID, Databases, Storage, Query} from 'appwrite';

//THIS FILE IS FOR POSTS RELATED SERVICES LIKE CREATE, UPDATE, DELETE, PREVIEW, ETC. 

export class Service{
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
            this.databases = new Databases(this.client)
            this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,   // bcoz we are updating slug(means a particular document so we take that doc's id)
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
    }

    async deletePost(slug){ //we only want slug(id) for deletePost
        try {
            await this.databases.deleteDocument(    //we don't have to return anything, we just have to delete the document
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;    //we are returning this to show the user that we have deleted the post 
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return false    //if there is a error
        }
    }

    //for Single Post
    async getPost(slug){    
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]){    //queries is a variable, status is a key, while active is value
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                //we have to pass queries below:
                queries,
                //we can also pass other parameters (pagenation, results, etc.)
                // 100,
                // 0
            )
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return false
        }
    }

    //file upload service(method)

    //we 'll use 2 services-> 1)uploadFile 2)deleteFile
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,  //['BUCKET_ID']
                ID.unique(),    //UNIQUE_ID
                file            //that file has been uploaded(that above same parameter)
            )
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return false
        }
    }

    async deleteFile(fileId){     //we have to pass the file id(which the user wants to delete), we get this from the above ID.unique()
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId             //the file has been deleted(that above same parameter) 
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return false
        }
    }

    //since there is no promise(we directly gets the resouce url), we don't have to use async, await, it has a very fast response
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
    //to download the file(CREATED BY ME)
    getFileDownload(fileId){
        return this.bucket.getFileDownload(
            conf.appwriteBucketId,
            fileId
        )
    }
}
const service = new Service()
export default service
// NOTES: 
// most of the starting 'll be same as auth.js
// you can take the serives(Storage, Query) as per your need by reading the documentation
// we are exporting the object service 
// we'll take the servies(databases, bucket), same as we had taken the account in auth.js
// now we have to fill the variables(databases, bucket) same as we had done with account in auth.js
// we actually call services to bucket(but we can call as we can).
// we created the method createPost which takes the parameters, we 'll also create a method for featuredImage also.
// parameters that we want for databases.createDocument(APPWRITE_DATABASE_ID, APPWRITE_COLLECTION_ID, DOCUMENT_ID, {})
// for what slug value the user 'll pass we 'll take it as DOCUMENT_ID,  we can also take id.unique()
// at last we are creating the object, to take the user's content, what we have to show
// in the updatePost we are taking slug out of the object, bcoz we are using it as DOCUMENT_ID, so it's easy to access the value from outside the object of updatePost
// After creating deletePost, now we can either want a single post(for it we want a single slug(id)) or all the posts
// for getPosts(getting all the posts) we only want to show the user that we want only that posts whose status type is active.
//at the end-> now we 'll also use redux & create the store, so that the store also knows that the user is logedIn or logOut