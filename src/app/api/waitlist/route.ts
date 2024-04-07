import { addHubspotContact, getHubspotContact } from "@utils/waitlist";

export async function POST(request: Request) {
  const requestBody = await request.json();
  try {
    const data = await getHubspotContact(requestBody.email);
    if (data?.product === process.env.WAITLIST_PRODUCT_NAME) {
      return Response.json({
        status: "success",
        message: "You are already on the waitlist!!🥳",
      });
    } else {
      await addHubspotContact(requestBody.email);
      return Response.json({
        status: "success",
        message: "Yippee!! You have been added to the waitlist🎉",
      });
    }
  } catch (error) {
    console.error(error);
    return Response.json({
      status: "error",
      message: "Something went wrong",
      data: error,
    });
  }
}
