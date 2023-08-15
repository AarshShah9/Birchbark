import React from "react";
import Image from "next/image";
import LandingLayout from "~/pages/Landing/LandingLayout";

const HomePage: React.FC = () => {
  return (
    <LandingLayout>
      <div className="flex min-h-screen flex-col overflow-hidden">
        <main className="flex-grow">
          <div className="bg-gradient-to-r from-blue-600 to-white px-8 py-20 text-center text-white md:px-32">
            <h1 className="mb-8 text-5xl">Welcome to Symptom 360</h1>
            <p className="text-xl">
              Powering Progress: One question at a time.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 px-8 py-20 lg:grid-cols-3 md:grid-cols-2 md:px-32">
            <div className={"content-center"}>
              <Image
                src={"/MedicineWheel.png"}
                width={100}
                height={100}
                alt={"Medicine Wheel"}
                // className="mb-4 h-64 w-full rounded object-cover"
              />
              <h2 className="mb-2 text-2xl">Here for you</h2>
              <p>
                We talked to many First Nations Communities in Canada to
                understand what problems they have with virtual healthcare. So,
                we made a special website just for you to get healthcare online!
                What matters most:
              </p>
              <ul className={"list-decimal pl-8"}>
                <li>
                  Trust: We want you to feel safe and comfortable. That is why
                  we connect you with doctors you know and trust from your
                  community.
                </li>
                <li>
                  Partnership: We made this website together with your community
                  to make sure it helps you the best way possible.
                </li>
                <li>
                  Culture: We know how important your culture is. With our
                  website, you can also talk to local Elders and traditional
                  Healers if you want.
                </li>
              </ul>
            </div>
            <div>
              {/*<img*/}
              {/*    src="https://via.placeholder.com/400"*/}
              {/*    alt="placeholder"*/}
              {/*    className="mb-4 h-64 w-full rounded object-cover"*/}
              {/*/>*/}
              <h2 className="mb-2 text-2xl">Connect</h2>
              <p>
                You get to choose how you want to talk to your healthcare team:
              </p>
              <ul className={"list-disc pl-8"}>
                <li>
                  Video: It is like a video call, and you can see your doctor is
                  face.
                </li>
                <li>
                  Phone: Just call your doctor and talk about your health over
                  the phone.
                </li>
                <li>
                  Text: If you are in a hurry, you can quickly send a text to
                  your doctor.
                </li>
              </ul>
            </div>
            <div>
              {/*<img*/}
              {/*    src="https://via.placeholder.com/400"*/}
              {/*    alt="placeholder"*/}
              {/*    className="mb-4 h-64 w-full rounded object-cover"*/}
              {/*/>*/}
              <h2 className="mb-2 text-2xl">How it works</h2>
              <ul className={"list-decimal pl-8"}>
                <li>
                  First, you will answer some easy questions about your health.
                  This helps your doctor understand what is going on.
                </li>
                <li>Your answers go to your doctor in a really safe way.</li>
                <li>
                  You can pick a time to have a virtual meeting with your doctor
                  using video, phone, or text.
                </li>
                <li>
                  Your doctor will get a detailed report with your answers. This
                  helps them understand your health better during the online
                  visit.
                </li>
              </ul>
              <p>
                We really want to make sure you get the best care possible, even
                when it is online! Your health is super important to us, and we
                are here to help you all the way. If you have any questions,
                just let us know!
              </p>
            </div>
          </div>
        </main>
      </div>
    </LandingLayout>
  );
};

export default HomePage;
