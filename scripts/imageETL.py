import pandas as pd
import cloudinary.uploader
import os


def ImageETL():
    # Open the excel file and read the data into a pandas dataframe
    df = pd.read_excel("dermnet2.xlsx")
    # Now call the function to push images to Cloudinary
    cloudinary_push(df)


def cloudinary_push(df: pd.DataFrame):
    # Get the cloudinary config from the ENV variables
    CLOUDINARY_API_KEY = "942673461688855"
    CLOUDINARY_API_SECRET = "1W1a8NGmbydy5Qq5K0BOQwUBvlg"
    CLOUDINARY_CLOUD_NAME = "duoghyw7n"

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
        file_path = 'images/' + row['image']

        key_terms_tags = row['key terms'].split(
            ',') if isinstance(row['key terms'], str) else []
        general_tags = row['General'].split(
            ',') if isinstance(row['General'], str) else []
        med_terms_tags = row['med terms'].split(
            ',') if isinstance(row['med terms'], str) else []

        tags = [row['subject general'], row['condition']] + \
            key_terms_tags + general_tags + med_terms_tags

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
