// CONF.JS (in this file) we have our ENVIRONMENT VARIABLES.
const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf

//We have created this file so that we don't have to writhe the variable name agian & again & instead created an object to access all the var.s from it. This prc.s is get followed in almost all production grade apps & we also always want the id in Strin format, so we have converted all the id's to string previously, so we don't get problems later on