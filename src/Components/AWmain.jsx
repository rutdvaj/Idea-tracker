import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65603d6ead21380f39ec");

export const account = new Account(client);

export const databases = new Databases(client);
