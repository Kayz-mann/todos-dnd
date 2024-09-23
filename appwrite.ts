import { Account, Client, Databases, Storage } from "appwrite";

const appwriteClient = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)

const account = new Account(appwriteClient);
const databases = new Databases(appwriteClient);
const storage = new Storage(appwriteClient);


export { appwriteClient, account, databases, storage };
