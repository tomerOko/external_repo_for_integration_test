import * as Request from "supertest";

const main_server = Request("http://backend.container:3000");



describe("health check", () => {
   describe("get request", () => {
      it("when sending request, shuld response with status 200 and 'ok' string", async () => {
         //Arrange
         const url = `/health_check`;

         //Act
         const main_server_respone = await main_server.get(url);

         //Assert
         expect(main_server_respone.status).toEqual(200);
      });
   });
});
