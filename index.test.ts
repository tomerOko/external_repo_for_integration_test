import * as Request from "supertest";

const main_server = Request('http://localhost:3000')

describe("getTemplateByCountryEndPoint", () => {
      const test_name = `<construct test name here>`
      it( test_name , async () => {
            const url = `<construct url here>`
            const main_server_respone = await main_server.get(url)
            console.log(url)
            console.log(main_server_respone)   
            expect(main_server_respone.status).toEqual(200);
      }); 
})













// const branch_server = Request('http://localhost:1341/v1')
// const getTemplateByCountryEndPoint = "/verify/applications/types/country/"

// /**
//  * working test cases
//  */

// const countries = ["US","HK","GB","SE","DE","ALL"] 
// //"US","HK","GB","SE","DE","ALL"
// const app_levels = ["1","2"]
// // "1","2"
// const org_id = ''
// const ewallet_id = ''

// describe("getTemplateByCountryEndPoint", () => {
//       countries.forEach( country => {
//             app_levels.forEach( app_level => {
//                   const test_name = `test case for country: ${country}.  app level: ${app_level}`
//                   it( test_name , async () => {
//                         const url = `${getTemplateByCountryEndPoint}${country}/${app_level}`
//                         const main_server_respone = await main_server.get(url)
//                         const expected = main_server_respone.body?.["data"];
//                         const branch_server_response = await branch_server.get(url)
//                         const result = branch_server_response.body?.["data"];
//                         deleteOperationId(result)
//                         deleteOperationId(expected)
//                         console.log(url)
//                         console.log(result)
//                         console.error(expected)   
//                         expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
               
//                   }); 
//             })
//       })
// });

// const deleteOperationId = (obj: Object):void => {
//       if(obj?.["status"]?.["operation_id"]){
//             obj["status"]["operation_id"] = null
//       }
// }