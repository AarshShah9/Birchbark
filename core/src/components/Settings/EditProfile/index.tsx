import { useState } from "react";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Field from "@/components/Field";

type EditProfileProps = Record<string, never>;

const EditProfile = ({}: EditProfileProps) => {
  const [objectURL, setObjectURL] = useState<any>("/images/avatar.jpg");
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("Sai Gon, Vietnam");
  const [bio, setBio] = useState<string>("");

  const handleUpload = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // setImage(file);
      setObjectURL(URL.createObjectURL(file));
    }
  };

  return (
    <form className="" action="" onSubmit={() => console.log("Submit")}>
      <div className="h4 mb-8 md:mb-6">Edit profile</div>
      <div className="base2 mb-3 font-semibold text-n-6 dark:text-n-1">
        Avatar
      </div>
      <div className="mb-6 flex items-center">
        <div className="relative mr-4 flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-full bg-n-2 dark:bg-n-6">
          {objectURL !== null ? (
            <Image
              className="rounded-full object-cover"
              src={objectURL}
              fill
              alt="Avatar"
            />
          ) : (
            <Icon className="h-8 w-8 dark:fill-n-1" name="profile" />
          )}
        </div>
        <div className="grow">
          <div className="relative mb-4 inline-flex">
            <input
              className="peer absolute inset-0 cursor-pointer opacity-0"
              type="file"
              onChange={handleUpload}
            />
            <button className="btn-stroke-light peer-hover:bg-n-3 dark:peer-hover:bg-n-5">
              Upload new image
            </button>
          </div>
          <div className="caption1 text-n-4">
            <p>At least 800x800 px recommended.</p>
            <p>JPG or PNG and GIF is allowed</p>
          </div>
        </div>
      </div>
      <Field
        className="mb-6"
        label="Name"
        placeholder="Username"
        icon="profile-1"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
        required
      />
      <Field
        className="mb-6"
        label="Location"
        placeholder="Location"
        icon="marker"
        value={location}
        onChange={(e: any) => setLocation(e.target.value)}
        required
      />
      <Field
        className="mb-6"
        label="Bio"
        placeholder="Short bio"
        icon="user-check"
        value={bio}
        onChange={(e: any) => setBio(e.target.value)}
        textarea
        required
      />
      <button className="btn-blue w-full">Save changes</button>
    </form>
  );
};

export default EditProfile;
