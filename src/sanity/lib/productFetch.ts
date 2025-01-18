import { createClient } from "next-sanity";

const client = createClient ({
    projectId:"pl6vdkdu",
    useCdn:true,
    dataset:"production",
    // apiVersion: '1'
})

export async function sanityFetchProducts({query,params = {}}:{query:string,params?:any}){
    return await client.fetch(query,params)
}
