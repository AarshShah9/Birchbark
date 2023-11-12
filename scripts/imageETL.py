import pandas as pd
import cloudinary.uploader
import os


def ImageETL():
    # Open the excel file and read the data into a pandas dataframe
    df = pd.read_excel("dermnet.xlsx")
    # Now call the function to push images to Cloudinary
    cloudinary_push(df)


def cloudinary_push(df: pd.DataFrame):
    # Get the cloudinary config from the ENV variables
    CLOUDINARY_API_KEY = None
    CLOUDINARY_API_SECRET = None
    CLOUDINARY_CLOUD_NAME = None

    # Configure Cloudinary with your credentials
    cloudinary.config(
        cloud_name=CLOUDINARY_CLOUD_NAME,
        api_key=CLOUDINARY_API_KEY,
        api_secret=CLOUDINARY_API_SECRET
    )

    folder_name = "symptom360"

    # Loop through each row in the dataframe
    for index, row in df.iterrows():
        # Construct the full path to the image file
        file_path = 'images/viral/' + row['image']

        # Combine the tags into a single list
        tags = [row['subject general'], row['condition']] + \
            row['key terms'].split(',')

        # Remove any leading/trailing whitespace from each tag
        tags = [tag.strip() for tag in tags if tag.strip()]

        # Upload the image to Cloudinary
        response = cloudinary.uploader.upload(
            file_path,
            tags=tags,
            folder=folder_name,

        )

        # Handle the response from Cloudinary
        print(f"Uploaded {row['image']} with tags {tags}")
        print("Cloudinary response:", response)


def main():
    ImageETL()


if __name__ == '__main__':
    main()
