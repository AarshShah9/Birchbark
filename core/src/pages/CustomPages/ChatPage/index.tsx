import React from "react";
import Layout from "~/components/Layout";
import Question from "~/customComponents/Question";
import Answer from "~/components/Answer";
import Chat from "~/components/Chat";

const ChatsPage: React.FC = () => {
  return (
    <Layout>
      <Chat title="Chat">
        <Answer time="3 mins ago">
          Hello Dr. Sander. I have been having this terrible pain in my throat.
          I filled out the survey and am coming to see you later today. Is there
          anything I can do in the meantime to deal with the pain. 🙂
        </Answer>
        <Question time="2 mins ago">
          Hi Tina, I am sorry to hear about your throat. I got the survey and
          the images of your throat. It looks like it could be strep throat. For
          now, just drink some warm soothing liquids, I can probably get you in
          a bit early over my lunch break around 12:30 if that works for you?
        </Question>
        <Answer time="Just now">
          That would be great. Thank you so much Dr. Sander. See you soon, Tina.
        </Answer>
        <Answer loading />
      </Chat>
    </Layout>
  );
};

export default ChatsPage;
