import { test, expect, request } from "@playwright/test";

test("Create a booking", async ({ request }) => {
  const post = {
    firstname: "Jim",
    lastname: "Brown",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: "2018-01-01",
      checkout: "2019-01-01",
    },
    additionalneeds: "Breakfast",
  };

  const response = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(post),
    }
  );
  expect(response.status()).toBe(200);
  const body = await response.text();
});

test("get request by book ID", async ({
  page,
}) => {
  const response = await page.request.post(
    "https://my-json-server.typicode.com/webdriverjsdemo/webdriverjsdemo.github.io/posts",
    { data: { title: "Post 4" } }
  );
  expect(response.status()).toBe(201);
  const body = JSON.parse(await response.text());
  expect(body.id).toBe(4);
  expect(body.title).toBe("Post 4");

});
