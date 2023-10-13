export interface Img {
  url: string;
}

export interface ImgProps {
  images: Img[] | null;
}

export function Beers({ images }: ImgProps) {
  return (
    <>
      {images ? (
        images.map((images) => (
          <img
            src={images.url}
            alt=""
            className="h-48 rounded-sm object-contain"
          />
        ))
      ) : (
        <div className="text-xl font-bold">No images available</div>
      )}
    </>
  );
}
