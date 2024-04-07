export async function addHubspotContact(email: string) {
  const response = await fetch(
    `${process.env.HUBSPOT_API_URL}/crm/v3/objects/contacts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
      },
      body: JSON.stringify({
        properties: {
          email,
          product: process.env.WAITLIST_PRODUCT_NAME,
        },
      }),
    }
  );
  if (!response.ok) {
     console.error(response.statusText);
    if (response.status === 409) {
      const resD = await response.json();
      if (resD.message.toLowerCase().includes("contact already exists")) {
        return await updateUserProduct(email);
      }
    } else {
      console.error(response.statusText);
      throw new Error(`An error occured please try again`);
    }
  }
  const data = await response.json();
  return data;
}

export const getHubspotContact = async (email: string) => {
  const response = await fetch(
    `${process.env.HUBSPOT_API_URL}/crm/v3/objects/contacts/batch/read`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
      },
      body: JSON.stringify({
        properties: ["email", "product"],
        idProperty: "email",
        inputs: [
          {
            id: email,
          },
        ],
      }),
    }
  );
  if (!response.ok || response.status !== 200) {
    console.error(response.status);
    return;
  }
  const data = await response.json();
  return data.results[0]?.properties;
};

const updateUserProduct = async (email: string) => {
  const contact = (await getHubspotContact(email));
  const contactID = contact?.hs_object_id || contact?.id;
  const response = await fetch(
    `${process.env.HUBSPOT_API_URL}/crm/v3/objects/contacts/${contactID}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
      },
      body: JSON.stringify({
        properties: {
          product: process.env.WAITLIST_PRODUCT_NAME,
        },
      }),
    }
  );
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }

  const data = await response.json();
  return data;
};
