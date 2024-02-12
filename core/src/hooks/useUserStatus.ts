import { api } from "~/utils/api";

const useUserStatus = () => {
  return api.config.isUserDoctor.useQuery();
};
