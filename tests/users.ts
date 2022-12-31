import * as Request from "supertest";

const main_server = Request("http://backend.container:3000");


// test case for create users
describe("user service", () => {


   // describe("create user ", () => {

   //    //Arrange
   //    const url = `/api/users/createUser`;
   //    const body = {
   //       country: "IL",
   //       name: "some user name",
   //       email: "some_user@gamil.com"
   //    };


   //    //Act
   //    let main_server_respone;
   //    it ("act", async () => {
   //          main_server_respone = await main_server.post(url).send(body);
   //    })


   //    //Assert
   //    it("when creating new user, shuld response with 200 status ", async () => {
   //       expect(main_server_respone.status).toEqual(200);
   //    });
   //    it ("when creating new user, shuld response with 'created' object", async () => {
   //       expect(main_server_respone.body).toHaveProperty("created");
   //    })
   //    it ("when creating new user, shuld response with user object with correct values", async () => {
   //       const user = main_server_respone.body.created;
   //       expect (user).toHaveProperty("name");
   //       expect (user).toHaveProperty("country");
   //       expect (user).toHaveProperty("token");
   //       expect (user).toHaveProperty("role");
   //       expect (user).toHaveProperty("created_at");
   //       expect (user).toHaveProperty("updated_at");
   //    })

      
   // });


   describe("create users with the same email ", () => {   

         //Arrange
         const url = `/api/users/createUser`;
         const body = {
            country: "IL",
            name: "some user name",
            email: "some_user@gamil.com"
         };

         //Act
         let main_server_respone;
         let response_body;
         it ("act", async () => {
            main_server_respone = await main_server.post(url).send(body);
            response_body = main_server_respone.body;
          })

         //Assert
         it ("shuld response with 400 status ", async () => {
            expect(main_server_respone.status).toEqual(409);
         });

         it ("shuld response with structured 'error' object", async () => {
            expect(response_body.is_structured_error).toEqual(true);
            expect(response_body.type).toEqual("email allready exist error");
            expect(response_body).toHaveProperty("description");
         });
         
      })

})


