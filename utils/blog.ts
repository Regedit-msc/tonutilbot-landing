import qs from "qs";
import { BlogType, NextSearchParams } from "@types";

export function getStrapiURL(path: string = "/") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

export function getStrapiMedia(media: BlogType["attributes"]["bannerImage"]) {
  if (media) {
    const url = media?.data?.attributes?.url || "";
    const imageUrl = url?.startsWith("/") ? getStrapiURL(url) : url;
    return imageUrl;
  }
}

export async function blogApiWrapper(
  path: string,
  urlParamsObject?: Record<string, unknown>,
  options?: Record<string, unknown>
) {
  const mergedOptions = {
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_TOKEN,
      "Content-Type": "application/json",
    },
    ...options,
  };
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;
  const response = await fetch(requestUrl, mergedOptions);
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
}

export async function getBlogs<T>(searchParams: NextSearchParams) {
  const category = searchParams?.category ?? "featured";
  let urlParamsObject = {};
  switch (category) {
    case "all":
      urlParamsObject = {
        populate: "*",
        filters: {
          isScrim: true,
        },
      };
      break;
    case "featured":
      urlParamsObject = {
        populate: "*",
        filters: {
          isScrim: true,
          isFeatured: true,
        },
      };
      break;
    default:
      urlParamsObject = {
        populate: "*",
        filters: {
          isScrim: true,
          categories: { slug: { $in: [category] } },
        },
      };
      break;
  }

  const data = await blogApiWrapper("/articles", urlParamsObject, {
    cache: "no-cache",
  });
  return { ...data } as T;
}

export async function getBlogCategories<T>() {
  const data = await blogApiWrapper(
    "/categories",
    {
      filters: {
        isScrim: true,
      },
    },
    {
      cache: "no-cache",
    }
  );
  return { ...data } as T;
}

export async function getBlog<T>(slug: string) {
  const data = await blogApiWrapper(
    "/articles",
    {
      filters: {
        slug,
        isScrim: true,
      },
      populate: "*",
    },
    {
      cache: "no-cache",
    }
  );
  return { ...data } as T;
}
