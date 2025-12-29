import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: 'Google Places API key or Place ID not configured' },
      { status: 500 }
    );
  }

  try {
    // Fetch place details including reviews
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}&language=de`,
      {
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );

    const data = await response.json();

    if (data.status !== 'OK') {
      return NextResponse.json(
        { error: `Google Places API error: ${data.status}` },
        { status: 500 }
      );
    }

    const result = data.result;
    const reviews = result.reviews || [];

    // Transform reviews to our format
    const transformedReviews = reviews.slice(0, 6).map((review: any) => ({
      name: review.author_name,
      text: review.text,
      rating: review.rating,
      date: new Date(review.time * 1000).toLocaleDateString('de-DE', {
        year: 'numeric',
        month: 'long'
      }),
      profilePhoto: review.profile_photo_url,
      relativeTime: review.relative_time_description
    }));

    return NextResponse.json({
      reviews: transformedReviews,
      rating: result.rating,
      totalReviews: result.user_ratings_total
    });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}
