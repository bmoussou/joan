// Obtiene la valoración y reseñas de la ficha de Google mediante Places API (New).
// Se usa tanto en el Worker de Cloudflare (producción) como en el servidor de Vite (desarrollo).

export interface ReviewsEnv {
  GOOGLE_PLACES_API_KEY?: string;
  /** Opcional: si no se indica, se busca la ficha por nombre. */
  GOOGLE_PLACE_ID?: string;
}

export interface Review {
  author: string;
  authorUrl: string | null;
  photo: string | null;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime: string;
}

export interface ReviewsPayload {
  name: string;
  rating: number;
  total: number;
  url: string | null;
  writeUrl: string | null;
  reviews: Review[];
  fetchedAt: string;
}

const PLACE_QUERY = "Relleu – Psicología Online para Opositores";
const API = "https://places.googleapis.com/v1";

interface PlaceResponse {
  id: string;
  displayName?: { text: string };
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  googleMapsLinks?: { reviewsUri?: string; writeAReviewUri?: string };
  reviews?: Array<{
    rating?: number;
    text?: { text: string };
    originalText?: { text: string };
    relativePublishTimeDescription?: string;
    publishTime?: string;
    authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
  }>;
}

async function resolvePlaceId(key: string): Promise<string> {
  const res = await fetch(`${API}/places:searchText`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": key,
      "X-Goog-FieldMask": "places.id",
    },
    body: JSON.stringify({ textQuery: PLACE_QUERY, languageCode: "es", regionCode: "ES" }),
  });
  if (!res.ok) throw new Error(`Places searchText ${res.status}: ${await res.text()}`);
  const data = (await res.json()) as { places?: Array<{ id: string }> };
  const id = data.places?.[0]?.id;
  if (!id) throw new Error("No se encontró la ficha de Google");
  return id;
}

export async function fetchGoogleReviews(env: ReviewsEnv): Promise<ReviewsPayload> {
  const key = env.GOOGLE_PLACES_API_KEY;
  if (!key) throw new Error("Falta GOOGLE_PLACES_API_KEY");

  const placeId = env.GOOGLE_PLACE_ID || (await resolvePlaceId(key));
  const res = await fetch(`${API}/places/${placeId}?languageCode=es&regionCode=ES`, {
    headers: {
      "X-Goog-Api-Key": key,
      "X-Goog-FieldMask":
        "id,displayName,rating,userRatingCount,googleMapsUri,googleMapsLinks,reviews",
    },
  });
  if (!res.ok) throw new Error(`Places details ${res.status}: ${await res.text()}`);
  const place = (await res.json()) as PlaceResponse;

  const reviews: Review[] = (place.reviews ?? [])
    .map((r) => ({
      author: r.authorAttribution?.displayName ?? "Usuario de Google",
      authorUrl: r.authorAttribution?.uri ?? null,
      photo: r.authorAttribution?.photoUri ?? null,
      rating: r.rating ?? 0,
      text: (r.originalText?.text ?? r.text?.text ?? "").trim(),
      relativeTime: r.relativePublishTimeDescription ?? "",
      publishTime: r.publishTime ?? "",
    }))
    // Primero las que tienen texto, después las mejor valoradas y las más recientes
    .sort(
      (a, b) =>
        Number(!!b.text) - Number(!!a.text) ||
        b.rating - a.rating ||
        b.publishTime.localeCompare(a.publishTime)
    );

  return {
    name: place.displayName?.text ?? "Relleu",
    rating: place.rating ?? 0,
    total: place.userRatingCount ?? 0,
    url: place.googleMapsLinks?.reviewsUri ?? place.googleMapsUri ?? null,
    writeUrl:
      place.googleMapsLinks?.writeAReviewUri ??
      `https://search.google.com/local/writereview?placeid=${place.id}`,
    reviews,
    fetchedAt: new Date().toISOString(),
  };
}
