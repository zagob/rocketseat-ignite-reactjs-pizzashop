import { api } from "@/lib/axios";

interface UpdateProfileBody {
  name: string;
  description: string | null;
}

export async function updateProfile({ description, name }: UpdateProfileBody) {
  throw new Error();
  await api.put("/profile", { name, description });
}
